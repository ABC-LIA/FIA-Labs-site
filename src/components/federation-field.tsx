import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { APPS } from "@/lib/site";
import { cn } from "@/lib/utils";

const CX = 200;
const CY = 200;
const R = 132;

function polar(angleDeg: number, radius = R) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

export function FederationField() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Seven specialist desks arranged around a federated hub"
      >
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="currentColor"
          className="text-border"
          strokeWidth="1"
        />
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="currentColor"
          className="fia-draw text-accent/40"
          strokeWidth="1"
          strokeDasharray="4 10"
        />

        {APPS.map((app, i) => {
          const p = polar(i * (360 / APPS.length));
          const isOn = active === app.slug;
          return (
            <line
              key={`spoke-${app.slug}`}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="currentColor"
              className={cn(
                "transition-colors duration-200",
                isOn ? "text-accent" : "text-border",
              )}
              strokeWidth={isOn ? 1.4 : 1}
            />
          );
        })}

        <circle cx={CX} cy={CY} r="28" className="fill-surface stroke-border" strokeWidth="1" />
        <circle cx={CX} cy={CY} r="6" className="fia-pulse fill-accent" />
      </svg>

      {APPS.map((app, i) => {
        const p = polar(i * (360 / APPS.length));
        const left = `${(p.x / 400) * 100}%`;
        const top = `${(p.y / 400) * 100}%`;
        const isOn = active === app.slug;
        return (
          <Link
            key={app.slug}
            to="/work/$slug"
            params={{ slug: app.slug }}
            onMouseEnter={() => setActive(app.slug)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(app.slug)}
            onBlur={() => setActive(null)}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left, top }}
          >
            <span
              className={cn(
                "size-2.5 rounded-full border transition-colors duration-200",
                isOn ? "border-accent bg-accent" : "border-accent/70 bg-bg",
              )}
            />
            <span
              className={cn(
                "font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-200",
                isOn ? "text-fg" : "text-muted",
              )}
            >
              {app.shortName}
            </span>
          </Link>
        );
      })}

      <div className="pointer-events-none absolute left-1/2 top-1/2 w-16 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
          FIA
        </p>
      </div>
    </div>
  );
}
