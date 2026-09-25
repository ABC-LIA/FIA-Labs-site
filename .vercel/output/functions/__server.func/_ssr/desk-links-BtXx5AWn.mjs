import { g as marketingHostLabel, m as deskOpenLabel, y as separateMarketingUrl } from "./site-D21DOjWi.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-Cix6VcgM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-links-BtXx5AWn.js
var import_jsx_runtime = require_jsx_runtime();
var EXTERNAL_REL = "noopener noreferrer";
function DeskLinks({ app, className }) {
	const marketing = separateMarketingUrl(app);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap items-center gap-x-5 gap-y-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: app.deskUrl,
				target: "_blank",
				rel: EXTERNAL_REL,
				className: "inline-flex items-center gap-1.5 text-sm text-fg",
				children: [deskOpenLabel(app), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "size-3.5",
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work/$slug",
				params: { slug: app.slug },
				className: "inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg",
				children: ["About this desk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
			}),
			marketing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: marketing,
				target: "_blank",
				rel: EXTERNAL_REL,
				className: "inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg",
				children: [marketingHostLabel(marketing), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "size-3.5",
					"aria-hidden": "true"
				})]
			}) : null
		]
	});
}
function DeskTitleLink({ app, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: app.deskUrl,
		target: "_blank",
		rel: EXTERNAL_REL,
		className,
		children
	});
}
//#endregion
export { DeskTitleLink as n, DeskLinks as t };
