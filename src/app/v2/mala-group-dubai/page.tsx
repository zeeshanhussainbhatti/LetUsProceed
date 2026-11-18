import Link from "next/link";
import { Btn, HalfRing, Kicker, Wrap } from "@/components/v2/primitives";
import { V2Contact, V2Faq, V2PageHero } from "@/components/v2/blocks";
import { malaFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Mala Group Dubai SEO Case Study | Let Us Proceed",
  description: "How Let Us Proceed helped Mala Group, a Dubai destination management company, recover from a Google penalty and grow organic users and leads.",
  v1Path: "/mala-group-dubai",
});

const results = [
  { value: "18%", label: "more organic new users", bg: "bg-brand-blue" },
  { value: "8%", label: "lower bounce rate", bg: "bg-brand-orange" },
  { value: "17%", label: "more sessions", bg: "bg-brand-red" },
  { value: "256%", label: "more leads", bg: "bg-ink" },
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
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }, { name: "Mala Group Dubai", href: "/mala-group-dubai" }]}
        kicker="Case study · SEO"
        title="Mala Group Dubai SEO Case Study: Recovering from a Google Penalty"
        intro={<p>Let Us Proceed worked with Mala Group, a Dubai destination management company, to recover from a Google penalty and rebuild its search rankings. Organic new users rose 18% and leads rose 256%.</p>}
        actions={<Btn href="#results">See the results</Btn>}
      />

      <section className="bg-white py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Kicker>About Mala Group</Kicker>
            <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
              Mala Group is a destination management company based in Dubai. Its website, mala.ae, is owned and operated
              by Mala Tourism LLC. The company runs its operations through its own infrastructure from its head office in Dubai.
            </p>
          </div>
          <dl className="grid gap-px self-start overflow-hidden rounded-[2rem] bg-ink/10">
            {[
              ["Client", "Mala Group – Dubai"],
              ["Industry", "Travel & Tourism"],
              ["Services", "On-site SEO, off-site SEO and technical SEO"],
              ["Market", "Dubai, UAE"],
            ].map(([k, v]) => (
              <div key={k} className="bg-[#f6f3ee] px-6 py-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted">{k}</dt>
                <dd className="mt-1 font-semibold">{k === "Services" ? <Link href="/v2/services/seo" className="underline underline-offset-4">{v}</Link> : v}</dd>
              </div>
            ))}
          </dl>
        </Wrap>
      </section>

      <section className="py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker tone="orange">The Challenge</Kicker>
            <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight sm:text-5xl">Recovering from a Google Penalty and Boosting Rankings</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">Mala Group wanted more organic traffic and more leads from search, by ranking for high-volume travel keywords. When we started, the website ranked on the second and third pages of Google and had been penalized by Google in the past. Our job was to recover the website and restore its rankings.</p>
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <h3 className="text-xl font-semibold uppercase">Key Issues</h3>
            <ul className="mt-6 space-y-4">
              {["Previous Google penalty", "Rankings stuck on pages 2 and 3", "Low organic traffic and lead generation"].map((k) => (
                <li key={k} className="flex items-center gap-4 border-b border-white/15 pb-4 text-lg"><span className="h-3 w-3 shrink-0 rounded-full bg-brand-red" />{k}</li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Wrap>
          <Kicker>Our Actions: Strategy Implemented</Kicker>
          <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight sm:text-5xl">Our Recovery and Optimization Plan</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">We made targeted technical, on-site and off-site improvements to remove the penalty, improve the user experience and build the website&apos;s authority.</p>
          <h3 className="mt-12 text-xl font-semibold uppercase">Actions Performed</h3>
          <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {actions.map((a, i) => (
              <li key={a} className="rounded-[1.5rem] bg-[#f6f3ee] p-6">
                <span className="font-display text-4xl font-semibold text-brand-blue">0{i + 1}</span>
                <p className="mt-4 leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-semibold">We follow Google&apos;s search guidelines on every project.</p>
        </Wrap>
      </section>

      <section id="results" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
        <HalfRing color="#1772e6" className="v2-float pointer-events-none absolute -right-20 top-10 w-80 rotate-180 opacity-15" />
        <Wrap className="relative">
          <Kicker tone="orange">Results: Achieved Growth</Kicker>
          <h2 className="mt-5 text-3xl font-semibold uppercase leading-tight sm:text-5xl">Results: Organic Traffic and Leads Grew</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">After the recovery work, the website gained more organic visitors, kept more of them engaged and generated more leads.</p>
          <h3 className="sr-only">Key Results</h3>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <li key={r.label} className={`flex min-h-64 flex-col justify-between rounded-[2rem] p-8 text-white ${r.bg}`}>
                <span className="font-display text-6xl font-semibold sm:text-7xl">{r.value}</span>
                <span className="text-lg text-white/90">{r.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Btn href="/v2/contact-us">Get an SEO quote</Btn>
            <p className="text-sm text-muted">Results vary by website and market.</p>
          </div>
          <p className="mt-6">
            <Link href="/v2/case-study" className="font-semibold underline underline-offset-4">All case studies</Link>
            {" · "}
            <Link href="/v2/services/seo" className="font-semibold underline underline-offset-4">SEO services</Link>
          </p>
        </Wrap>
      </section>

      <V2Faq title="Mala Group SEO Case Study FAQs" faqs={malaFaqs} />
      <V2Contact intro="Tell us about your website and your goals, and we will reply with a recommended SEO plan and quote." />
    </>
  );
}
