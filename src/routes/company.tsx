import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { COMPANY_FAQ_JSON_LD, FAQS, LAB, PAGE_COPY, VOICES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () =>
    pageHead(
      PAGE_COPY.company.title,
      PAGE_COPY.company.description,
      PAGE_COPY.company.path,
    ),
});

function CompanyPage() {
  return (
    <PageFrame
      index="05 · Company"
      title="A private lab. A public standard."
      dek={`${LAB.name} is a DBA of ${LAB.legalName}, registered in ${LAB.city}, ${LAB.country}, and wholly owned by ${LAB.owner}. We build expert systems for people who have to stand behind a file.`}
      aside={
        <figure className="justify-self-start md:justify-self-end">
          <img
            src="/logo.png?v=3"
            alt="FIA Labs seal — FiA mark on a circuit die"
            width={160}
            height={160}
            className="size-28 object-contain md:size-40"
          />
          <figcaption className="mt-3 font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
            Registered mark
          </figcaption>
        </figure>
      }
    >
      <JsonLd data={COMPANY_FAQ_JSON_LD} />
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <section className="grid gap-10 border-b border-border pb-14 md:grid-cols-2">
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted">
            <p>
              At FIA Labs we build expert AI agents that think in the posture of
              lawyers, CFOs, strategists, and researchers. Two desks are live:
              Legal Intel for the legal and forensic file, Aquinian Studio for
              theology, philosophy, and doctrine. The other specialists are not
              public until they meet that standard.
            </p>
            <p>
              The patented federated system — eight specialists reasoning
              together under arbitration — is under development. We do not
              pretend it is finished. We do not ship a costume of expertise
              and call it a profession.
            </p>
            <p className="font-display text-xl italic text-fg">
              {LAB.tagline}
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {[
              ["Entity", LAB.legalName],
              ["Doing business as", LAB.dba],
              ["Seat", `${LAB.city}, ${LAB.country}`],
              ["Owner", LAB.owner],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-3">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-fg">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b border-border py-14">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            From the desk
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {VOICES.map((voice) => (
              <li key={voice.name} className="flex flex-col border border-border bg-surface p-7 md:p-8">
                <blockquote className="flex-1 font-display text-[1.1rem] leading-relaxed italic text-fg md:text-[1.15rem]">
                  “{voice.quote}”
                </blockquote>
                <p className="mt-8 font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {voice.name}
                </p>
                <p className="mt-1 text-sm text-subtle">{voice.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-14">
          <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
            Questions
          </p>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 font-mono text-xs text-subtle group-open:hidden">
                      +
                    </span>
                    <span className="mt-1 hidden font-mono text-xs text-subtle group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Further questions:{" "}
            <Link to="/contact" className="text-fg">
              write to the lab
            </Link>
            .
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
