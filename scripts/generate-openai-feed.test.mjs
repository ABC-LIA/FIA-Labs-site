import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { buildFeedRows, toCsv } from "./generate-openai-feed.mjs";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const products = JSON.parse(
  readFileSync(join(ROOT, "src/lib/product-metadata.json"), "utf8"),
);

test("feed rows come from shared product metadata", () => {
  const rows = buildFeedRows(products);
  assert.equal(rows.length, products.length);
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const r = rows[i];
    assert.equal(r.item_id, p.itemId);
    assert.equal(r.title, p.title);
    assert.equal(r.brand, p.brand);
    assert.equal(r.price, `${Number(p.monthlyPriceUsd).toFixed(2)} USD`);
    assert.equal(r.image_url, `https://federatedintel.ai/${p.imagePath}`);
    assert.equal(r.url, `https://federatedintel.ai${p.workPath}`);
    assert.equal(r.availability, "in_stock");
    assert.equal(r.is_digital, "true");
    assert.equal(r.target_countries, "US,AU,GB,NZ,CA");
    assert.match(r.description, /\S/);
  }
});

test("csv serialises every required OpenAI field", () => {
  const csv = toCsv(buildFeedRows(products));
  const [header, ...lines] = csv.trim().split("\n");
  for (const field of [
    "item_id",
    "title",
    "description",
    "url",
    "brand",
    "seller_name",
    "image_url",
    "availability",
    "price",
  ]) {
    assert.ok(header.split(",").includes(field), `missing ${field}`);
  }
  assert.equal(lines.length, products.length);
});
