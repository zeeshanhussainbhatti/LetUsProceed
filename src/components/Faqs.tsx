import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Faq } from "@/lib/schema";
import { site } from "@/lib/site";
import { Container } from "./ui";

/**
 * FAQs as an accordion. Answers stay in the HTML (crawlable) and match the FAQPage
 * schema word for word; the first one is open on load.
 */
export function Faqs({ title, faqs, lead }: { title: string; faqs: Faq[]; lead?: string }) {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-20 sm:py-28" id="faqs">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">FAQs</p>
          <h2 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">{title}</h2>
          {lead && <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>}
          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-ink p-7 text-white">
            <svg viewBox="0 0 200 100" className="pointer-events-none absolute -bottom-2 -right-8 w-44 opacity-40" aria-hidden="true">
              <path d="M0 100A100 100 0 0 1 200 100H140A40 40 0 0 0 60 100Z" fill="#1772e6" />
            </svg>
            <p className="relative font-display text-xl font-semibold uppercase">Still have questions?</p>
            <p className="relative mt-2 text-white/75">
              Email <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4">{site.email}</a> or send us your goals.
            </p>
            <Link
              href="/contact-us"
              className="group relative mt-5 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 font-medium text-white transition hover:brightness-95"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition open:shadow-md open:ring-brand-blue/30"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-sm font-bold text-brand-blue/60" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 text-base font-semibold leading-snug text-ink sm:text-lg">{f.q}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink transition duration-300 group-open:rotate-45 group-open:bg-brand-orange group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-5 pb-6 leading-relaxed text-muted sm:pl-[4.25rem] sm:pr-16">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
