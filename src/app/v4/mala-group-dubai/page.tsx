import Link from "next/link";
import { Box, Btn4, C, H2b, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4Contact, V4Faq, V4PageHero } from "@/components/v4/blocks";
import { malaFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Mala Group Dubai SEO Case Study | Let Us Proceed",
  description: "How Let Us Proceed helped Mala Group, a Dubai destination management company, recover from a Google penalty and grow organic users and leads.",
  v1Path: "/mala-group-dubai",
});

const results = [
  { v: "18%", l: "more organic new users", bg: C.blue, fg: "#fff" },
  { v: "8%", l: "lower bounce rate", bg: C.orange, fg: C.ink },
  { v: "17%", l: "more sessions", bg: C.red, fg: "#fff" },
  { v: "256%", l: "more leads", bg: C.ink, fg: "#fff" },
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
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }, { name: "Mala Group Dubai", href: "/mala-group-dubai" }]}
        tag="Case study · SEO"
        title="Mala Group Dubai SEO Case Study: Recovering from a Google Penalty"
        intro={<p>Let Us Proceed worked with Mala Group, a Dubai destination management company, to recover from a Google penalty and rebuild its search rankings. Organic new users rose 18% and leads rose 256%.</p>}
        actions={<Btn4 href="#results">See the results</Btn4>}
      />

      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Box className="bg-[#fff6ec] p-8 sm:p-10">
            <Tag4 bg={C.blue}>About Mala Group</Tag4>
            <p className="mt-5 text-xl leading-relaxed">
              Mala Group is a destination management company based in Dubai. Its website, mala.ae, is owned and operated
              by Mala Tourism LLC. The company runs its operations through its own infrastructure from its head office in Dubai.
            </p>
          </Box>
          <Box shadow={C.orange} className="bg-white">
            <dl>
              {[["Client", "Mala Group – Dubai"], ["Industry", "Travel & Tourism"], ["Services", "On-site SEO, off-site SEO and technical SEO"], ["Market", "Dubai, UAE"]].map(([k, v], i) => (
                <div key={k} className={`px-6 py-4 ${i ? "border-t-[3px] border-ink" : ""}`}>
                  <dt className="font-display text-xs font-extrabold uppercase tracking-[0.2em]">{k}</dt>
                  <dd className="mt-1 font-semibold">{k === "Services" ? <Link href="/v4/services/seo" className="underline decoration-[3px] underline-offset-4">{v}</Link> : v}</dd>
                </div>
              ))}
            </dl>
          </Box>
        </Wrap4>
      </section>

      <section className="border-t-[3px] border-ink bg-[#fff6ec] py-20 sm:py-24">
        <Wrap4 className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Tag4 bg={C.red}>The Challenge</Tag4>
            <H2b className="mt-5 text-3xl sm:text-5xl">Recovering from a Google Penalty and Boosting Rankings</H2b>
            <p className="mt-6 text-lg leading-relaxed">Mala Group wanted more organic traffic and more leads from search, by ranking for high-volume travel keywords. When we started, the website ranked on the second and third pages of Google and had been penalized by Google in the past. Our job was to recover the website and restore its rankings.</p>
          </div>
          <Box className="bg-brand-red p-8 text-white">
            <h3 className="font-display text-xl font-extrabold uppercase">Key Issues</h3>
            <ul className="mt-6 space-y-4">
              {["Previous Google penalty", "Rankings stuck on pages 2 and 3", "Low organic traffic and lead generation"].map((k) => (
                <li key={k} className="flex items-center gap-4 border-b-[3px] border-white/40 pb-4 text-lg font-semibold"><span className="h-4 w-4 shrink-0 border-[3px] border-white" />{k}</li>
              ))}
            </ul>
          </Box>
        </Wrap4>
      </section>

      <section className="border-t-[3px] border-ink py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.blue}>Our Actions: Strategy Implemented</Tag4>
          <H2b className="mt-5 text-3xl sm:text-5xl">Our Recovery and Optimization Plan</H2b>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">We made targeted technical, on-site and off-site improvements to remove the penalty, improve the user experience and build the website&apos;s authority.</p>
          <h3 className="mt-12 font-display text-xl font-extrabold uppercase">Actions Performed</h3>
          <ol className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {actions.map((a, i) => (
              <Box key={a} as="li" hover shadow={[C.blue, C.orange, C.red, C.deep, C.orange][i]} className="bg-white p-6">
                <span className="font-display text-4xl font-extrabold" style={{ color: [C.blue, C.orange, C.red, C.deep, C.orange][i] }}>0{i + 1}</span>
                <p className="mt-3 leading-relaxed">{a}</p>
              </Box>
            ))}
          </ol>
          <p className="mt-10 font-bold">We follow Google&apos;s search guidelines on every project.</p>
        </Wrap4>
      </section>

      <section id="results" className="scroll-mt-20 border-t-[3px] border-ink py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.orange}>Results: Achieved Growth</Tag4>
          <H2b className="mt-5 text-3xl sm:text-5xl">Results: Organic Traffic and Leads Grew</H2b>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">After the recovery work, the website gained more organic visitors, kept more of them engaged and generated more leads.</p>
          <h3 className="sr-only">Key Results</h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <Box key={r.l} className="flex min-h-56 flex-col justify-between p-7" style={{ background: r.bg, color: r.fg }}>
                <span className="font-display text-6xl font-extrabold sm:text-7xl">{r.v}</span>
                <span className="text-lg font-bold">{r.l}</span>
              </Box>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Btn4 href="/v4/contact-us">Get an SEO quote</Btn4>
            <p className="text-sm font-semibold">Results vary by website and market.</p>
          </div>
          <p className="mt-6 font-bold">
            <Link href="/v4/case-study" className="underline decoration-[3px] underline-offset-4">All case studies</Link>
            {" · "}
            <Link href="/v4/services/seo" className="underline decoration-[3px] underline-offset-4">SEO services</Link>
          </p>
        </Wrap4>
      </section>

      <V4Faq title="Mala Group SEO Case Study FAQs" faqs={malaFaqs} />
      <V4Contact intro="Tell us about your website and your goals, and we will reply with a recommended SEO plan and quote." />
    </>
  );
}
