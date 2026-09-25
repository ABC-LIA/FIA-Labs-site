import { t as APPS } from "./site-D21DOjWi.mjs";
import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { n as DeskTitleLink, t as DeskLinks } from "./desk-links-BtXx5AWn.mjs";
import { n as FiaPlanSection } from "./fia-plan-section--2zPbW98.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-CqHHZEmD.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		index: "01 · Work",
		title: "The desk.",
		dek: "Seven live Pro desks. FIA Plan is the house seat — one plan for the suite, Federation included. Conversations, files, matters, and memory stay on the desk that owns them. Only authorised FIA Briefs cross desks.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaPlanSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "divide-y divide-border border-y border-border",
				children: APPS.map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "py-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 gap-y-1.5 md:grid-cols-[4rem_14rem_1fr_9rem] md:items-baseline md:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTitleLink, {
								app,
								className: "block font-display text-2xl hover:text-accent",
								children: app.shortName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-mono text-[10px] tracking-[0.14em] text-subtle uppercase",
								children: app.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-start-2 max-w-xl text-sm leading-relaxed text-muted md:col-start-3",
								children: app.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-start-2 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase md:col-start-4 md:text-right",
								children: app.statusLabel
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskLinks, {
						app,
						className: "mt-4 pl-10 md:pl-16"
					})]
				}, app.slug))
			})
		})]
	});
}
//#endregion
export { WorkPage as component };
