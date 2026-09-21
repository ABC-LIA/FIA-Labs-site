import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ExternalLink } from "@/components/external-link";
import { JsonLd } from "@/components/json-ld";
import {
  APPS,
  LIA_SOFTWARE_JSON_LD,
  MIA_SOFTWARE_JSON_LD,
  getApp,
  pageHead,
  workPageCopy,
} from "@/lib/site";

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

  const index = APPS.findIndex((item) => item.slug === app.slug);
  const prev = APPS[(index - 1 + APPS.length) % APPS.length];
  const next = APPS[(index + 1) % APPS.length];

  return (
    <main id="content">
      {app.slug === "lia" ? <JsonLd data={LIA_SOFTWARE_JSON_LD} /> : null}
      {app.slug === "mia" ? <JsonLd data={MIA_SOFTWARE_JSON_LD} /> : null}
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
                {app.slug === "aquinian" ? "Open the studio" : "Open the desk"}
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </header>

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
