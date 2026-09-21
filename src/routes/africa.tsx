import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { APPS, pageHead } from "@/lib/site";

export const Route = createFileRoute("/africa")({
  component: AfricaPage,
  head: () =>
    pageHead(
      "Project Africa",
      "An access grant across Africa. Not a product for sale.",
      "/africa",
    ),
});

function AfricaPage() {
  return (
    <PageFrame
      index="04 · Africa"
      title="Access at the scale of a continent."
      dek="We granted access to the eight specialist systems across Africa. It is an access grant, not a store, and not a substitute for local institutions."
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr]">
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted">
            <p>
              Project Africa put LIA Pro, MIA Pro, Aquinian, CarCounsel,
              Cine-Novelist, CFO Sentinel, ExecMind, and Brandium in reach of
              people who would otherwise meet a paywall first. The work is legal
              empowerment, research, ethics, mobility, craft, finance,
              governance, and enterprise — the same eight names, without a
              different product for a different latitude.
            </p>
            <p>
              That grant is not a product we sell from this site. The public
              desks now are Legal Intel, Aquinian Studio, Medical Intel,
              Brandium, CFO Sentinel, Cine-Novelist, and ExecMind. CarCounsel
              remains unpublished until it can show working at that standard.
            </p>
            <p>
              If you are an NGO, ministry, university, or clinic that wants to
              deploy rather than merely receive access, write to us.
            </p>
          </div>
          <aside className="border border-border bg-surface p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              The eight
            </p>
            <ul className="mt-5 space-y-3">
              {APPS.map((app) => (
                <li key={app.slug}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: app.slug }}
                    className="flex items-baseline justify-between gap-3 text-sm hover:text-accent"
                  >
                    <span>{app.shortName}</span>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-subtle uppercase">
                      {app.kicker}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </PageFrame>
  );
}
