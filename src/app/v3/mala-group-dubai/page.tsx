import Link from "next/link";
import { CountUp, Reveal, SpotlightGroup } from "@/components/v3/client";
import { Cta, Glass, Grad, H2, Pill, W } from "@/components/v3/primitives";
import { V3Contact, V3Faq, V3PageHero } from "@/components/v3/blocks";
import { malaFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Mala Group Dubai SEO Case Study | Let Us Proceed",
  description: "How Let Us Proceed helped Mala Group, a Dubai destination management company, recover from a Google penalty and grow organic users and leads.",
  v1Path: "/mala-group-dubai",
});

const results = [
  { n: 18, label: "more organic new users", c: "#1772e6" },
  { n: 8, label: "lower bounce rate", c: "#f98a28" },
  { n: 17, label: "more sessions", c: "#c81418" },
  { n: 256, label: "more leads", c: "#0632c8" },
];

const actions = [
  "Fixed the issues behind the Google penalty by following Google's search guidelines.",
  "Reduced page load time so visitors reach the content faster.",
  "Improved internal linking so visitors find more pages and authority passes to the pages that matter most.",
  "Updated the homepage and product page content with relevant keywords, so each page targets its own search terms and pages stop competing with each other (keyword cannibalization).",
  "Ran blogger outreach to earn backlinks from relevant sites through guest posts, business listings and forum participation.",
];

export default function Page() {
  return (
    <>
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }, { name: "Mala Group Dubai", href: "/mala-group-dubai" }]}
        pill="Case study · SEO"
        title={<>Mala Group Dubai SEO Case Study: <Grad>Recovering from a Google Penalty</Grad></>}
        intro={<p>Let Us Proceed worked with Mala Group, a Dubai destination management company, to recover from a Google penalty and rebuild its search rankings. Organic new users rose 18% and leads rose 256%.</p>}
        actions={<Cta href="#results">See the results</Cta>}
      />

      <section className="py-16 sm:py-24">
        <W className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <Pill dot="#1772e6">About Mala Group</Pill>
              <p className="mt-6 text-xl leading-relaxed sm:text-2xl">
                Mala Group is a destination management company based in Dubai. Its website, mala.ae, is owned and operated
                by Mala Tourism LLC. The company runs its operations through its own infrastructure from its head office in Dubai.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <dl className="h-full divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-4">
              {[["Client", "Mala Group – Dubai"], ["Industry", "Travel & Tourism"], ["Services", "On-site SEO, off-site SEO and technical SEO"], ["Market", "Dubai, UAE"]].map(([k, v]) => (
                <div key={k} className="py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{k}</dt>
                  <dd className="mt-1 font-semibold">{k === "Services" ? <Link href="/v3/services/seo" className="underline underline-offset-4 hover:text-brand-orange">{v}</Link> : v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <Pill dot="#c81418">The Challenge</Pill>
            <H2 className="mt-6 text-3xl sm:text-5xl">Recovering from a Google Penalty and Boosting Rankings</H2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">Mala Group wanted more organic traffic and more leads from search, by ranking for high-volume travel keywords. When we started, the website ranked on the second and third pages of Google and had been penalized by Google in the past. Our job was to recover the website and restore its rankings.</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-[2rem] bg-gradient-to-br from-brand-red/80 to-[#1a0d10] p-8 sm:p-10">
              <h3 className="text-xl font-semibold">Key Issues</h3>
              <ul className="mt-6 space-y-4">
                {["Previous Google penalty", "Rankings stuck on pages 2 and 3", "Low organic traffic and lead generation"].map((k) => (
                  <li key={k} className="flex items-center gap-4 border-b border-white/15 pb-4 text-lg"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" />{k}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill>Our Actions: Strategy Implemented</Pill>
            <H2 className="mt-6 text-3xl sm:text-5xl">Our Recovery and Optimization Plan</H2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65">We made targeted technical, on-site and off-site improvements to remove the penalty, improve the user experience and build the website&apos;s authority.</p>
            <h3 className="mt-12 text-xl font-semibold">Actions Performed</h3>
          </Reveal>
          <SpotlightGroup className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {actions.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <Glass className="h-full p-6">
                  <div className="relative">
                    <span className="v3-grad font-display text-4xl font-semibold">0{i + 1}</span>
                    <p className="mt-4 leading-relaxed text-white/80">{a}</p>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </SpotlightGroup>
          <p className="mt-8 font-semibold text-white/80">We follow Google&apos;s search guidelines on every project.</p>
        </W>
      </section>

      <section id="results" className="scroll-mt-28 py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill dot="#f98a28">Results: Achieved Growth</Pill>
            <H2 className="mt-6 text-3xl sm:text-5xl">Results: Organic Traffic and <Grad>Leads Grew</Grad></H2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">After the recovery work, the website gained more organic visitors, kept more of them engaged and generated more leads.</p>
            <h3 className="sr-only">Key Results</h3>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r, i) => (
              <Reveal key={r.label} delay={i * 80}>
                <div className="relative flex h-full min-h-60 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-50 blur-3xl" style={{ background: r.c }} aria-hidden="true" />
                  <CountUp to={r.n} suffix="%" className="relative font-display text-6xl font-semibold sm:text-7xl" />
                  <span className="relative text-lg text-white/75">{r.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Cta href="/v3/contact-us">Get an SEO quote</Cta>
            <p className="text-sm text-white/50">Results vary by website and market.</p>
          </div>
          <p className="mt-6 text-white/70">
            <Link href="/v3/case-study" className="font-semibold underline underline-offset-4 hover:text-white">All case studies</Link>
            {" · "}
            <Link href="/v3/services/seo" className="font-semibold underline underline-offset-4 hover:text-white">SEO services</Link>
          </p>
        </W>
      </section>

      <V3Faq title="Mala Group SEO Case Study FAQs" faqs={malaFaqs} />
      <V3Contact intro="Tell us about your website and your goals, and we will reply with a recommended SEO plan and quote." />
    </>
  );
}
