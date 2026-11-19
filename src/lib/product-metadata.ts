/**
 * Single source of truth for product catalogue and work-page pricing.
 * Used by the OpenAI product feed and the /work/ pages.
 * Update here; regenerate the CSV from this file.
 */

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
};

export const PRODUCT_METADATA: ProductMeta[] = [
  {
    slug: "lia",
    itemId: "fia-lia-pro-monthly",
    title: "LIA Pro – Legal Intel AI Monthly Subscription",
    shortName: "LIA Pro",
    monthlyPriceUsd: 29,
    monthlyCredits: 1500,
    starterCredits: 150,
    imagePath: "images/lia-pro.jpg",
    workPath: "/work/lia",
    deskUrl: "https://pro.legalintel.ai",
    marketingUrl: "https://legalintel.ai",
  },
  {
    slug: "mia",
    itemId: "fia-mia-pro-monthly",
    title: "Medical Intel AI (MIA) Monthly Subscription",
    shortName: "MIA Pro",
    monthlyPriceUsd: 29,
    monthlyCredits: 1500,
    starterCredits: 150,
    imagePath: "images/mia-pro.jpg",
    workPath: "/work/mia",
    deskUrl: "https://mia.medicalintel.org",
    marketingUrl: "https://medicalintel.org",
  },
  {
    slug: "brandium",
    itemId: "fia-brandium-monthly",
    title: "Brandium Pro Monthly Subscription",
    shortName: "Brandium Pro",
    monthlyPriceUsd: 29,
    monthlyCredits: 1200,
    starterCredits: 150,
    imagePath: "images/brandium.jpg",
    workPath: "/work/brandium",
    marketingUrl: "https://brandium.pro",
  },
  {
    slug: "cfo-sentinel",
    itemId: "fia-cfo-sentinel-monthly",
    title: "CFO Sentinel Pro Monthly Subscription",
    shortName: "CFO Sentinel",
    monthlyPriceUsd: 29,
    monthlyCredits: 1500,
    starterCredits: 150,
    imagePath: "images/cfo-sentinel.jpg",
    workPath: "/work/cfo-sentinel",
    marketingUrl: "https://cfosentinel.pro",
  },
  {
    slug: "execmind",
    itemId: "fia-execmind-monthly",
    title: "ExecMind Pro Monthly Subscription",
    shortName: "ExecMind",
    monthlyPriceUsd: 39,
    monthlyCredits: 1800,
    starterCredits: 150,
    imagePath: "images/execmind.jpg",
    workPath: "/work/execmind",
    marketingUrl: "https://execmind.app",
  },
  {
    slug: "aquinian",
    itemId: "fia-aquinian-monthly",
    title: "Aquinian Studio Monthly Subscription",
    shortName: "Aquinian",
    monthlyPriceUsd: 15,
    monthlyCredits: 900,
    starterCredits: 150,
    imagePath: "images/aquinian.jpg",
    workPath: "/work/aquinian",
    deskUrl: "https://studio.aquinian.com",
    marketingUrl: "https://aquinian.com",
  },
  {
    slug: "cine-novelist",
    itemId: "fia-cine-novelist-monthly",
    title: "Cine Novelist Monthly Subscription",
    shortName: "Cine Novelist",
    monthlyPriceUsd: 39,
    monthlyCredits: 2000,
    starterCredits: 150,
    imagePath: "images/cine-novelist.jpg",
    workPath: "/work/cine-novelist",
    marketingUrl: "https://cinenovelist.com",
  },
];

export function getProductMeta(slug: string): ProductMeta | undefined {
  return PRODUCT_METADATA.find((p) => p.slug === slug);
}
