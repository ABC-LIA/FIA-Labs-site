export const CANONICAL_ORIGIN = "https://federatedintel.ai";

export const INDEX_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1";
export const NOINDEX_ROBOTS = "noindex, nofollow";
export const OG_IMAGE = `${CANONICAL_ORIGIN}/og.jpg`;

export const PRODUCTION_HOSTS = new Set([
  "federatedintel.ai",
  "www.federatedintel.ai",
]);

/** Retired IA → current desks. Permanent (301/308). Do not add these to the sitemap. */
export const LEGACY_REDIRECTS: Readonly<Record<string, string>> = {
  "/lia": "/work/lia",
  "/pricing": "/work", // house-seat card lives on /work#fia-plan
  "/apps": "/work",
  "/pricing-philosophy": "/company",
  "/work/mira": "/work/mia",
};

export function hostnameFromHostHeader(header?: string | null): string {
  return String(header ?? "")
    .split(",")[0]
    .trim()
    .split(":")[0]
    .toLowerCase();
}

export function isProductionHost(host?: string | null): boolean {
  return PRODUCTION_HOSTS.has(hostnameFromHostHeader(host));
}

export function isPreviewHost(host?: string | null): boolean {
  const h = hostnameFromHostHeader(host);
  if (!h || isProductionHost(h)) return false;
  return (
    h.endsWith(".grok.me") ||
    h.endsWith(".vercel.app") ||
    h.endsWith(".grok-sandbox.com") ||
    h.includes("preview") ||
    h === "localhost" ||
    h === "127.0.0.1"
  );
}

/** Unknown SSR host stays indexable so production is never noindexed by accident. */
export function robotsForHost(host?: string | null): string {
  if (typeof host === "string" && host.length > 0) {
    return isProductionHost(host) ? INDEX_ROBOTS : NOINDEX_ROBOTS;
  }
  if (typeof window !== "undefined") {
    return isProductionHost(window.location.hostname)
      ? INDEX_ROBOTS
      : NOINDEX_ROBOTS;
  }
  return INDEX_ROBOTS;
}

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${CANONICAL_ORIGIN}/`;
  return `${CANONICAL_ORIGIN}${normalized.replace(/\/+$/, "")}`;
}

export function legacyRedirectTarget(pathname: string): string | null {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return LEGACY_REDIRECTS[path] ?? null;
}

function upsertMeta(
  html: string,
  attr: "name" | "property",
  key: string,
  content: string,
): string {
  const pattern = new RegExp(
    `<meta\\s+${attr}=["']${key}["'][^>]*>|<meta\\s+[^>]*${attr}=["']${key}["'][^>]*>`,
    "i",
  );
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}">`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${tag}</head>`);
  return `${html}${tag}`;
}

function escapeAttr(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function titleFromDocument(html: string): string {
  const match = html.match(/<title\b[^>]*>([^<]*)<\/title>/i);
  return match ? match[1].replaceAll("&amp;", "&").trim() : "";
}

function descriptionFromDocument(html: string): string {
  const match = html.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>|<meta\s+content=["']([^"']*)["']\s+name=["']description["'][^>]*>/i,
  );
  return (match?.[1] ?? match?.[2] ?? "").trim();
}

/**
 * After the Grok PWA injector (which rewrites og:image to the grok.me host),
 * restore production share tags and noindex preview / Vercel / grok hosts.
 */
export function applyDocumentSeo(
  html: string,
  opts: { host: string; path: string },
): string {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const preview =
    isPreviewHost(opts.host) || path === "/__grok" || path.startsWith("/__grok/");
  const production = isProductionHost(opts.host);

  let next = html;

  if (preview) {
    next = upsertMeta(next, "name", "robots", NOINDEX_ROBOTS);
    return next;
  }

  if (!production) return next;

  const canonical = canonicalUrl(path);
  const title = titleFromDocument(next);
  const description = descriptionFromDocument(next);

  next = upsertMeta(next, "name", "robots", INDEX_ROBOTS);
  if (title) {
    next = upsertMeta(next, "property", "og:title", title);
    next = upsertMeta(next, "name", "twitter:title", title);
  }
  if (description) {
    next = upsertMeta(next, "property", "og:description", description);
    next = upsertMeta(next, "name", "twitter:description", description);
  }
  next = upsertMeta(next, "property", "og:url", canonical);
  next = upsertMeta(next, "property", "og:image", OG_IMAGE);
  next = upsertMeta(next, "name", "twitter:image", OG_IMAGE);
  next = upsertMeta(next, "property", "og:site_name", "FIA Labs");
  next = upsertMeta(next, "property", "og:type", "website");
  return next;
}
