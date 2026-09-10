#!/usr/bin/env node
/**
 * Nitro's vercel preset writes `.vercel/output/config.json` (Build Output API).
 * That file is the routing table Vercel actually uses — project-root
 * `vercel.json` redirects are not merged in, and Nitro 3.0.260610-beta does
 * not reliably emit `routeRules` redirects ahead of `/(.*)` → `__server`.
 *
 * The catch-all then sends /lia, /pricing, /apps, /pricing-philosophy into
 * TanStack, which renders the in-app 404 ("No such file.") — the live soft 404.
 *
 * This module injects anchored 308s *before* `handle: filesystem` and the
 * `__server` catch-all so they cannot be swallowed. www→apex stays in
 * `vercel.json` only: emitting it here while the Vercel project still
 * "Redirects to www" 308-loops every page.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const VERCEL_OUTPUT_CONFIG = join(ROOT, ".vercel/output/config.json");

/** Retired IA → live desks. Same map as `src/lib/seo.ts` LEGACY_REDIRECTS. */
export const LEGACY_PATH_REDIRECTS = [
  { from: "/lia", to: "/work/lia" },
  { from: "/pricing", to: "/work" },
  { from: "/apps", to: "/work" },
  { from: "/pricing-philosophy", to: "/company" },
];

export const WWW_HOST = "www.federatedintel.ai";
export const APEX_ORIGIN = "https://federatedintel.ai";

function escapeRegex(path) {
  return path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Exact path + optional trailing slash. Anchored so /work/lia is not /lia. */
export function legacyPathRedirectRoutes() {
  return LEGACY_PATH_REDIRECTS.map(({ from, to }) => ({
    src: `^${escapeRegex(from)}/?$`,
    status: 308,
    headers: { Location: to },
  }));
}

/** Ready for after the Vercel domain flip. Not injected into output today. */
export function wwwToApexRedirectRoutes() {
  return [
    {
      src: "^/$",
      has: [{ type: "host", value: WWW_HOST }],
      status: 308,
      headers: { Location: `${APEX_ORIGIN}/` },
    },
    {
      src: "^/(.*)$",
      has: [{ type: "host", value: WWW_HOST }],
      status: 308,
      headers: { Location: `${APEX_ORIGIN}/$1` },
    },
  ];
}

export function isCatchAllToServer(route) {
  if (!route || typeof route.dest !== "string") return false;
  return /\/__server\/?$/.test(route.dest) || route.dest === "/__server";
}

export function isFilesystemHandle(route) {
  return route?.handle === "filesystem";
}

function redirectSrcSet(routes) {
  return new Set(routes.map((route) => route.src));
}

export function isLegacyPathRedirect(route) {
  if (!route || route.status !== 308) return false;
  return redirectSrcSet(legacyPathRedirectRoutes()).has(route.src);
}

/**
 * Insert path 308s immediately before filesystem / `__server`.
 * Idempotent: previous copies of the same `src` are stripped first.
 */
export function injectLegacyPathRedirects(config) {
  const incoming = Array.isArray(config?.routes) ? config.routes : [];
  const redirects = legacyPathRedirectRoutes();
  const srcs = redirectSrcSet(redirects);
  const rest = incoming.filter((route) => !srcs.has(route.src));

  let insertAt = rest.findIndex(isFilesystemHandle);
  if (insertAt < 0) insertAt = rest.findIndex(isCatchAllToServer);
  if (insertAt < 0) insertAt = rest.length;

  const routes = [...rest.slice(0, insertAt), ...redirects, ...rest.slice(insertAt)];
  return { ...config, routes };
}

export function assertRedirectsBeforeCatchAll(config) {
  const routes = Array.isArray(config?.routes) ? config.routes : [];
  const catchAllAt = routes.findIndex(isCatchAllToServer);
  if (catchAllAt < 0) {
    throw new Error("vercel output is missing the /__server catch-all");
  }

  const expected = legacyPathRedirectRoutes();
  for (const want of expected) {
    const at = routes.findIndex((route) => route.src === want.src && route.status === 308);
    if (at < 0) {
      throw new Error(`missing edge redirect ${want.src} → ${want.headers.Location}`);
    }
    if (at >= catchAllAt) {
      throw new Error(
        `edge redirect ${want.src} is at index ${at}, after __server catch-all at ${catchAllAt}`,
      );
    }
    if (routes[at].headers?.Location !== want.headers.Location) {
      throw new Error(
        `edge redirect ${want.src} points at ${routes[at].headers?.Location}, expected ${want.headers.Location}`,
      );
    }
  }

  const apexToWww = routes.find((route) => {
    const location = String(route.headers?.Location ?? route.dest ?? "");
    return /https:\/\/www\.federatedintel\.ai/i.test(location);
  });
  if (apexToWww) {
    throw new Error("app routing must not redirect apex → www");
  }
}

export function patchVercelOutputConfig(config) {
  const next = injectLegacyPathRedirects(config);
  assertRedirectsBeforeCatchAll(next);
  return next;
}

export function patchVercelOutputConfigFile(filePath = VERCEL_OUTPUT_CONFIG) {
  if (!existsSync(filePath)) {
    throw new Error(`missing ${filePath} — run vite build first`);
  }
  const raw = JSON.parse(readFileSync(filePath, "utf8"));
  const next = patchVercelOutputConfig(raw);
  writeFileSync(filePath, `${JSON.stringify(next, null, 2)}\n`);
  return next;
}

/** Vite plugin: closeBundle after Nitro writes config.json (register BEFORE nitro()). */
export function vercelEdgeRedirectsPlugin() {
  return {
    name: "fia:vercel-edge-redirects",
    apply: "build",
    closeBundle() {
      if (!existsSync(VERCEL_OUTPUT_CONFIG)) return;
      patchVercelOutputConfigFile(VERCEL_OUTPUT_CONFIG);
    },
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const next = patchVercelOutputConfigFile();
    const n = legacyPathRedirectRoutes().length;
    const catchAllAt = next.routes.findIndex(isCatchAllToServer);
    console.log(
      `[vercel-edge-redirects] wrote ${n} path 308s before __server (catch-all index ${catchAllAt})`,
    );
  } catch (err) {
    console.error(`[vercel-edge-redirects] ${err?.message || err}`);
    process.exit(1);
  }
}
