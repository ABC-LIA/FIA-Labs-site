import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import {
  deskOpenLabel,
  marketingHostLabel,
  separateMarketingUrl,
  type LabApp,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const EXTERNAL_REL = "noopener noreferrer";

type DeskLinksProps = {
  app: LabApp;
  className?: string;
};

export function DeskLinks({ app, className }: DeskLinksProps) {
  const marketing = separateMarketingUrl(app);

  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      <a
        href={app.deskUrl}
        target="_blank"
        rel={EXTERNAL_REL}
        className="inline-flex items-center gap-1.5 text-sm text-fg"
      >
        {deskOpenLabel(app)}
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
      <Link
        to="/work/$slug"
        params={{ slug: app.slug }}
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
      >
        About this desk
        <ArrowRight className="size-3.5" />
      </Link>
      {marketing ? (
        <a
          href={marketing}
          target="_blank"
          rel={EXTERNAL_REL}
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
        >
          {marketingHostLabel(marketing)}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function DeskTitleLink({
  app,
  children,
  className,
}: {
  app: LabApp;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={app.deskUrl}
      target="_blank"
      rel={EXTERNAL_REL}
      className={className}
    >
      {children}
    </a>
  );
}
