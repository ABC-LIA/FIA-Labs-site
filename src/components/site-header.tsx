import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FiaMark } from "@/components/mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg"
          aria-label="FIA Labs home"
        >
          <FiaMark className="size-8 text-fg" />
          <span className="flex flex-col leading-none">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase">
              FIA Labs
            </span>
            <span className="mt-1 hidden font-mono text-[10px] tracking-[0.14em] text-muted uppercase sm:block">
              Federated Intel AI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const current =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-baseline gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-150",
                  current ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                <span className="text-subtle">{item.index}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden h-9 items-center rounded-md bg-fg px-3.5 font-mono text-[11px] tracking-[0.14em] text-bg uppercase sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg lg:hidden"
        >
          <nav className="flex flex-col px-5 py-8" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-baseline gap-4 border-b border-border py-5"
              >
                <span className="font-mono text-xs text-subtle">{item.index}</span>
                <span className="font-display text-3xl">{item.label}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-fg font-mono text-xs tracking-[0.16em] text-bg uppercase"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
