#!/usr/bin/env node
/**
 * Mirror public/ into the committed Vercel static output.
 *
 * Production deploys the committed `.vercel/output` bundle, not a fresh
 * Vite build on the platform. Files that exist only under `public/` never
 * reach federatedintel.ai — the `/(.*)` catch-all renders the SPA 404.
 *
 * Vite's Nitro preset copies public/ into `.vercel/output/static` during
 * `vite build`. This step re-copies afterwards so a later pin or a
 * hand-edited public asset cannot drift from the bundle that production
 * actually serves. It is the reason we no longer copy individual assets
 * by hand.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
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

export function syncPrebuiltStatic(root = ROOT) {
  const pub = join(root, "public");
  const dest = join(root, ".vercel/output/static");
  if (!existsSync(pub)) throw new Error(`missing ${pub}`);
  if (!existsSync(dest)) {
    throw new Error(
      `missing ${dest} — run vite build before syncing the prebuilt output`,
    );
  }
  const copied = [];
  for (const file of listFiles(pub)) {
    const rel = relative(pub, file);
    const target = join(dest, rel);
    mkdirSync(dirname(target), { recursive: true });
    const before = existsSync(target) ? statSync(target).size : -1;
    cpSync(file, target);
    if (before !== statSync(file).size) copied.push(rel);
  }
  return { copied, total: listFiles(pub).length };
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], "file:").href) {
  try {
    const { copied, total } = syncPrebuiltStatic();
    console.log(
      `[sync-prebuilt-static] ${total} public files mirrored` +
        (copied.length ? `; updated ${copied.length}` : "; already in sync"),
    );
  } catch (err) {
    console.error(`[sync-prebuilt-static] ${err?.message || err}`);
    process.exit(1);
  }
}
