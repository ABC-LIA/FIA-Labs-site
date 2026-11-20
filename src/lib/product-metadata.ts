/**
 * Single source of truth for product catalogue and work-page pricing.
 *
 * The data lives in product-metadata.json. The OpenAI feed CSV is generated
 * from it by scripts/generate-openai-feed.mjs (wired into the production
 * build). Update the JSON, then run the generator or the full build.
 */

import data from "./product-metadata.json";

export type ProductMeta = {
  slug: string;
  itemId: string;
  title: string;
  shortName: string;
  monthlyPriceUsd: number;
  monthlyCredits: number;
  starterCredits: number;
  imagePath: string; // relative to public/, e.g. "images/lia-pro.jpg"
  workPath: string;
  deskUrl?: string;
  marketingUrl: string;
  brand: string;
  productCategory: string;
  description: string;
};

export const PRODUCT_METADATA: ProductMeta[] = data as ProductMeta[];

export function getProductMeta(slug: string): ProductMeta | undefined {
  return PRODUCT_METADATA.find((p) => p.slug === slug);
}
