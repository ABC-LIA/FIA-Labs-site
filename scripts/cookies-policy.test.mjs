import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

