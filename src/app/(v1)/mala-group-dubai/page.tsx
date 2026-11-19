import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faqs } from "@/components/Faqs";
import { ContactSection } from "@/components/ContactSection";
import { BrandArt, ButtonLink, Container, JsonLd } from "@/components/ui";
import { breadcrumbSchema, faqSchema, graph, orgId } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { malaFaqs as faqs } from "@/content/faqs";
import { site } from "@/lib/site";

const title = "Mala Group Dubai SEO Case Study | Let Us Proceed";
const description =
  "How Let Us Proceed helped Mala Group, a Dubai destination management company, recover from a Google penalty and grow organic users and leads.";

export const metadata = pageMeta({ title, description, path: "/mala-group-dubai", type: "article" });

const results = [
  { value: "18%", label: "more organic new users" },
  { value: "8%", label: "lower bounce rate" },
  { value: "17%", label: "more sessions" },
  { value: "256%", label: "more leads" },
];


function Callout({ text, href, label }: { text: string; href: string; label: string }) {
  return (
    <div className="mt-8 rounded-2xl bg-brand-orange p-6 text-white">
      <p className="font-medium">{text}</p>
      <Link href={href} className="mt-3 inline-block font-semibold underline underline-offset-4">
        {label}
      </Link>
    </div>
  );
}

export default function Page() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Case Study", href: "/case-study" },
    { name: "Mala Group Dubai", href: "/mala-group-dubai" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Article",
            headline: "Mala Group Dubai SEO Case Study: Recovering from a Google Penalty",
            description,
            url: `${site.url}/mala-group-dubai`,
            author: { "@id": orgId },
            publisher: { "@id": orgId },
            about: { "@type": "Organization", name: "Mala Group", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
          },
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        showContacts={false}
        title="Mala Group Dubai SEO Case Study: Recovering from a Google Penalty"
        titleClassName="text-3xl sm:text-4xl lg:text-5xl"
        intro={
          <p>
            Let Us Proceed worked with Mala Group, a Dubai destination management company, to recover from a Google
            penalty and rebuild its search rankings. Organic new users rose 18% and leads rose 256%.
          </p>
        }
        actions={<ButtonLink href="#results">See the results</ButtonLink>}
        art={<BrandArt tone="blue" className="mx-auto w-full max-w-lg" />}
      />

      {/* About the client */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-[2rem] bg-[#f6f2ef] p-7 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="inline-block rounded-full bg-white px-3 py-1 text-sm"><strong>Client:</strong> Mala Group – Dubai</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">About Mala Group</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Mala Group is a destination management company based in Dubai. Its website, mala.ae, is owned and
                operated by Mala Tourism LLC. The company runs its operations through its own infrastructure from its
                head office in Dubai.
              </p>
              <Callout text="Want the same kind of SEO work for your website? Tell us about your site and your goals." href="/contact-us" label="Talk to us about SEO" />
            </div>
            <div className="self-center rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">Industry &amp; Services</h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li><strong className="text-ink">Industry:</strong> Travel &amp; Tourism</li>
                <li>
                  <strong className="text-ink">Services:</strong> on-site SEO, off-site SEO and technical SEO (
                  <Link href="/services/seo" className="text-brand-blue hover:underline">SEO services</Link>)
                </li>
                <li><strong className="text-ink">Market:</strong> Dubai, UAE</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="pb-20 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <BrandArt tone="red" className="mx-auto w-full max-w-md" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">The Challenge</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Recovering from a Google Penalty and Boosting Rankings</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Mala Group wanted more organic traffic and more leads from search, by ranking for high-volume travel
              keywords. When we started, the website ranked on the second and third pages of Google and had been
              penalized by Google in the past. Our job was to recover the website and restore its rankings.
            </p>
            <h3 className="mt-6 text-xl font-semibold">Key Issues</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              <li>Previous Google penalty</li>
              <li>Rankings stuck on pages 2 and 3</li>
              <li>Low organic traffic and lead generation</li>
            </ul>
            <Callout text="We worked through the penalty and the performance problems one by one." href="#plan" label="See what we did" />
          </div>
        </Container>
      </section>

      {/* Actions */}
      <section id="plan" className="scroll-mt-10 bg-[#f6f2ef] py-20 sm:py-24">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Our Actions: Strategy Implemented</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Our Recovery and Optimization Plan</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We made targeted technical, on-site and off-site improvements to remove the penalty, improve the user
            experience and build the website&apos;s authority.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Actions Performed</h3>
          <ol className="mt-4 space-y-3">
            {[
              "Fixed the issues behind the Google penalty by following Google's search guidelines.",
              "Reduced page load time so visitors reach the content faster.",
              "Improved internal linking so visitors find more pages and authority passes to the pages that matter most.",
              "Updated the homepage and product page content with relevant keywords, so each page targets its own search terms and pages stop competing with each other (keyword cannibalization).",
              "Ran blogger outreach to earn backlinks from relevant sites through guest posts, business listings and forum participation.",
            ].map((a, i) => (
              <li key={a} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="font-display text-xl font-semibold text-brand-blue">{i + 1}</span>
                <span className="leading-relaxed text-ink">{a}</span>
              </li>
            ))}
          </ol>
          <Callout text="We follow Google's search guidelines on every project." href="#results" label="See the results" />
        </Container>
      </section>

      {/* Results */}
      <section id="results" className="scroll-mt-10 py-20 sm:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Results: Achieved Growth</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Results: Organic Traffic and Leads Grew</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            After the recovery work, the website gained more organic visitors, kept more of them engaged and generated
            more leads.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Key Results</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <li key={r.label} className="rounded-3xl bg-ink p-7 text-white">
                <span className="block font-display text-5xl font-semibold text-brand-orange">{r.value}</span>
                <span className="mt-2 block text-white/85">{r.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-brand-orange p-6 text-white">
            <p className="font-medium">Want to see what SEO can do for your website? Tell us about your site and your goals.</p>
            <Link href="/contact-us" className="mt-3 inline-block font-semibold underline underline-offset-4">Get an SEO quote</Link>
            <p className="mt-2 text-sm text-white/85">Results vary by website and market.</p>
          </div>
          <p className="mt-6">
            <Link href="/case-study" className="font-medium text-brand-blue hover:underline">All case studies</Link>
            {" · "}
            <Link href="/services/seo" className="font-medium text-brand-blue hover:underline">SEO services</Link>
          </p>
        </Container>
      </section>

      <Faqs title="Mala Group SEO Case Study FAQs" faqs={faqs} />
      <ContactSection intro="Tell us about your website and your goals, and we will reply with a recommended SEO plan and quote." />
    </>
  );
}
