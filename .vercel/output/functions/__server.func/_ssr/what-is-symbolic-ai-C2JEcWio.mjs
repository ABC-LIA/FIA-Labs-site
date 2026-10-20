import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/what-is-symbolic-ai-C2JEcWio.js
var import_jsx_runtime = require_jsx_runtime();
var EYEBROW = "Research";
var H1 = "What is symbolic AI?";
var JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "Article",
		"headline": "What is symbolic AI?",
		"description": "A plain definition of symbolic AI, how it differs from neural AI, why expert systems still matter, and how FIA Labs pairs a generation engine with symbolic arbitration.",
		"url": "https://federatedintel.ai/what-is-symbolic-ai",
		"mainEntityOfPage": "https://federatedintel.ai/what-is-symbolic-ai",
		"inLanguage": "en",
		"datePublished": "2026-10-21",
		"dateModified": "2026-10-21",
		"author": {
			"@type": "Organization",
			"name": "FIA Labs",
			"url": "https://federatedintel.ai"
		},
		"publisher": {
			"@type": "Organization",
			"name": "FIA Labs",
			"url": "https://federatedintel.ai"
		},
		"about": {
			"@type": "Thing",
			"name": "What is symbolic AI?"
		}
	}, {
		"@type": "BreadcrumbList",
		"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"name": "FIA Labs",
			"item": "https://federatedintel.ai/"
		}, {
			"@type": "ListItem",
			"position": 2,
			"name": "What is symbolic AI?",
			"item": "https://federatedintel.ai/what-is-symbolic-ai"
		}]
	}]
};
var SECTIONS = [
	{ "p": ["Symbolic AI is the branch of artificial intelligence that represents knowledge as explicit symbols, facts and rules, and reaches conclusions by applying those rules in steps a person can follow. If a symbolic system concludes something, you can ask it why and get the chain of reasoning back."] },
	{
		"h": "A short history",
		"p": ["Symbolic AI was the dominant approach from the 1950s to the 1980s. Expert systems, such as programs that encoded a specialist's diagnostic rules, were its best-known commercial form. They were precise and explainable, but brittle: they knew only what had been written into them, and writing it was slow.", "Neural networks, and later large language models, took the opposite path. They learn patterns from very large amounts of data. They are flexible and fluent, but their reasons are not stored as rules, so a fluent answer can be unsupported."]
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
		"p": ["High-consequence work, in law, medicine, finance and governance, needs both. It needs the fluency to read a messy record, and it needs a conclusion that can be reconstructed and checked. Combining neural and symbolic methods is often called neuro-symbolic AI."]
	},
	{
		"h": "How FIA Labs uses symbolic AI",
		"p": ["FIA Labs builds seven specialist desks on one method. A generation engine proposes. A symbolic engine tests. We call the testing step symbolic arbitration: the proposal is checked against explicit rules for the domain, sequential reasoning is kept visible, and every answer keeps evidence, inference and gap apart.", "The rule is simple: a conclusion that cannot be reconstructed is not ready for this kind of work. Where the record does not support a statement, the desks mark a gap rather than fill it. Human judgment remains the authority."]
	}
];
function WhatIsSymbolicAiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: EYEBROW,
		title: H1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-5 py-12 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
					type: "application/ld+json",
					dangerouslySetInnerHTML: { __html: JSON.stringify(JSON_LD) }
				}),
				SECTIONS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					s.h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl tracking-tight",
						children: s.h
					}) : null,
					(s.p ?? []).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted",
						children: t
					}, t.slice(0, 48))),
					s.ul ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted",
						children: s.ul.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t }, t.slice(0, 48)))
					}) : null
				] }, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/method",
						className: "underline underline-offset-4",
						children: "See the method"
					})
				})
			]
		})
	});
}
//#endregion
export { WhatIsSymbolicAiPage as component };
