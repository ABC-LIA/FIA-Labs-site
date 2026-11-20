#!/usr/bin/env node
/**
 * Generate public/openai-products.csv (and .csv.gz) from the shared product metadata.
 *
 * Single source of truth: src/lib/product-metadata.json
 * Run directly, or as part of `npm run build`.
 *
 * The CSV is the OpenAI ChatGPT Business product catalogue feed.
 * Required fields (OpenAI product feed spec):
 *   item_id, title, description, url, brand, seller_name,
 *   image_url, availability, price
 *
 * target_countries is serialized as a JSON array string per the spec
 * (quoted JSON in the CSV cell).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const META_PATH = join(ROOT, "src/lib/product-metadata.json");
const OUT_PATH = join(ROOT, "public/openai-products.csv");
const OUT_GZ_PATH = join(ROOT, "public/openai-products.csv.gz");

const SITE = "https://federatedintel.ai";
const SELLER_NAME = "FIA Labs";
const SELLER_URL = "https://federatedintel.ai/";
const STORE_COUNTRY = "US";
const TARGET_COUNTRIES = ["US", "AU", "GB", "NZ", "CA"];

const COLUMNS = [
  "item_id",
  "title",
  "description",
  "url",
  "brand",
  "seller_name",
  "image_url",
  "availability",
  "price",
  "is_digital",
  "is_eligible_search",
  "is_eligible_checkout",
  "product_category",
  "condition",
  "target_countries",
  "store_country",
  "seller_url",
];

function csvEscape(value) {
  const s = String(value ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function price(usd) {
  return `${Number(usd).toFixed(2)} USD`;
}

export function buildFeedRows(products) {
  return products.map((p) => ({
    item_id: p.itemId,
    title: p.title,
    description: p.description,
    url: `${SITE}${p.workPath}`,
    brand: p.brand,
    seller_name: SELLER_NAME,
    image_url: `${SITE}/${p.imagePath}`,
    availability: "in_stock",
    price: price(p.monthlyPriceUsd),
    is_digital: "true",
    is_eligible_search: "true",
    is_eligible_checkout: "false",
    product_category: p.productCategory,
    condition: "new",
    target_countries: JSON.stringify(TARGET_COUNTRIES),
    store_country: STORE_COUNTRY,
    seller_url: SELLER_URL,
  }));
}

export function toCsv(rows) {
  const lines = [COLUMNS.join(",")];
  for (const row of rows) {
    lines.push(COLUMNS.map((c) => csvEscape(row[c])).join(","));
  }
  return lines.join("\n") + "\n";
}

function main() {
  const products = JSON.parse(readFileSync(META_PATH, "utf8"));
  if (!Array.isArray(products) || products.length === 0) {
    throw new Error("product-metadata.json is empty");
  }
  const rows = buildFeedRows(products);
  const csv = toCsv(rows);
  writeFileSync(OUT_PATH, csv);
  const gz = gzipSync(Buffer.from(csv, "utf8"));
  writeFileSync(OUT_GZ_PATH, gz);
  console.log(
    `[generate-openai-feed] wrote ${rows.length} products to public/openai-products.csv and .csv.gz`,
  );
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], "file:").href) {
  try {
    main();
  } catch (err) {
    console.error(`[generate-openai-feed] ${err?.message || err}`);
    process.exit(1);
  }
}
