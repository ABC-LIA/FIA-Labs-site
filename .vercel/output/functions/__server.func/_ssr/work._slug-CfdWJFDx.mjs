import { A as getApp, S as MIA_SOFTWARE_JSON_LD, _ as LIA_SOFTWARE_JSON_LD, a as CFO_SENTINEL_SOFTWARE_JSON_LD, c as EXECMIND_SOFTWARE_JSON_LD, g as LIA_LINE, i as BRANDIUM_SOFTWARE_JSON_LD, n as AQUINIAN_SOFTWARE_JSON_LD, o as CINE_NOVELIST_SOFTWARE_JSON_LD, t as APPS } from "./site-DzHDP_Sq.mjs";
import { K as notFound, q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowLeft, o as ArrowUpRight, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Route, o as cn } from "./router-CtbgqIrj.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { t as FiaPlanDeskNote } from "./fia-plan-section-D4_xferH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CfdWJFDx.js
var import_jsx_runtime = require_jsx_runtime();
function ExternalLink({ href, children, className, quiet }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: cn("inline-flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-80", quiet ? "text-sm text-muted hover:text-fg" : "h-11 rounded-md bg-fg px-5 font-sans text-sm font-medium text-bg", className),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-3.5",
			"aria-hidden": "true"
		})]
	});
}
/**
* Single source of truth for product catalogue and work-page pricing.
*
* The data lives in product-metadata.json. The OpenAI feed CSV is generated
* from it by scripts/generate-openai-feed.mjs (wired into the production
* build). Update the JSON, then run the generator or the full build.
*/
var PRODUCT_METADATA = [
	{
		"slug": "lia",
		"itemId": "fia-lia-pro-monthly",
		"title": "LIA Pro – Legal Intel AI Monthly Subscription",
		"shortName": "LIA Pro",
		"monthlyPriceUsd": 29,
		"monthlyCredits": 1500,
		"starterCredits": 150,
		"imagePath": "images/lia-pro.jpg",
		"workPath": "/work/lia",
		"marketingUrl": "https://legalintel.ai",
		"brand": "LIA Pro",
		"productCategory": "Software > Professional Services > Legal AI",
		"description": "LIA Pro is a governed legal reasoning and evidence-analysis desk from FIA Labs for litigation, forensic, medico-legal and wrongful-justice work. It classifies material as evidence, inference or gap; supports Ask and Deep Review (independent dual-engine workflows); provides document and case review, authority verification, and Show working records. Digital Case Management and multi-user Chambers features are available on higher tiers or FIA Plan. Monthly subscription for one individual lawyer on a private desk includes 1,500 credits that reset each month. Extra non-expiring credit packs available. Sign in at pro.legalintel.ai. Not a law firm, solicitor or barrister. Outputs are not legal advice. Human judgment remains the authority.",
		"deskUrl": "https://pro.legalintel.ai"
	},
	{
		"slug": "mia",
		"itemId": "fia-mia-pro-monthly",
		"title": "Medical Intel AI (MIA) Monthly Subscription",
		"shortName": "MIA Pro",
		"monthlyPriceUsd": 29,
		"monthlyCredits": 1500,
		"starterCredits": 150,
		"imagePath": "images/mia-pro.jpg",
		"workPath": "/work/mia",
		"marketingUrl": "https://medicalintel.org",
		"brand": "Medical Intel AI",
		"productCategory": "Software > Professional Services > Medical Research AI",
		"description": "MIA Pro is a medical-literature and medico-legal research desk from FIA Labs. It reads attached papers, reports and exhibits; separates findings, inferences and gaps; supports Clinical Conservative and Research Expansion modes plus Deep Review. Monthly Research plan for individual users includes 1,500 credits that reset each month. Extra packs available. Sign in at mia.medicalintel.org. Not medical advice, not a clinician, does not diagnose or treat. Educational tool only. Human judgment remains the authority. Refuses dosing or care-access advice.",
		"deskUrl": "https://mia.medicalintel.org"
	},
	{
		"slug": "brandium",
		"itemId": "fia-brandium-monthly",
		"title": "Brandium Pro Monthly Subscription",
		"shortName": "Brandium Pro",
		"monthlyPriceUsd": 29,
		"monthlyCredits": 1200,
		"starterCredits": 150,
		"imagePath": "images/brandium.jpg",
		"workPath": "/work/brandium",
		"marketingUrl": "https://brandium.pro",
		"brand": "Brandium",
		"productCategory": "Software > Creative Services > Brand Strategy AI",
		"description": "Brandium is an AI brand strategy desk from FIA Labs that takes a creative brief through audience psychology, brand world, campaign concepts and campaign math. Dual creative and analytical engines reconcile outputs. Modes include Ask, Build, Campaign, Model, Review and Decide. Creates stills and short reels. Monthly Operator plan includes 1,200 credits. Extra packs available. Sign in at pro.brandium.pro. Will not invent missing numbers (price, LTV, CAC). Does not host or publish sites. Not financial advice."
	},
	{
		"slug": "cfo-sentinel",
		"itemId": "fia-cfo-sentinel-monthly",
		"title": "CFO Sentinel Pro Monthly Subscription",
		"shortName": "CFO Sentinel",
		"monthlyPriceUsd": 29,
		"monthlyCredits": 1500,
		"starterCredits": 150,
		"imagePath": "images/cfo-sentinel.jpg",
		"workPath": "/work/cfo-sentinel",
		"marketingUrl": "https://cfosentinel.pro",
		"brand": "CFO Sentinel",
		"productCategory": "Software > Professional Services > Finance AI",
		"description": "CFO Sentinel Pro is a financial-intelligence desk from FIA Labs for LBO models, board packs, diligence and cash analysis. It separates facts from assumptions, cash from EBITDA, and names jurisdiction. Supports Ask, Review and Deep Review with evidence ledger. Monthly Operator plan for one practitioner includes 1,500 credits. Extra packs available. Sign in at cfosentinel.pro. Not an audit, tax opinion, legal opinion or regulated investment recommendation. Human judgment remains the authority. Decision support only."
	},
	{
		"slug": "execmind",
		"itemId": "fia-execmind-monthly",
		"title": "ExecMind Pro Monthly Subscription",
		"shortName": "ExecMind",
		"monthlyPriceUsd": 39,
		"monthlyCredits": 1800,
		"starterCredits": 150,
		"imagePath": "images/execmind.jpg",
		"workPath": "/work/execmind",
		"marketingUrl": "https://execmind.app",
		"brand": "ExecMind",
		"productCategory": "Software > Professional Services > Executive Strategy AI",
		"description": "ExecMind is an institutional decision desk from FIA Labs for executives and board directors. It structures options, tests assumptions, drafts board papers and maintains an evidence ledger of known, unknown, assumed and derived items. Modes: Ask, Review, Deep. Monthly Principal plan includes 1,800 credits. Extra packs available. Sign in at execmind.app. Does not invent binding numbers. Not legal, financial or investment advice. Human judgment remains the authority."
	},
	{
		"slug": "aquinian",
		"itemId": "fia-aquinian-monthly",
		"title": "Aquinian Studio Monthly Subscription",
		"shortName": "Aquinian",
		"monthlyPriceUsd": 15,
		"monthlyCredits": 900,
		"starterCredits": 150,
		"imagePath": "images/aquinian.jpg",
		"workPath": "/work/aquinian",
		"marketingUrl": "https://aquinian.com",
		"brand": "Aquinian",
		"productCategory": "Software > Education > Theology and Philosophy AI",
		"description": "Aquinian Studio is an AI environment for disciplined inquiry in theology and philosophy, structured by the Thomistic method (distinction, objection, determination, verification). Supports Conversation, Disputation, Lecture, Investigate, Cultural Diagnosis and Talk/Article. Reads Latin, Ancient Greek, Biblical Hebrew and Aramaic. Monthly membership includes 900 credits. Extra packs available. Sign in at aquinian.com. Not an ecclesial authority. Outputs require user verification. Human judgment remains the authority.",
		"deskUrl": "https://studio.aquinian.com"
	},
	{
		"slug": "cine-novelist",
		"itemId": "fia-cine-novelist-monthly",
		"title": "Cine Novelist Monthly Subscription",
		"shortName": "Cine Novelist",
		"monthlyPriceUsd": 39,
		"monthlyCredits": 2e3,
		"starterCredits": 150,
		"imagePath": "images/cine-novelist.jpg",
		"workPath": "/work/cine-novelist",
		"marketingUrl": "https://cinenovelist.com",
		"brand": "Cine Novelist",
		"productCategory": "Software > Creative Services > Screenwriting AI",
		"description": "Cine Novelist is a screenplay and story desk from FIA Labs for writers and producers. It provides script coverage grounded in specific pages, story bibles, novel-to-screen outlines, and modes for development, coverage, performance, board and packaging. Monthly Writer plan includes 2,000 credits. Extra packs available. Sign in at pro.cinenovelist.com. The writer's judgment remains the authority. Does not rewrite against the grain or invent the picture."
	}
];
function getProductMeta(slug) {
	return PRODUCT_METADATA.find((p) => p.slug === slug);
}
function AppPage() {
	const { slug } = Route.useParams();
	const app = getApp(slug);
	if (!app) throw notFound();
	const meta = getProductMeta(slug);
	const index = APPS.findIndex((item) => item.slug === app.slug);
	const prev = APPS[(index - 1 + APPS.length) % APPS.length];
	const next = APPS[(index + 1) % APPS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			app.slug === "lia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: LIA_SOFTWARE_JSON_LD }) : null,
			app.slug === "mia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: MIA_SOFTWARE_JSON_LD }) : null,
			app.slug === "brandium" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: BRANDIUM_SOFTWARE_JSON_LD }) : null,
			app.slug === "cfo-sentinel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: CFO_SENTINEL_SOFTWARE_JSON_LD }) : null,
			app.slug === "execmind" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: EXECMIND_SOFTWARE_JSON_LD }) : null,
			app.slug === "aquinian" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: AQUINIAN_SOFTWARE_JSON_LD }) : null,
			app.slug === "cine-novelist" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: CINE_NOVELIST_SOFTWARE_JSON_LD }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work",
							className: "inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Work"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
								children: [
									String(index + 1).padStart(2, "0"),
									" · ",
									app.kicker
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: app.statusLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl leading-[1.1] md:text-6xl",
							children: app.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
							children: app.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								app.marketingUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									href: app.marketingUrl,
									children: app.slug === "lia" ? "Open LegalIntel" : app.slug === "aquinian" ? "Open Aquinian" : app.slug === "mia" ? "Open Medical Intel" : app.marketingUrl.replace("https://", "")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/method",
									className: "inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg",
									children: "How the method works"
								}),
								app.deskUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									href: app.deskUrl,
									quiet: true,
									children: app.slug === "aquinian" ? "Open the studio" : app.slug === "lia" ? "Open the Pro desk" : "Open the desk"
								}) : null,
								app.slug === "lia" ? LIA_LINE.products.filter((item) => item.name === "LIA SC" || item.name === "LIA Chambers").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									href: item.href,
									quiet: true,
									children: item.hrefLabel
								}, item.href)) : null
							]
						})
					]
				})
			}),
			meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, { meta }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.4fr_1fr] md:px-8 md:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "On the file"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-6",
						children: app.points.map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-fg/90",
								children: point
							})]
						}, point))
					})]
				})
			}),
			app.slug === "lia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiaLineSection, {}) : null,
			app.slug === "cine-novelist" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
							children: "Credit consumption"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-fg/90",
							children: "In an internal FIA Labs test, Cine Novelist completed professional coverage of a complex 131-page screenplay using approximately 20 credits. Actual credit consumption varies with document length, complexity and analytical mode. This observed result is not a guaranteed per-screenplay tariff."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
							children: "Every desk starts with 150 free starter credits, no card required."
						})
					]
				})
			}) : null,
			app.slug === "lia" || app.slug === "cine-novelist" || app.slug === "aquinian" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "Recognition"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-fg/90",
						children: [
							app.slug === "lia" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["LIA Pro — 2026 International AI Creator Award Finalist. Official gallery entry:", " "] }),
							app.slug === "cine-novelist" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Cine Novelist — 2026 International AI Creator Award Finalist. Official gallery entry:", " "] }),
							app.slug === "aquinian" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Aquinian was included in AICU editorial coverage of FIA Labs applications submitted to the 2026 International AI Creator Award. Official coverage:", " "] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: app.slug === "lia" ? "https://aicu.ai/award/2026/gallery/?w=26G26&lang=en" : app.slug === "cine-novelist" ? "https://aicu.ai/award/2026/gallery/?lang=en&w=26G27" : "https://aicu.ai/media/261111/en",
								target: "_blank",
								rel: "noreferrer",
								className: "text-fg underline underline-offset-4",
								children: app.slug === "aquinian" ? "AICU editorial" : "AICU gallery entry"
							}),
							app.slug !== "aquinian" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								". Editorial coverage of the three applications:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://aicu.ai/media/261111/en",
									target: "_blank",
									rel: "noreferrer",
									className: "text-fg underline underline-offset-4",
									children: "AICU media"
								}),
								".",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/news/fia-labs-aicu-2026-finalists",
									className: "text-fg underline underline-offset-4",
									children: "Corporate announcement"
								}),
								"."
							] })
						]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaPlanDeskNote, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2",
				"aria-label": "Adjacent systems",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: prev.slug },
					className: "bg-bg px-5 py-8 hover:bg-surface md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 inline-flex items-center gap-2 font-display text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), prev.shortName]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: next.slug },
					className: "bg-bg px-5 py-8 text-right hover:bg-surface md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 inline-flex items-center justify-end gap-2 font-display text-xl",
						children: [next.shortName, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})]
			})
		]
	});
}
function PricingSection({ meta }) {
	if (!meta) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
					children: "Entry plan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-baseline gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-3xl",
							children: [
								"$",
								meta.monthlyPriceUsd,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg text-muted",
									children: "/mo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [meta.monthlyCredits.toLocaleString(), " credits per month"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [meta.starterCredits, " free starter credits, no card"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [meta.deskUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						href: meta.deskUrl,
						children: "Open the desk"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						href: meta.marketingUrl,
						quiet: true,
						children: "Pricing and plans"
					})]
				})
			]
		})
	});
}
function LiaLineSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
					children: LIA_LINE.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-px bg-border sm:grid-cols-2",
					children: LIA_LINE.products.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-bg p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] text-subtle",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-xl",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: item.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								href: item.href,
								quiet: true,
								className: "mt-5",
								children: item.hrefLabel
							})
						]
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 max-w-2xl text-sm leading-relaxed text-muted",
					children: [
						"Plans and packs are on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LIA_LINE.pricingHref,
							target: "_blank",
							rel: "noreferrer",
							className: "text-fg underline underline-offset-4",
							children: LIA_LINE.pricingLabel
						}),
						", and on",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LIA_LINE.chambersPricingHref,
							target: "_blank",
							rel: "noreferrer",
							className: "text-fg underline underline-offset-4",
							children: LIA_LINE.chambersPricingLabel
						}),
						". ",
						LIA_LINE.pricingNote
					]
				})
			]
		})
	});
}
//#endregion
export { AppPage as component };
