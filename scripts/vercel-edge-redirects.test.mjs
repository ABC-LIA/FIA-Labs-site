import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import {
  APEX_ORIGIN,
  assertRedirectsBeforeCatchAll,
  injectLegacyPathRedirects,
  isCatchAllToServer,
  isLegacyPathRedirect,
  legacyPathRedirectRoutes,
  patchVercelOutputConfig,
  patchVercelOutputConfigFile,
  wwwToApexRedirectRoutes,
} from "./vercel-edge-redirects.mjs";

const NITRO_OUTPUT = {
  version: 3,
  framework: { name: "nitro", version: "3.0.260610-beta" },
  routes: [
    {
      headers: { "cache-control": "public, max-age=31536000, immutable" },
      src: "/assets/(.*)",
    },
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/__server" },
  ],
};

test("legacy path 308s are anchored so /work/lia is not /lia", () => {
  const lia = legacyPathRedirectRoutes().find((route) => route.src.includes("/lia"));
  assert.equal(lia.src, "^/lia/?$");
  assert.equal(lia.status, 308);
  assert.equal(lia.headers.Location, "/work/lia");
  assert.equal(new RegExp(lia.src).test("/lia"), true);
  assert.equal(new RegExp(lia.src).test("/lia/"), true);
  assert.equal(new RegExp(lia.src).test("/work/lia"), false);
  assert.equal(new RegExp(lia.src).test("/liar"), false);
});

test("injects 308s before filesystem and the __server catch-all", () => {
  const next = injectLegacyPathRedirects(NITRO_OUTPUT);
  const srcs = next.routes.map((route) => route.src ?? route.handle);
  const filesystemAt = srcs.indexOf("filesystem");
  const catchAllAt = next.routes.findIndex(isCatchAllToServer);
  const liaAt = next.routes.findIndex((route) => route.src === "^/lia/?$");

  assert.ok(liaAt >= 0);
  assert.ok(liaAt < filesystemAt);
  assert.ok(liaAt < catchAllAt);
  assert.equal(next.routes[catchAllAt].dest, "/__server");
  assertRedirectsBeforeCatchAll(next);
});

test("patch is idempotent and does not stack duplicates", () => {
  const once = injectLegacyPathRedirects(NITRO_OUTPUT);
  const twice = injectLegacyPathRedirects(once);
  const liaCount = twice.routes.filter((route) => route.src === "^/lia/?$").length;
  assert.equal(liaCount, 1);
  assert.equal(twice.routes.filter(isLegacyPathRedirect).length, 4);
});

test("refuses apex → www if it appears in the routing table", () => {
  const poisoned = {
    routes: [
      {
        src: "^/$",
        status: 308,
        headers: { Location: "https://www.federatedintel.ai/" },
      },
      { src: "/(.*)", dest: "/__server" },
    ],
  };
  assert.throws(() => patchVercelOutputConfig(poisoned), /apex → www/);
});

test("www→apex helpers stay apex-canonical and are not auto-injected", () => {
  const [root, rest] = wwwToApexRedirectRoutes();
  assert.equal(root.headers.Location, `${APEX_ORIGIN}/`);
  assert.equal(rest.headers.Location, `${APEX_ORIGIN}/$1`);
  const next = injectLegacyPathRedirects(NITRO_OUTPUT);
  assert.equal(
    next.routes.some((route) => route.has?.[0]?.value === "www.federatedintel.ai"),
    false,
    "www→apex must not enter config.json while Vercel still redirects apex→www",
  );
});

test("script map matches src/lib/seo.ts LEGACY_REDIRECTS", () => {
  const seo = readFileSync(new URL("../src/lib/seo.ts", import.meta.url), "utf8");
  for (const [from, to] of [
    ["/lia", "/work/lia"],
    ["/pricing", "/work"],
    ["/apps", "/work"],
    ["/pricing-philosophy", "/company"],
  ]) {
    assert.match(
      seo,
      new RegExp(`"${from.replaceAll("/", "\\/")}"\\s*:\\s*"${to.replaceAll("/", "\\/")}"`),
    );
  }
});

test("vercel.json keeps www→apex and path 308s, never apex→www", () => {
  const vercel = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  const redirects = vercel.redirects ?? [];
  assert.equal(
    redirects.some(
      (rule) =>
        rule.has?.[0]?.value === "www.federatedintel.ai" &&
        String(rule.destination).startsWith("https://federatedintel.ai"),
    ),
    true,
  );
  assert.equal(
    redirects.some((rule) => /www\.federatedintel\.ai/.test(String(rule.destination))),
    false,
  );
  for (const [from, to] of [
    ["/lia", "/work/lia"],
    ["/pricing", "/work"],
    ["/apps", "/work"],
    ["/pricing-philosophy", "/company"],
  ]) {
    assert.equal(
      redirects.some((rule) => rule.source === from && rule.destination === to && rule.permanent),
      true,
      `${from} → ${to}`,
    );
  }
});

test("patchVercelOutputConfigFile rewrites a Nitro config on disk", () => {
  const dir = mkdtempSync(join(tmpdir(), "fia-vercel-"));
  const file = join(dir, "config.json");
  writeFileSync(file, JSON.stringify(NITRO_OUTPUT));
  const next = patchVercelOutputConfigFile(file);
  const written = JSON.parse(readFileSync(file, "utf8"));
  assert.deepEqual(written.routes, next.routes);
  assertRedirectsBeforeCatchAll(written);
});
