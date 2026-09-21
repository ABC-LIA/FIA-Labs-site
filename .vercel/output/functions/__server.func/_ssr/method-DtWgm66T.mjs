import { f as PRINCIPLES } from "./site-CmMFAehA.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-DtWgm66T.js
var import_jsx_runtime = require_jsx_runtime();
function MethodPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "02 · Method",
		title: "Federation, not costume.",
		dek: "A general model asked to sound like a lawyer is still a general model. FIA is a set of specialists, a second engine that tests what the first proposes, and a rule that the working has to be showable.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
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
						children: "The patented federated system — eight experts reasoning together under arbitration — is under development. The production desks already carry the same discipline: show working, keep the human in the chair."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "text-sm text-fg",
							children: "The eight systems"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/research",
							className: "text-sm text-muted hover:text-fg",
							children: "Truth infrastructure"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { MethodPage as component };
