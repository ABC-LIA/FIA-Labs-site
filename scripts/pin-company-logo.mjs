#!/usr/bin/env node
/**
 * Pin the FIA Labs company seal so a Grok export / Nitro bake cannot
 * silently put a different logo.png on federatedintel.ai.
 *
 * The original export committed two different files:
 *   public/logo.png                    — correct FiA circuit-die seal
 *   .vercel/output/static/logo.png     — older design
 *
 * Vite preview serves public/; Vercel production serves the committed
 * Build Output API tree. Live /logo.png therefore reverted to the stale
 * output copy even though public/ was already correct.
 *
 * After every build: refuse any other SHA, copy public/ onto the output
 * file if that tree exists, and require the company page to cache-bust
 * /logo.png (not a second path).
 */
import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const COMPANY_SEAL_SHA256 =
  "bb39645312df087b2069a2edb188226f2a708a43471554c0761fd5e162838e27";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

export function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

export function assertCompanyPageCacheBust(root = ROOT) {
  const page = join(root, "src/routes/company.tsx");
  const src = readFileSync(page, "utf8");
  if (!/src=["']\/logo\.png\?v=\d+["']/.test(src)) {
    throw new Error(
      "company page must reference /logo.png with a numeric cache-bust (?v=N)",
    );
  }
}

export function pinCompanyLogo(root = ROOT) {
  const publicLogo = join(root, "public/logo.png");
  if (!existsSync(publicLogo)) {
    throw new Error(`missing ${publicLogo}`);
  }

  const hash = sha256File(publicLogo);
  if (hash !== COMPANY_SEAL_SHA256) {
    throw new Error(
      `public/logo.png SHA-256 is ${hash}; expected the FiA circuit-die seal ${COMPANY_SEAL_SHA256}`,
    );
  }

  assertCompanyPageCacheBust(root);

  const outputDir = join(root, ".vercel/output/static");
  const outputLogo = join(outputDir, "logo.png");
  let pinnedOutput = false;
  if (existsSync(outputDir)) {
    copyFileSync(publicLogo, outputLogo);
    const outHash = sha256File(outputLogo);
    if (outHash !== COMPANY_SEAL_SHA256) {
      throw new Error(
        `.vercel/output/static/logo.png SHA-256 is ${outHash} after pin; expected ${COMPANY_SEAL_SHA256}`,
      );
    }
    pinnedOutput = true;
  }

  return { hash, pinnedOutput };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = pinCompanyLogo();
    console.log(
      `[pin-company-logo] public/logo.png ${result.hash}` +
        (result.pinnedOutput ? "; synced .vercel/output/static/logo.png" : ""),
    );
  } catch (err) {
    console.error(`[pin-company-logo] ${err?.message || err}`);
    process.exit(1);
  }
}
