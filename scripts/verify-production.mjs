#!/usr/bin/env node
/**
 * Post-deployment verification.
 *
 * Usage:
 *   node scripts/verify-production.mjs --url https://federatedintel.ai --expect "FIA Labs"
 *
 * Fetches the URL and asserts that every --expect string is present in the
 * response body. Exits 1 with a clear message on mismatch so a missing
 * production change is reported as a failed verification, not a delay.
 */
const args = process.argv.slice(2);
let url = "";
const expects = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--url") url = args[++i];
  else if (args[i] === "--expect") expects.push(args[++i]);
}

if (!url || expects.length === 0) {
  console.error("usage: node scripts/verify-production.mjs --url <url> --expect <text> [--expect <text> ...]");
  process.exit(2);
}

const res = await fetch(url, { headers: { "User-Agent": "FIA-Labs-deploy-verify/1.0" }, redirect: "follow" });
if (!res.ok) {
  console.error(`PRODUCTION VERIFICATION FAILED: ${url} returned HTTP ${res.status}`);
  process.exit(1);
}
const body = await res.text();
const missing = expects.filter((e) => !body.includes(e));
if (missing.length) {
  console.error("PRODUCTION VERIFICATION FAILED");
  console.error(`  url:     ${url}`);
  console.error(`  missing: ${missing.join(" | ")}`);
  console.error("The deployment is not serving the expected content. This is not a propagation delay.");
  process.exit(1);
}
console.log(`production ok: ${url} contains all ${expects.length} expected marker(s)`);
