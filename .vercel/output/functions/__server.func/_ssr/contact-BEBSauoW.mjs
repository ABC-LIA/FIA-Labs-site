import { i as __toESM } from "../_runtime.mjs";
import { o as LAB } from "./site-1KtBHgQk.mjs";
import { B as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageFrame } from "./page-frame-DwFh0oLd.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-B1sPhA1Z.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BEBSauoW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:opacity-90",
			ghost: "border border-border bg-transparent text-fg hover:border-rule hover:bg-surface",
			quiet: "text-muted hover:text-fg"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-xs",
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-md px-6 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var CHANNELS = [
	{
		label: "General",
		email: LAB.email,
		note: "Desks, licenses, press, partnerships."
	},
	{
		label: "Privacy",
		email: LAB.privacyEmail,
		note: "Access, correction, deletion."
	},
	{
		label: "Legal",
		email: LAB.legalEmail,
		note: "Terms, notices, counsel."
	}
];
function ContactPage() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const org = String(data.get("org") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !email || !message) {
			setStatus("error");
			return;
		}
		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			org ? `Organisation: ${org}` : null,
			"",
			message
		].filter(Boolean).join("\n");
		const href = `mailto:${LAB.email}?subject=${encodeURIComponent(`FIA Labs — ${name}`)}&body=${encodeURIComponent(body)}`;
		setStatus("ready");
		window.location.href = href;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFrame, {
		index: "06 · Contact",
		title: "Write to the lab.",
		dek: "Legal work lives at legalintel.ai. Theological work lives at aquinian.com. Letters for the lab itself go to the address that matches the subject.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
						children: "Desks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"LegalIntel (LIA Pro) is at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://legalintel.ai",
								target: "_blank",
								rel: "noreferrer",
								className: "text-fg hover:text-accent",
								children: "legalintel.ai"
							}),
							". Aquinian Studio is at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://aquinian.com",
								target: "_blank",
								rel: "noreferrer",
								className: "text-fg hover:text-accent",
								children: "aquinian.com"
							}),
							"."
						]
					})]
				}), CHANNELS.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-border pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
							children: channel.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${channel.email}`,
							className: "mt-2 block text-sm text-fg hover:text-accent",
							children: channel.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: channel.note
						})
					]
				}, channel.email))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "border border-border bg-surface p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							autoComplete: "name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							autoComplete: "email",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Organisation",
							name: "org",
							autoComplete: "organization"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 7,
								className: "mt-2 w-full resize-y rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-subtle",
								placeholder: "What should we know?"
							})]
						})
					}),
					status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-danger",
						children: "Name, email, and a message are required."
					}) : null,
					status === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted",
						children: [
							"Your mail client should open. If it does not, write directly to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${LAB.email}`,
								className: "text-fg",
								children: LAB.email
							}),
							"."
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-6",
						children: "Open a letter"
					})
				]
			})]
		})
	});
}
function Field({ label, name, type = "text", autoComplete, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] tracking-[0.16em] text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			autoComplete,
			required,
			className: "mt-2 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle"
		})]
	});
}
//#endregion
export { ContactPage as component };
