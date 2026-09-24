import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FiaPlanSection } from "@/components/fia-plan-section";
import { PageFrame } from "@/components/page-frame";
import { APPS, PAGE_COPY, pageHead } from "@/lib/site";

export const Route = createFileRoute("/work/")({
  component: WorkPage,
  head: () =>
    pageHead(PAGE_COPY.work.title, PAGE_COPY.work.description, PAGE_COPY.work.path),
});

function WorkPage() {
  return (
    <PageFrame
      index="01 · Work"
      title="The desk."
      dek="Eight specialist systems. FIA Plan is the house seat — one plan for the suite, Federation included. Five desks are in production on their own domains. Brandium, ExecMind, and CarCounsel are named here until they can ship at the same standard."
    >
      <FiaPlanSection />
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <ol className="divide-y divide-border border-y border-border">
          {APPS.map((app, i) => (
            <li key={app.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: app.slug }}
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 py-7 md:grid-cols-[4rem_14rem_1fr_9rem] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-2xl group-hover:text-accent">
                    {app.shortName}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
                    {app.name}
                  </span>
                </span>
                <span className="col-start-2 max-w-xl text-sm leading-relaxed text-muted md:col-start-3">
                  {app.summary}
                </span>
                <span className="col-start-2 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase md:col-start-4 md:justify-end">
                  {app.statusLabel}
                  <ArrowRight className="size-3.5 text-muted group-hover:text-fg" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </PageFrame>
  );
}
