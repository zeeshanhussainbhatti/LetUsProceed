import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SmartGharCaseStudy } from "@/components/SmartGharCaseStudy";
import { ContactSection } from "@/components/ContactSection";
import { BrandArt, Container, JsonLd, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Digital Marketing Case Studies | Let Us Proceed",
  description:
    "Digital marketing case studies from Let Us Proceed, a Karachi agency: SEO, web, social media and paid media work for clients in Pakistan, the UAE and the US.",
  path: "/case-study",
});

const studies = [
  {
    href: "/mala-group-dubai",
    client: "Mala Group – Dubai",
    industry: "Travel & Tourism",
    title: "Recovering from a Google penalty and growing leads",
    summary: "Technical, on-site and off-site SEO for a Dubai destination management company.",
    stats: ["18% more organic new users", "256% more leads"],
  },
];

export default function Page() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Case Study", href: "/case-study" },
  ];
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Our work, <span className="text-brand-blue">our results</span>
          </>
        }
        intro={
          <p>
            Case studies from Let Us Proceed, a digital marketing agency in Karachi. Each one explains the client&apos;s
            challenge, what our team did and the results we measured.
          </p>
        }
        art={<BrandArt tone="orange" className="mx-auto w-full max-w-lg" />}
      />
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Case studies" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {studies.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="group block h-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm text-muted">{s.client} · {s.industry}</p>
                  <h3 className="mt-3 text-2xl font-semibold group-hover:text-brand-blue">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.stats.map((t) => (
                      <li key={t} className="rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-medium text-brand-orange">{t}</li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-block font-medium text-brand-blue">Read the case study →</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <SmartGharCaseStudy heading="Case Study: Smart Ghar" showLink={false} />
      <ContactSection />
    </>
  );
}
