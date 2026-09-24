import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

const HOUSE_SEAT_FILES = [
  "src/lib/site.ts",
  "src/components/fia-plan-section.tsx",
  "src/routes/work.index.tsx",
  "src/routes/company.tsx",
  "src/routes/index.tsx",
  "src/routes/work.$slug.tsx",
  "src/components/site-footer.tsx",
];

const FORBIDDEN = [
  /add-on/i,
  /addon/i,
  /house layer/i,
  /also buy/i,
  /does not replace the desk seat/i,
];

function read(rel: string) {
  return readFileSync(join(root, rel), "utf8");
}

describe("FIA Plan house-seat copy", () => {
  const site = read("src/lib/site.ts");

  it("keeps the locked product facts", () => {
    assert.match(site, /name: "FIA Plan"/);
    assert.match(site, /price: "\$50"/);
    assert.match(site, /cta: "Subscribe"/);
    assert.match(site, /active: "Active"/);
    assert.match(
      site,
      /footerFact: "1,000 credits \/ period · Federation included"/,
    );
    assert.match(
      site,
      /The house seat for FIA Labs\. One plan for the suite: law \(LIA\), medical research \(MIA\), finance \(CFO Sentinel\), strategy \(ExecMind\), brand and marketing \(Brandium\), ethics and philosophy \(Aquinian Studio\), film and narrative \(Cine-Novelist\)\./,
    );
    assert.match(
      site,
      /You work at the desk that owns the question\. Files and conversations stay on that desk\. When a matter needs another discipline, you send an FIA Brief — a packet you authorise — and read the reply\. Nothing else is shared\./,
    );
    assert.match(
      site,
      /Includes 1,000 credits each billing period, usable on any shipped desk\. Extra credit packs work across the suite and do not expire\. You pay for what you consume after the included allotment\./,
    );
    assert.match(
      site,
      /FIA Plan is an alternative to a single-desk seat, not an extra charge on top of Operator, Counsel, or Chambers\./,
    );
    assert.doesNotMatch(site, /\bauthorize[d]?\b/);
  });

  it("covers the house-seat FAQ questions", () => {
    assert.match(site, /q: "What is FIA Plan\?"/);
    assert.match(site, /q: "What is Federation — and what is an FIA Brief\?"/);
    assert.match(site, /q: "How do credits and packs work\?"/);
    assert.match(site, /q: "How does FIA Plan relate to a desk seat\?"/);
    assert.match(site, /id: "fia-plan"/);
    assert.match(site, /authorised FIA Briefs/);
    assert.match(site, /FIA_PLAN\.price\}\/\$\{FIA_PLAN\.period\}/);
  });

  it("points work and company metadata at the house seat", () => {
    assert.match(site, /FIA Plan is the house seat for the suite/);
    assert.match(read("src/routes/work.index.tsx"), /<FiaPlanSection/);
    assert.match(read("src/routes/index.tsx"), /variant="teaser"/);
    assert.match(read("src/routes/company.tsx"), /hash="fia-plan"/);
    assert.match(read("src/lib/seo.ts"), /"\/pricing": "\/work"/);
  });

  it("does not frame FIA Plan as an add-on", () => {
    for (const file of HOUSE_SEAT_FILES) {
      const source = read(file);
      for (const pattern of FORBIDDEN) {
        assert.doesNotMatch(source, pattern, `${file} matches ${pattern}`);
      }
    }
  });
});
