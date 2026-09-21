import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-frame-DwFh0oLd.js
var import_jsx_runtime = require_jsx_runtime();
function PageFrame({ index, title, dek, aside, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-end gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: index
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight md:text-5xl",
						children: title
					}),
					dek ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
						children: dek
					}) : null
				] }), aside]
			})
		}), children]
	});
}
//#endregion
export { PageFrame as t };
