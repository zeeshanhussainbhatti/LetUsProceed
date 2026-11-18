import Link from "next/link";
import type { ServiceData } from "../ServicePage";
import { Btn, HalfRing, Kicker, Wrap, toV2 } from "./primitives";
import { V2Contact, V2Faq, V2PageHero } from "./blocks";

const toneHex = { blue: "#1772e6", orange: "#f98a28", red: "#c81418" } as const;

const stats = [
  { value: "80%", label: "increase in overall sales growth" },
  { value: "95%", label: "increase in returning customers" },
  { value: "90%", label: "increase in conversion rate" },
];

export function V2ServicePage({ data }: { data: ServiceData }) {
  const tone = toneHex[data.tone];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: data.crumb, href: data.path },
  ];
  return (
    <>
      <V2PageHero
        crumbs={crumbs}
        kicker={data.crumb}
        title={data.h1}
        tone={tone}
        intro={
          <>
            {data.tagline && <p className="font-display text-2xl font-semibold text-ink">{data.tagline}</p>}
            <p>{data.intro}</p>
          </>
        }
        actions={
          <>
            <Btn href={data.cta.href}>{data.cta.label}</Btn>
            <Btn href="/v2/case-study" variant="line">See our case studies</Btn>
          </>
        }
      />

      {/* What's included */}
      <section className="bg-white py-20 sm:py-28">
        <Wrap>
          <Kicker>What&apos;s included</Kicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">{data.cardsTitle}</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c, i) => (
              <article key={c.title} className="group relative flex flex-col overflow-hidden bg-white p-8 transition duration-300 hover:bg-[#f6f3ee] sm:p-10">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full text-white transition duration-500 group-hover:rotate-12"
                    style={{ background: i % 2 ? "#1d1d1f" : tone }}
                  >
                    <c.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold uppercase leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{c.text}</p>
                {c.links?.map((l) => (
                  <Link key={l.href} href={toV2(l.href)} className="mt-4 font-semibold text-ink underline underline-offset-4 hover:text-brand-blue">
                    {l.label}
                  </Link>
                ))}
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Process: vertical timeline */}
      <section className="py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker tone="orange">Process</Kicker>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-5xl">{data.processTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{data.processLead}</p>
          </div>
          <ol className="relative border-l-2 border-ink/15 pl-8 sm:pl-12">
            {data.steps.map((s, i) => (
              <li key={s.title} className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[3.05rem] top-0 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-white ring-8 ring-[#f6f3ee] sm:-left-[4.05rem]"
                  style={{ background: [tone, "#1d1d1f"][i % 2] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold uppercase">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{s.text}</p>
                {s.links?.map((l) => (
                  <Link key={l.href} href={toV2(l.href)} className="mt-3 inline-block font-semibold underline underline-offset-4 hover:text-brand-blue">
                    {l.label}
                  </Link>
                ))}
              </li>
            ))}
          </ol>
        </Wrap>
        {data.related && (
          <Wrap className="mt-16">
            <div className="flex flex-wrap items-center gap-3 rounded-[2rem] bg-white p-6 sm:p-8">
              <p className="mr-2 font-semibold">{data.related.lead}</p>
              {data.related.links.map((l) => (
                <Link key={l.href} href={toV2(l.href)} className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition hover:border-ink hover:bg-ink hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
          </Wrap>
        )}
      </section>

      {/* Case study */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <HalfRing color={tone} className="pointer-events-none absolute -bottom-2 -right-10 w-[30rem] opacity-30" />
        <Wrap className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <Kicker tone="orange">Proof</Kicker>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-5xl">{data.caseStudy.heading}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation
              products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the
              products as a solution to customers&apos; problems.
            </p>
            <Btn href="/v2/case-study" variant="white" className="mt-8">See all our case studies</Btn>
          </div>
          <ul className="space-y-4">
            {stats.map((s) => (
              <li key={s.label} className="flex items-baseline gap-6 border-b border-white/25 pb-4">
                <span className="font-display text-6xl font-semibold sm:text-7xl" style={{ color: tone }}>{s.value}</span>
                <span className="text-white/85">{s.label}</span>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <V2Faq title={data.faqsTitle} faqs={data.faqs} />
      <V2Contact intro={data.contactIntro} />
    </>
  );
}
