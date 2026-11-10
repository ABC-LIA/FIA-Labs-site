import { createFileRoute, Link } from "@tanstack/react-router";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/page-frame";
import { METHOD_ANSWER, METHOD_FAQS, METHOD_JSON_LD, PRINCIPLES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/method")({
  component: MethodPage,
  head: () =>
    pageHead(
      "Method",
      "Federation, dual engines, symbolic arbitration, and a rule that the working has to be showable.",
      "/method",
    ),
});

function MethodPage() {
  return (
    <PageFrame
      index="02 · Method"
      title="Federation, not costume."
      dek="A general model asked to sound like a lawyer is still a general model. FIA is a set of specialists, a second engine that tests what the first proposes, and a rule that the working has to be showable."
    >
      <JsonLd data={METHOD_JSON_LD} />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-fg md:text-lg">
          {METHOD_ANSWER}
        </p>
        <ol className="divide-y divide-border border-y border-border">
          {PRINCIPLES.map((item) => (
            <li
              key={item.index}
              className="grid gap-3 py-8 md:grid-cols-[6rem_16rem_1fr] md:gap-8"
            >
              <p className="font-mono text-xs text-subtle">{item.index}</p>
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <section className="mt-14 max-w-3xl" id="faq">
          <h2 className="font-display text-3xl">Questions about the method</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {METHOD_FAQS.map((item) => (
              <div key={item.id} id={item.id} className="py-5">
                <dt className="font-display text-xl">{item.q}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <aside className="mt-14 max-w-3xl border border-border bg-surface p-6 md:p-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
            On compliance
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            The architecture is built for auditability: dual engines, symbolic
            logic, and a visible distinction between evidence, inference, and
            gap. That is the posture we take toward jurisdictions that require
            accountability and human-understandable reasoning. It is not a
            certification, and we do not claim SOC 2, ISO, or HIPAA on this
            site.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            The patented federated system — seven specialists reasoning
            together under arbitration — is under development. The live desks
            already carry the same discipline: show working, keep the human in
            the chair.
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            <Link to="/work" className="text-sm text-fg">
              The seven desks
            </Link>
            <Link to="/research" className="text-sm text-muted hover:text-fg">
              Truth infrastructure
            </Link>
          </div>
        </aside>
      </div>
    </PageFrame>
  );
}
