/**
 * Runs outside grok-pwa (filename sorts first) so we can:
 * 1. 308 legacy paths before the SPA / 404 catch-all (backup — edge 308s in
 *    `.vercel/output/config.json` must fire first; see vercel-edge-redirects)
 * 2. Restore production og:url / og:image after the injector rewrites them
 *    to the grok.me host, and noindex preview / *.vercel.app / grok.me
 *
 * Do not 308 www → apex here. The Vercel project still "Redirects to www";
 * a working www→apex in this middleware would loop every page until Adrian
 * flips the domain setting. www→apex stays in vercel.json for after that flip.
 */
import {
  applyDocumentSeo,
  isPreviewHost,
  legacyRedirectTarget,
} from "../../src/lib/seo";

interface SeoEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

function requestHost(event: SeoEvent): string {
  return (
    event.req.headers.get("x-forwarded-host") ??
    event.req.headers.get("host") ??
    event.url.host
  );
}

function redirectTo(location: string, status = 308): Response {
  return new Response(null, {
    status,
    headers: { location, "cache-control": "public, max-age=0, must-revalidate" },
  });
}

function injectSeoStreaming(
  response: Response,
  host: string,
  path: string,
): Response {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let pending = "";
  let done = false;

  const transformed = response.body!.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        if (done) {
          controller.enqueue(chunk);
          return;
        }
        pending += decoder.decode(chunk, { stream: true });
        const at = pending.search(/<\/head>/i);
        if (at === -1) return;
        done = true;
        const close = pending.slice(at).match(/^<\/head>/i)![0].length;
        const head = applyDocumentSeo(pending.slice(0, at + close), {
          host,
          path,
        });
        controller.enqueue(encoder.encode(head));
        const rest = pending.slice(at + close);
        pending = "";
        if (rest) controller.enqueue(encoder.encode(rest));
      },
      flush(controller) {
        if (done || !pending) return;
        controller.enqueue(
          encoder.encode(applyDocumentSeo(pending, { host, path })),
        );
      },
    }),
  );

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  if (isPreviewHost(host) || path.startsWith("/__grok/")) {
    headers.set("x-robots-tag", "noindex, nofollow");
  }
  return new Response(transformed, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default async function canonicalSeoMiddleware(
  event: SeoEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const method = (event.req.method ?? "GET").toUpperCase();
  const host = requestHost(event);
  const path = event.url.pathname;

  const dest = legacyRedirectTarget(path);
  if (dest && (method === "GET" || method === "HEAD")) {
    return redirectTo(`${dest}${event.url.search}`);
  }

  if (method !== "GET") return next();

  const result = await next();
  if (
    result instanceof Response &&
    result.body &&
    String(result.headers.get("content-type") ?? "").includes("text/html") &&
    !result.headers.get("content-encoding")
  ) {
    return injectSeoStreaming(result, host, path);
  }

  if (result instanceof Response && isPreviewHost(host)) {
    const headers = new Headers(result.headers);
    headers.set("x-robots-tag", "noindex, nofollow");
    return new Response(result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }

  return result;
}
