import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FederationField } from "@/components/federation-field";
import { FiaPlanSection } from "@/components/fia-plan-section";
import { JsonLd } from "@/components/json-ld";
import {
  APPS,
  ARTICLES,
  FEATURED,
  LAB,
  ORGANIZATION_JSON_LD,
  PAGE_COPY,
  PRINCIPLES,
  pageHead,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead(PAGE_COPY.home.title, PAGE_COPY.home.description, PAGE_COPY.home.path),
});

function Home() {
  return (
    <main id="content">
      <JsonLd data={ORGANIZATION_JSON_LD} />
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:py-24">
          <div className="fia-rise">
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              {LAB.city} · {LAB.legalName}
            </p>
            <h1 className="mt-5 font-display text-[2.4rem] leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]">
              We don’t just predict outcomes.
              <span className="mt-2 block italic text-accent">We reason them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Expert systems for high-consequence work. Eight specialists. Two
              engines. A record of how the answer was reached — so a professional
              can still decide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg"
              >
                See the work
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/method"
                className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg"
              >
                Read the method
              </Link>
            </div>
          </div>
          <FederationField />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
                01 · In production
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Live desks</h2>
            </div>
            <Link
              to="/work"
              className="hidden font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg sm:inline"
            >
              Full index
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((app) => (
              <article
                key={app.slug}
                className="flex flex-col border border-border bg-surface p-6 md:p-8"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
                    {app.shortName}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                    {app.statusLabel}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl">{app.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted md:text-base">
                  {app.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {app.marketingUrl ? (
                    <a
                      href={app.marketingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-fg"
                    >
                      {app.slug === "lia"
                        ? "Open LegalIntel"
                        : app.slug === "aquinian"
                          ? "Open Aquinian"
                          : app.slug === "mia"
                            ? "Open Medical Intel"
                            : "Visit the site"}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : null}
                  {app.deskUrl ? (
                    <a
                      href={app.deskUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
                    >
                      {app.slug === "aquinian" ? "Open the studio" : "Open the desk"}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : null}
                  <Link
                    to="/work/$slug"
                    params={{ slug: app.slug }}
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
                  >
                    On this site
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FiaPlanSection variant="teaser" />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            02 · The rest of the desk
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            The rest of the federation
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            CFO Sentinel and Cine-Novelist are live on their own domains.
            Brandium, ExecMind, and CarCounsel remain forthcoming — a desk
            ships when it can show working.
          </p>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {APPS.filter((a) => !a.featured).map((app, i) => (
              <li key={app.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: app.slug }}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 py-5 md:grid-cols-[3rem_8rem_1fr_auto]"
                >
                  <span className="font-mono text-xs text-subtle">
                    {String(i + FEATURED.length + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs tracking-[0.12em] text-fg uppercase">
                    {app.shortName}
                  </span>
                  <span className="col-start-2 max-w-xl text-sm text-muted md:col-start-3">
                    {app.kicker}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-subtle uppercase group-hover:text-fg">
                    {app.statusLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            03 · Method
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
            A conclusion that cannot be reconstructed is not ready for this kind of work.
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.slice(0, 3).map((item) => (
              <article key={item.index} className="bg-bg p-6 md:p-8">
                <p className="font-mono text-[11px] text-subtle">{item.index}</p>
                <h3 className="mt-3 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <Link
            to="/method"
            className="mt-8 inline-flex items-center gap-2 text-sm text-fg"
          >
            The full method
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              04 · Truth infrastructure
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Research, not launch copy.
            </h2>
            <p className="mt-4 text-muted">
              AI governance begins with a theory of truth: how a system
              distinguishes evidence from inference, preserves uncertainty, and
              supports human judgment.
            </p>
            <a
              href={LAB.substack}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-fg"
            >
              Subscribe on Substack
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {ARTICLES.slice(0, 3).map((article) => (
              <li key={article.href}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-4 hover:text-accent"
                >
                  <p className="font-display text-lg leading-snug">{article.title}</p>
                  <p className="mt-1 text-sm text-muted">{article.dek}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:px-8 md:py-16">
          <Link
            to="/africa"
            className="border border-border bg-surface p-6 transition-colors duration-150 hover:border-rule md:p-8"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              05 · Access
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">Project Africa</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              An access grant across Africa. Not a product for sale, and not a
              substitute for local institutions.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
              Read the note
              <ArrowRight className="size-4" />
            </span>
          </Link>
          <Link
            to="/company"
            className="border border-border bg-surface p-6 transition-colors duration-150 hover:border-rule md:p-8"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              06 · The lab
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">Company</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A privately owned lab in Washington, D.C. Independent of the
              platforms we reason on. Built for professionals who have to stand
              behind a file.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
              About FIA Labs
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
