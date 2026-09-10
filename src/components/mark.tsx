import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  title?: string;
};

export function FiaMark({ className, title = "FIA Labs" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="16" cy="16" r="2.2" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 16 + Math.cos(rad) * 10.5;
        const y = 16 + Math.sin(rad) * 10.5;
        const ix = 16 + Math.cos(rad) * 4.2;
        const iy = 16 + Math.sin(rad) * 4.2;
        return (
          <g key={deg}>
            <line
              x1={ix}
              y1={iy}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="0.9"
              opacity="0.45"
            />
            <circle cx={x} cy={y} r="1.55" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}
