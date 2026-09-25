import { o as LAB } from "./site-BWQTIidw.mjs";
import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-C6jU03Wi.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		title: "1. Information we collect",
		body: [
			"We collect the minimum necessary to operate the services.",
			"Account information may include name, email, authentication credentials, and country of residence.",
			"Usage data may include app interactions and anonymised diagnostic logs, device type, and operating system.",
			"Pro users may upload files or prompts for processing. Legal Intel keeps files on the matter they belong to. We do not sell files."
		]
	},
	{
		title: "2. How we use it",
		body: [
			"To deliver, operate, and improve the apps; to process purchases and seats; to provide support; and to comply with law.",
			"We do not sell or rent personal data to third parties.",
			"We do not train our models on your files or prompts."
		]
	},
	{
		title: "3. Processors",
		body: ["We use trusted processors for infrastructure, authentication, and billing — including hosting, payment, and model inference providers.", "FIA Labs does not store payment card data. Drive and Dropbox tokens, where used, are stored server-side and scoped to the signed-in user."]
	},
	{
		title: "4. Retention",
		body: ["Session logs may be kept briefly for billing and diagnostics. Matter files are held according to the product’s own rules until you delete them or close the account.", "You may request deletion at any time."]
	},
	{
		title: "5. Security and location",
		body: ["We use encryption, access control, and isolated sessions. Servers for FIA Labs services are hosted in the United States unless a product page states otherwise."]
	},
	{
		title: "6. Children",
		body: ["The apps are not intended for individuals under 16. If we learn that we have collected data from a child, we will delete it."]
	},
	{
		title: "7. International rights",
		body: ["We comply with GDPR, CPRA, and PIPEDA as they apply. You may request access, correction, or deletion, and (where an account exists) an export of your data."]
	},
	{
		title: "8. Contact",
		body: [`Privacy requests: ${LAB.privacyEmail}.`]
	}
];
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "Privacy",
		title: "Privacy policy",
		dek: `Last updated 21 October 2025. ${LAB.legalName} (“FIA,” “we,” “our,” or “us”) respects your privacy. This policy covers FIA Labs applications, including LIA Pro, MIA Pro, CFO Sentinel, Aquinian, Brandium, CarCounsel, Cine-Novelist, and ExecMind.`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl space-y-10 px-5 py-12 md:px-8 md:py-16",
			children: [SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: section.title
			}), section.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[0.95rem] leading-relaxed text-muted",
				children: p
			}, p))] }, section.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "Individual products may publish a more specific note — for example, Legal Intel’s file-holding page. Where they do, the stricter statement governs that product."
			})]
		})
	});
}
//#endregion
export { PrivacyPage as component };
