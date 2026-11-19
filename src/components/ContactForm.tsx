"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const EMAIL = "info@letusproceed.com";

const field =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/25";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // No mail backend is connected yet, so the form opens the visitor's email app
  // with the message filled in. Swap this for a real form endpoint when one is set up.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = String(d.get("subject") || "Website enquiry");
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `SMS consent: ${d.get("sms") ? "Yes" : "No"}`,
      "",
      String(d.get("description") || ""),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Phone</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} placeholder="+92 or +1 number" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Subject</span>
          <input name="subject" className={field} placeholder="e.g. SEO for my website" />
        </label>
      </div>
      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-muted">
        <input name="sms" type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-blue" />
        <span>
          I agree to receive SMS messages from Let Us Proceed regarding consultations and service updates. Message
          frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is
          not a condition of purchase. You may review our{" "}
          <Link href="/privacy-policy" className="underline hover:text-brand-blue">Privacy Policy</Link> and{" "}
          <Link href="/terms-and-conditions" className="underline hover:text-brand-blue">Terms of Service</Link> to
          learn how your data is used.
        </span>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Tell us about your project</span>
        <textarea name="description" rows={5} className={field} placeholder="Your website, your goals and the services you need" />
      </label>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          {sent ? `Your email app should open now. If it does not, write to ${EMAIL}.` : ""}
        </p>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-orange px-10 py-3.5 text-base font-medium text-white transition hover:brightness-95 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
