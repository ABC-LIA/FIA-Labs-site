import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FIA_PLAN } from "@/lib/site";

type FiaPlanSectionProps = {
  variant?: "full" | "teaser";
};

export function FiaPlanSection({ variant = "full" }: FiaPlanSectionProps) {
  if (variant === "teaser") {
    return (
      <section className="border-b border-border" aria-labelledby="fia-plan-teaser-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              {FIA_PLAN.kicker}
            </p>
            <h2
              id="fia-plan-teaser-title"
              className="mt-3 font-display text-3xl md:text-4xl"
            >
              {FIA_PLAN.name}
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base">
              {FIA_PLAN.blurb}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {FIA_PLAN.alternative}
            </p>
            <Link
              to="/work"
              hash="fia-plan"
              className="mt-6 inline-flex h-11 items-center gap-2 text-sm text-fg"
            >
              The house seat
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <FiaPlanPriceCard />
        </div>
      </section>
    );
  }

  return (
    <section
      id="fia-plan"
      className="scroll-mt-24 border-b border-border"
      aria-labelledby="fia-plan-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
              {FIA_PLAN.kicker}
            </p>
            <h2
              id="fia-plan-title"
              className="mt-3 font-display text-3xl md:text-4xl"
            >
              {FIA_PLAN.name}
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base">
              {FIA_PLAN.blurb}
            </p>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {FIA_PLAN.alternative}
            </p>
          </div>
          <FiaPlanPriceCard />
        </div>

        <dl className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Desk scope
            </dt>
            <dd className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {FIA_PLAN.deskScope}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
              Credits
            </dt>
            <dd className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {FIA_PLAN.credits}
            </dd>
          </div>
        </dl>

        <p className="mt-10 text-sm text-muted">
          Questions:{" "}
          <Link to="/company" hash="fia-plan" className="text-fg">
            FIA Plan on Company
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function FiaPlanPriceCard() {
  return (
    <aside
      className="border border-border bg-surface p-6 md:p-8"
      aria-label={`${FIA_PLAN.name}, ${FIA_PLAN.price} a ${FIA_PLAN.period}. ${FIA_PLAN.footerFact}`}
    >
      <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
        {FIA_PLAN.name}
      </p>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-5xl leading-none tracking-tight">
          {FIA_PLAN.price}
        </span>
        <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          / {FIA_PLAN.period}
        </span>
      </p>
      <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
        On the desk
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li className="inline-flex h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg">
          {FIA_PLAN.cta}
        </li>
        <li className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg">
          {FIA_PLAN.active}
        </li>
      </ul>
      <p className="mt-6 font-mono text-[10px] tracking-[0.12em] text-subtle uppercase">
        {FIA_PLAN.footerFact}
      </p>
    </aside>
  );
}

export function FiaPlanDeskNote() {
  return (
    <aside className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          {FIA_PLAN.alternative}
        </p>
        <Link
          to="/work"
          hash="fia-plan"
          className="inline-flex h-11 shrink-0 items-center gap-2 text-sm text-fg"
        >
          {FIA_PLAN.name}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </aside>
  );
}
