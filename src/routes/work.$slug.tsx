import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ExternalLink } from "@/components/external-link";
import { FiaPlanDeskNote } from "@/components/fia-plan-section";
import { JsonLd } from "@/components/json-ld";
import {
  APPS,
  LIA_LINE,
  LIA_SOFTWARE_JSON_LD,
  MIA_SOFTWARE_JSON_LD,
  BRANDIUM_SOFTWARE_JSON_LD,
  CFO_SENTINEL_SOFTWARE_JSON_LD,
  EXECMIND_SOFTWARE_JSON_LD,
  AQUINIAN_SOFTWARE_JSON_LD,
  CINE_NOVELIST_SOFTWARE_JSON_LD,
  getApp,
  pageHead,
  workPageCopy,
} from "@/lib/site";
import { getProductMeta } from "@/lib/product-metadata";

export const Route = createFileRoute("/work/$slug")({
  component: AppPage,
  beforeLoad: ({ params }) => {
    if (params.slug === "mira") {
      throw redirect({
        to: "/work/$slug",
        params: { slug: "mia" },
        statusCode: 308,
      });
    }
    if (params.slug === "carcounsel") {
      throw redirect({
        to: "/work",
        statusCode: 308,
      });
    }
  },
  head: ({ params }) => {
    const copy = workPageCopy(params.slug);
    if (copy) {
      return pageHead(copy.title, copy.description, copy.path);
    }
    const app = getApp(params.slug);
    return pageHead(app?.name ?? "Work", app?.summary, `/work/${params.slug}`);
  },
});

function AppPage() {
  const { slug } = Route.useParams();
  const app = getApp(slug);
  if (!app) throw notFound();
  const meta = getProductMeta(slug);

  const index = APPS.findIndex((item) => item.slug === app.slug);
  const prev = APPS[(index - 1 + APPS.length) % APPS.length];
  const next = APPS[(index + 1) % APPS.length];

  return (
    <main id="content">
      {app.slug === "lia" ? <JsonLd data={LIA_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "mia" ? <JsonLd data={MIA_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "brandium" ? <JsonLd data={BRANDIUM_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "cfo-sentinel" ? <JsonLd data={CFO_SENTINEL_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "execmind" ? <JsonLd data={EXECMIND_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "aquinian" ? <JsonLd data={AQUINIAN_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "cine-novelist" ? <JsonLd data={CINE_NOVELIST_SOFTWARE_JSON_LD} /> : null}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg"
          >
            <ArrowLeft className="size-3.5" />
            Work
          </Link>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
              {String(index + 1).padStart(2, "0")} · {app.kicker}
            </p>
            <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
              {app.statusLabel}
            </p>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] md:text-6xl">
            {app.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {app.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {app.marketingUrl ? (
              <ExternalLink href={app.marketingUrl}>
                {app.slug === "lia"
                  ? "Open LegalIntel"
                  : app.slug === "aquinian"
                    ? "Open Aquinian"
                    : app.slug === "mia"
                      ? "Open Medical Intel"
                      : app.marketingUrl.replace("https://", "")}
              </ExternalLink>
            ) : (
              <Link
                to="/method"
                className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg"
              >
                How the method works
              </Link>
            )}
            {app.deskUrl ? (
              <ExternalLink href={app.deskUrl} quiet>
                {app.slug === "aquinian"
                  ? "Open the studio"
                  : app.slug === "lia"
                    ? "Open the Pro desk"
                    : "Open the desk"}
              </ExternalLink>
            ) : null}
            {app.slug === "lia"
              ? LIA_LINE.products
                  .filter((item) => item.name === "LIA SC" || item.name === "LIA Chambers")
                  .map((item) => (
                    <ExternalLink key={item.href} href={item.href} quiet>
                      {item.hrefLabel}
                    </ExternalLink>
                  ))
              : null}
          </div>
        </div>
      </header>

      {meta ? <PricingSection meta={meta} /> : null}

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.4fr_1fr] md:px-8 md:py-16">
          <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
            On the file
          </p>
          <ol className="space-y-6">
            {app.points.map((point, i) => (
              <li key={point} className="flex gap-4">
                <span className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-fg/90">{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {app.slug === "lia" ? <LiaLineSection /> : null}

      {app.slug === "cine-novelist" ? (
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Credit consumption
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/90">
              In an internal FIA Labs test, Cine Novelist completed professional coverage of a complex 131-page screenplay using approximately 20 credits. Actual credit consumption varies with document length, complexity and analytical mode. This observed result is not a guaranteed per-screenplay tariff.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Every desk starts with 150 free starter credits, no card required.
            </p>
          </div>
        </section>
      ) : null}

      {(app.slug === "lia" || app.slug === "cine-novelist" || app.slug === "aquinian") ? (
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Recognition
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg/90">
              {app.slug === "lia" && (
                <>LIA Pro — 2026 International AI Creator Award Finalist. Official gallery entry:{" "}</>
              )}
              {app.slug === "cine-novelist" && (
                <>Cine Novelist — 2026 International AI Creator Award Finalist. Official gallery entry:{" "}</>
              )}
              {app.slug === "aquinian" && (
                <>Aquinian was included in AICU editorial coverage of FIA Labs applications submitted to the 2026 International AI Creator Award. Official coverage:{" "}</>
              )}
              <a
                href={
                  app.slug === "lia"
                    ? "https://aicu.ai/award/2026/gallery/?w=26G26&lang=en"
                    : app.slug === "cine-novelist"
                      ? "https://aicu.ai/award/2026/gallery/?lang=en&w=26G27"
                      : "https://aicu.ai/media/261111/en"
                }
                target="_blank"
                rel="noreferrer"
                className="text-fg underline underline-offset-4"
              >
                {app.slug === "aquinian" ? "AICU editorial" : "AICU gallery entry"}
              </a>
              {app.slug !== "aquinian" && (
                <>
                  . Editorial coverage of the three applications:{" "}
                  <a
                    href="https://aicu.ai/media/261111/en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-fg underline underline-offset-4"
                  >
                    AICU media
                  </a>
                  .{" "}
                  <Link
                    to="/news/fia-labs-aicu-2026-finalists"
                    className="text-fg underline underline-offset-4"
                  >
                    Corporate announcement
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        </section>
      ) : null}

      <FiaPlanDeskNote />

      <nav
        className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2"
        aria-label="Adjacent systems"
      >
        <Link
          to="/work/$slug"
          params={{ slug: prev.slug }}
          className="bg-bg px-5 py-8 hover:bg-surface md:px-8"
        >
          <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
            Previous
          </p>
          <p className="mt-2 inline-flex items-center gap-2 font-display text-xl">
            <ArrowLeft className="size-4" />
            {prev.shortName}
          </p>
        </Link>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="bg-bg px-5 py-8 text-right hover:bg-surface md:px-8"
        >
          <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
            Next
          </p>
          <p className="mt-2 inline-flex items-center justify-end gap-2 font-display text-xl">
            {next.shortName}
            <ArrowRight className="size-4" />
          </p>
        </Link>
      </nav>
    </main>
  );
}

function PricingSection({ meta }: { meta: ReturnType<typeof getProductMeta> }) {
  if (!meta) return null;
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
          Entry plan
        </p>
        <div className="mt-6 flex flex-wrap items-baseline gap-6">
          <p className="font-display text-3xl">${meta.monthlyPriceUsd}<span className="text-lg text-muted">/mo</span></p>
          <p className="text-sm text-muted">{meta.monthlyCredits.toLocaleString()} credits per month</p>
          <p className="text-sm text-muted">{meta.starterCredits} free starter credits, no card</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {meta.deskUrl ? (
            <ExternalLink href={meta.deskUrl}>Open the desk</ExternalLink>
          ) : null}
          <ExternalLink href={meta.marketingUrl} quiet>
            Pricing and plans
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

function LiaLineSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
          {LIA_LINE.kicker}
        </p>
        <div className="mt-8 grid gap-px bg-border sm:grid-cols-2">
          {LIA_LINE.products.map((item, i) => (
            <article key={item.name} className="bg-bg p-6 md:p-8">
              <p className="font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-xl">{item.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              <ExternalLink href={item.href} quiet className="mt-5">
                {item.hrefLabel}
              </ExternalLink>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
          Plans and packs are on{" "}
          <a
            href={LIA_LINE.pricingHref}
            target="_blank"
            rel="noreferrer"
            className="text-fg underline underline-offset-4"
          >
            {LIA_LINE.pricingLabel}
          </a>
          , and on{" "}
          <a
            href={LIA_LINE.chambersPricingHref}
            target="_blank"
            rel="noreferrer"
            className="text-fg underline underline-offset-4"
          >
            {LIA_LINE.chambersPricingLabel}
          </a>
          . {LIA_LINE.pricingNote}
        </p>
      </div>
    </section>
  );
}
