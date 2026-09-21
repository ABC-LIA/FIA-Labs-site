import { t as APPS } from "./site-Cl4TPudw.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/africa-C_UP4mpp.js
var import_jsx_runtime = require_jsx_runtime();
function AfricaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "04 · Africa",
		title: "Access at the scale of a continent.",
		dek: "We granted access to the eight specialist systems across Africa. It is an access grant, not a store, and not a substitute for local institutions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-[0.95rem] leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Project Africa put LIA Pro, MIA Pro, Aquinian, CarCounsel, Cine-Novelist, CFO Sentinel, ExecMind, and Brandium in reach of people who would otherwise meet a paywall first. The work is legal empowerment, research, ethics, mobility, craft, finance, governance, and enterprise — the same eight names, without a different product for a different latitude." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That grant is not a product we sell from this site. The public desks now are Legal Intel, Aquinian Studio, Medical Intel, CFO Sentinel, and Cine-Novelist. Brandium, ExecMind, and CarCounsel remain unpublished until they can show working at that standard." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you are an NGO, ministry, university, or clinic that wants to deploy rather than merely receive access, write to us." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "border border-border bg-surface p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "The eight"
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
