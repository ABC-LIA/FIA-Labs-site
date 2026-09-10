import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CANONICAL_ORIGIN,
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
  OG_IMAGE,
  applyDocumentSeo,
  canonicalUrl,
  isPreviewHost,
  isProductionHost,
  legacyRedirectTarget,
  robotsForHost,
} from "./seo.ts";

describe("legacyRedirectTarget", () => {
  it("maps retired sales paths to the live IA", () => {
    assert.equal(legacyRedirectTarget("/lia"), "/work/lia");
    assert.equal(legacyRedirectTarget("/lia/"), "/work/lia");
    assert.equal(legacyRedirectTarget("/pricing"), "/work");
    assert.equal(legacyRedirectTarget("/apps"), "/work");
    assert.equal(legacyRedirectTarget("/pricing-philosophy"), "/company");
  });

  it("does not invent redirects for live pages", () => {
    assert.equal(legacyRedirectTarget("/work/lia"), null);
    assert.equal(legacyRedirectTarget("/"), null);
  });
});

describe("host robots", () => {
  it("indexes only the production apex and www", () => {
    assert.equal(isProductionHost("federatedintel.ai"), true);
    assert.equal(isProductionHost("www.federatedintel.ai"), true);
    assert.equal(isPreviewHost("wolf-apple-sapphire-royal.grok.me"), true);
    assert.equal(isPreviewHost("fia-labs.vercel.app"), true);
    assert.equal(robotsForHost("federatedintel.ai"), INDEX_ROBOTS);
    assert.equal(robotsForHost("preview.vercel.app"), NOINDEX_ROBOTS);
    assert.equal(robotsForHost("localhost"), NOINDEX_ROBOTS);
  });
});

describe("applyDocumentSeo", () => {
  const injected = `<html><head><title>LegalIntel (LIA Pro) — FIA Labs</title><meta name="description" content="A governed reasoning desk."><meta property="og:image" content="https://wolf-apple-sapphire-royal.grok.me/og.jpg"><meta name="robots" content="index, follow"></head><body></body></html>`;

  it("restores production og:url and federatedintel.ai/og.jpg", () => {
    const out = applyDocumentSeo(injected, {
      host: "federatedintel.ai",
      path: "/work/lia",
    });
    assert.match(out, /property="og:image" content="https:\/\/federatedintel\.ai\/og\.jpg"/);
    assert.match(out, /property="og:url" content="https:\/\/federatedintel\.ai\/work\/lia"/);
    assert.match(out, /property="og:title" content="LegalIntel \(LIA Pro\) — FIA Labs"/);
    assert.doesNotMatch(out, /wolf-apple-sapphire-royal\.grok\.me/);
    assert.equal(OG_IMAGE, `${CANONICAL_ORIGIN}/og.jpg`);
    assert.equal(canonicalUrl("/work/lia"), "https://federatedintel.ai/work/lia");
  });

  it("noindexes grok / vercel preview hosts", () => {
    const out = applyDocumentSeo(injected, {
      host: "wolf-apple-sapphire-royal.grok.me",
      path: "/",
    });
    assert.match(out, /name="robots" content="noindex, nofollow"/);
  });
});
