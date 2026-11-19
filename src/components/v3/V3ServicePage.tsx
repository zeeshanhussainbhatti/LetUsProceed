import Link from "next/link";
import type { ServiceData } from "../ServicePage";
import { Reveal, SpotlightGroup } from "./client";
import { Cta, Glass, Grad, H2, Pill, W, toV3 } from "./primitives";
import { V3Contact, V3Faq, V3PageHero } from "./blocks";

const toneHex = { blue: "#1772e6", orange: "#f98a28", red: "#c81418" } as const;

const stats = [
  { value: "80%", label: "increase in overall sales growth" },
  { value: "95%", label: "increase in returning customers" },
  { value: "90%", label: "increase in conversion rate" },
];

export function V3ServicePage({ data }: { data: ServiceData }) {
  const tone = toneHex[data.tone];
  return (
    <>
      <V3PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: data.crumb, href: data.path },
        ]}
        pill={data.crumb}
        dot={tone}
        title={data.h1}
        intro={
          <>
            {data.tagline && <p className="text-2xl font-semibold text-white"><Grad>{data.tagline}</Grad></p>}
            <p>{data.intro}</p>
          </>
        }
        actions={
          <>
            <Cta href={data.cta.href}>{data.cta.label}</Cta>
            <Cta href="/v3/case-study" variant="glass">See our case studies</Cta>
          </>
        }
      />

      <section className="py-20 sm:py-28">
        <W>
          <Reveal>
            <Pill dot={tone}>What&apos;s included</Pill>
            <H2 className="mt-6 max-w-4xl">{data.cardsTitle}</H2>
          </Reveal>
          <SpotlightGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <Glass as="article" className="h-full p-8">
                  <div className="relative flex h-full flex-col">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${tone}, #0632c8)` }}>
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-8 text-xl font-semibold leading-snug">{c.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-white/65">{c.text}</p>
                    {c.links?.map((l) => (
                      <Link key={l.href} href={toV3(l.href)} className="mt-4 font-semibold text-brand-orange hover:underline">{l.label} →</Link>
                    ))}
                  </div>
                </Glass>
              </Reveal>
            ))}
          </SpotlightGroup>
        </W>
      </section>

      {/* Sticky stacking steps */}
      <section className="py-20 sm:py-28">
        <W className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Pill>Process</Pill>
            <H2 className="mt-6 text-4xl sm:text-5xl">{data.processTitle}</H2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">{data.processLead}</p>
          </Reveal>
          <ol className="space-y-6">
            {data.steps.map((s, i) => (
              <li key={s.title} className="sticky" style={{ top: `${7 + i * 1.25}rem` }}>
                <div className="rounded-[2rem] border border-white/10 bg-[#11141c] p-8 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)] sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold text-white" style={{ background: i % 2 ? "#0632c8" : tone }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-white/65">{s.text}</p>
                  {s.links?.map((l) => (
                    <Link key={l.href} href={toV3(l.href)} className="mt-4 inline-block font-semibold text-brand-orange hover:underline">{l.label} →</Link>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </W>
        {data.related && (
          <W className="mt-16">
            <div className="flex flex-wrap items-center gap-3 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="mr-2 font-semibold">{data.related.lead}</p>
              {data.related.links.map((l) => (
                <Link key={l.href} href={toV3(l.href)} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition hover:border-white hover:bg-white hover:text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
          </W>
        )}
      </section>

      <section className="py-20 sm:py-28">
        <W>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 sm:p-14" style={{ background: `radial-gradient(circle at 90% 10%, ${tone}55, transparent 50%), #0f1219` }}>
              <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div>
                  <Pill dot={tone}>Proof</Pill>
                  <H2 className="mt-6 text-3xl sm:text-5xl">{data.caseStudy.heading}</H2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                    Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home
                    automation products through its online shop, smartghar.pk. The site had a high bounce rate and did
                    not present the products as a solution to customers&apos; problems.
                  </p>
                  <Cta href="/v3/case-study" variant="white" className="mt-8">See all our case studies</Cta>
                </div>
                <ul className="grid gap-3">
                  {stats.map((s) => (
                    <li key={s.label} className="flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
                      <span className="text-white/70">{s.label}</span>
                      <span className="v3-grad font-display text-5xl font-semibold">{s.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </W>
      </section>

      <V3Faq title={data.faqsTitle} faqs={data.faqs} />
      <V3Contact intro={data.contactIntro} />
    </>
  );
}
