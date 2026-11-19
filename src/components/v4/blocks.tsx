import Link from "next/link";
import type { ReactNode } from "react";
import type { Crumb, Faq } from "@/lib/schema";
import { site } from "@/lib/site";
import type { ServiceData } from "../ServicePage";
import { ContactForm } from "../ContactForm";
import { Box, Btn4, C, H2b, PieceTile, Tag4, Wrap4, toV4 } from "./primitives";

/* ---------- Inner page hero ---------- */

export function V4PageHero({
  tag,
  title,
  intro,
  actions,
  crumbs,
  color = C.blue,
}: {
  tag: string;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  color?: string;
}) {
  return (
    <section className="v4-dots border-b-[3px] border-ink">
      <Wrap4 className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          {crumbs && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap gap-2 text-sm font-semibold">
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < crumbs.length - 1 ? (
                      <Link href={toV4(c.href)} className="bg-white px-1 underline underline-offset-2">{c.name}</Link>
                    ) : (
                      <span aria-current="page" className="bg-white px-1">{c.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <Tag4 bg={color}>{tag}</Tag4>
          <h1 className="mt-6 bg-white font-display text-[2.4rem] font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-2 border-[3px] border-ink bg-white" style={{ boxShadow: `10px 10px 0 0 ${C.ink}` }} aria-hidden="true">
          <PieceTile piece="a" className="aspect-square w-full border-b-[3px] border-r-[3px] border-ink" />
          <PieceTile piece="b" className="aspect-square w-full border-b-[3px] border-ink" />
          <PieceTile piece="c" className="aspect-square w-full border-r-[3px] border-ink" />
          <PieceTile piece="d" className="aspect-square w-full" />
        </div>
        {(intro || actions) && (
          <Box className="bg-white p-6 sm:p-8 lg:col-span-2">
            {intro && <div className="max-w-4xl space-y-4 text-lg leading-relaxed sm:text-xl">{intro}</div>}
            {actions && <div className="mt-6 flex flex-wrap gap-4">{actions}</div>}
          </Box>
        )}
      </Wrap4>
    </section>
  );
}

/* ---------- FAQ ---------- */

const faqColors = [C.orange, C.blue, C.red, C.deep];

export function V4Faq({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="border-t-[3px] border-ink bg-[#fff6ec] py-20 sm:py-24">
      <Wrap4>
        <Tag4 bg={C.blue}>FAQs</Tag4>
        <H2b className="mt-5 max-w-4xl text-3xl sm:text-5xl">{title}</H2b>
        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-start">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group v4-box border-[3px] border-ink bg-white" style={{ ["--sh" as string]: faqColors[i % 4] }}>
              <summary className="flex cursor-pointer list-none items-start gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <h3 className="flex-1 text-lg font-bold leading-snug">{f.q}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border-[3px] border-ink font-display text-lg font-extrabold leading-none transition group-open:rotate-45 group-open:bg-brand-orange">+</span>
              </summary>
              <p className="border-t-[3px] border-ink px-5 py-5 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Wrap4>
    </section>
  );
}

/* ---------- Contact ---------- */

export function V4Contact({
  title = "Tell us where you want to go",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="scroll-mt-20 border-t-[3px] border-ink bg-brand-blue py-20 sm:py-24">
      <Wrap4 className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="text-white">
          <Tag4 bg={C.orange}>Get in touch</Tag4>
          <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">{intro}</p>
          <div className="mt-10 space-y-4">
            <a href={`mailto:${site.email}`} className="v4-btn block border-[3px] border-ink bg-white px-5 py-4 text-lg font-bold text-ink">
              {site.email}
            </a>
            {site.offices.map((o, i) => (
              <a key={o.id} href={o.phone.href} className="v4-btn block border-[3px] border-ink px-5 py-4 text-ink" style={{ background: i ? C.orange : "#fff6ec" }}>
                <span className="block text-lg font-bold">{o.phone.display}</span>
                <span className="mt-1 block text-sm">{o.label}: {o.address}</span>
              </a>
            ))}
          </div>
        </div>
        <Box className="bg-white p-6 sm:p-10">
          <p className="mb-6 font-display text-xl font-extrabold uppercase">Send us a message</p>
          <ContactForm />
        </Box>
      </Wrap4>
    </section>
  );
}

/* ---------- Service page ---------- */

const toneHex = { blue: C.blue, orange: C.orange, red: C.red } as const;
const cardColors = [C.blue, C.orange, C.red, C.deep, C.orange, C.blue];

export function V4ServicePage({ data }: { data: ServiceData }) {
  const tone = toneHex[data.tone];
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: data.crumb, href: data.path }]}
        tag={data.crumb}
        color={tone}
        title={data.h1}
        intro={
          <>
            {data.tagline && <p className="font-display text-2xl font-extrabold uppercase">{data.tagline}</p>}
            <p>{data.intro}</p>
          </>
        }
        actions={
          <>
            <Btn4 href={data.cta.href}>{data.cta.label}</Btn4>
            <Btn4 href="/v4/case-study" bg="#fff">See our case studies</Btn4>
          </>
        }
      />

      <section className="py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={tone}>What&apos;s included</Tag4>
          <H2b className="mt-5 max-w-4xl">{data.cardsTitle}</H2b>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c, i) => (
              <Box key={c.title} as="article" hover shadow={cardColors[i % 6]} className="flex flex-col bg-white p-7">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center border-[3px] border-ink text-white" style={{ background: cardColors[i % 6] }}>
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-ink/15">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-extrabold uppercase leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{c.text}</p>
                {c.links?.map((l) => (
                  <Link key={l.href} href={toV4(l.href)} className="mt-4 font-bold underline decoration-[3px] underline-offset-4">{l.label} →</Link>
                ))}
              </Box>
            ))}
          </div>
        </Wrap4>
      </section>

      <section className="border-t-[3px] border-ink bg-ink py-20 text-white sm:py-24">
        <Wrap4>
          <Tag4 bg={C.orange}>Process</Tag4>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl">{data.processTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg text-white/80">{data.processLead}</p>
          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {data.steps.map((s, i) => (
              <li key={s.title} className="border-[3px] border-white p-7" style={{ boxShadow: `8px 8px 0 0 ${cardColors[i % 6]}` }}>
                <span className="font-display text-6xl font-extrabold" style={{ color: cardColors[i % 6] }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-2xl font-extrabold uppercase">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-white/85">{s.text}</p>
                {s.links?.map((l) => (
                  <Link key={l.href} href={toV4(l.href)} className="mt-3 inline-block font-bold text-brand-orange underline underline-offset-4">{l.label} →</Link>
                ))}
              </li>
            ))}
          </ol>
          {data.related && (
            <div className="mt-12 flex flex-wrap items-center gap-3 border-[3px] border-white p-6">
              <p className="mr-2 font-bold">{data.related.lead}</p>
              {data.related.links.map((l) => (
                <Link key={l.href} href={toV4(l.href)} className="border-2 border-white px-3 py-1.5 text-sm font-semibold hover:bg-white hover:text-ink">{l.label}</Link>
              ))}
            </div>
          )}
        </Wrap4>
      </section>

      <section className="py-20 sm:py-24">
        <Wrap4>
          <div className="v4-ticket grid border-[3px] border-ink lg:grid-cols-[1.4fr_1fr]" style={{ background: "#fff6ec" }}>
            <div className="p-8 sm:p-12 lg:border-r-[3px] lg:border-dashed lg:border-ink">
              <Tag4 bg={tone}>Proof</Tag4>
              <H2b className="mt-5 text-3xl sm:text-5xl">{data.caseStudy.heading}</H2b>
              <p className="mt-5 max-w-xl text-lg leading-relaxed">
                Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation
                products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the
                products as a solution to customers&apos; problems.
              </p>
              <Btn4 href="/v4/case-study" className="mt-8">See all our case studies</Btn4>
            </div>
            <ul className="grid border-t-[3px] border-dashed border-ink lg:border-t-0">
              {[["80%", "increase in overall sales growth", C.orange], ["95%", "increase in returning customers", C.blue], ["90%", "increase in conversion rate", C.red]].map(([v, l, c], i) => (
                <li key={l} className={`flex items-center gap-5 px-8 py-6 ${i ? "border-t-[3px] border-dashed border-ink" : ""}`}>
                  <span className="font-display text-5xl font-extrabold" style={{ color: c }}>{v}</span>
                  <span className="font-semibold">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </Wrap4>
      </section>

      <V4Faq title={data.faqsTitle} faqs={data.faqs} />
      <V4Contact intro={data.contactIntro} />
    </>
  );
}
