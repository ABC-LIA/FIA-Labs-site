import { h as LAB, r as ARTICLES } from "./site-DzHDP_Sq.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-BE5vGznb.js
var import_jsx_runtime = require_jsx_runtime();
function ResearchPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "03 · Research",
		title: "Truth infrastructure.",
		dek: "AI governance begins with the question of truth: how systems distinguish evidence from inference, preserve uncertainty, and support human judgment in high-consequence domains.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-col gap-4 border border-border bg-surface p-6 md:flex-row md:items-center md:justify-between md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-relaxed text-muted",
						children: "Essays are published on Substack. Subscribe there for new work; this page is the index we keep on the lab site."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: LAB.substack,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg",
						children: ["FIA Labs on Substack", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "divide-y divide-border border-y border-border",
					children: ARTICLES.map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: article.href,
						target: "_blank",
						rel: "noreferrer",
						className: "group grid gap-3 py-8 md:grid-cols-[4rem_1fr_auto] md:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl leading-snug group-hover:text-accent",
								children: article.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block max-w-2xl text-sm text-muted",
								children: article.dek
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase",
								children: ["Read", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							})
						]
					}) }, article.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 max-w-2xl text-sm leading-relaxed text-muted",
					children: [
						"For the method in practice, read",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/audit-ai-agent-decisions",
							className: "text-fg underline underline-offset-4",
							children: "how to audit AI agent decisions"
						}),
						"."
					]
				})
			]
		})
	});
}
//#endregion
export { ResearchPage as component };
