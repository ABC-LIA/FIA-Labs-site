import { f as METHOD_ANSWER, m as METHOD_JSON_LD, p as METHOD_FAQS, y as PRINCIPLES } from "./site-kq08MEqS.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-CWNpuWm9.js
var import_jsx_runtime = require_jsx_runtime();
function MethodPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		index: "02 · Method",
		title: "Federation, not costume.",
		dek: "A general model asked to sound like a lawyer is still a general model. FIA is a set of specialists, a second engine that tests what the first proposes, and a rule that the working has to be showable.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: METHOD_JSON_LD }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-10 max-w-3xl text-base leading-relaxed text-fg md:text-lg",
					children: METHOD_ANSWER
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "divide-y divide-border border-y border-border",
					children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-3 py-8 md:grid-cols-[6rem_16rem_1fr] md:gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-subtle",
								children: item.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl text-[0.95rem] leading-relaxed text-muted",
								children: item.body
							})
						]
					}, item.index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14 max-w-3xl",
					id: "faq",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Questions about the method"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-6 divide-y divide-border border-y border-border",
						children: METHOD_FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: item.id,
							className: "py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-xl",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-[0.95rem] leading-relaxed text-muted",
								children: item.a
							})]
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-14 max-w-3xl border border-border bg-surface p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
							children: "On compliance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] leading-relaxed text-muted",
							children: "The architecture is built for auditability: dual engines, symbolic logic, and a visible distinction between evidence, inference, and gap. That is the posture we take toward jurisdictions that require accountability and human-understandable reasoning. It is not a certification, and we do not claim SOC 2, ISO, or HIPAA on this site."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-[0.95rem] leading-relaxed text-muted",
							children: "The patented federated system — seven specialists reasoning together under arbitration — is under development. The live desks already carry the same discipline: show working, keep the human in the chair."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								className: "text-sm text-fg",
								children: "The seven desks"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/research",
								className: "text-sm text-muted hover:text-fg",
								children: "Truth infrastructure"
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { MethodPage as component };
