import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { LAB, pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => pageHead("Terms", "Terms of use for FIA Labs applications and this site.", "/terms"),
});

const SECTIONS = [
  {
    title: "1. The lab",
    body: `These Terms govern access to FIA Labs applications and services, a DBA of ${LAB.legalName}, registered in ${LAB.city}, ${LAB.country}, and wholly owned by ${LAB.owner}. The apps include LIA Pro (Legal Intel), MIA Pro (Medical Intel), Aquinian, Cine-Novelist, CarCounsel, Brandium, ExecMind, and CFO Sentinel.`,
  },
  {
    title: "2. What the apps are",
    body: "Each app provides domain-specific support through AI systems. They are for informational, educational, or research use. They do not replace professional judgment, licensed advice, regulatory compliance, or human expertise. FIA Labs does not provide legal, financial, medical, or pastoral advice.",
  },
  {
    title: "3. Accounts and seats",
    body: "You are responsible for activity on your account. Some products use prepaid seats or generation allowances. Unused capacity does not convert to cash except where a stated refund policy applies.",
  },
  {
    title: "4. Acceptable use",
    body: "You may not misuse the apps, attempt unauthorised access, reverse-engineer except as law permits, or use outputs to deceive a court, regulator, patient, or congregant. We may suspend access if misuse is detected.",
  },
  {
    title: "5. Intellectual property",
    body: `Apps, marks, and related intellectual property are owned by ${LAB.legalName} or its licensors. You receive a limited, non-exclusive, non-transferable licence for lawful personal or professional use. No ownership is transferred.`,
  },
  {
    title: "6. Outputs",
    body: "AI-generated outputs may be wrong, incomplete, or biased. You are solely responsible for verifying accuracy, legality, and fitness before use. A plausible reading is not a finding.",
  },
  {
    title: "7. Warranty and liability",
    body: "The apps are provided “as is” and “as available,” without warranties, express or implied. To the maximum extent permitted by law, FIA Labs, its affiliates, and licensors are not liable for indirect, incidental, or consequential damages; loss of data, revenue, or business; or reliance on AI-generated outputs.",
  },
  {
    title: "8. Governing law",
    body: `These Terms are governed by the laws of the District of Columbia, USA, without regard to conflict-of-law principles. Disputes will be resolved in the courts of Washington, D.C.`,
  },
  {
    title: "9. Contact",
    body: `Questions about these Terms: ${LAB.legalEmail}.`,
  },
];

function TermsPage() {
  return (
    <PageFrame
      index="Terms"
      title="Terms of service"
      dek={`Last updated 21 October 2025. If you do not agree, do not use the apps.`}
    >
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-12 md:px-8 md:py-16">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl">{section.title}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </PageFrame>
  );
}
