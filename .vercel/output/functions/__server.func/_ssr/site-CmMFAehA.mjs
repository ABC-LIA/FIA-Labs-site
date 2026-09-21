//#region node_modules/.nitro/vite/services/ssr/assets/site-CmMFAehA.js
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
		description: "Expert systems for high-consequence work. Six desks in production: Legal Intel, Aquinian Studio, Medical Intel, Brandium, CFO Sentinel, and Cine-Novelist. ExecMind and CarCounsel remain forthcoming. A record of how the answer was reached.",
		path: "/"
	},
	work: {
		title: "The desks — FIA Labs",
		description: "Legal Intel, Aquinian Studio, Medical Intel, Brandium, CFO Sentinel, and Cine-Novelist are in production. ExecMind and CarCounsel are not public until they meet the same standard.",
		path: "/work"
	},
	lia: {
		title: "LegalIntel (LIA Pro) — FIA Labs",
		description: "A governed reasoning desk for legal and forensic work. Evidence, inference and gap stay distinct. Open the desk at legalintel.ai.",
		path: "/work/lia"
	},
	aquinian: {
		title: "Aquinian Studio — FIA Labs",
		description: "Theological and philosophical work at the studio. Open it at aquinian.com.",
		path: "/work/aquinian"
	},
	mia: {
		title: "Medical Intel (MIA Pro) — FIA Labs",
		description: "A medical AI research desk for literature, biotechnology, and the medico-legal file. Not medical advice. Human judgment remains the authority. Open the desk at medicalintel.org.",
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
	cineNovelist: {
		title: "Cine-Novelist — FIA Labs",
		description: "Character, structure, theme, and scene — stories that can withstand revision. Open Cine-Novelist at cinenovelist.com.",
		path: "/work/cine-novelist"
	},
	company: {
		title: "Company — FIA Labs",
		description: "FIA Labs is a DBA of Federated Intel AI LLC, Washington, D.C. Six desks in production. Human judgment remains the authority.",
		path: "/company"
	},
	contact: {
		title: "Contact — FIA Labs",
		description: "Contact FIA Labs. Legal work lives at legalintel.ai. Theological work lives at aquinian.com. Medical work lives at medicalintel.org.",
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
	slogan: "8 Experts. 2 Engines. 1 Ethical Future.",
	description: "FIA Labs builds expert AI systems for high-consequence work — law, medicine, theology, research, finance, and the rest of the professional desk.",
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
var APPS = [
	{
		slug: "lia",
		shortName: "LIA Pro",
		name: "Legal Intel",
		kicker: "Governed legal reasoning",
		summary: "A desk for the file in front of you. Evidence, inference, and gap stay on different lines.",
		description: "LIA Pro — Legal Intel — is a governed reasoning desk for legal and forensic work. It is not a chatbot for brainstorming. Review evidence, test competing interpretations, identify gaps, and preserve the reasoning behind important decisions. Human judgment remains the authority.",
		points: [
			"Conversations for testing an idea; matters for building a file.",
			"The ledger classifies material as evidence, inference, or gap.",
			"Show working for the reconstruction, the counter-reading, and what a conclusion depends on.",
			"Built for litigation, forensic and medico-legal work, and wrongful-justice review."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: "https://legalintel.ai",
		deskUrl: "https://pro.legalintel.ai",
		featured: true
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
		marketingUrl: "https://aquinian.com",
		deskUrl: "https://studio.aquinian.com",
		featured: true
	},
	{
		slug: "mia",
		shortName: "MIA Pro",
		name: "Medical Intel",
		kicker: "Medical research, kept on the record",
		summary: "A desk for literature, biotechnology, and the medico-legal file. Evidence, inference, and gap stay distinct.",
		description: "MIA Pro — Medical Intel — is a medical AI research desk for literature, biotechnology, and medico-legal work. It is not a chatbot for brainstorming, and it is not medical advice. Review sources, test competing readings, identify gaps, and preserve the reasoning behind a finding. Human judgment remains the authority.",
		points: [
			"Conversations for testing an idea; matters for building a file.",
			"Separates what a source establishes from what it merely asserts.",
			"Built for biomedical literature, biotechnology, and medico-legal review.",
			"Does not diagnose, treat, or replace a licensed clinician."
		],
		status: "live",
		statusLabel: "Live",
		marketingUrl: "https://medicalintel.org",
		deskUrl: "https://mia.medicalintel.org",
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
		marketingUrl: "https://cfosentinel.pro"
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
		marketingUrl: "https://brandium.pro"
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
		status: "forthcoming",
		statusLabel: "Forthcoming"
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
		marketingUrl: "https://cinenovelist.com"
	},
	{
		slug: "carcounsel",
		shortName: "CarCounsel",
		name: "CarCounsel",
		kicker: "Automotive guidance",
		summary: "Understand the vehicle, compare the repair, and ask a more precise question of the person who will do the work.",
		description: "CarCounsel helps users understand vehicle issues, compare repair options, organise records, and prepare more precise questions for mechanics, insurers, dealers, or advisers. It supports informed decisions without replacing qualified expertise.",
		points: [
			"Diagnostics from symptoms, records, images, or sound.",
			"Repair options compared, not merely listed.",
			"Ownership, buying, and selling decisions held to the same standard.",
			"Does not replace a licensed technician."
		],
		status: "forthcoming",
		statusLabel: "Forthcoming"
	}
];
var FEATURED = APPS.filter((app) => app.featured);
APPS.filter((app) => !app.featured);
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
		body: "Eight expert systems, each with a domain, a posture, and a refusal to pretend competence it does not have. They do not collapse into a single general model wearing eight hats."
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
		body: "The systems support a professional desk. They do not replace counsel, a physician, a priest, a CFO, or a mechanic. The person in the chair decides."
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
var FAQS = [
	{
		q: "What is FIA Labs?",
		a: "FIA Labs is a DBA of Federated Intel AI LLC, a privately owned company in Washington, D.C., wholly owned by Unison Pictures Pty Ltd. We build expert AI systems for high-consequence professional work. Six desks are in production: Legal Intel (LIA Pro), Aquinian Studio, Medical Intel (MIA Pro), Brandium, CFO Sentinel, and Cine-Novelist. ExecMind and CarCounsel are not public until they meet the same standard."
	},
	{
		q: "What does “federated” mean here?",
		a: "Not a single general model asked to impersonate eight professions. A federation of specialist systems, each with a domain, collaborating under arbitration. The architecture is built so that a conclusion can be cross-checked rather than merely restated with confidence."
	},
	{
		q: "What is symbolic arbitration?",
		a: "A second pass over a proposed answer using logic, domain rules, and precedent. It is how the system distinguishes a fluent continuation from a claim the record will support. Sequential reasoning then shows the steps."
	},
	{
		q: "Where do I actually work?",
		a: "Legal work lives at legalintel.ai — open the desk at pro.legalintel.ai. Theological and philosophical work lives at aquinian.com — open the studio at studio.aquinian.com. Medical work lives at medicalintel.org — open the desk at mia.medicalintel.org. Brandium is at brandium.pro, CFO Sentinel at cfosentinel.pro, and Cine-Novelist at cinenovelist.com. Each product has its own domain, accounts, and seats."
	},
	{
		q: "What about ExecMind and CarCounsel?",
		a: "They belong to the federation and are named on this site. They are not public, not for sale, and not offered as chatbots. A desk ships when it can show working."
	},
	{
		q: "Do you train on my files?",
		a: "No. We do not train our models on your data. Session material is handled under the Privacy Policy. Legal Intel and Medical Intel keep files on the matter they belong to. Aquinian scopes saved work to the signed-in account."
	},
	{
		q: "Is this a substitute for professional advice?",
		a: "No. The apps are for informational, educational, and research use. They do not replace legal, medical, financial, pastoral, or mechanical advice. Outputs can be wrong. You are responsible for how they are used."
	}
];
var ORGANIZATION_JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [{
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
			"https://aquinian.com"
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
	description: "A governed reasoning desk for legal and forensic work. Evidence, inference, and gap stay distinct.",
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
export { workPageCopy as _, FEATURED as a, MIA_SOFTWARE_JSON_LD as c, PAGE_COPY as d, PRINCIPLES as f, robotsForHost as g, pageHead as h, FAQS as i, NAV as l, getApp as m, ARTICLES as n, LAB as o, VOICES as p, COMPANY_FAQ_JSON_LD as r, LIA_SOFTWARE_JSON_LD as s, APPS as t, ORGANIZATION_JSON_LD as u };
