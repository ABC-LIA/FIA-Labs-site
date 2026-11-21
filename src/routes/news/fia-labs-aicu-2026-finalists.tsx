import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { JsonLd } from "@/components/json-ld";
import { pageHead } from "@/lib/site";

const NEWS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Two FIA Labs Applications Named Finalists in the 2026 International AI Creator Award",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  author: {
    "@type": "Organization",
    name: "FIA Labs",
    url: "https://federatedintel.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "FIA Labs",
    logo: {
      "@type": "ImageObject",
      url: "https://federatedintel.ai/logo.png",
    },
  },
  mainEntityOfPage: "https://federatedintel.ai/news/fia-labs-aicu-2026-finalists",
  description:
    "LIA Pro and Cine Novelist, specialist AI applications developed by FIA Labs, are 2026 International AI Creator Award Finalists.",
  image: "https://federatedintel.ai/images/fia-labs-og-1200x630.png",
};

export const Route = createFileRoute("/news/fia-labs-aicu-2026-finalists")({
  component: NewsArticlePage,
  head: () =>
    pageHead(
      "Two FIA Labs Applications Named Finalists in the 2026 International AI Creator Award",
      "LIA Pro and Cine Novelist, specialist AI applications developed by FIA Labs, are 2026 International AI Creator Award Finalists.",
      "/news/fia-labs-aicu-2026-finalists",
    ),
});

function NewsArticlePage() {
  return (
    <PageFrame
      index="News"
      title="Two FIA Labs Applications Named Finalists in the 2026 International AI Creator Award"
      dek="LIA Pro and Cine Novelist — 2026 International AI Creator Award Finalists."
    >
      <JsonLd data={NEWS_JSON_LD} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16 text-base leading-relaxed text-fg/90">
        <p>
          Two specialist artificial intelligence applications developed by FIA Labs — LIA Pro and Cine Novelist — have been named finalists in the 2026 International AI Creator Award.
        </p>
        <p className="mt-4">
          The recognition spans two markedly different professional fields: legal intelligence and creative development.
        </p>
        <p className="mt-4">
          LIA Pro (Legal Intel AI) is designed for legal reasoning, evidentiary analysis, litigation preparation and governed review of complex legal material. Its specialist workflows seek to distinguish established evidence from inference and unresolved gaps, supporting legal professionals in examining the foundations of their conclusions.
        </p>
        <p className="mt-4">
          Cine Novelist is a specialist creative intelligence application for screenwriters, filmmakers and producers. Its capabilities include professional screenplay coverage, Script Doctor analysis, story development and film project packaging.
        </p>
        <p className="mt-4">
          A third FIA Labs application, Aquinian Studio, which applies Thomistic philosophical and theological reasoning, was also featured in AICU’s coverage of the 2026 programme.
        </p>
        <p className="mt-4">
          Together, these applications illustrate FIA Labs’ approach to developing distinct AI systems around the reasoning methods and working requirements of different disciplines.
        </p>
        <p className="mt-4">
          Rather than treating professional intelligence as a single general-purpose task, FIA Labs builds specialist environments for law, medicine, theology, finance, business strategy, executive decision-making and creative work.
        </p>
        <p className="mt-6 font-display text-xl italic">
          “We don’t just predict outcomes. We reason them.”
        </p>
        <p className="mt-6">
          LIA Pro and Cine Novelist are available as independent subscription applications, with free starter access available to new users.
        </p>

        <h2 className="mt-10 font-display text-2xl">Explore the applications</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="https://legalintel.ai" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              LIA Pro — Legal Intel AI
            </a>
          </li>
          <li>
            <a href="https://cinenovelist.com" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              Cine Novelist
            </a>
          </li>
          <li>
            <a href="https://aquinian.com" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              Aquinian Studio
            </a>
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl">Official references</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            LIA Pro award entry:{" "}
            <a href="https://aicu.ai/award/2026/gallery/?w=26G26&lang=en" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              aicu.ai/award/2026/gallery/?w=26G26
            </a>
          </li>
          <li>
            Cine Novelist award entry:{" "}
            <a href="https://aicu.ai/award/2026/gallery/?w=26G27&lang=en" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              aicu.ai/award/2026/gallery/?w=26G27
            </a>
          </li>
          <li>
            AICU editorial coverage:{" "}
            <a href="https://aicu.ai/media/261111/en" className="text-fg underline underline-offset-4" target="_blank" rel="noreferrer">
              aicu.ai/media/261111/en
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted">
          Aquinian Studio was featured in AICU editorial coverage. Finalist status for Aquinian has not been separately confirmed.
        </p>
      </article>
    </PageFrame>
  );
}
