import assert from "node:assert/strict";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

/**
 * Production deploys the committed `.vercel/output` bundle, not a fresh
 * Vite build. Files that exist only under `public/` never reach
 * federatedintel.ai and fall through the `/(.*)` → `__server` catch-all,
 * which renders the SPA 404. This test keeps the prebuilt static output
 * in lockstep with `public/`.
 */
const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");
const STATIC_DIR = join(ROOT, ".vercel/output/static");

function listFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

test("committed Vercel static output includes every public/ file", () => {
  assert.equal(existsSync(STATIC_DIR), true, "missing .vercel/output/static");
  const missing = [];
  for (const file of listFiles(PUBLIC_DIR)) {
    const rel = relative(PUBLIC_DIR, file);
    const dest = join(STATIC_DIR, rel);
    if (!existsSync(dest) || statSync(dest).size !== statSync(file).size) {
      missing.push(rel);
    }
  }
  assert.deepEqual(
    missing,
    [],
    `copy these into .vercel/output/static/ (or rebuild the prebuilt output): ${missing.join(", ")}`,
  );
});
