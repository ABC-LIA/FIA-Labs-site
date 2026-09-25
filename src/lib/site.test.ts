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

const MARKETING_FILES = [
  ...HOUSE_SEAT_FILES,
  "src/routes/africa.tsx",
  "src/routes/contact.tsx",
  "src/routes/method.tsx",
  "public/llms.txt",
  "public/sitemap.xml",
];

const FORBIDDEN = [
  /add-on/i,
  /addon/i,
  /house layer/i,
  /also buy/i,
  /does not replace the desk seat/i,
];

const LIVE_SLUGS = [
  "lia",
  "mia",
  "brandium",
  "cfo-sentinel",
  "execmind",
  "aquinian",
  "cine-novelist",
] as const;

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
      /footerFact: "1,000 credits \/ period · one FIA Tank · Federation included"/,
    );
    assert.match(
      site,
      /The house seat for FIA Labs\. One plan for the suite: law \(LIA\), medical research \(MIA\), finance \(CFO Sentinel\), strategy \(ExecMind\), brand and marketing \(Brandium\), ethics and philosophy \(Aquinian Studio\), film and narrative \(Cine-Novelist\)\./,
    );
    assert.match(
      site,
      /You work at the desk that owns the question\. Conversations, files, matters, and memory stay on that desk\. Rooms are not shared\. When a matter needs another discipline, you send an FIA Brief — a packet you authorise — and read the reply\. Nothing else is shared\./,
    );
    assert.match(
      site,
      /Includes 1,000 credits each billing period across the suite, held in one shared FIA Tank\. Extra credit packs do not expire\. Shared credits and one tank are the product intent — rooms stay separate\./,
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
    assert.match(site, /q: "What is the FIA Tank\?"/);
    assert.match(site, /q: "How do credits and packs work\?"/);
    assert.match(site, /q: "How does FIA Plan relate to a desk seat\?"/);
    assert.match(site, /id: "fia-plan"/);
    assert.match(site, /id: "fia-tank"/);
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

describe("24 Sep 2026 estate canon", () => {
  const site = read("src/lib/site.ts");

  it("lists exactly seven live Pro desks and no CarCounsel", () => {
    const slugs = [...site.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(slugs, [...LIVE_SLUGS]);
    assert.equal(slugs.length, 7);
    assert.doesNotMatch(site, /carcounsel/i);
    assert.match(site, /LIVE_DESKS = APPS\.filter\(\(app\) => app\.status === "live"\)/);
  });

  it("marks Brandium and ExecMind live with existing product domains", () => {
    assert.match(site, /slug: "brandium"[\s\S]*?status: "live"/);
    assert.match(site, /marketingUrl: "https:\/\/brandium\.pro"/);
    assert.match(site, /slug: "execmind"[\s\S]*?status: "live"/);
    assert.match(site, /marketingUrl: "https:\/\/execmind\.app"/);
    assert.doesNotMatch(site, /status: "forthcoming"/);
  });

  it("keeps parent identity and specialist posture", () => {
    assert.match(site, /Federated Intelligence Architecture/);
    assert.match(site, /not an eighth app/i);
    assert.match(site, /slogan: "7 Experts\. 2 Engines\. 1 Ethical Future\."/);
    assert.match(site, /Seven live Pro desks/);
    assert.match(site, /FIA Brief/);
    assert.match(site, /FIA Tank/);
    assert.doesNotMatch(site, /\bauthorize[d]?\b/);
  });

  it("does not treat any live desk as forthcoming", () => {
    assert.doesNotMatch(site, /q: "What about Brandium/);
    for (const file of MARKETING_FILES) {
      const source = read(file);
      assert.doesNotMatch(
        source,
        /forthcoming Brandium|forthcoming ExecMind|Brandium, ExecMind, and CarCounsel remain forthcoming/i,
        `${file} still has forthcoming Brandium/ExecMind copy`,
      );
      const withoutRetiredRedirect = source.replace(
        /if \(params\.slug === "carcounsel"\) \{[\s\S]*?statusCode: 308,[\s\S]*?\}/,
        "",
      );
      assert.doesNotMatch(
        withoutRetiredRedirect,
        /CarCounsel/,
        `${file} still names CarCounsel in the live story`,
      );
    }
  });

  it("leaves Terms and Privacy for Adrian legal review", () => {
    assert.match(read("src/routes/terms.tsx"), /CarCounsel/);
    assert.match(read("src/routes/privacy.tsx"), /CarCounsel/);
  });
});
