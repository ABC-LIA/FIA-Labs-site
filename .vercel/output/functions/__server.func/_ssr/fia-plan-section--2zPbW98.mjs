import { a as FIA_PLAN } from "./site-D21DOjWi.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fia-plan-section--2zPbW98.js
var import_jsx_runtime = require_jsx_runtime();
function FiaPlanSection({ variant = "full" }) {
	if (variant === "teaser") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border",
		"aria-labelledby": "fia-plan-teaser-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
					children: FIA_PLAN.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "fia-plan-teaser-title",
					className: "mt-3 font-display text-3xl md:text-4xl",
					children: FIA_PLAN.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base",
					children: FIA_PLAN.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm leading-relaxed text-muted",
					children: FIA_PLAN.alternative
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					hash: "fia-plan",
					className: "mt-6 inline-flex h-11 items-center gap-2 text-sm text-fg",
					children: ["The house seat", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaPlanPriceCard, {})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "fia-plan",
		className: "scroll-mt-24 border-b border-border",
		"aria-labelledby": "fia-plan-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: FIA_PLAN.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "fia-plan-title",
							className: "mt-3 font-display text-3xl md:text-4xl",
							children: FIA_PLAN.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted md:text-base",
							children: FIA_PLAN.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted",
							children: FIA_PLAN.alternative
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaPlanPriceCard, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "Desk scope"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted",
						children: FIA_PLAN.deskScope
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
						children: "Credits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted",
						children: FIA_PLAN.credits
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-sm text-muted",
					children: [
						"Questions:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/company",
							hash: "fia-plan",
							className: "text-fg",
							children: "FIA Plan on Company"
						}),
						"."
					]
				})
			]
		})
	});
}
function FiaPlanPriceCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "border border-border bg-surface p-6 md:p-8",
		"aria-label": `${FIA_PLAN.name}, ${FIA_PLAN.price} a ${FIA_PLAN.period}. ${FIA_PLAN.footerFact}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
				children: FIA_PLAN.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-5xl leading-none tracking-tight",
					children: FIA_PLAN.price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
					children: ["/ ", FIA_PLAN.period]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
				children: "On the desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "inline-flex h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg",
					children: FIA_PLAN.cta
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg",
					children: FIA_PLAN.active
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-mono text-[10px] tracking-[0.12em] text-subtle uppercase",
				children: FIA_PLAN.footerFact
			})
		]
	});
}
function FiaPlanDeskNote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-sm leading-relaxed text-muted",
				children: FIA_PLAN.alternative
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work",
				hash: "fia-plan",
				className: "inline-flex h-11 shrink-0 items-center gap-2 text-sm text-fg",
				children: [FIA_PLAN.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	});
}
//#endregion
export { FiaPlanSection as n, FiaPlanDeskNote as t };
