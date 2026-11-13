import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { LAB, pageHead } from "@/lib/site";

export const Route = createFileRoute("/cookies-policy")({
  component: CookiesPolicyPage,
  head: () =>
    pageHead(
      "Cookies",
      "Cookies and browser storage the FIA Labs site actually sets on federatedintel.ai.",
      "/cookies-policy",
    ),
});

function CookiesPolicyPage() {
  return (
    <PageFrame index="Cookies" title="Cookies" dek={`Last updated 13 November 2026. This notice applies to FIA Labs at federatedintel.ai. It lists what this app actually sets.`}>
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-12 md:px-8 md:py-16">
        <section>
          <h2 className="font-display text-2xl">What we set</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            We use first-party cookies and browser storage so you can stay signed
            in, where sign-in is used, and so this device can remember a display
            choice. We do not run advertising cookies. This site does not load an
            analytics or advertising script.
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            Cookies that stay on this origin use the <code>__Host-</code> prefix:
            Secure, Path=/, and no Domain, so they bind only to the host that set
            them.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl">Cookies</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted">
            <li>
              Sign-in session cookies, HttpOnly and limited to this origin, so you
              stay signed in: <code>__Host-grok-auth.session_token</code>,{" "}
              <code>__Host-grok-auth.session_data</code> (a short-lived signed
              cache), <code>__Host-grok-auth.account_data</code>, and{" "}
              <code>__Host-grok-auth.dont_remember</code> when you ask not to stay
              signed in.
            </li>
            <li>
              A sign-in gate marker: <code>__Host-grok_gate_session</code>.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Browser storage</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-muted">
            <li>
              <code>fia-theme</code> remembers light or dark on this device.
            </li>
            <li>
              In the live preview only, <code>grok-auth.bearer-token</code> is held
              in sessionStorage so the preview can stand in for the session cookie.
              The preview runs in an embedded frame where cookies are partitioned.
              This is not set on the ordinary public site.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Clearing them</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            You can clear cookies and site data in your browser. That signs you
            out on this device and forgets the theme preference.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl">Contact</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
            {LAB.legalName}, doing business as FIA Labs. Privacy requests:{" "}
            <a className="underline-offset-4 hover:underline" href={`mailto:${LAB.privacyEmail}`}>
              {LAB.privacyEmail}
            </a>
            . See also{" "}
            <Link to="/privacy" className="underline-offset-4 hover:underline">
              Privacy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="underline-offset-4 hover:underline">
              Terms
            </Link>
            .
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
