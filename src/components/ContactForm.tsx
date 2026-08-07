"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

type ContactApiPayload = {
  error?: string;
  configured?: {
    SMTP_USER?: boolean;
    SMTP_PASS?: boolean;
    RESEND_API_KEY?: boolean;
  };
  missing?: string[];
};

function buildMailto(name: string, email: string, message: string): string {
  const subject = encodeURIComponent(`[${SITE.shortName}] Contact — ${name}`);
  const body = encodeURIComponent(
    [`Name: ${name}`, `Reply-to: ${email}`, "", message].join("\n"),
  );
  return `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [showMailto, setShowMailto] = useState(false);
  const [mailtoHref, setMailtoHref] = useState(`mailto:${SITE.contactEmail}`);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    setShowMailto(false);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const payload = (await res.json().catch(() => ({}))) as ContactApiPayload;
      if (!res.ok) {
        setStatus("error");
        const notConfigured = res.status === 503;
        setShowMailto(notConfigured || res.status === 502);
        setMailtoHref(buildMailto(name, email, message));
        if (notConfigured) {
          const missing =
            Array.isArray(payload.missing) && payload.missing.length > 0
              ? ` Missing: ${payload.missing.join(", ")}.`
              : "";
          setError(
            payload.error ||
              `Email is not configured on the server. Site operator: set SMTP_USER and SMTP_PASS (or RESEND_API_KEY), then Save / redeploy.${missing}`,
          );
          return;
        }
        setError(payload.error || "Something went wrong. Please try again.");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setShowMailto(true);
      setMailtoHref(buildMailto(name, email, message));
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="not-prose grid gap-4 rounded-2xl border border-slate-200 bg-white p-5"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-lg bg-sky-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-sm font-medium text-sky-800" role="status">
          Thanks — your message was sent.
        </p>
      )}
      {status === "error" && (
        <div className="grid gap-2" role="alert">
          <p className="text-sm font-medium text-red-600">{error}</p>
          {showMailto && (
            <p className="text-sm text-slate-600">
              You can also email us directly:{" "}
              <a
                href={mailtoHref}
                className="font-medium text-sky-800 underline underline-offset-2 hover:text-sky-950"
              >
                {SITE.contactEmail}
              </a>
            </p>
          )}
        </div>
      )}
    </form>
  );
}
