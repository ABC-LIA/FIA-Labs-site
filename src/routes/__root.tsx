import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AuthProvider } from "@/lib/auth/provider";
import { LAB } from "@/lib/site";
import { robotsForHost } from "@/lib/seo";
import { THEME_BOOTSTRAP } from "@/lib/theme";
import appCss from "../styles.css?url";

const APP_NAME = "FIA Labs";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — Federated Intel AI` },
      { name: "description", content: LAB.description },
      { name: "theme-color", content: "#090a0c" },
      { name: "application-name", content: APP_NAME },
      { name: "robots", content: robotsForHost() },
      { name: "author", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM brief" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <HeadContent />
      </head>
      <body className="bg-bg font-sans text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex-1">
              <Outlet />
            </div>
            <SiteFooter />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main
      id="content"
      className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-20 md:px-8"
    >
      <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl">No such file.</h1>
      <p className="mt-4 max-w-md text-muted">
        That path is not in the index.
      </p>
      <Link to="/" className="mt-8 inline-block text-sm text-fg">
        Back to the lab
      </Link>
    </main>
  );
}
