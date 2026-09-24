import { OG_IMAGE, canonicalUrl, robotsForHost } from "./seo";

export const ORIGIN = "https://federatedintel.ai";

export const PAGE_COPY = {
  home: {
    title: "FIA Labs — Federated Intel AI",
    description:
      "Expert systems for high-consequence work. Five desks in production: Legal Intel, Aquinian Studio, Medical Intel, CFO Sentinel, and Cine-Novelist. Brandium, ExecMind, and CarCounsel remain forthcoming. A record of how the answer was reached.",
    path: "/",
  },
  work: {
    title: "The desks — FIA Labs",
    description:
      "FIA Plan is the house seat for the suite — one plan, Federation included. Legal Intel, Aquinian Studio, Medical Intel, CFO Sentinel, and Cine-Novelist are in production. Brandium, ExecMind, and CarCounsel are not public until they meet the same standard.",
    path: "/work",
  },
  lia: {
    title: "LegalIntel (LIA Pro) — FIA Labs",
    description:
      "A governed reasoning desk for legal and forensic work. Evidence, inference and gap stay distinct. Open the desk at legalintel.ai.",
    path: "/work/lia",
  },
  aquinian: {
    title: "Aquinian Studio — FIA Labs",
    description:
      "Theological and philosophical work at the studio. Open it at aquinian.com.",
    path: "/work/aquinian",
  },
  mia: {
    title: "Medical Intel (MIA Pro) — FIA Labs",
    description:
      "A medical AI research desk for literature, biotechnology, and the medico-legal file. Not medical advice. Human judgment remains the authority. Open the desk at medicalintel.org.",
    path: "/work/mia",
  },
  brandium: {
    title: "Brandium Pro — FIA Labs",
    description:
      "Positioning, creative strategy, and acquisition — governed by the numbers that constrain growth. Named on this site until it can ship at the same standard.",
    path: "/work/brandium",
  },
  cfoSentinel: {
    title: "CFO Sentinel — FIA Labs",
    description:
      "Cash, margins, runway, and downside — where capital is created, consumed, or placed at risk. Open CFO Sentinel at cfosentinel.pro.",
    path: "/work/cfo-sentinel",
  },
  cineNovelist: {
    title: "Cine-Novelist — FIA Labs",
    description:
      "Character, structure, theme, and scene — stories that can withstand revision. Open Cine-Novelist at cinenovelist.com.",
    path: "/work/cine-novelist",
  },
  company: {
    title: "Company — FIA Labs",
    description:
      "FIA Labs is a DBA of Federated Intel AI LLC, Washington, D.C. FIA Plan is the house seat for the suite. Five desks in production. Human judgment remains the authority.",
    path: "/company",
  },
  contact: {
    title: "Contact — FIA Labs",
    description:
      "Contact FIA Labs. Legal work lives at legalintel.ai. Theological work lives at aquinian.com. Medical work lives at medicalintel.org.",
    path: "/contact",
  },
} as const;

export const LAB = {
  name: "FIA Labs",
  legalName: "Federated Intel AI LLC",
  dba: "FIA Labs",
  owner: "Unison Pictures Pty Ltd",
  city: "Washington, D.C.",
  country: "USA",
  tagline: "We don’t just predict outcomes. We reason them.",
  slogan: "8 Experts. 2 Engines. 1 Ethical Future.",
  description:
    "FIA Labs builds expert AI systems for high-consequence work — law, medicine, theology, research, finance, and the rest of the professional desk.",
  email: "support@federatedintel.ai",
  privacyEmail: "privacy@federatedintel.ai",
  legalEmail: "legal@federatedintel.ai",
  substack: "https://federatedintel.substack.com",
} as const;

export const NAV = [
  { href: "/work", label: "Work", index: "01" },
  { href: "/method", label: "Method", index: "02" },
  { href: "/research", label: "Research", index: "03" },
  { href: "/africa", label: "Africa", index: "04" },
  { href: "/company", label: "Company", index: "05" },
] as const;

export type AppStatus = "live" | "forthcoming";

export type LabApp = {
  slug: string;
  shortName: string;
  name: string;
  kicker: string;
  summary: string;
  description: string;
  points: string[];
  status: AppStatus;
  statusLabel: string;
  marketingUrl?: string;
  deskUrl?: string;
  featured?: boolean;
};

export const APPS: LabApp[] = [
  {
    slug: "lia",
    shortName: "LIA Pro",
    name: "Legal Intel",
    kicker: "Governed legal reasoning",
    summary:
      "A desk for the file in front of you. Evidence, inference, and gap stay on different lines.",
    description:
      "LIA Pro — Legal Intel — is a governed reasoning desk for legal and forensic work. It is not a chatbot for brainstorming. Review evidence, test competing interpretations, identify gaps, and preserve the reasoning behind important decisions. Human judgment remains the authority.",
    points: [
      "Conversations for testing an idea; matters for building a file.",
      "The ledger classifies material as evidence, inference, or gap.",
      "Show working for the reconstruction, the counter-reading, and what a conclusion depends on.",
      "Built for litigation, forensic and medico-legal work, and wrongful-justice review.",
    ],
    status: "live",
    statusLabel: "Live",
    marketingUrl: "https://legalintel.ai",
    deskUrl: "https://pro.legalintel.ai",
    featured: true,
  },
  {
    slug: "aquinian",
    shortName: "Aquinian",
    name: "Aquinian Studio",
    kicker: "A virtual Thomistic intellect",
    summary:
      "Reason after the manner of Aquinas, in fidelity to the Thomistic tradition.",
    description:
      "Aquinian Studio is a virtual Thomistic intellect for theology, philosophy, doctrine, natural law, and cultural analysis. It is not a generic chatbot dressed in classical language. It is structured around Thomistic categories, scholastic form, an authority hierarchy, no-fabrication discipline, and verification before citation.",
    points: [
      "Conversation, disputation, doctrine check, natural law, cultural diagnosis, and talk/article form.",
      "More than fifty modern languages, plus Latin, Ancient Greek, Biblical Hebrew, and Biblical Aramaic.",
      "Refuses to fabricate quotations, citations, or attributions.",
      "An intellectual formation tool — not an ecclesial authority or a substitute for counsel.",
    ],
    status: "live",
    statusLabel: "Live",
    marketingUrl: "https://aquinian.com",
    deskUrl: "https://studio.aquinian.com",
    featured: true,
  },
  {
    slug: "mia",
    shortName: "MIA Pro",
    name: "Medical Intel",
    kicker: "Medical research, kept on the record",
    summary:
      "A desk for literature, biotechnology, and the medico-legal file. Evidence, inference, and gap stay distinct.",
    description:
      "MIA Pro — Medical Intel — is a medical AI research desk for literature, biotechnology, and medico-legal work. It is not a chatbot for brainstorming, and it is not medical advice. Review sources, test competing readings, identify gaps, and preserve the reasoning behind a finding. Human judgment remains the authority.",
    points: [
      "Conversations for testing an idea; matters for building a file.",
      "Separates what a source establishes from what it merely asserts.",
      "Built for biomedical literature, biotechnology, and medico-legal review.",
      "Does not diagnose, treat, or replace a licensed clinician.",
    ],
    status: "live",
    statusLabel: "Live",
    marketingUrl: "https://medicalintel.org",
    deskUrl: "https://mia.medicalintel.org",
    featured: true,
  },
  {
    slug: "cfo-sentinel",
    shortName: "CFO Sentinel",
    name: "CFO Sentinel",
    kicker: "Financial intelligence",
    summary:
      "Cash, margins, runway, and downside — where capital is created, consumed, or placed at risk.",
    description:
      "CFO Sentinel analyses cash flow, margins, forecasts, working capital, and downside exposure. It gives decision-makers a clearer view of where capital is being created, consumed, or placed at risk — without replacing a finance function.",
    points: [
      "Runway, allocation, and working-capital pressure in one reading.",
      "Downside exposure treated as a first-class object, not a footnote.",
      "Built for operators and boards who need a defensible financial picture.",
      "Does not issue investment advice.",
    ],
    status: "live",
    statusLabel: "Live",
    marketingUrl: "https://cfosentinel.pro",
  },
  {
    slug: "brandium",
    shortName: "Brandium Pro",
    name: "Brandium",
    kicker: "Growth under unit economics",
    summary:
      "Positioning, creative strategy, and acquisition — governed by the numbers that actually constrain growth.",
    description:
      "Brandium connects positioning, creative strategy, acquisition economics, and capital discipline. It helps organisations identify the real constraint, test the numbers, and avoid scaling fragile growth.",
    points: [
      "Finds the constraint before amplifying the story.",
      "Holds creative claims against unit economics.",
      "Built for founders, operators, and investors who refuse narrative distortion.",
      "A strategist, not a content mill.",
    ],
    status: "forthcoming",
    statusLabel: "Forthcoming",
  },
  {
    slug: "execmind",
    shortName: "ExecMind",
    name: "ExecMind",
    kicker: "Structured decision support",
    summary:
      "Frame the decision, challenge the assumption, compare the options, and write down why.",
    description:
      "ExecMind helps executives frame difficult decisions, challenge assumptions, compare strategic options, and document the basis for action. Designed for leadership environments where clarity and accountability are essential.",
    points: [
      "Forces the question into a form that can be inspected.",
      "Surfaces hidden premises before a decision is taken.",
      "Documents the basis for action, not only the action itself.",
      "A thinking partner for the room — not a replacement for it.",
    ],
    status: "forthcoming",
    statusLabel: "Forthcoming",
  },
  {
    slug: "cine-novelist",
    shortName: "Cine-Novelist",
    name: "Cine-Novelist",
    kicker: "Narrative architecture",
    summary:
      "Character, structure, theme, and scene — stories that can withstand revision.",
    description:
      "Cine-Novelist helps writers develop character, structure, theme, scene progression, and cinematic coherence. It supports the construction of stories that can withstand revision rather than merely generate pages. Coverage, production logic, and continuity sit beside the page.",
    points: [
      "Story development with genre, plausibility, and coherence in view.",
      "Script coverage that says what needs fixing — and whether it is worth fixing.",
      "Production intelligence: breakdowns, budget pressure, continuity risk.",
      "Built for writers, directors, producers, and showrunners.",
    ],
    status: "live",
    statusLabel: "Live",
    marketingUrl: "https://cinenovelist.com",
  },
  {
    slug: "carcounsel",
    shortName: "CarCounsel",
    name: "CarCounsel",
    kicker: "Automotive guidance",
    summary:
      "Understand the vehicle, compare the repair, and ask a more precise question of the person who will do the work.",
    description:
      "CarCounsel helps users understand vehicle issues, compare repair options, organise records, and prepare more precise questions for mechanics, insurers, dealers, or advisers. It supports informed decisions without replacing qualified expertise.",
    points: [
      "Diagnostics from symptoms, records, images, or sound.",
      "Repair options compared, not merely listed.",
      "Ownership, buying, and selling decisions held to the same standard.",
      "Does not replace a licensed technician.",
    ],
    status: "forthcoming",
    statusLabel: "Forthcoming",
  },
];

export const FEATURED = APPS.filter((app) => app.featured);
export const SUITE = APPS.filter((app) => !app.featured);

export function getApp(slug: string) {
  return APPS.find((app) => app.slug === slug);
}

export function workPageCopy(slug: string) {
  return Object.values(PAGE_COPY).find((page) => page.path === `/work/${slug}`);
}

export function pageHead(title: string, description?: string, path = "/") {
  const canonical = canonicalUrl(path);
  const fullTitle = title.includes("FIA Labs")
    ? title
    : path === "/"
      ? PAGE_COPY.home.title
      : `${title} — FIA Labs`;
  const robots = robotsForHost();
  return {
    meta: [
      { title: fullTitle },
      ...(description
        ? [{ name: "description" as const, content: description }]
        : []),
      { name: "robots" as const, content: robots },
      { property: "og:title" as const, content: fullTitle },
      ...(description
        ? [{ property: "og:description" as const, content: description }]
        : []),
      { property: "og:url" as const, content: canonical },
      { property: "og:image" as const, content: OG_IMAGE },
      { property: "og:type" as const, content: "website" },
      { property: "og:site_name" as const, content: "FIA Labs" },
      { name: "twitter:card" as const, content: "summary_large_image" },
      { name: "twitter:title" as const, content: fullTitle },
      ...(description
        ? [{ name: "twitter:description" as const, content: description }]
        : []),
      { name: "twitter:image" as const, content: OG_IMAGE },
    ],
    links: [{ rel: "canonical" as const, href: canonical }],
  };
}

export const ARTICLES = [
  {
    title: "Most AI Systems Cannot Tell the Difference Between Truth and Plausibility",
    dek: "AI systems often optimise for plausible continuation, not justified belief.",
    href: "https://federatedintel.substack.com/p/most-ai-systems-cannot-tell-the-difference",
  },
  {
    title: "AI Cannot Seek Truth Without Philosophy",
    dek: "Truth-seeking AI requires more than prediction; it requires a theory of truth, evidence, and judgment.",
    href: "https://federatedintel.substack.com/p/ai-cannot-seek-truth-without-philosophy",
  },
  {
    title: "Truth Infrastructure and the Future of Institutional AI",
    dek: "Why truth-seeking systems require a different architecture.",
    href: "https://federatedintel.substack.com/p/truth-infrastructure-and-the-future",
  },
  {
    title: "When Algorithms Inherit a Thin Theory of Speech",
    dek: "Algorithmic visibility can reshape speech without formally banning it.",
    href: "https://federatedintel.substack.com/p/when-algorithms-inherit-a-thin-theory",
  },
  {
    title: "AI Governance Will Be Judged by Evidentiary Survivability",
    dek: "The future test of AI governance is whether consequential decisions can be reconstructed and defended.",
    href: "https://federatedintel.substack.com/p/ai-governance-will-be-judged-by-evidentiary",
  },
] as const;

export const PRINCIPLES = [
  {
    index: "01",
    title: "Federated specialists",
    body: "Eight expert systems, each with a domain, a posture, and a refusal to pretend competence it does not have. They do not collapse into a single general model wearing eight hats.",
  },
  {
    index: "02",
    title: "Dual engines",
    body: "A generation engine proposes. A symbolic engine tests. The second pass is not a style. It is the difference between a fluent paragraph and a claim that can survive inspection.",
  },
  {
    index: "03",
    title: "Symbolic arbitration",
    body: "Logic trees, domain rules, and precedent sit between the experts. Arbitration is how a federated system refuses a plausible answer that the record will not bear.",
  },
  {
    index: "04",
    title: "Sequential reasoning",
    body: "Walk the problem in order. Show how the conclusion was reached. If the working cannot be shown, the answer is not ready for high-consequence use.",
  },
  {
    index: "05",
    title: "Evidence, inference, gap",
    body: "What the record establishes, what may reasonably be drawn from it, and what is absent stay on different lines. A plausible reading is not a finding.",
  },
  {
    index: "06",
    title: "Human judgment remains the authority",
    body: "The systems support a professional desk. They do not replace counsel, a physician, a priest, a CFO, or a mechanic. The person in the chair decides.",
  },
] as const;

export const VOICES = [
  {
    quote:
      "LIA has become an important part of my work life and has substantially improved my productivity. It provides quick access to relevant information, helps navigate complex legislative and governance matters, and has been particularly valuable in preparing professional, well-structured documents.",
    name: "Anne Ryan",
    role: "Councillor, City of Busselton",
  },
  {
    quote:
      "Within a remarkably short time, LIA identified numerous legal and procedural irregularities that had previously gone unnoticed. The clarity and precision of her analysis significantly strengthened my position.",
    name: "John Button",
    role: "Wrongful-conviction advocate",
  },
] as const;

export const FIA_PLAN = {
  name: "FIA Plan",
  kicker: "The house seat",
  price: "$50",
  period: "month",
  cta: "Subscribe",
  active: "Active",
  footerFact: "1,000 credits / period · Federation included",
  blurb:
    "The house seat for FIA Labs. One plan for the suite: law (LIA), medical research (MIA), finance (CFO Sentinel), strategy (ExecMind), brand and marketing (Brandium), ethics and philosophy (Aquinian Studio), film and narrative (Cine-Novelist).",
  deskScope:
    "You work at the desk that owns the question. Files and conversations stay on that desk. When a matter needs another discipline, you send an FIA Brief — a packet you authorise — and read the reply. Nothing else is shared.",
  credits:
    "Includes 1,000 credits each billing period, usable on any shipped desk. Extra credit packs work across the suite and do not expire. You pay for what you consume after the included allotment.",
  alternative:
    "FIA Plan is an alternative to a single-desk seat, not an extra charge on top of Operator, Counsel, or Chambers.",
} as const;

export const FAQS = [
  {
    id: "what-is-fia-labs",
    q: "What is FIA Labs?",
    a: "FIA Labs is a DBA of Federated Intel AI LLC, a privately owned company in Washington, D.C., wholly owned by Unison Pictures Pty Ltd. We build expert AI systems for high-consequence professional work. Five desks are in production: Legal Intel (LIA Pro), Aquinian Studio, Medical Intel (MIA Pro), CFO Sentinel, and Cine-Novelist. Brandium, ExecMind, and CarCounsel are not public until they meet the same standard.",
  },
  {
    id: "fia-plan",
    q: "What is FIA Plan?",
    a: `${FIA_PLAN.blurb} It entitles the account to the shipped FIA Labs suite and turns Federation on. ${FIA_PLAN.alternative} ${FIA_PLAN.price}/${FIA_PLAN.period}.`,
  },
  {
    id: "federation-fia-brief",
    q: "What is Federation — and what is an FIA Brief?",
    a: `${FIA_PLAN.deskScope} Only authorised FIA Briefs cross desks.`,
  },
  {
    id: "credits",
    q: "How do credits and packs work?",
    a: FIA_PLAN.credits,
  },
  {
    id: "desk-seats",
    q: "How does FIA Plan relate to a desk seat?",
    a: `${FIA_PLAN.alternative} Operator, Counsel, and Chambers remain single-desk seats. FIA Plan is the other choice: the house seat for the shipped suite, with Federation on.`,
  },
  {
    id: "federated",
    q: "What does “federated” mean here?",
    a: "Not a single general model asked to impersonate eight professions. A federation of specialist systems, each with a domain, collaborating under arbitration. The architecture is built so that a conclusion can be cross-checked rather than merely restated with confidence.",
  },
  {
    id: "symbolic-arbitration",
    q: "What is symbolic arbitration?",
    a: "A second pass over a proposed answer using logic, domain rules, and precedent. It is how the system distinguishes a fluent continuation from a claim the record will support. Sequential reasoning then shows the steps.",
  },
  {
    id: "where-to-work",
    q: "Where do I actually work?",
    a: "Legal work lives at legalintel.ai — open the desk at pro.legalintel.ai. Theological and philosophical work lives at aquinian.com — open the studio at studio.aquinian.com. Medical work lives at medicalintel.org — open the desk at mia.medicalintel.org. CFO Sentinel is at cfosentinel.pro, and Cine-Novelist at cinenovelist.com. Each desk has its own domain. FIA Plan is the house seat for the shipped suite — an alternative to a single-desk seat on Operator, Counsel, or Chambers.",
  },
  {
    id: "forthcoming",
    q: "What about Brandium, ExecMind, and CarCounsel?",
    a: "They belong to the federation and are named on this site. They are not public, not for sale, and not offered as chatbots. A desk ships when it can show working. FIA Plan already names Brandium and ExecMind in the suite; credits apply on any shipped desk.",
  },
  {
    id: "training",
    q: "Do you train on my files?",
    a: "No. We do not train our models on your data. Session material is handled under the Privacy Policy. Legal Intel and Medical Intel keep files on the matter they belong to. Aquinian scopes saved work to the signed-in account. Conversations and files stay per desk; only authorised FIA Briefs cross desks.",
  },
  {
    id: "advice",
    q: "Is this a substitute for professional advice?",
    a: "No. The apps are for informational, educational, and research use. They do not replace legal, medical, financial, pastoral, or mechanical advice. Outputs can be wrong. You are responsible for how they are used.",
  },
] as const;

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${ORIGIN}/#org`,
      name: "FIA Labs",
      legalName: "Federated Intel AI LLC",
      alternateName: ["Federated Intel AI", "FIA"],
      url: ORIGIN,
      email: "support@federatedintel.ai",
      description: LAB.description,
      slogan: LAB.tagline,
      logo: {
        "@type": "ImageObject",
        url: `${ORIGIN}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${ORIGIN}/logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington",
        addressRegion: "DC",
        addressCountry: "US",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Unison Pictures Pty Ltd",
      },
      sameAs: [
        "https://fia-labs.com",
        "https://federatedintel.substack.com",
        "https://legalintel.ai",
        "https://medicalintel.org",
        "https://aquinian.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${ORIGIN}/#site`,
      url: ORIGIN,
      name: "FIA Labs",
      description: LAB.description,
      publisher: { "@id": `${ORIGIN}/#org` },
      inLanguage: "en",
    },
  ],
};

/** Desk page only. No Offer / price — LIA Pro seats live on legalintel.ai. */
export const LIA_SOFTWARE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://legalintel.ai/#app",
  name: "LIA Pro",
  alternateName: ["LegalIntel", "Legal Intel"],
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://legalintel.ai",
  description:
    "A governed reasoning desk for legal and forensic work. Evidence, inference, and gap stay distinct.",
  publisher: { "@id": `${ORIGIN}/#org` },
};

/** Desk page only. No Offer / price — MIA Pro seats live on medicalintel.org. */
export const MIA_SOFTWARE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://medicalintel.org/#app",
  name: "MIA Pro",
  alternateName: ["MedicalIntel", "Medical Intel"],
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: "https://medicalintel.org",
  description:
    "A medical AI research desk for literature, biotechnology, and the medico-legal file. Not medical advice.",
  publisher: { "@id": `${ORIGIN}/#org` },
};

export const COMPANY_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${ORIGIN}/company#faq`,
  url: `${ORIGIN}/company`,
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
