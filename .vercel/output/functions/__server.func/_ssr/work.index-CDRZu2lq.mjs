import { t as APPS } from "./site-BzLZSt0o.mjs";
import { v as Link, z as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-CDRZu2lq.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "01 · Work",
		title: "The desk.",
		dek: "Eight specialist systems. Two desks are in production on their own domains. The rest of the federation is named here until it can ship at the same standard.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "divide-y divide-border border-y border-border",
				children: APPS.map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: app.slug },
					className: "group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 py-7 md:grid-cols-[4rem_14rem_1fr_9rem] md:items-baseline md:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl group-hover:text-accent",
							children: app.shortName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-mono text-[10px] tracking-[0.14em] text-subtle uppercase",
							children: app.name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "col-start-2 max-w-xl text-sm leading-relaxed text-muted md:col-start-3",
							children: app.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "col-start-2 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase md:col-start-4 md:justify-end",
							children: [app.statusLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 text-muted group-hover:text-fg" })]
						})
					]
				}) }, app.slug))
			})
		})
	});
}
//#endregion
export { WorkPage as component };
