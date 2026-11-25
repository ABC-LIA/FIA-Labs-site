// New guide page from brief AEO-2026-11-23-13 (draft, awaiting Adrian's OK).
// Slug /audit-ai-agent-decisions confirmed by Adrian (25 Nov 2026).
// "Approval decay" is attributed to Adrian Bertino-Clarke's published writing (book and
// Substack essays linked below); do not overstate it beyond that. Framework lines await a practitioner check.
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { PageFrame } from "@/components/page-frame";
import { FIA_ORG_ID, pageHead } from "@/lib/site";

const ORIGIN = "https://federatedintel.ai";
const PATH = "/audit-ai-agent-decisions";
const URL = `${ORIGIN}${PATH}`;
const TITLE = "How to audit AI agent decisions: a step-by-step guide | FIA Labs";
const H1 = "How to audit AI agent decisions (and design a human approval that holds up)";
const DESCRIPTION =
  "Reconstruct an AI agent's decision, test the record with evidence, inference and gap, and design human approvals that hold up later.";

const ANSWER =
  "To audit an AI agent's decision, reconstruct it as a chain: what triggered it, which agent and policy version acted, what data it used, what it proposed, who approved it and on what record, what it did, and what happened next. Then test the record, not the narrative: separate what the record establishes (evidence) from what was drawn from it (inference) and what is missing (gap). A human approval counts only if the approver had authority, saw the record the agent acted on, and the approval was still current when the action ran.";

export const AUDIT_FAQS = [
  {
    q: "What should an AI agent audit trail record?",
    a: "Enough to rebuild the decision without asking the agent: the trigger and the mandate, the model, prompt or policy and tool versions in force, the inputs it retrieved with their sources, what it proposed and its working, who approved it, on what record and when, the action it took and the outcome. A trail that records only the final action cannot be audited.",
  },
  {
    q: "What is a human-in-the-loop approval for AI agents?",
    a: "A point where the agent stops and a person with authority must approve before it acts, usually before an irreversible or external action such as a payment, a filing or a message to a customer. The approval is only meaningful if the person sees the record the agent acted on, not just a summary of what it wants to do.",
  },
  {
    q: "Should AI agent approvals expire?",
    a: "In most cases, yes. An approval is given on a particular record, scope and moment. If the data changes, the scope widens or enough time passes that the circumstances may have moved, the approval no longer covers the action. Setting a lapse condition when the approval is given is simpler than arguing about it afterwards.",
  },
  {
    q: "What is the difference between logging and auditing an AI decision?",
    a: "Logging captures what happened. Auditing asks whether it should have happened: whether the action was within authority, whether the record supported it, and whether the decision can be reconstructed. Good logs make an audit possible; they do not answer its questions.",
  },
  {
    q: "How do evidence, inference and gap help audit an AI decision?",
    a: "They separate what the record actually established from what the agent or the approver drew from it and from what was missing at the time. Many failed decisions turn out to rest on an inference treated as evidence, or on a gap nobody named. Classifying each step makes that visible.",
  },
  {
    q: "Does FIA Labs sell an AI governance platform?",
    a: "No. FIA Labs builds governed specialist desks, for law, medicine, finance, executive decisions and other fields, that keep evidence, inference and gap apart and show their working. This page is a method guide, not a product pitch for a governance platform.",
  },
] as const;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: H1,
      description: DESCRIPTION,
      url: URL,
      mainEntityOfPage: URL,
      inLanguage: "en",
      datePublished: "2026-11-25",
      dateModified: "2026-11-25",
      author: { "@id": FIA_ORG_ID },
      publisher: { "@id": FIA_ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "FIA Labs", item: `${ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "How to audit AI agent decisions", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      url: URL,
      mainEntity: AUDIT_FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

const STEPS = [
  {
    h: "1. Trigger and mandate",
    p: "Start with why the agent acted at all. What request, event or schedule triggered it? Which agent was it, and what was it permitted to do? An action outside the mandate fails the audit however good the outcome was.",
  },
  {
    h: "2. Versions",
    p: "Record the model, the prompt or policy, and the tools in force when it ran. Agents change often. Without the versions, you are auditing today's system, not the one that made the decision.",
  },
  {
    h: "3. Inputs",
    p: "List the data and documents the agent retrieved, with their sources and the time they were read. A decision can only be as good as what it was given, and the question later is often what it was not given.",
  },
  {
    h: "4. The proposal and its working",
    p: "What did the agent propose, and on what reasoning? Keep the working, not just the output. If the reasoning cannot be produced, the decision cannot be reconstructed.",
  },
  {
    h: "5. Approval",
    p: "Who approved it, on what record, and when? Note whether the approver saw the inputs and the working or only a summary, and whether they had authority for this kind of action.",
  },
  {
    h: "6. Action and outcome",
    p: "What did the agent actually do, did it match what was approved, and what happened next? A gap between the approved proposal and the executed action is one of the most important findings an audit can make.",
  },
];

const CHECKLIST = `[ ] Trigger and mandate recorded; action within mandate
[ ] Model, prompt/policy and tool versions recorded
[ ] Inputs listed with sources and retrieval time
[ ] Proposal and working kept, not just the output
[ ] Each step classified: EVIDENCE / INFERENCE / GAP
[ ] Approver identified, with authority for this action
[ ] Approver saw the record, not only a summary
[ ] Approval still current when the action ran
[ ] Executed action matches approved proposal
[ ] Outcome recorded and linked back to the decision`;

export const Route = createFileRoute("/audit-ai-agent-decisions")({
  head: () => pageHead(TITLE, DESCRIPTION, PATH),
  component: AuditAiAgentDecisionsPage,
});

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mt-14 font-display text-3xl tracking-tight">
      {children}
    </h2>
  );
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 font-display text-xl tracking-tight">{children}</h3>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-base leading-relaxed text-muted">{children}</p>;
}
function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-fg underline underline-offset-4">
      {children}
    </a>
  );
}

function AuditAiAgentDecisionsPage() {
  return (
    <PageFrame index="Guide" title={H1} dek={ANSWER}>
      <JsonLd data={JSON_LD} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <P>
          FIA Labs builds governed desks that keep evidence, inference and gap on separate lines and
          show their working, so a decision can be reconstructed before anyone relies on it. This
          guide sets out the method in a form you can use on any agent, ours or anyone else's.
        </P>

        <H2>What an AI decision audit has to answer</H2>
        <P>
          Every audit of a consequential decision comes down to three questions. Was it within
          authority: was the agent allowed to do this, and was the person who approved it allowed to
          approve it? Was it supported by the record: did the inputs actually establish what the
          decision assumed? Can it be reconstructed: could someone who was not there rebuild the
          decision from what was kept? A decision that fails any one of the three is not one an
          organisation can stand behind, however well it turned out.
        </P>

        <H2>Step by step: reconstructing a decision</H2>
        <ol>
          {STEPS.map((s) => (
            <li key={s.h}>
              <H3>{s.h}</H3>
              <P>{s.p}</P>
            </li>
          ))}
        </ol>

        <H2>Evidence, inference, gap: testing the record</H2>
        <P>
          Once the chain is rebuilt, classify each step. Evidence is what the record establishes.
          Inference is what was drawn from it. Gap is what the record does not establish, or what
          was missing. A worked example, fictional:
        </P>
        <blockquote className="mt-4 border-l-2 border-border pl-4 text-base leading-relaxed text-muted">
          <p>
            <strong className="font-medium text-fg">Decision:</strong> a procurement agent paid a
            supplier invoice early to take a discount.
          </p>
          <p className="mt-2">
            <strong className="font-medium text-fg">Evidence:</strong> the invoice and the supplier's
            payment terms were retrieved from the finance system, with timestamps.
          </p>
          <p className="mt-2">
            <strong className="font-medium text-fg">Inference:</strong> the agent treated the
            supplier's bank details as verified because they matched last quarter's payment; no
            verification check ran.
          </p>
          <p className="mt-2">
            <strong className="font-medium text-fg">Gap:</strong> the approver's record shows the
            amount and discount, not the bank details. Nobody approved the account the money went to.
          </p>
        </blockquote>
        <P>
          The audit finding is not "the agent made a mistake". It is that an inference was treated
          as evidence, and the approval did not cover it. For how FIA desks keep the three lines
          apart, see <Link to="/method" className="text-fg underline underline-offset-4">the method</Link>.
        </P>

        <H2>Designing a human approval that means something</H2>
        <H3>Approve the record, not the summary</H3>
        <P>
          An approval screen that shows only "Pay supplier, $X, approve?" invites a rubber stamp.
          Show the approver what the agent relied on, what it inferred and what it could not find.
          If they would need to open three systems to check, the approval is not informed.
        </P>
        <H3>Authority: who is allowed to say yes</H3>
        <P>
          Map approvals to the same delegations of authority your organisation already uses for
          people. An agent's action should not be approvable by someone who could not authorise the
          same action if a colleague proposed it.
        </P>
        <H3>When an approval should lapse</H3>
        <P>
          An approval is given on a particular record, for a particular scope, at a particular time.
          It should stop covering the action when the inputs change, when the scope widens, or when
          enough time has passed that the circumstances may have moved. Set the lapse condition when
          the approval is given, and record it with the approval.
        </P>
        <P>
          Adrian Bertino-Clarke, FIA Labs' founder, has written about this problem as "approval
          decay": an approval is historical, but the action runs in the present, so the record of
          an approval does not show that its conditions still held when the agent acted. See his
          field guide <em>From Advice to Authority</em> and the essays{" "}
          <A href="https://federatedintel.substack.com/p/yesterdays-permission-todays-consequence">
            Yesterday's Permission, Today's Consequence
          </A>{" "}
          and{" "}
          <A href="https://federatedintel.substack.com/p/the-missing-moment-in-ai-governance">
            The Missing Moment in AI Governance
          </A>
          .
        </P>
        <H3>Where to put the gate</H3>
        <P>
          Put the human gate before actions that are irreversible or leave the organisation:
          payments, filings, messages to customers or regulators, changes to production systems.
          Internal drafting and analysis rarely need a gate; the record of them does.
        </P>

        <H2>How this maps to frameworks you already use</H2>
        <P>
          The method above fits the frameworks most organisations already work with. It does not
          make anyone compliant with them; read each in its official source.
        </P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>
            <A href="https://www.nist.gov/itl/ai-risk-management-framework">NIST AI Risk Management Framework</A>
            : a voluntary US framework organised around Govern, Map, Measure and Manage.
            Accountability and documentation sit mainly under Govern.
          </li>
          <li>
            <A href="https://www.iso.org/standard/81230.html">ISO/IEC 42001</A>: an international
            standard for an AI management system, covering defined roles, documented processes and
            ongoing monitoring.
          </li>
          <li>
            <A href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj">EU AI Act</A>: for systems it
            classes as high-risk, it includes requirements on record-keeping and human oversight.
          </li>
          <li>
            <A href="https://www.industry.gov.au/publications/voluntary-ai-safety-standard">
              Australia's Voluntary AI Safety Standard
            </A>
            : its guardrails cover accountability, human oversight and record-keeping. The National
            AI Centre's Guidance for AI Adoption, published in October 2025, updates and simplifies
            it.
          </li>
        </ul>

        <H2>Audit checklist</H2>
        <P>Copy this into the file for each consequential decision.</P>
        <pre className="mt-4 overflow-x-auto border border-border p-4 font-mono text-[0.8rem] leading-relaxed text-muted">
          <code>{CHECKLIST}</code>
        </pre>

        <H2>How FIA desks are built for this</H2>
        <P>
          FIA desks are federated specialists, each owning one domain. Dual engines split the work:
          a generation engine reads the record and proposes, and a symbolic engine tests the proposal
          against domain rules, logic and precedent. Show working sets out what each conclusion
          depends on, and evidence, inference and gap stay on separate lines. Human judgment remains
          the authority.
        </P>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>
            Legal files: <A href="https://legalintel.ai">LIA Pro, LIA SC and LIA Chambers</A> (
            <A href="https://pro.legalintel.ai">open LIA Pro</A>).
          </li>
          <li>
            Finance and board reporting: <A href="https://cfosentinel.pro">CFO Sentinel</A>.
          </li>
          <li>
            Decision memos and board packs: <A href="https://execmind.app">ExecMind</A> (
            <A href="https://pro.execmind.app">open ExecMind</A>).
          </li>
          <li>
            Medical literature, for practitioners and researchers only: <A href="https://medicalintel.org">MIA</A>.
          </li>
        </ul>
        <P>
          See also <Link to="/research" className="text-fg underline underline-offset-4">research</Link>,{" "}
          <Link to="/what-is-symbolic-ai" className="text-fg underline underline-offset-4">what is symbolic AI?</Link>
          , <Link to="/work" className="text-fg underline underline-offset-4">the desks</Link> and{" "}
          <Link to="/company" className="text-fg underline underline-offset-4">the company</Link>.
        </P>

        <H2 id="faq">Frequently asked questions</H2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {AUDIT_FAQS.map((item) => (
            <div key={item.q} className="py-5">
              <dt className="font-display text-xl">{item.q}</dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>

        <aside className="mt-14 border border-border bg-surface p-6 md:p-8">
          <p className="text-base leading-relaxed text-fg">
            Try a governed desk on your own file: 150 free credits, no card.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm">
            <A href="https://pro.legalintel.ai">LIA Pro</A>
            <A href="https://cfosentinel.pro">CFO Sentinel</A>
            <A href="https://pro.execmind.app">ExecMind</A>
          </div>
        </aside>
      </article>
    </PageFrame>
  );
}
