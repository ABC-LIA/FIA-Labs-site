#!/usr/bin/env node
/**
 * Pre-deployment identity check.
 *
 * Vercel blocks production deployments when the commit author email is not
 * linked to a member of the owning team. This script fails the build with an
 * explicit message in that case so the failure is never attributed to
 * propagation delay.
 *
 * Authorised identity for automated commits on FIA Labs website repositories:
 *   ABC-LIA <adrian@bertino-clarke.com>
 *
 * Agents and scripts must set:
 *   git config user.email "adrian@bertino-clarke.com"
 *   git config user.name "ABC-LIA"
 * before committing.
 */
import { execSync } from "node:child_process";

const AUTHORIZED_EMAILS = ["adrian@bertino-clarke.com"];

function readAuthorEmail() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_AUTHOR_EMAIL?.trim();
  if (fromVercel) return fromVercel.toLowerCase();
  try {
    return execSync("git log -1 --format=%ae", { encoding: "utf8" }).trim().toLowerCase();
  } catch {
    return "";
  }
}

function readAuthorName() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME?.trim();
  if (fromVercel) return fromVercel;
  try {
    return execSync("git log -1 --format=%an", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

const email = readAuthorEmail();
const name = readAuthorName();
const sha = process.env.VERCEL_GIT_COMMIT_SHA || "(local)";

if (!email || !AUTHORIZED_EMAILS.includes(email)) {
  console.error("DEPLOYMENT BLOCKED: unauthorised commit author");
  console.error(`  commit:  ${sha}`);
  console.error(`  name:    ${name}`);
  console.error(`  email:   ${email || "(none)"}`);
  console.error(`  allowed: ${AUTHORIZED_EMAILS.join(", ")}`);
  console.error("");
  console.error("This is not a propagation delay. The production deployment will not proceed.");
  console.error("Re-commit with the authorised identity and push again.");
  process.exit(1);
}

console.log(`deploy-author ok: ${name} <${email}> (${sha})`);
