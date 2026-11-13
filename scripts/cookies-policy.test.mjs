import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

function COOKIE_KEY_RE(key) {
  return new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}


const EXPECTED = [
  "__Host-grok-auth.session_token",
  "__Host-grok-auth.session_data",
  "__Host-grok-auth.account_data",
  "__Host-grok-auth.dont_remember",
  "__Host-grok_gate_session",
  "fia-theme",
  "grok-auth.bearer-token",
];

test("cookies policy page lists the cookies and storage this app actually sets", () => {
  const page = read("src/routes/cookies-policy.tsx");
  assert.match(page, /cookies-policy/);
  for (const key of EXPECTED) {
    assert.match(page, COOKIE_KEY_RE(key));
  }
  assert.match(page, /We do not run advertising cookies/);
  assert.doesNotMatch(page, /100 credits/);
});

test("footer, privacy or legal, and listings point at /cookies-policy", () => {
  assert.match(read("src/components/site-footer.tsx"), /to="\/cookies-policy"/);
  assert.match(read("src/routes/privacy.tsx"), /to="\/cookies-policy"/);
  assert.match(read("public/sitemap.xml"), /https:\/\/federatedintel\.ai\/cookies-policy/);
});

test("conventional cookie URLs permanently redirect to /cookies-policy", () => {
  const vercel = JSON.parse(read("vercel.json"));
  const redirects = vercel.redirects ?? [];
  const dest = (source) =>
    redirects.find((r) => r.source === source && r.destination === "/cookies-policy");
  for (const source of ["/cookies", "/cookie-policy"]) {
    const rule = dest(source);
    assert.ok(rule, `missing redirect for ${source}`);
    assert.equal(rule.permanent === true || rule.statusCode === 301, true);
  }
});


test("edge routing injects /cookies and /cookie-policy ahead of the server catch-all", async () => {
  const { COOKIE_PATH_REDIRECTS, allPathRedirects, legacyPathRedirectRoutes } =
    await import("./vercel-edge-redirects.mjs");
  assert.deepEqual(COOKIE_PATH_REDIRECTS, [
    { from: "/cookies", to: "/cookies-policy" },
    { from: "/cookie-policy", to: "/cookies-policy" },
  ]);
  const srcs = legacyPathRedirectRoutes().map((r) => r.src);
  assert.ok(srcs.includes("^/cookies/?$"));
  assert.ok(srcs.includes("^/cookie-policy/?$"));
  assert.ok(allPathRedirects().some((r) => r.from === "/cookies"));
});

test("committed Vercel output includes the cookies-policy route and cookie redirects", () => {
  const config = JSON.parse(read(".vercel/output/config.json"));
  const routes = config.routes ?? [];
  const catchAllAt = routes.findIndex(
    (r) => typeof r.dest === "string" && /__server/.test(r.dest),
  );
  assert.ok(catchAllAt > 0, "missing __server catch-all");
  for (const src of ["^/cookies/?$", "^/cookie-policy/?$"]) {
    const at = routes.findIndex((r) => r.src === src && r.status === 308);
    assert.ok(at >= 0, `missing edge redirect ${src}`);
    assert.ok(at < catchAllAt, `${src} must sit before the __server catch-all`);
    assert.equal(routes[at].headers.Location, "/cookies-policy");
  }
  const ssr = readdirSync(join(root, ".vercel/output/functions/__server.func/_ssr"));
  assert.ok(
    ssr.some((name) => name.startsWith("cookies-policy-")),
    "committed server output is missing a cookies-policy SSR chunk; refresh .vercel/output after adding the route",
  );
});
