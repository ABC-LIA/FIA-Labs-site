import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { LAB, pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    pageHead("Contact", "Write to FIA Labs — support, privacy, and legal.", "/contact"),
});

const CHANNELS = [
  { label: "General", email: LAB.email, note: "Desks, licenses, press, partnerships." },
  { label: "Privacy", email: LAB.privacyEmail, note: "Access, correction, deletion." },
  { label: "Legal", email: LAB.legalEmail, note: "Terms, notices, counsel." },
] as const;

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      org ? `Organisation: ${org}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${LAB.email}?subject=${encodeURIComponent(
      `FIA Labs — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
    window.location.href = href;
  }

  return (
    <PageFrame
      index="06 · Contact"
      title="Write to the lab."
      dek="There is no ticket queue on this page. A letter goes to the address that matches the subject."
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-16">
        <ul className="space-y-6">
          {CHANNELS.map((channel) => (
            <li key={channel.email} className="border-t border-border pt-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                {channel.label}
              </p>
              <a
                href={`mailto:${channel.email}`}
                className="mt-2 block text-sm text-fg hover:text-accent"
              >
                {channel.email}
              </a>
              <p className="mt-1 text-sm text-muted">{channel.note}</p>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="border border-border bg-surface p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" required />
            <Field
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mt-5">
            <Field label="Organisation" name="org" autoComplete="organization" />
          </div>
          <div className="mt-5">
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={7}
                className="mt-2 w-full resize-y rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-subtle"
                placeholder="What should we know?"
              />
            </label>
          </div>
          {status === "error" ? (
            <p className="mt-4 text-sm text-danger">Name, email, and a message are required.</p>
          ) : null}
          {status === "ready" ? (
            <p className="mt-4 text-sm text-muted">
              Your mail client should open. If it does not, write directly to{" "}
              <a href={`mailto:${LAB.email}`} className="text-fg">
                {LAB.email}
              </a>
              .
            </p>
          ) : null}
          <Button type="submit" className="mt-6">
            Open a letter
          </Button>
        </form>
      </div>
    </PageFrame>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.16em] text-subtle uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 h-11 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle"
      />
    </label>
  );
}
