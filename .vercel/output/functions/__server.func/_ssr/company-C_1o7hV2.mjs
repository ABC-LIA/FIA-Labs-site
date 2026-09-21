import { i as FAQS, o as LAB, p as VOICES, r as COMPANY_FAQ_JSON_LD } from "./site-CmMFAehA.mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { t as JsonLd } from "./json-ld-2dnvi90N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-C_1o7hV2.js
var import_jsx_runtime = require_jsx_runtime();
function CompanyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageFrame, {
		index: "05 · Company",
		title: "A private lab. A public standard.",
		dek: `${LAB.name} is a DBA of ${LAB.legalName}, registered in ${LAB.city}, ${LAB.country}, and wholly owned by ${LAB.owner}. We build expert systems for people who have to stand behind a file.`,
		aside: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "justify-self-start md:justify-self-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png?v=4",
				alt: "FIA Labs seal — FiA mark on a circuit die",
				width: 160,
				height: 160,
				className: "size-28 object-contain md:size-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
				children: "Registered mark"
			})]
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: COMPANY_FAQ_JSON_LD }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid gap-10 border-b border-border pb-14 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-[0.95rem] leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At FIA Labs we build expert AI agents that think in the posture of lawyers, physicians, CFOs, strategists, and researchers. Six desks are live: Legal Intel for the legal and forensic file, Aquinian Studio for theology, philosophy, and doctrine, Medical Intel for literature and the medico-legal file, Brandium, CFO Sentinel, and Cine-Novelist. ExecMind and CarCounsel are not public until they meet that standard." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The patented federated system — eight specialists reasoning together under arbitration — is under development. We do not pretend it is finished. We do not ship a costume of expertise and call it a profession." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl italic text-fg",
								children: LAB.tagline
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [
							["Entity", LAB.legalName],
							["Doing business as", LAB.dba],
							["Seat", `${LAB.city}, ${LAB.country}`],
							["Owner", LAB.owner]
						].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-fg",
								children: value
							})]
						}, label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border-b border-border py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
						children: "From the desk"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-5 md:grid-cols-2",
						children: VOICES.map((voice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col border border-border bg-surface p-7 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "flex-1 font-display text-[1.1rem] leading-relaxed italic text-fg md:text-[1.15rem]",
									children: [
										"“",
										voice.quote,
										"”"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 font-mono text-[11px] tracking-[0.12em] text-muted uppercase",
									children: voice.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-subtle",
									children: voice.role
								})
							]
						}, voice.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "pt-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
							children: "Questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 divide-y divide-border border-y border-border",
							children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
									className: "cursor-pointer list-none font-display text-xl marker:content-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-start justify-between gap-4",
										children: [
											item.q,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 font-mono text-xs text-subtle group-open:hidden",
												children: "+"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 hidden font-mono text-xs text-subtle group-open:inline",
												children: "−"
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
									children: item.a
								})]
							}, item.q))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm text-muted",
							children: [
								"Further questions:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "text-fg",
									children: "write to the lab"
								}),
								"."
							]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { CompanyPage as component };
