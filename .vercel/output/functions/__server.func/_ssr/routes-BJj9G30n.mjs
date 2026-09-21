import { i as __toESM } from "../_runtime.mjs";
import { a as FEATURED, d as PRINCIPLES, l as ORGANIZATION_JSON_LD, n as ARTICLES, o as LAB, t as APPS } from "./site-1KtBHgQk.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
import { o as ArrowUpRight, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-B1sPhA1Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJj9G30n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CX = 200;
var CY = 200;
var R = 132;
function polar(angleDeg, radius = R) {
	const rad = (angleDeg - 90) * Math.PI / 180;
	return {
		x: CX + radius * Math.cos(rad),
		y: CY + radius * Math.sin(rad)
	};
}
function FederationField() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto aspect-square w-full max-w-[440px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 400 400",
				className: "h-full w-full",
				role: "img",
				"aria-label": "Eight specialist systems arranged around a federated hub",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: R,
						fill: "none",
						stroke: "currentColor",
						className: "text-border",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: R,
						fill: "none",
						stroke: "currentColor",
						className: "fia-draw text-accent/40",
						strokeWidth: "1",
						strokeDasharray: "4 10"
					}),
					APPS.map((app, i) => {
						const p = polar(i * 45);
						const isOn = active === app.slug;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: CX,
							y1: CY,
							x2: p.x,
							y2: p.y,
							stroke: "currentColor",
							className: cn("transition-colors duration-200", isOn ? "text-accent" : "text-border"),
							strokeWidth: isOn ? 1.4 : 1
						}, `spoke-${app.slug}`);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "28",
						className: "fill-surface stroke-border",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: CX,
						cy: CY,
						r: "6",
						className: "fia-pulse fill-accent"
					})
				]
			}),
			APPS.map((app, i) => {
				const p = polar(i * 45);
				const left = `${p.x / 400 * 100}%`;
				const top = `${p.y / 400 * 100}%`;
				const isOn = active === app.slug;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: app.slug },
					onMouseEnter: () => setActive(app.slug),
					onMouseLeave: () => setActive(null),
					onFocus: () => setActive(app.slug),
					onBlur: () => setActive(null),
					className: "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1",
					style: {
						left,
						top
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full border transition-colors duration-200", isOn ? "border-accent bg-accent" : "border-accent/70 bg-bg") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200", isOn ? "text-fg" : "text-muted"),
						children: app.shortName
					})]
				}, app.slug);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-1/2 top-1/2 w-16 -translate-x-1/2 -translate-y-1/2 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] tracking-[0.22em] text-muted uppercase",
					children: "FIA"
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: ORGANIZATION_JSON_LD }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fia-rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
								children: [
									LAB.city,
									" · ",
									LAB.legalName
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-[2.4rem] leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]",
								children: ["We don’t just predict outcomes.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block italic text-accent",
									children: "We reason them."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg",
								children: "Expert systems for high-consequence work. Eight specialists. Two engines. A record of how the answer was reached — so a professional can still decide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/work",
									className: "inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg",
									children: ["See the work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/method",
									className: "inline-flex h-11 items-center rounded-md border border-border px-5 text-sm text-fg",
									children: "Read the method"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FederationField, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "01 · In production"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl md:text-4xl",
							children: "Two desks, live"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "hidden font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-fg sm:inline",
							children: "Full index"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: FEATURED.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-border bg-surface p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
										children: app.shortName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
										children: app.statusLabel
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl md:text-3xl",
									children: app.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[0.95rem] leading-relaxed text-muted md:text-base",
									children: app.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-x-5 gap-y-3",
									children: [
										app.marketingUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: app.marketingUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 text-sm text-fg",
											children: [app.slug === "lia" ? "Open LegalIntel" : app.slug === "aquinian" ? "Open Aquinian" : "Visit the site", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
										}) : null,
										app.deskUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: app.deskUrl,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg",
											children: [app.slug === "aquinian" ? "Open the studio" : "Open the desk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/work/$slug",
											params: { slug: app.slug },
											className: "inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg",
											children: ["On this site", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
										})
									]
								})
							]
						}, app.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "02 · The rest of the desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl md:text-4xl",
							children: "Six specialists, same standard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-muted",
							children: "Named, not offered. A desk ships when it can show working — the same standard as Legal Intel and Aquinian Studio."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 divide-y divide-border border-y border-border",
							children: APPS.filter((a) => !a.featured).map((app, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/work/$slug",
								params: { slug: app.slug },
								className: "group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 py-5 md:grid-cols-[3rem_8rem_1fr_auto]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-subtle",
										children: String(i + 3).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs tracking-[0.12em] text-fg uppercase",
										children: app.shortName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "col-start-2 max-w-xl text-sm text-muted md:col-start-3",
										children: app.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] tracking-[0.14em] text-subtle uppercase group-hover:text-fg",
										children: app.statusLabel
									})
								]
							}) }, app.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "03 · Method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-3xl font-display text-3xl md:text-4xl",
							children: "A conclusion that cannot be reconstructed is not ready for this kind of work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
							children: PRINCIPLES.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-bg p-6 md:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] text-subtle",
										children: item.index
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-xl",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: item.body
									})
								]
							}, item.index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/method",
							className: "mt-8 inline-flex items-center gap-2 text-sm text-fg",
							children: ["The full method", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "04 · Truth infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl md:text-4xl",
							children: "Research, not launch copy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "AI governance begins with a theory of truth: how a system distinguishes evidence from inference, preserves uncertainty, and supports human judgment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LAB.substack,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-6 inline-flex items-center gap-1.5 text-sm text-fg",
							children: ["Subscribe on Substack", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border border-y border-border",
						children: ARTICLES.slice(0, 3).map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: article.href,
							target: "_blank",
							rel: "noreferrer",
							className: "block py-4 hover:text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-snug",
								children: article.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: article.dek
							})]
						}) }, article.href))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:px-8 md:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/africa",
					className: "border border-border bg-surface p-6 transition-colors duration-150 hover:border-rule md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "05 · Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl md:text-3xl",
							children: "Project Africa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "An access grant across Africa. Not a product for sale, and not a substitute for local institutions."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-2 text-sm text-fg",
							children: ["Read the note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/company",
					className: "border border-border bg-surface p-6 transition-colors duration-150 hover:border-rule md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "06 · The lab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl md:text-3xl",
							children: "Company"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "A privately owned lab in Washington, D.C. Independent of the platforms we reason on. Built for professionals who have to stand behind a file."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-2 text-sm text-fg",
							children: ["About FIA Labs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			}) })
		]
	});
}
//#endregion
export { Home as component };
