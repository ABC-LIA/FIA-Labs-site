// Generated SEO guide page (approved 21 Oct 2026). Edit the SECTIONS text below.
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { pageHead } from "@/lib/site";

const EYEBROW = "Research";
const H1 = "What is symbolic AI?";
const DESCRIPTION = "A plain definition of symbolic AI, how it differs from neural AI, why expert systems still matter, and how FIA Labs pairs a generation engine with symbolic arbitration.";
const JSON_LD = {"@context": "https://schema.org", "@graph": [{"@type": "Article", "headline": "What is symbolic AI?", "description": "A plain definition of symbolic AI, how it differs from neural AI, why expert systems still matter, and how FIA Labs pairs a generation engine with symbolic arbitration.", "url": "https://federatedintel.ai/what-is-symbolic-ai", "mainEntityOfPage": "https://federatedintel.ai/what-is-symbolic-ai", "inLanguage": "en", "datePublished": "2026-10-21", "dateModified": "2026-10-21", "author": {"@type": "Organization", "name": "FIA Labs", "url": "https://federatedintel.ai"}, "publisher": {"@type": "Organization", "name": "FIA Labs", "url": "https://federatedintel.ai"}, "about": {"@type": "Thing", "name": "What is symbolic AI?"}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "FIA Labs", "item": "https://federatedintel.ai/"}, {"@type": "ListItem", "position": 2, "name": "What is symbolic AI?", "item": "https://federatedintel.ai/what-is-symbolic-ai"}]}]};

type Section = { h?: string; p?: string[]; ul?: string[] };
const SECTIONS: Section[] = [
  {
    "p": [
      "Symbolic AI is the branch of artificial intelligence that represents knowledge as explicit symbols, facts and rules, and reaches conclusions by applying those rules in steps a person can follow. If a symbolic system concludes something, you can ask it why and get the chain of reasoning back."
    ]
  },
  {
    "h": "A short history",
    "p": [
      "Symbolic AI was the dominant approach from the 1950s to the 1980s. Expert systems, such as programs that encoded a specialist's diagnostic rules, were its best-known commercial form. They were precise and explainable, but brittle: they knew only what had been written into them, and writing it was slow.",
      "Neural networks, and later large language models, took the opposite path. They learn patterns from very large amounts of data. They are flexible and fluent, but their reasons are not stored as rules, so a fluent answer can be unsupported."
    ]
  },
  {
    "h": "Symbolic AI and neural AI compared",
    "ul": [
      "Knowledge: symbolic systems hold explicit rules and facts; neural systems hold learned statistical patterns.",
      "Explanation: a symbolic conclusion can be traced step by step; a neural answer usually cannot.",
      "Flexibility: neural systems handle messy language and new situations well; symbolic systems need the rules written first.",
      "Failure mode: symbolic systems fail by saying nothing; neural systems can fail by saying something confident and wrong."
    ]
  },
  {
    "h": "Why combine them",
    "p": [
      "High-consequence work, in law, medicine, finance and governance, needs both. It needs the fluency to read a messy record, and it needs a conclusion that can be reconstructed and checked. Combining neural and symbolic methods is often called neuro-symbolic AI."
    ]
  },
  {
    "h": "How FIA Labs uses symbolic AI",
    "p": [
      "FIA Labs builds seven specialist desks on one method. A generation engine proposes. A symbolic engine tests. We call the testing step symbolic arbitration: the proposal is checked against explicit rules for the domain, sequential reasoning is kept visible, and every answer keeps evidence, inference and gap apart.",
      "The rule is simple: a conclusion that cannot be reconstructed is not ready for this kind of work. Where the record does not support a statement, the desks mark a gap rather than fill it. Human judgment remains the authority."
    ]
  }
];

export const Route = createFileRoute("/what-is-symbolic-ai")({
  head: () => pageHead("What is symbolic AI? Symbolic vs neural AI, and how FIA Labs uses both", DESCRIPTION, "/what-is-symbolic-ai"),
  component: WhatIsSymbolicAiPage,
});

function WhatIsSymbolicAiPage() {
  return (
    <PageFrame index={EYEBROW} title={H1}>
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        {SECTIONS.map((s, i) => (
          <section key={i}>
            {s.h ? <h2 className="mt-10 font-display text-2xl tracking-tight">{s.h}</h2> : null}
            {(s.p ?? []).map((t) => (
              <p key={t.slice(0, 48)} className="mt-3 text-base leading-relaxed text-muted">{t}</p>
            ))}
            {s.ul ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
                {s.ul.map((t) => (
                  <li key={t.slice(0, 48)}>{t}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <p className="mt-3 text-base leading-relaxed text-muted">
          <Link to="/method" className="underline underline-offset-4">{"See the method"}</Link>
        </p>
    </article>
    </PageFrame>
  );
}
