import { c as MIA_SOFTWARE_JSON_LD, m as getApp, s as LIA_SOFTWARE_JSON_LD, t as APPS } from "./site-CmMFAehA.mjs";
import { B as require_jsx_runtime, v as Link, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { c as ArrowLeft, o as ArrowUpRight, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Route, r as cn } from "./router-CV-zDSUN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DxBs0Kns.js
var import_jsx_runtime = require_jsx_runtime();
function ExternalLink({ href, children, className, quiet }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: cn("inline-flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-80", quiet ? "text-sm text-muted hover:text-fg" : "h-11 rounded-md bg-fg px-5 font-sans text-sm font-medium text-bg", className),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-3.5",
			"aria-hidden": "true"
		})]
	});
}
function AppPage() {
	const { slug } = Route.useParams();
	const app = getApp(slug);
	if (!app) throw notFound();
	const index = APPS.findIndex((item) => item.slug === app.slug);
	const prev = APPS[(index - 1 + APPS.length) % APPS.length];
	const next = APPS[(index + 1) % APPS.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			app.slug === "lia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: LIA_SOFTWARE_JSON_LD }) : null,
			app.slug === "mia" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: MIA_SOFTWARE_JSON_LD }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work",
							className: "inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), "Work"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
								children: [
									String(index + 1).padStart(2, "0"),
									" · ",
									app.kicker
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: app.statusLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl leading-[1.1] md:text-6xl",
							children: app.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
							children: app.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [app.marketingUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								href: app.marketingUrl,
								children: app.slug === "lia" ? "Open LegalIntel" : app.slug === "aquinian" ? "Open Aquinian" : app.slug === "mia" ? "Open Medical Intel" : app.marketingUrl.replace("https://", "")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/method",
								className: "inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg",
								children: "How the method works"
							}), app.deskUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								href: app.deskUrl,
								quiet: true,
								children: app.slug === "aquinian" ? "Open the studio" : "Open the desk"
							}) : null]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.4fr_1fr] md:px-8 md:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "On the file"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-6",
						children: app.points.map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-fg/90",
								children: point
							})]
						}, point))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2",
				"aria-label": "Adjacent systems",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: prev.slug },
					className: "bg-bg px-5 py-8 hover:bg-surface md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 inline-flex items-center gap-2 font-display text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), prev.shortName]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: next.slug },
					className: "bg-bg px-5 py-8 text-right hover:bg-surface md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 inline-flex items-center justify-end gap-2 font-display text-xl",
						children: [next.shortName, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})]
			})
		]
	});
}
//#endregion
export { AppPage as component };
