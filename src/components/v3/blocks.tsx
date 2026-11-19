import Link from "next/link";
import type { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Crumb, Faq } from "@/lib/schema";
import { site } from "@/lib/site";
import { ContactForm } from "../ContactForm";
import { Reveal, SpotlightGroup } from "./client";
import { Aurora, Glass, H2, Pill, W, toV3 } from "./primitives";

export function V3PageHero({
  pill,
  title,
  intro,
  actions,
  crumbs,
  dot,
  children,
}: {
  pill: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  dot?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <Aurora />
      <div className="v3-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <W className="relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={toV3(c.href)} className="hover:text-white">{c.name}</Link>
                  ) : (
                    <span aria-current="page" className="text-white">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Pill dot={dot}>{pill}</Pill>
        <h1 className="mt-6 max-w-5xl text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
        {intro && <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-white/70 sm:text-xl">{intro}</div>}
        {actions && <div className="mt-10 flex flex-wrap gap-3">{actions}</div>}
        {children}
      </W>
    </section>
  );
}

export function V3Faq({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="relative py-20 sm:py-28">
      <W className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Pill dot="#1772e6">FAQs</Pill>
          <H2 className="mt-6 text-3xl sm:text-4xl">{title}</H2>
          <p className="mt-6 text-white/60">
            Still curious? Write to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-white underline underline-offset-4">{site.email}</a>.
          </p>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-3xl border border-white/10 bg-white/[0.03] transition open:border-white/20 open:bg-white/[0.06]">
              <summary className="flex cursor-pointer list-none items-center gap-5 p-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-sm font-bold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex-1 text-lg font-semibold leading-snug text-white">{f.q}</h3>
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition group-open:border-transparent group-open:bg-brand-orange">
                  <span className="absolute h-0.5 w-3 bg-current" />
                  <span className="absolute h-3 w-0.5 bg-current transition group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="px-6 pb-7 leading-relaxed text-white/65 sm:pl-16 sm:pr-16">{f.a}</p>
            </details>
          ))}
        </div>
      </W>
    </section>
  );
}

export function V3Contact({
  title = "Tell us where you want to go",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <W className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <Pill>Get in touch</Pill>
          <H2 className="mt-6">{title}</H2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">{intro}</p>
          <SpotlightGroup className="mt-10 space-y-3">
            <Glass>
              <a href={`mailto:${site.email}`} className="relative flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                <span className="text-lg font-semibold">{site.email}</span>
              </a>
            </Glass>
            {site.offices.map((o) => (
              <Glass key={o.id}>
                <div className="relative flex items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  <span>
                    <span className="block font-semibold">{o.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/60">{o.address}</span>
                    <a href={o.phone.href} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline">
                      <Phone className="h-4 w-4" aria-hidden="true" /> {o.phone.display}
                    </a>
                  </span>
                </div>
              </Glass>
            ))}
          </SpotlightGroup>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative rounded-[2rem] bg-white p-6 text-ink shadow-[0_30px_80px_-30px_rgba(23,114,230,0.6)] sm:p-10">
            <p className="mb-6 text-xl font-semibold">Send us a message</p>
            <ContactForm />
          </div>
        </Reveal>
      </W>
    </section>
  );
}
