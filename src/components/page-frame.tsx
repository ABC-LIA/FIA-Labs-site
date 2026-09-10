import type { ReactNode } from "react";

type PageFrameProps = {
  index?: string;
  title: string;
  dek?: string;
  aside?: ReactNode;
  children: ReactNode;
};

export function PageFrame({ index, title, dek, aside, children }: PageFrameProps) {
  return (
    <main id="content">
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-14 md:grid-cols-[1fr_auto] md:px-8 md:py-20">
          <div>
            {index ? (
              <p className="font-mono text-[11px] tracking-[0.22em] text-subtle uppercase">
                {index}
              </p>
            ) : null}
            <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight md:text-5xl">
              {title}
            </h1>
            {dek ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {dek}
              </p>
            ) : null}
          </div>
          {aside}
        </div>
      </header>
      {children}
    </main>
  );
}
