import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  quiet?: boolean;
};

export function ExternalLink({ href, children, className, quiet }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-80",
        quiet
          ? "text-sm text-muted hover:text-fg"
          : "h-11 rounded-md bg-fg px-5 font-sans text-sm font-medium text-bg",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-3.5" aria-hidden="true" />
    </a>
  );
}
