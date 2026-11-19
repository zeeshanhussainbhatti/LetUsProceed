import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Crumb, Faq } from "@/lib/schema";
import { site } from "@/lib/site";
import { ContactForm } from "../ContactForm";
import { AnimatedMark, HalfRing, Kicker, Wrap, toV2 } from "./primitives";

/* ---------- Inner page hero ---------- */

export function V2PageHero({
  kicker,
  title,
  intro,
  actions,
  crumbs,
  tone = "#1772e6",
  aside,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  tone?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <HalfRing color={tone} className="v2-float pointer-events-none absolute -right-16 top-28 w-72 rotate-[200deg] opacity-15 sm:w-[28rem]" />
      <Wrap className="relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap gap-2">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < crumbs.length - 1 ? (
                    <Link href={toV2(c.href)} className="hover:text-ink">{c.name}</Link>
                  ) : (
                    <span aria-current="page" className="text-ink">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Kicker>{kicker}</Kicker>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <h1 className="text-[2.6rem] font-semibold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
          {aside ?? <AnimatedMark className="hidden w-44 justify-self-end lg:block" />}
        </div>
        {(intro || actions) && (
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-[1.6fr_1fr]">
            {intro && <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/80 sm:text-xl">{intro}</div>}
            {actions && <div className="flex flex-wrap items-start gap-3 lg:justify-end">{actions}</div>}
          </div>
        )}
      </Wrap>
    </section>
  );
}

/* ---------- Numbered list of services / items that fills with colour on hover ---------- */

export type ListItem = { title: string; text: string; href?: string; linkLabel?: string };

const accents = ["#1772e6", "#c81418", "#f98a28", "#0632c8", "#1772e6", "#f98a28"];

export function V2NumberedList({ items }: { items: ListItem[] }) {
  return (
    <ol className="border-t border-ink/15">
      {items.map((it, i) => {
        const accent = accents[i % accents.length];
        const body = (
          <>
            <span
              className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
              style={{ background: accent }}
              aria-hidden="true"
            />
            <span className="relative grid gap-4 py-8 sm:grid-cols-[5rem_1fr_1.2fr_auto] sm:items-center sm:gap-8">
              <span className="font-display text-sm font-semibold text-muted transition group-hover:text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold uppercase leading-tight tracking-tight transition group-hover:text-white sm:text-3xl">
                {it.title}
              </h3>
              <p className="leading-relaxed text-muted transition group-hover:text-white/90">{it.text}</p>
              {it.href ? (
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              ) : (
                <span />
              )}
            </span>
          </>
        );
        return (
          <li key={it.title} className="group relative overflow-hidden border-b border-ink/15 px-2 sm:px-4">
            {it.href ? (
              <Link href={it.href} className="block">
                {body}
              </Link>
            ) : (
              body
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* ---------- FAQ ---------- */

export function V2Faq({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="py-20 sm:py-28">
      <Wrap className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Kicker>Questions</Kicker>
          <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-6 text-muted">
            Something else on your mind? Write to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-ink underline underline-offset-4">{site.email}</a>.
          </p>
        </div>
        <div className="border-t border-ink/15">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-start gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="flex-1 text-lg font-semibold leading-snug sm:text-xl">{f.q}</h3>
                <span className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white transition group-open:bg-brand-orange">
                  <span className="absolute h-0.5 w-3 bg-current" />
                  <span className="absolute h-3 w-0.5 bg-current transition group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-3xl pb-7 pr-14 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ---------- Contact ---------- */

export function V2Contact({
  title = "Tell us where you want to go",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Wrap className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Kicker tone="orange">Get in touch</Kicker>
          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{intro}</p>
          <div className="mt-10 space-y-3">
            <a href={`mailto:${site.email}`} className="group flex items-center gap-4 rounded-2xl bg-[#f6f3ee] p-5 transition hover:bg-ink hover:text-white">
              <Mail className="h-6 w-6 text-brand-orange" aria-hidden="true" />
              <span className="text-lg font-semibold">{site.email}</span>
            </a>
            {site.offices.map((o) => (
              <a key={o.id} href={o.phone.href} className="group flex items-start gap-4 rounded-2xl bg-[#f6f3ee] p-5 transition hover:bg-ink hover:text-white">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-brand-blue" aria-hidden="true" />
                <span>
                  <span className="block text-lg font-semibold">{o.phone.display}</span>
                  <span className="mt-1 block text-sm text-muted group-hover:text-white/70">
                    {o.label}: {o.address}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[#f6f3ee] p-6 sm:p-10">
          <ContactForm />
        </div>
      </Wrap>
    </section>
  );
}
