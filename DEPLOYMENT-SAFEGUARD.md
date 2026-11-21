# Deployment safeguard

Permanent rules for this website repository.

## Authorised commit identity

Automated and agent commits must use:

```
git config user.email "adrian@bertino-clarke.com"
git config user.name "ABC-LIA"
```

Any other author email is not linked to the Vercel team. Vercel will block the production deployment. The build script now fails first with an explicit message so the failure is never described as a propagation delay.

## Pre-deployment checks

The `build` script runs, in order:

1. `scripts/check-deploy-author.mjs` — authorised identity only.
2. `npm run typecheck` — TypeScript validation.
3. The existing generate / vite / patch / sync / migrate chain.

A failure at any step is a failed deployment. Report the exit code and the script output.

## After deployment

Verify production contains the expected change before declaring success:

```
node scripts/verify-production.mjs --url https://federatedintel.ai --expect "FIA Labs"
```

A missing marker is a failed verification, not a delay.
