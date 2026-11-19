import Link from "next/link";
import { Bars5, Button5, Card5, Heading5, W5 } from "@/components/v5/ui5";
import { V5Contact, V5Faq, V5PageHero } from "@/components/v5/blocks5";
import { malaFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Mala Group Dubai SEO Case Study | Let Us Proceed",
  description: "How Let Us Proceed helped Mala Group, a Dubai destination management company, recover from a Google penalty and grow organic users and leads.",
  v1Path: "/mala-group-dubai",
});

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
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }, { name: "Mala Group Dubai", href: "/mala-group-dubai" }]}
        eyebrow="Case study · SEO"
        title="Mala Group Dubai SEO Case Study: Recovering from a Google Penalty"
        intro={<p>Let Us Proceed worked with Mala Group, a Dubai destination management company, to recover from a Google penalty and rebuild its search rankings. Organic new users rose 18% and leads rose 256%.</p>}
        actions={<Button5 href="#results">See the results</Button5>}
      />

      <section className="pb-16">
        <W5 className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Card5 className="p-8">
            <Heading5 eyebrow="About Mala Group" title="A destination management company in Dubai" />
            <p className="mt-4 leading-relaxed text-muted">Mala Group is a destination management company based in Dubai. Its website, mala.ae, is owned and operated by Mala Tourism LLC. The company runs its operations through its own infrastructure from its head office in Dubai.</p>
          </Card5>
          <Card5 className="p-2">
            <dl className="divide-y divide-black/[0.07]">
              {[["Client", "Mala Group – Dubai"], ["Industry", "Travel & Tourism"], ["Services", "On-site SEO, off-site SEO and technical SEO"], ["Market", "Dubai, UAE"]].map(([k, v]) => (
                <div key={k} className="px-6 py-4">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="font-medium text-ink">{k === "Services" ? <Link href="/v5/services/seo" className="text-brand-blue hover:underline">{v}</Link> : v}</dd>
                </div>
              ))}
            </dl>
          </Card5>
        </W5>
      </section>

      <section className="bg-surface-soft py-20">
        <W5 className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Heading5 eyebrow="The Challenge" title="Recovering from a Google Penalty and Boosting Rankings" />
            <p className="mt-5 text-lg leading-relaxed text-muted">Mala Group wanted more organic traffic and more leads from search, by ranking for high-volume travel keywords. When we started, the website ranked on the second and third pages of Google and had been penalized by Google in the past. Our job was to recover the website and restore its rankings.</p>
          </div>
          <Card5 className="p-8">
            <h3 className="text-lg font-semibold text-ink">Key Issues</h3>
            <ul className="mt-5 space-y-3">
              {["Previous Google penalty", "Rankings stuck on pages 2 and 3", "Low organic traffic and lead generation"].map((k) => (
                <li key={k} className="flex items-center gap-3 text-ink/85"><span className="h-2 w-2 rounded-full bg-brand-red" />{k}</li>
              ))}
            </ul>
          </Card5>
        </W5>
      </section>

      <section className="py-20">
        <W5>
          <Heading5 eyebrow="Our Actions: Strategy Implemented" title="Our Recovery and Optimization Plan" lead="We made targeted technical, on-site and off-site improvements to remove the penalty, improve the user experience and build the website's authority." />
          <h3 className="mt-12 text-lg font-semibold text-ink">Actions Performed</h3>
          <ol className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {actions.map((a, i) => (
              <Card5 key={a} as="li" className="p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white">{i + 1}</span>
                <p className="mt-4 leading-relaxed text-ink/85">{a}</p>
              </Card5>
            ))}
          </ol>
          <p className="mt-8 font-medium text-ink">We follow Google&apos;s search guidelines on every project.</p>
        </W5>
      </section>

      <section id="results" className="scroll-mt-24 bg-surface-soft py-20">
        <W5 className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Heading5 eyebrow="Results: Achieved Growth" title="Results: Organic Traffic and Leads Grew" lead="After the recovery work, the website gained more organic visitors, kept more of them engaged and generated more leads." />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button5 href="/v5/contact-us">Get an SEO quote</Button5>
              <p className="text-sm text-muted">Results vary by website and market.</p>
            </div>
            <p className="mt-6 text-sm">
              <Link href="/v5/case-study" className="font-semibold text-brand-blue hover:underline">All case studies</Link>
              {" · "}
              <Link href="/v5/services/seo" className="font-semibold text-brand-blue hover:underline">SEO services</Link>
            </p>
          </div>
          <Card5 className="p-8">
            <h3 className="mb-6 text-lg font-semibold text-ink">Key Results</h3>
            <div className="mb-8 grid grid-cols-2 gap-4">
              {[["18%", "more organic new users"], ["8%", "lower bounce rate"], ["17%", "more sessions"], ["256%", "more leads"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-surface-soft p-4">
                  <p className="text-3xl font-semibold tracking-tight text-ink">{v}</p>
                  <p className="text-sm text-muted">{l}</p>
                </div>
              ))}
            </div>
            <Bars5 items={[{ label: "More leads", value: 256, color: "#f98a28" }, { label: "More organic new users", value: 18, color: "#1772e6" }, { label: "More sessions", value: 17, color: "#0632c8" }, { label: "Lower bounce rate", value: 8, color: "#c81418" }]} />
          </Card5>
        </W5>
      </section>

      <V5Faq title="Mala Group SEO Case Study FAQs" faqs={malaFaqs} />
      <V5Contact intro="Tell us about your website and your goals, and we will reply with a recommended SEO plan and quote." />
    </>
  );
}
