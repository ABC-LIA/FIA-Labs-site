import { t as APPS } from "./site-D21DOjWi.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/africa-CSU0nip8.js
var import_jsx_runtime = require_jsx_runtime();
function AfricaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "04 · Africa",
		title: "Access at the scale of a continent.",
		dek: "We granted access to the live FIA Labs suite across Africa. It is an access grant, not a store, and not a substitute for local institutions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-[0.95rem] leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Project Africa put the live Pro desks — Legal Intel, Medical Intel, Brandium, CFO Sentinel, ExecMind, Aquinian Studio, and Cine-Novelist — in reach of people who would otherwise meet a paywall first. The work is legal empowerment, research, brand and enterprise, finance, governance, ethics, and craft. The same seven names, without a different product for a different latitude." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That grant is not a product we sell from this site. The public suite is the seven live desks. Human judgment remains the authority. LIA is not legal advice. MIA does not replace clinical judgment." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you are an NGO, ministry, university, or clinic that wants to deploy rather than merely receive access, write to us." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "border border-border bg-surface p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "The live suite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: app.slug },
							className: "flex items-baseline justify-between gap-3 text-sm hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: app.shortName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.12em] text-subtle uppercase",
								children: app.kicker
							})]
						}) }, app.slug))
					})]
				})]
			})
		})
	});
}
//#endregion
export { AfricaPage as component };
