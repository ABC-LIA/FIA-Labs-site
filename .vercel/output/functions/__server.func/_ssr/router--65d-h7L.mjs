import { i as __toESM } from "../_runtime.mjs";
import { _ as workPageCopy, d as PAGE_COPY, g as robotsForHost, h as pageHead, l as NAV, m as getApp, o as LAB } from "./site-Cl4TPudw.mjs";
import { B as require_jsx_runtime, F as redirect, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as Menu, i as Moon, n as TriangleAlert, r as Sun, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router--65d-h7L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function FiaMark({ className, title = "FIA Labs" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("shrink-0", className),
		role: "img",
		"aria-label": title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "2.2",
				fill: "currentColor"
			}),
			[
				0,
				45,
				90,
				135,
				180,
				225,
				270,
				315
			].map((deg) => {
				const rad = deg * Math.PI / 180;
				const x = 16 + Math.cos(rad) * 10.5;
				const y = 16 + Math.sin(rad) * 10.5;
				const ix = 16 + Math.cos(rad) * 4.2;
				const iy = 16 + Math.sin(rad) * 4.2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: ix,
					y1: iy,
					x2: x,
					y2: y,
					stroke: "currentColor",
					strokeWidth: "0.9",
					opacity: "0.45"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: x,
					cy: y,
					r: "1.55",
					fill: "currentColor"
				})] }, deg);
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaMark, { className: "size-7 text-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.22em] uppercase",
							children: "FIA Labs"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
						children: [
							LAB.dba,
							" is a DBA of ",
							LAB.legalName,
							", ",
							LAB.city,
							", ",
							LAB.country,
							". Wholly owned by ",
							LAB.owner,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 font-display text-lg italic text-fg/90",
						children: LAB.slogan
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.2em] text-subtle uppercase",
					children: "Index"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "text-sm text-muted hover:text-fg",
						children: item.label
					}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm text-muted hover:text-fg",
						children: "Contact"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.2em] text-subtle uppercase",
					children: "Legal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-sm text-muted hover:text-fg",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-sm text-muted hover:text-fg",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${LAB.email}`,
							className: "text-sm text-muted hover:text-fg",
							children: LAB.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LAB.substack,
							className: "text-sm text-muted hover:text-fg",
							target: "_blank",
							rel: "noreferrer",
							children: "Substack"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 font-mono text-[10px] tracking-[0.12em] text-subtle uppercase md:flex-row md:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					LAB.dba
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					LAB.city,
					" · ",
					LAB.legalName
				] })]
			})
		})]
	});
}
var THEME_KEY = "fia-theme";
var THEME_COLOR = {
	dark: "#090a0c",
	light: "#f3efe6"
};
function readTheme() {
	if (typeof document === "undefined") return "dark";
	return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}
function applyTheme(theme) {
	const root = document.documentElement;
	root.setAttribute("data-theme", theme);
	root.style.colorScheme = theme;
	try {
		localStorage.setItem(THEME_KEY, theme);
	} catch {}
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
}
var THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark")t="dark";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t;}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("dark");
	(0, import_react.useLayoutEffect)(() => {
		setTheme(readTheme());
	}, []);
	const next = theme === "dark" ? "light" : "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "inline-flex size-11 items-center justify-center rounded-md border border-border text-fg transition-colors duration-150 hover:bg-surface",
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		title: theme === "dark" ? "Light mode" : "Dark mode",
		onClick: () => {
			setTheme(next);
			applyTheme(next);
		},
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
			className: "size-4",
			strokeWidth: 1.75
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
			className: "size-4",
			strokeWidth: 1.75
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 text-fg",
						"aria-label": "FIA Labs home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiaMark, { className: "size-8 text-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] tracking-[0.22em] uppercase",
								children: "FIA Labs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 hidden font-mono text-[10px] tracking-[0.14em] text-muted uppercase sm:block",
								children: "Federated Intel AI"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => {
							const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.href,
								className: cn("flex items-baseline gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-150", current ? "text-fg" : "text-muted hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle",
									children: item.index
								}), item.label]
							}, item.href);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hidden h-9 items-center rounded-md bg-fg px-3.5 font-mono text-[11px] tracking-[0.14em] text-bg uppercase sm:inline-flex",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-border text-fg lg:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								onClick: () => setOpen((v) => !v),
								children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: open ? "Close menu" : "Open menu"
								})]
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-5 py-8",
					"aria-label": "Mobile",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.href,
						className: "flex items-baseline gap-4 border-b border-border py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: item.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl",
							children: item.label
						})]
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-8 inline-flex h-12 items-center justify-center rounded-md bg-fg font-mono text-xs tracking-[0.16em] text-bg uppercase",
						children: "Contact"
					})]
				})
			}) : null
		]
	});
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var styles_default = "/assets/styles-BH5SNK-I.css";
var APP_NAME = "FIA Labs";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — Federated Intel AI` },
			{
				name: "description",
				content: LAB.description
			},
			{
				name: "theme-color",
				content: "#090a0c"
			},
			{
				name: "application-name",
				content: APP_NAME
			},
			{
				name: "robots",
				content: robotsForHost()
			},
			{
				name: "author",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "alternate",
				type: "text/plain",
				href: "/llms.txt",
				title: "LLM brief"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		"data-theme": "dark",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_BOOTSTRAP } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-dvh flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-20 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.22em] text-subtle uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl",
				children: "No such file."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "That path is not in the index."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-block text-sm text-fg",
				children: "Back to the lab"
			})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-Beyb35eL.mjs");
var Route$14 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => pageHead(PAGE_COPY.home.title, PAGE_COPY.home.description, PAGE_COPY.home.path)
});
var $$splitComponentImporter$9 = () => import("./africa-C_UP4mpp.mjs");
var Route$13 = createFileRoute("/africa")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => pageHead("Project Africa", "An access grant across Africa. Not a product for sale.", "/africa")
});
var Route$12 = createFileRoute("/apps")({ beforeLoad: () => {
	throw redirect({
		to: "/work",
		statusCode: 308
	});
} });
var $$splitComponentImporter$8 = () => import("./company-DYaezCY8.mjs");
var Route$11 = createFileRoute("/company")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => pageHead(PAGE_COPY.company.title, PAGE_COPY.company.description, PAGE_COPY.company.path)
});
var $$splitComponentImporter$7 = () => import("./contact-DrNkEy9x.mjs");
var Route$10 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => pageHead(PAGE_COPY.contact.title, PAGE_COPY.contact.description, PAGE_COPY.contact.path)
});
var Route$9 = createFileRoute("/lia")({ beforeLoad: () => {
	throw redirect({
		to: "/work/$slug",
		params: { slug: "lia" },
		statusCode: 308
	});
} });
var $$splitComponentImporter$6 = () => import("./method-ic74qNvu.mjs");
var Route$8 = createFileRoute("/method")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => pageHead("Method", "Federation, dual engines, symbolic arbitration, and a rule that the working has to be showable.", "/method")
});
var Route$7 = createFileRoute("/pricing")({ beforeLoad: () => {
	throw redirect({
		to: "/work",
		statusCode: 308
	});
} });
var Route$6 = createFileRoute("/pricing-philosophy")({ beforeLoad: () => {
	throw redirect({
		to: "/company",
		statusCode: 308
	});
} });
var $$splitComponentImporter$5 = () => import("./privacy-pRTaLfon.mjs");
var Route$5 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => pageHead("Privacy", "How FIA Labs collects, uses, and holds data.", "/privacy")
});
var $$splitComponentImporter$4 = () => import("./research-TQNYXRq5.mjs");
var Route$4 = createFileRoute("/research")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => pageHead("Research", "Truth infrastructure: essays on evidence, inference, and the architecture of institutional AI.", "/research")
});
var $$splitComponentImporter$3 = () => import("./terms-DLLWaHyF.mjs");
var Route$3 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => pageHead("Terms", "Terms of use for FIA Labs applications and this site.", "/terms")
});
var $$splitComponentImporter$2 = () => import("./work-DIsLTtWr.mjs");
var Route$2 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./work.index-BR6nwM4g.mjs");
var Route$1 = createFileRoute("/work/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => pageHead(PAGE_COPY.work.title, PAGE_COPY.work.description, PAGE_COPY.work.path)
});
var $$splitComponentImporter = () => import("./work._slug-CsPQUrOD.mjs");
var Route = createFileRoute("/work/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	beforeLoad: ({ params }) => {
		if (params.slug === "mira") throw redirect({
			to: "/work/$slug",
			params: { slug: "mia" },
			statusCode: 308
		});
	},
	head: ({ params }) => {
		const copy = workPageCopy(params.slug);
		if (copy) return pageHead(copy.title, copy.description, copy.path);
		const app = getApp(params.slug);
		return pageHead(app?.name ?? "Work", app?.summary, `/work/${params.slug}`);
	}
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AfricaRoute = Route$13.update({
	id: "/africa",
	path: "/africa",
	getParentRoute: () => Route$15
});
var AppsRoute = Route$12.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => Route$15
});
var CompanyRoute = Route$11.update({
	id: "/company",
	path: "/company",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$10.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var LiaRoute = Route$9.update({
	id: "/lia",
	path: "/lia",
	getParentRoute: () => Route$15
});
var MethodRoute = Route$8.update({
	id: "/method",
	path: "/method",
	getParentRoute: () => Route$15
});
var PricingRoute = Route$7.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$15
});
var PricingPhilosophyRoute = Route$6.update({
	id: "/pricing-philosophy",
	path: "/pricing-philosophy",
	getParentRoute: () => Route$15
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$15
});
var ResearchRoute = Route$4.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$15
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$15
});
var WorkRoute = Route$2.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$15
});
var WorkIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => WorkRoute
});
var WorkRouteChildren = {
	WorkSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => WorkRoute
	}),
	WorkIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AfricaRoute,
	AppsRoute,
	CompanyRoute,
	ContactRoute,
	LiaRoute,
	MethodRoute,
	PricingRoute,
	PricingPhilosophyRoute,
	PrivacyRoute,
	ResearchRoute,
	TermsRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route as n, cn as r, router_exports as t };
