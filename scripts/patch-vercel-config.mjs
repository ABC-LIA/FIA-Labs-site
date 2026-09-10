#!/usr/bin/env node
/**
 * Post-`vite build` entry. Safe if Vite plugin order ever changes so
 * `closeBundle` runs before Nitro writes `.vercel/output/config.json`.
 */
import {
  isCatchAllToServer,
  legacyPathRedirectRoutes,
  patchVercelOutputConfigFile,
} from "./vercel-edge-redirects.mjs";

const next = patchVercelOutputConfigFile();
const n = legacyPathRedirectRoutes().length;
const catchAllAt = next.routes.findIndex(isCatchAllToServer);
console.log(
  `[vercel-edge-redirects] wrote ${n} path 308s before __server (catch-all index ${catchAllAt})`,
);
