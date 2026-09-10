import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageFrame } from "@/components/page-frame";
import { ARTICLES, LAB, pageHead } from "@/lib/site";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () =>
    pageHead(
      "Research",
      "Truth infrastructure: essays on evidence, inference, and the architecture of institutional AI.",
      "/research",
    ),
});

function ResearchPage() {
  return (
    <PageFrame
      index="03 · Research"
      title="Truth infrastructure."
      dek="AI governance begins with the question of truth: how systems distinguish evidence from inference, preserve uncertainty, and support human judgment in high-consequence domains."
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-10 flex flex-col gap-4 border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Essays are published on Substack. Subscribe there for new work; this
            page is the index we keep on the lab site.
          </p>
          <a
            href={LAB.substack}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg"
          >
            FIA Labs on Substack
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {ARTICLES.map((article, i) => (
            <li key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-3 py-8 md:grid-cols-[4rem_1fr_auto] md:items-baseline"
              >
                <span className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl leading-snug group-hover:text-accent">
                    {article.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm text-muted">
                    {article.dek}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
                  Read
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </PageFrame>
  );
}
