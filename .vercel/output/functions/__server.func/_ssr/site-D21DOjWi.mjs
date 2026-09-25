//#region node_modules/.nitro/vite/services/ssr/assets/site-D21DOjWi.js
var CANONICAL_ORIGIN = "https://federatedintel.ai";
var INDEX_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1";
var NOINDEX_ROBOTS = "noindex, nofollow";
var OG_IMAGE = `${CANONICAL_ORIGIN}/og.jpg`;
var PRODUCTION_HOSTS = /* @__PURE__ */ new Set(["federatedintel.ai", "www.federatedintel.ai"]);
function hostnameFromHostHeader(header) {
	return String(header ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
}
function isProductionHost(host) {
	return PRODUCTION_HOSTS.has(hostnameFromHostHeader(host));
}
/** Unknown SSR host stays indexable so production is never noindexed by accident. */
function robotsForHost(host) {
	if (typeof host === "string" && host.length > 0) return isProductionHost(host) ? INDEX_ROBOTS : NOINDEX_ROBOTS;
	if (typeof window !== "undefined") return isProductionHost(window.location.hostname) ? INDEX_ROBOTS : NOINDEX_ROBOTS;
	return INDEX_ROBOTS;
}
function canonicalUrl(path) {
	const normalized = path.startsWith("/") ? path : `/${path}`;
	if (normalized === "/") return `${CANONICAL_ORIGIN}/`;
	return `${CANONICAL_ORIGIN}${normalized.replace(/\/+$/, "")}`;
}
var ORIGIN = "https://federatedintel.ai";
var PAGE_COPY = {
	home: {
		title: "FIA Labs — Federated Intel AI",
		description: "Expert systems for high-consequence work. Seven live Pro desks: Legal Intel, Medical Intel, Brandium, CFO Sentinel, ExecMind, Aquinian Studio, and Cine-Novelist. A record of how the answer was reached.",
		path: "/"
	},
	work: {
		title: "The desks — FIA Labs",
		description: "FIA Plan is the house seat for the suite — one plan, Federation included. Seven live Pro desks. Conversations, files, matters, and memory stay on the desk that owns them. Only authorised FIA Briefs cross desks.",
		path: "/work"
	},
	lia: {
		title: "LegalIntel (LIA Pro) — FIA Labs",
		description: "A governed reasoning desk for legal and forensic work. Evidence, inference and gap stay distinct. Not legal advice. Open the desk at pro.legalintel.ai.",
		path: "/work/lia"
	},
	aquinian: {
		title: "Aquinian Studio — FIA Labs",
		description: "Theological and philosophical work at the studio. Open the studio at studio.aquinian.com.",
		path: "/work/aquinian"
	},
	mia: {
		title: "Medical Intel (MIA Pro) — FIA Labs",
		description: "A medical AI research desk for literature, biotechnology, and the medico-legal file. Not medical advice. Human judgment remains the authority. Open the desk at mia.medicalintel.org.",
		path: "/work/mia"
	},
	brandium: {
		title: "Brandium Pro — FIA Labs",
		description: "Positioning, creative strategy, and acquisition — governed by the numbers that constrain growth. Open Brandium at brandium.pro.",
		path: "/work/brandium"
	},
	cfoSentinel: {
		title: "CFO Sentinel — FIA Labs",
		description: "Cash, margins, runway, and downside — where capital is created, consumed, or placed at risk. Open CFO Sentinel at cfosentinel.pro.",
		path: "/work/cfo-sentinel"
	},
	execmind: {
		title: "ExecMind — FIA Labs",
		description: "Frame the decision, challenge the assumption, compare the options, and write down why. Open ExecMind at execmind.app.",
		path: "/work/execmind"
	},
	cineNovelist: {
		title: "Cine-Novelist — FIA Labs",
		description: "Character, structure, theme, and scene — stories that can withstand revision. Open Cine-Novelist at cinenovelist.com.",
		path: "/work/cine-novelist"
	},
	company: {
		title: "Company — FIA Labs",
		description: "FIA Labs is a DBA of Federated Intel AI LLC, Washington, D.C. FIA Plan is the house seat for the suite. Seven live Pro desks. Human judgment remains the authority.",
		path: "/company"
	},
	contact: {
		title: "Contact — FIA Labs",
		description: "Contact FIA Labs. Legal work lives at legalintel.ai. Medical work lives at medicalintel.org. Theological work lives at aquinian.com. The full suite is on Work.",
		path: "/contact"
	}
};
var LAB = {
	name: "FIA Labs",
	legalName: "Federated Intel AI LLC",
	dba: "FIA Labs",
	owner: "Unison Pictures Pty Ltd",
	city: "Washington, D.C.",
	country: "USA",
	tagline: "We don’t just predict outcomes. We reason them.",
	slogan: "7 Experts. 2 Engines. 1 Ethical Future.",
	description: "FIA Labs — Federated Intelligence Architecture — is the parent lab for seven live Pro desks. Not an eighth app. fia-labs.com redirects here.",
	email: "support@federatedintel.ai",
	privacyEmail: "privacy@federatedintel.ai",
	legalEmail: "legal@federatedintel.ai",
	substack: "https://federatedintel.substack.com"
};
var NAV = [
	{
		href: "/work",
		label: "Work",
		index: "01"
	},
	{
		href: "/method",
		label: "Method",
		index: "02"
	},
	{
		href: "/research",
		label: "Research",
		index: "03"
	},
	{
		href: "/africa",
		label: "Africa",
		index: "04"
	},
	{
		href: "/company",
		label: "Company",
		index: "05"
	}
];
/** Live Pro hosts — the primary “Open the desk” destination. */
var DESK_HOSTS = {
	lia: "https://pro.legalintel.ai",
	mia: "https://mia.medicalintel.org",
	brandium: "https://brandium.pro",
	"cfo-sentinel": "https://cfosentinel.pro",
	execmind: "https://execmind.app",
	aquinian: "https://studio.aquinian.com",
	"cine-novelist": "https://cinenovelist.com"
};
/** Public marketing sites. Shown only when they differ from the Pro host. */
var MARKETING_HOSTS = {
	lia: "https://legalintel.ai",
	mia: "https://medicalintel.org",
	brandium: "https://brandium.pro",
	"cfo-sentinel": "https://cfosentinel.pro",
	execmind: "https://execmind.app",
	aquinian: "https://aquinian.com",
	"cine-novelist": "https://cinenovelist.com"
};
function deskOpenLabel(app) {
	return app.slug === "aquinian" ? "Open the studio" : "Open the desk";
}
function marketingHostLabel(url) {
	return url.replace(/^https:\/\//, "").replace(/\/$/, "");
}
function separateMarketingUrl(app) {
	if (app.marketingUrl === app.deskUrl) return void 0;
	return app.marketingUrl;
}
var APPS = [
	{
		slug: "lia",
		shortName: "LIA Pro",
		name: "Legal Intel",
		kicker: "Governed legal reasoning",
		summary: "A desk for the file in front of you. Evidence, inference, and gap stay on different lines.",
		description: "LIA Pro — Legal Intel — is a governed reasoning desk for legal and forensic work. It is not a chatbot for brainstorming, and it is not legal advice. Review evidence, test competing interpretations, identify gaps, and preserve the reasoning behind important decisions. Human judgment remains the authority.",
		points: [
			"Conversations for testing an idea; matters for building a file.",
			"The ledger classifies material as evidence, inference, or gap.",
			"Show working for the reconstruction, the counter-reading, and what a conclusion depends on.",
			"Built for litigation, forensic and medico-legal work, and wrongful-justice review."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS.lia,
		deskUrl: DESK_HOSTS.lia,
		featured: true
	},
	{
		slug: "mia",
		shortName: "MIA Pro",
		name: "Medical Intel",
		kicker: "Medical research, kept on the record",
		summary: "A desk for literature, biotechnology, and the medico-legal file. Evidence, inference, and gap stay distinct.",
		description: "MIA Pro — Medical Intel — is a medical AI research desk for literature, biotechnology, and medico-legal work. It is not a chatbot for brainstorming, and it is not medical advice. It does not replace clinical judgment. Review sources, test competing readings, identify gaps, and preserve the reasoning behind a finding. Human judgment remains the authority.",
		points: [
			"Conversations for testing an idea; matters for building a file.",
			"Separates what a source establishes from what it merely asserts.",
			"Built for biomedical literature, biotechnology, and medico-legal review.",
			"Does not diagnose, treat, or replace a licensed clinician."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS.mia,
		deskUrl: DESK_HOSTS.mia,
		featured: true
	},
	{
		slug: "brandium",
		shortName: "Brandium Pro",
		name: "Brandium",
		kicker: "Growth under unit economics",
		summary: "Positioning, creative strategy, and acquisition — governed by the numbers that actually constrain growth.",
		description: "Brandium connects positioning, creative strategy, acquisition economics, and capital discipline. It helps organisations identify the real constraint, test the numbers, and avoid scaling fragile growth.",
		points: [
			"Finds the constraint before amplifying the story.",
			"Holds creative claims against unit economics.",
			"Built for founders, operators, and investors who refuse narrative distortion.",
			"A strategist, not a content mill."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS.brandium,
		deskUrl: DESK_HOSTS.brandium,
		featured: true
	},
	{
		slug: "cfo-sentinel",
		shortName: "CFO Sentinel",
		name: "CFO Sentinel",
		kicker: "Financial intelligence",
		summary: "Cash, margins, runway, and downside — where capital is created, consumed, or placed at risk.",
		description: "CFO Sentinel analyses cash flow, margins, forecasts, working capital, and downside exposure. It gives decision-makers a clearer view of where capital is being created, consumed, or placed at risk — without replacing a finance function.",
		points: [
			"Runway, allocation, and working-capital pressure in one reading.",
			"Downside exposure treated as a first-class object, not a footnote.",
			"Built for operators and boards who need a defensible financial picture.",
			"Does not issue investment advice."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS["cfo-sentinel"],
		deskUrl: DESK_HOSTS["cfo-sentinel"]
	},
	{
		slug: "execmind",
		shortName: "ExecMind",
		name: "ExecMind",
		kicker: "Structured decision support",
		summary: "Frame the decision, challenge the assumption, compare the options, and write down why.",
		description: "ExecMind helps executives frame difficult decisions, challenge assumptions, compare strategic options, and document the basis for action. Designed for leadership environments where clarity and accountability are essential.",
		points: [
			"Forces the question into a form that can be inspected.",
			"Surfaces hidden premises before a decision is taken.",
			"Documents the basis for action, not only the action itself.",
			"A thinking partner for the room — not a replacement for it."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS.execmind,
		deskUrl: DESK_HOSTS.execmind
	},
	{
		slug: "aquinian",
		shortName: "Aquinian",
		name: "Aquinian Studio",
		kicker: "A virtual Thomistic intellect",
		summary: "Reason after the manner of Aquinas, in fidelity to the Thomistic tradition.",
		description: "Aquinian Studio is a virtual Thomistic intellect for theology, philosophy, doctrine, natural law, and cultural analysis. It is not a generic chatbot dressed in classical language. It is structured around Thomistic categories, scholastic form, an authority hierarchy, no-fabrication discipline, and verification before citation.",
		points: [
			"Conversation, disputation, doctrine check, natural law, cultural diagnosis, and talk/article form.",
			"More than fifty modern languages, plus Latin, Ancient Greek, Biblical Hebrew, and Biblical Aramaic.",
			"Refuses to fabricate quotations, citations, or attributions.",
			"An intellectual formation tool — not an ecclesial authority or a substitute for counsel."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS.aquinian,
		deskUrl: DESK_HOSTS.aquinian,
		featured: true
	},
	{
		slug: "cine-novelist",
		shortName: "Cine-Novelist",
		name: "Cine-Novelist",
		kicker: "Narrative architecture",
		summary: "Character, structure, theme, and scene — stories that can withstand revision.",
		description: "Cine-Novelist helps writers develop character, structure, theme, scene progression, and cinematic coherence. It supports the construction of stories that can withstand revision rather than merely generate pages. Coverage, production logic, and continuity sit beside the page.",
		points: [
			"Story development with genre, plausibility, and coherence in view.",
			"Script coverage that says what needs fixing — and whether it is worth fixing.",
			"Production intelligence: breakdowns, budget pressure, continuity risk.",
			"Built for writers, directors, producers, and showrunners."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: MARKETING_HOSTS["cine-novelist"],
		deskUrl: DESK_HOSTS["cine-novelist"]
	}
];
APPS.filter((app) => app.featured);
APPS.filter((app) => !app.featured);
APPS.filter((app) => app.status === "live");
function getApp(slug) {
	return APPS.find((app) => app.slug === slug);
}
function workPageCopy(slug) {
	return Object.values(PAGE_COPY).find((page) => page.path === `/work/${slug}`);
}
function pageHead(title, description, path = "/") {
	const canonical = canonicalUrl(path);
	const fullTitle = title.includes("FIA Labs") ? title : path === "/" ? PAGE_COPY.home.title : `${title} — FIA Labs`;
	const robots = robotsForHost();
	return {
		meta: [
			{ title: fullTitle },
			...description ? [{
				name: "description",
				content: description
			}] : [],
			{
				name: "robots",
				content: robots
			},
			{
				property: "og:title",
				content: fullTitle
			},
			...description ? [{
				property: "og:description",
				content: description
			}] : [],
			{
				property: "og:url",
				content: canonical
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "FIA Labs"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			...description ? [{
				name: "twitter:description",
				content: description
			}] : [],
			{
				name: "twitter:image",
				content: OG_IMAGE
			}
		],
		links: [{
			rel: "canonical",
			href: canonical
		}]
	};
}
var ARTICLES = [
	{
		title: "Most AI Systems Cannot Tell the Difference Between Truth and Plausibility",
		dek: "AI systems often optimise for plausible continuation, not justified belief.",
		href: "https://federatedintel.substack.com/p/most-ai-systems-cannot-tell-the-difference"
	},
	{
		title: "AI Cannot Seek Truth Without Philosophy",
		dek: "Truth-seeking AI requires more than prediction; it requires a theory of truth, evidence, and judgment.",
		href: "https://federatedintel.substack.com/p/ai-cannot-seek-truth-without-philosophy"
	},
	{
		title: "Truth Infrastructure and the Future of Institutional AI",
		dek: "Why truth-seeking systems require a different architecture.",
		href: "https://federatedintel.substack.com/p/truth-infrastructure-and-the-future"
	},
	{
		title: "When Algorithms Inherit a Thin Theory of Speech",
		dek: "Algorithmic visibility can reshape speech without formally banning it.",
		href: "https://federatedintel.substack.com/p/when-algorithms-inherit-a-thin-theory"
	},
	{
		title: "AI Governance Will Be Judged by Evidentiary Survivability",
		dek: "The future test of AI governance is whether consequential decisions can be reconstructed and defended.",
		href: "https://federatedintel.substack.com/p/ai-governance-will-be-judged-by-evidentiary"
	}
];
var PRINCIPLES = [
	{
		index: "01",
		title: "Federated specialists",
		body: "Seven expert systems, each with a domain, a posture, and a refusal to pretend competence it does not have. They do not collapse into a single general model wearing seven hats."
	},
	{
		index: "02",
		title: "Dual engines",
		body: "A generation engine proposes. A symbolic engine tests. The second pass is not a style. It is the difference between a fluent paragraph and a claim that can survive inspection."
	},
	{
		index: "03",
		title: "Symbolic arbitration",
		body: "Logic trees, domain rules, and precedent sit between the experts. Arbitration is how a federated system refuses a plausible answer that the record will not bear."
	},
	{
		index: "04",
		title: "Sequential reasoning",
		body: "Walk the problem in order. Show how the conclusion was reached. If the working cannot be shown, the answer is not ready for high-consequence use."
	},
	{
		index: "05",
		title: "Evidence, inference, gap",
		body: "What the record establishes, what may reasonably be drawn from it, and what is absent stay on different lines. A plausible reading is not a finding."
	},
	{
		index: "06",
		title: "Human judgment remains the authority",
		body: "The systems support a professional desk. They do not replace counsel, a physician, a priest, or a CFO. Specialists, not a generalist. The person in the chair decides."
	}
];
var VOICES = [{
	quote: "LIA has become an important part of my work life and has substantially improved my productivity. It provides quick access to relevant information, helps navigate complex legislative and governance matters, and has been particularly valuable in preparing professional, well-structured documents.",
	name: "Anne Ryan",
	role: "Councillor, City of Busselton"
}, {
	quote: "Within a remarkably short time, LIA identified numerous legal and procedural irregularities that had previously gone unnoticed. The clarity and precision of her analysis significantly strengthened my position.",
	name: "John Button",
	role: "Wrongful-conviction advocate"
}];
var FIA_PLAN = {
	name: "FIA Plan",
	kicker: "The house seat",
	price: "$50",
	period: "month",
	cta: "Subscribe",
	active: "Active",
	footerFact: "1,000 credits / period · one FIA Tank · Federation included",
	blurb: "The house seat for FIA Labs. One plan for the suite: law (LIA), medical research (MIA), finance (CFO Sentinel), strategy (ExecMind), brand and marketing (Brandium), ethics and philosophy (Aquinian Studio), film and narrative (Cine-Novelist).",
	deskScope: "You work at the desk that owns the question. Conversations, files, matters, and memory stay on that desk. Rooms are not shared. When a matter needs another discipline, you send an FIA Brief — a packet you authorise — and read the reply. Nothing else is shared.",
	credits: "Includes 1,000 credits each billing period across the suite, held in one shared FIA Tank. Extra credit packs do not expire. Shared credits and one tank are the product intent — rooms stay separate.",
	alternative: "FIA Plan is an alternative to a single-desk seat, not an extra charge on top of Operator, Counsel, or Chambers."
};
var FAQS = [
	{
		id: "what-is-fia-labs",
		q: "What is FIA Labs?",
		a: "FIA Labs is a DBA of Federated Intel AI LLC, a privately owned company in Washington, D.C., wholly owned by Unison Pictures Pty Ltd. FederatedIntel / FIA Labs is the parent — Federated Intelligence Architecture — not an eighth app. fia-labs.com redirects to federatedintel.ai. We build specialist AI systems for high-consequence professional work. Seven Pro desks are live: Legal Intel (LIA Pro), Medical Intel (MIA Pro), Brandium, CFO Sentinel, ExecMind, Aquinian Studio, and Cine-Novelist."
	},
	{
		id: "fia-plan",
		q: "What is FIA Plan?",
		a: `${FIA_PLAN.blurb} It entitles the account to the live FIA Labs suite and turns Federation on. ${FIA_PLAN.alternative} ${FIA_PLAN.price}/${FIA_PLAN.period}.`
	},
	{
		id: "federation-fia-brief",
		q: "What is Federation — and what is an FIA Brief?",
		a: `${FIA_PLAN.deskScope} Only authorised FIA Briefs cross desks.`
	},
	{
		id: "fia-tank",
		q: "What is the FIA Tank?",
		a: "One shared FIA Tank on the house seat. FIA Plan includes 1,000 credits each period across the suite. Extra credit packs do not expire. Shared credits and one tank are the product intent. Rooms stay separate: conversations, files, matters, and memory are not shared across desks."
	},
	{
		id: "credits",
		q: "How do credits and packs work?",
		a: FIA_PLAN.credits
	},
	{
		id: "desk-seats",
		q: "How does FIA Plan relate to a desk seat?",
		a: `${FIA_PLAN.alternative} Operator, Counsel, and Chambers remain single-desk seats. FIA Plan is the other choice: the house seat for the live suite, with Federation on.`
	},
	{
		id: "federated",
		q: "What does “federated” mean here?",
		a: "Not a single general model asked to impersonate seven professions. A federation of specialist systems, each with a domain, collaborating under arbitration. The architecture is built so that a conclusion can be cross-checked rather than merely restated with confidence."
	},
	{
		id: "symbolic-arbitration",
		q: "What is symbolic arbitration?",
		a: "A second pass over a proposed answer using logic, domain rules, and precedent. It is how the system distinguishes a fluent continuation from a claim the record will support. Sequential reasoning then shows the steps."
	},
	{
		id: "where-to-work",
		q: "Where do I actually work?",
		a: "Legal work lives at legalintel.ai — open the desk at pro.legalintel.ai. Medical work lives at medicalintel.org — open the desk at mia.medicalintel.org. Brandium is at brandium.pro. CFO Sentinel is at cfosentinel.pro. ExecMind is at execmind.app. Theological and philosophical work lives at aquinian.com — open the studio at studio.aquinian.com. Cine-Novelist is at cinenovelist.com. Each desk has its own domain. FIA Plan is the house seat for the live suite — an alternative to a single-desk seat on Operator, Counsel, or Chambers."
	},
	{
		id: "training",
		q: "Do you train on my files?",
		a: "No. We do not train our models on your data. Session material is handled under the Privacy Policy. Conversations, files, matters, and memory stay per desk; only authorised FIA Briefs cross desks."
	},
	{
		id: "advice",
		q: "Is this a substitute for professional advice?",
		a: "No. The desks are specialists, not a generalist. They are for informational, educational, and research use. LIA is not legal advice. MIA does not replace clinical judgment. Outputs can be wrong. You are responsible for how they are used. Human judgment remains the authority."
	}
];
var ORGANIZATION_JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "Organization",
		"@id": `${ORIGIN}/#org`,
		name: "FIA Labs",
		legalName: "Federated Intel AI LLC",
		alternateName: [
			"Federated Intel AI",
			"FederatedIntel",
			"FIA"
		],
		url: ORIGIN,
		email: "support@federatedintel.ai",
		description: LAB.description,
		slogan: LAB.tagline,
		logo: {
			"@type": "ImageObject",
			url: `${ORIGIN}/logo.png`,
			width: 512,
			height: 512
		},
		image: `${ORIGIN}/logo.png`,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Washington",
			addressRegion: "DC",
			addressCountry: "US"
		},
		parentOrganization: {
			"@type": "Organization",
			name: "Unison Pictures Pty Ltd"
		},
		sameAs: [
			"https://fia-labs.com",
			"https://federatedintel.substack.com",
			"https://legalintel.ai",
			"https://medicalintel.org",
			"https://brandium.pro",
			"https://cfosentinel.pro",
			"https://execmind.app",
			"https://aquinian.com",
			"https://cinenovelist.com"
		]
	}, {
		"@type": "WebSite",
		"@id": `${ORIGIN}/#site`,
		url: ORIGIN,
		name: "FIA Labs",
		description: LAB.description,
		publisher: { "@id": `${ORIGIN}/#org` },
		inLanguage: "en"
	}]
};
/** Desk page only. No Offer / price — LIA Pro seats live on legalintel.ai. */
var LIA_SOFTWARE_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"@id": "https://legalintel.ai/#app",
	name: "LIA Pro",
	alternateName: ["LegalIntel", "Legal Intel"],
	applicationCategory: "BusinessApplication",
	operatingSystem: "Web",
	url: "https://legalintel.ai",
	description: "A governed reasoning desk for legal and forensic work. Evidence, inference, and gap stay distinct. Not legal advice.",
	publisher: { "@id": `${ORIGIN}/#org` }
};
/** Desk page only. No Offer / price — MIA Pro seats live on medicalintel.org. */
var MIA_SOFTWARE_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"@id": "https://medicalintel.org/#app",
	name: "MIA Pro",
	alternateName: ["MedicalIntel", "Medical Intel"],
	applicationCategory: "HealthApplication",
	operatingSystem: "Web",
	url: "https://medicalintel.org",
	description: "A medical AI research desk for literature, biotechnology, and the medico-legal file. Not medical advice.",
	publisher: { "@id": `${ORIGIN}/#org` }
};
var COMPANY_FAQ_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"@id": `${ORIGIN}/company#faq`,
	url: `${ORIGIN}/company`,
	mainEntity: FAQS.map((item) => ({
		"@type": "Question",
		name: item.q,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.a
		}
	}))
};
//#endregion
export { pageHead as _, FIA_PLAN as a, workPageCopy as b, MIA_SOFTWARE_JSON_LD as c, PAGE_COPY as d, PRINCIPLES as f, marketingHostLabel as g, getApp as h, FAQS as i, NAV as l, deskOpenLabel as m, ARTICLES as n, LAB as o, VOICES as p, COMPANY_FAQ_JSON_LD as r, LIA_SOFTWARE_JSON_LD as s, APPS as t, ORGANIZATION_JSON_LD as u, robotsForHost as v, separateMarketingUrl as y };
