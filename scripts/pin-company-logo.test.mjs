import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import {
  COMPANY_SEAL_SHA256,
  assertCompanyPageCacheBust,
  pinCompanyLogo,
  sha256File,
} from "./pin-company-logo.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SEAL = readFileSync(join(ROOT, "public/logo.png"));
const WRONG = Buffer.from("older-grok-output-logo");

function workspace({ page = 'src="/logo.png?v=4"', withOutput = false, seal = SEAL } = {}) {
  const root = mkdtempSync(join(tmpdir(), "pin-logo-"));
  mkdirSync(join(root, "public"), { recursive: true });
  mkdirSync(join(root, "src/routes"), { recursive: true });
  writeFileSync(join(root, "public/logo.png"), seal);
  writeFileSync(join(root, "src/routes/company.tsx"), page);
  if (withOutput) {
    mkdirSync(join(root, ".vercel/output/static"), { recursive: true });
    writeFileSync(join(root, ".vercel/output/static/logo.png"), WRONG);
  }
  return root;
}

test("workspace public/logo.png is the pinned FiA circuit-die seal", () => {
  assert.equal(sha256File(join(ROOT, "public/logo.png")), COMPANY_SEAL_SHA256);
});

test("workspace company page cache-busts /logo.png", () => {
  assertCompanyPageCacheBust(ROOT);
});

test("pinCompanyLogo copies public/ onto a stale Vercel output logo", () => {
  const root = workspace({ withOutput: true });
  assert.notEqual(sha256File(join(root, ".vercel/output/static/logo.png")), COMPANY_SEAL_SHA256);
  const result = pinCompanyLogo(root);
  assert.equal(result.hash, COMPANY_SEAL_SHA256);
  assert.equal(result.pinnedOutput, true);
  assert.equal(sha256File(join(root, ".vercel/output/static/logo.png")), COMPANY_SEAL_SHA256);
});

test("pinCompanyLogo refuses a different public/logo.png", () => {
  const root = workspace({ seal: WRONG });
  assert.throws(() => pinCompanyLogo(root), /expected the FiA circuit-die seal/);
});

test("pinCompanyLogo refuses a company page that drops the cache-bust", () => {
  const root = workspace({ page: 'src="/logo.png"' });
  assert.throws(() => pinCompanyLogo(root), /cache-bust/);
});

test("pinCompanyLogo is a no-op on output when the Vercel tree is absent", () => {
  const root = workspace({ withOutput: false });
  const result = pinCompanyLogo(root);
  assert.equal(result.pinnedOutput, false);
  assert.equal(result.hash, COMPANY_SEAL_SHA256);
});
