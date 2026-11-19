import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import type { Crumb, Faq } from "@/lib/schema";
import { site } from "@/lib/site";
import type { ServiceData } from "../ServicePage";
import { ContactForm } from "../ContactForm";
import { SocialLinks } from "../ui";
import { Bars5, Button5, Card5, Heading5, TextLink5, W5, toV5 } from "./ui5";

/* ---------- Page hero (inner pages) ---------- */

export function V5PageHero({
  eyebrow,
  title,
  intro,
  actions,
  crumbs,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  image?: { src: string; w: number; h: number; alt: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#eaf2ff] to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <W5 className={`relative grid gap-12 pb-16 pt-12 sm:pb-20 sm:pt-16 ${image ? "lg:grid-cols-[1.2fr_1fr] lg:items-center" : ""}`}>
        <div>
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {i < crumbs.length - 1 ? (
                      <Link href={toV5(c.href)} className="hover:text-ink">{c.name}</Link>
                    ) : (
                      <span aria-current="page" className="text-ink">{c.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <Heading5 as="h1" eyebrow={eyebrow} title={title} />
          {intro && <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">{intro}</div>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {image && (
          <Card5 className="overflow-hidden p-4">
            <Image src={image.src} alt={image.alt} width={image.w} height={image.h} priority className="w-full rounded-2xl" />
          </Card5>
        )}
      </W5>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function V5Faq({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="bg-surface-soft py-20 sm:py-24">
      <W5 className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading5 eyebrow="FAQs" title={title} />
          <p className="mt-5 text-muted">
            Can&apos;t find your answer? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a>.
          </p>
        </div>
        <div className="divide-y divide-black/[0.07] rounded-3xl border border-black/[0.07] bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-semibold leading-snug text-ink">{f.q}</h3>
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-soft text-brand-blue transition group-open:bg-brand-blue group-open:text-white">
                  <span className="absolute h-0.5 w-3 rounded bg-current" />
                  <span className="absolute h-3 w-0.5 rounded bg-current transition group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-6 pr-10 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </W5>
    </section>
  );
}

/* ---------- Contact ---------- */

export function V5Contact({
  title = "Let's talk about your goals",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="scroll-mt-24 py-20 sm:py-24">
      <W5>
        <Card5 className="grid overflow-hidden lg:grid-cols-[1fr_1.25fr]">
          <div className="relative bg-gradient-to-br from-brand-blue to-brand-blue-deep p-8 text-white sm:p-12">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border-[40px] border-white/10" aria-hidden="true" />
            <h2 className="text-[1.9rem] font-semibold leading-tight tracking-tight sm:text-[2.3rem]">{title}</h2>
            <p className="mt-4 leading-relaxed text-white/85">{intro}</p>
            <ul className="mt-6 space-y-2 text-white/90">
              {["We review your website and channels", "We reply with a recommended plan and quote", "Teams in Karachi and New York"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-orange" aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <address className="relative mt-10 space-y-5 not-italic">
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-semibold hover:underline">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                {site.email}
              </a>
              {site.offices.map((o) => (
                <div key={o.id} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="text-sm leading-relaxed">
                    <span className="block font-semibold">{o.label}</span>
                    <span className="block text-white/80">{o.address}</span>
                    <a href={o.phone.href} className="mt-1 inline-flex items-center gap-1.5 font-semibold hover:underline">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {o.phone.display}
                    </a>
                  </span>
                </div>
              ))}
            </address>
          </div>
          <div className="p-6 sm:p-12">
            <p className="mb-6 text-xl font-semibold text-ink">Send us a message</p>
            <ContactForm />
          </div>
        </Card5>
      </W5>
    </section>
  );
}

/* ---------- Closing CTA band ---------- */

export function V5Cta() {
  return (
    <section className="pb-20 sm:pb-24">
      <W5>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-white sm:px-14">
          <svg viewBox="0 0 645 645" className="pointer-events-none absolute -right-16 -top-10 w-72 opacity-90 sm:w-96" aria-hidden="true">
            <rect x="484" y="0" width="161" height="323" fill="#1772e6" />
            <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
            <path d="M484 323H645A242 242 0 0 0 484 95Z" fill="#0632c8" />
            <rect x="0" y="323" width="161" height="322" fill="#f98a28" />
            <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
            <path d="M161 323H0A242 242 0 0 0 161 551Z" fill="#c81418" />
          </svg>
          <div className="relative max-w-xl">
            <p className="text-sm font-semibold text-brand-orange">Ready when you are</p>
            <p className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.6rem]">Let&apos;s go big. Let you &amp; us Proceed.</p>
            <p className="mt-4 text-white/75">Tell us your goals and we will recommend the right mix of services.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button5 href="/v5/contact-us">Get a Quote</Button5>
              <Button5 href="/v5/case-study" variant="white">See Our Work</Button5>
            </div>
          </div>
        </div>
      </W5>
    </section>
  );
}

/* ---------- Footer ---------- */

export function V5Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-white">
      <W5 className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/proceed-mark.svg" alt="Let Us Proceed logo" width={34} height={34} className="h-[34px] w-[34px]" />
            <span className="text-[26px] font-semibold tracking-tight">Proceed</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            A digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. Part of Sybrid Pvt.
            Ltd., a strategic business unit of the Lakson Group of Companies.
          </p>
          <SocialLinks className="mt-6 flex-wrap [&_a]:h-10 [&_a]:w-10 [&_a]:border-black/15" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
            {[...site.nav, { label: "Mala Group Case Study", href: "/mala-group-dubai" }, { label: "Get in Touch", href: "/contact-us" }].map((l) => (
              <li key={l.href}><Link href={toV5(l.href)} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Services</p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
            {site.services.map((l) => (
              <li key={l.href}><Link href={toV5(l.href)} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold text-ink">Policies</p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
            {site.policies.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <address className="space-y-5 not-italic">
          <p className="text-sm font-semibold text-ink">Offices</p>
          {site.offices.map((o) => (
            <div key={o.id} className="text-[15px]">
              <p className="font-medium text-ink">{o.label}</p>
              <p className="mt-1 leading-relaxed text-muted">{o.address}</p>
              <a href={o.phone.href} className="mt-1 inline-block font-medium text-brand-blue">{o.phone.display}</a>
            </div>
          ))}
          <a href={`mailto:${site.email}`} className="block font-medium text-brand-blue">{site.email}</a>
        </address>
      </W5>
      <W5 className="flex flex-col gap-3 border-t border-black/[0.07] py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© 2026 Let Us Proceed. All rights reserved.</p>
        <p className="flex flex-wrap gap-4">
          {[["Version 1", "/"], ["Version 2", "/v2"], ["Version 3", "/v3"], ["Version 4", "/v4"]].map(([l, h]) => (
            <Link key={h} href={h} className="hover:text-ink">{l}</Link>
          ))}
        </p>
      </W5>
    </footer>
  );
}

/* ---------- Service page ---------- */

const smartGhar = [
  { label: "Increase in overall sales growth", value: 80, color: "#1772e6" },
  { label: "Increase in returning customers", value: 95, color: "#f98a28" },
  { label: "Increase in conversion rate", value: 90, color: "#0632c8" },
];

export function V5ServicePage({ data }: { data: ServiceData }) {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: data.crumb, href: data.path }]}
        eyebrow={data.crumb}
        title={data.h1}
        intro={
          <>
            {data.tagline && <p className="text-xl font-semibold text-ink">{data.tagline}</p>}
            <p>{data.intro}</p>
          </>
        }
        actions={
          <>
            <Button5 href={data.cta.href}>{data.cta.label}</Button5>
            <Button5 href="/v5/case-study" variant="secondary">See our case studies</Button5>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <W5>
          <Heading5 eyebrow="What's included" title={data.cardsTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c) => (
              <Card5 key={c.title} as="article" className="flex flex-col p-7 transition hover:-translate-y-1 hover:border-brand-blue/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{c.text}</p>
                {c.links?.map((l) => (
                  <span key={l.href} className="mt-4"><TextLink5 href={toV5(l.href)}>{l.label}</TextLink5></span>
                ))}
              </Card5>
            ))}
          </div>
        </W5>
      </section>

      <section className="bg-surface-soft py-16 sm:py-20">
        <W5>
          <Heading5 eyebrow="Process" title={data.processTitle} lead={data.processLead} />
          <ol className="relative mt-12 grid gap-5 md:grid-cols-2">
            {data.steps.map((s, i) => (
              <Card5 key={s.title} as="li" className="p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{s.text}</p>
                {s.links?.map((l) => (
                  <span key={l.href} className="mt-3 block"><TextLink5 href={toV5(l.href)}>{l.label}</TextLink5></span>
                ))}
              </Card5>
            ))}
          </ol>
          {data.related && (
            <p className="mt-10 text-muted">
              {data.related.lead}{" "}
              {data.related.links.map((l, i) => (
                <span key={l.href}>
                  <Link href={toV5(l.href)} className="font-semibold text-brand-blue hover:underline">{l.label}</Link>
                  {i < data.related!.links.length - 2 ? ", " : i === data.related!.links.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
          )}
        </W5>
      </section>

      <section className="py-16 sm:py-20">
        <W5>
          <Card5 className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Heading5 eyebrow="Case study" title={data.caseStudy.heading} />
              <p className="mt-5 leading-relaxed text-muted">
                Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation
                products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the
                products as a solution to customers&apos; problems.
              </p>
              <div className="mt-6"><TextLink5 href="/v5/case-study">See all our case studies</TextLink5></div>
            </div>
            <div className="rounded-2xl bg-surface-soft p-6 sm:p-8">
              <p className="mb-5 text-sm font-semibold text-ink">Smart Ghar results</p>
              <Bars5 items={smartGhar} />
            </div>
          </Card5>
        </W5>
      </section>

      <V5Faq title={data.faqsTitle} faqs={data.faqs} />
      <V5Contact intro={data.contactIntro} />
    </>
  );
}
