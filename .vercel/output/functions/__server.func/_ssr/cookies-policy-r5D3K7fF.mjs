import { l as LAB } from "./site-kq08MEqS.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cookies-policy-r5D3K7fF.js
var import_jsx_runtime = require_jsx_runtime();
function CookiesPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "Cookies",
		title: "Cookies",
		dek: `Last updated 13 November 2026. This notice applies to FIA Labs at federatedintel.ai. It lists what this app actually sets.`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-10 px-5 py-12 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "What we set"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
						children: "We use first-party cookies and browser storage so you can stay signed in, where sign-in is used, and so this device can remember a display choice. We do not run advertising cookies. This site does not load an analytics or advertising script."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
						children: [
							"Cookies that stay on this origin use the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-" }),
							" prefix: Secure, Path=/, and no Domain, so they bind only to the host that set them."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Cookies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Sign-in session cookies, HttpOnly and limited to this origin, so you stay signed in: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-grok-auth.session_token" }),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-grok-auth.session_data" }),
						" (a short-lived signed cache), ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-grok-auth.account_data" }),
						", and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-grok-auth.dont_remember" }),
						" when you ask not to stay signed in."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"A sign-in gate marker: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "__Host-grok_gate_session" }),
						"."
					] })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Browser storage"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "fia-theme" }), " remembers light or dark on this device."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"In the live preview only, ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "grok-auth.bearer-token" }),
						" is held in sessionStorage so the preview can stand in for the session cookie. The preview runs in an embedded frame where cookies are partitioned. This is not set on the ordinary public site."
					] })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Clearing them"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
					children: "You can clear cookies and site data in your browser. That signs you out on this device and forgets the theme preference."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
					children: [
						LAB.legalName,
						", doing business as FIA Labs. Privacy requests:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline-offset-4 hover:underline",
							href: `mailto:${LAB.privacyEmail}`,
							children: LAB.privacyEmail
						}),
						". See also",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "underline-offset-4 hover:underline",
							children: "Privacy"
						}),
						" ",
						"and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "underline-offset-4 hover:underline",
							children: "Terms"
						}),
						"."
					]
				})] })
			]
		})
	});
}
//#endregion
export { CookiesPolicyPage as component };
