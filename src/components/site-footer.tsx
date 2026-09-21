import { Link } from "@tanstack/react-router";
import { FiaMark } from "@/components/mark";
import { LAB, NAV } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <FiaMark className="size-7 text-fg" />
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase">FIA Labs</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {LAB.dba} is a DBA of {LAB.legalName}, {LAB.city}, {LAB.country}.
            Wholly owned by {LAB.owner}.
          </p>
          <p className="mt-5 font-display text-lg italic text-fg/90">{LAB.slogan}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Legal Intel AI (LIA) lives at{" "}
            <a href="https://legalintel.ai" className="text-muted hover:text-fg">
              legalintel.ai
            </a>
            {". "}
            Medical Intel (MIA) lives at{" "}
            <a href="https://medicalintel.org" className="text-muted hover:text-fg">
              medicalintel.org
            </a>
            {"."}
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
            Index
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm text-muted hover:text-fg">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacy" className="text-sm text-muted hover:text-fg">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted hover:text-fg">
                Terms
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${LAB.email}`}
                className="text-sm text-muted hover:text-fg"
              >
                {LAB.email}
              </a>
            </li>
            <li>
              <a
                href={LAB.substack}
                className="text-sm text-muted hover:text-fg"
                target="_blank"
                rel="noreferrer"
              >
                Substack
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 font-mono text-[10px] tracking-[0.12em] text-subtle uppercase md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {LAB.dba}</p>
          <p>
            {LAB.city} · {LAB.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
