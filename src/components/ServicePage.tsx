import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "./PageHero";
import { Faqs } from "./Faqs";
import { ContactSection } from "./ContactSection";
import { BrandArt, ButtonLink, Container, JsonLd, LastUpdated, SectionHeading } from "./ui";
import { SmartGharCaseStudy } from "./SmartGharCaseStudy";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, type Faq } from "@/lib/schema";

export type ServiceData = {
  path: string;
  crumb: string;
  h1: string;
  tagline?: string;
  intro: string;
  cta: { label: string; href: string };
  tone: "blue" | "orange" | "red";
  cardsTitle: string;
  cardsLead?: string;
  cards: { title: string; text: string; icon: LucideIcon; links?: { label: string; href: string }[] }[];
  processTitle: string;
  processLead: string;
  steps: { title: string; text: string; links?: { label: string; href: string }[] }[];
  related?: { lead: string; links: { label: string; href: string }[] };
  caseStudy: { heading: string; work: string };
  faqsTitle: string;
  faqs: Faq[];
  contactIntro: string;
  schema: { name: string; serviceType: string; description: string };
};

function InlineLinks({ links }: { links?: { label: string; href: string }[] }) {
  if (!links?.length) return null;
  return (
    <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="font-medium text-brand-blue underline-offset-4 hover:underline">
          {l.label} →
        </Link>
      ))}
    </span>
  );
}

export function ServicePage({ data }: { data: ServiceData }) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: data.crumb, href: data.path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({ ...data.schema, href: data.path, offers: data.cards.map((c) => c.title) }),
          faqSchema(data.faqs),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        title={data.h1}
        tagline={data.tagline}
        intro={<p>{data.intro}</p>}
        actions={
          <>
            <ButtonLink href={data.cta.href}>{data.cta.label}</ButtonLink>
            <ButtonLink href="/case-study" variant="outline">See our case studies</ButtonLink>
          </>
        }
        footnote={<LastUpdated />}
        art={<BrandArt tone={data.tone} className="mx-auto w-full max-w-lg" />}
      />

      {/* Service cards */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title={data.cardsTitle} lead={data.cardsLead} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c) => (
              <article key={c.title} className="flex flex-col rounded-3xl border border-black/10 bg-white p-7 shadow-sm sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold uppercase leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{c.text}</p>
                <InlineLinks links={c.links} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-gradient py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <SectionHeading title={data.processTitle} lead={data.processLead} />
            <BrandArt tone={data.tone === "blue" ? "orange" : "blue"} className="mt-10 hidden w-full max-w-sm lg:block" />
          </div>
          <ol className="space-y-5">
            {data.steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-white/80 p-7 shadow-sm backdrop-blur sm:p-8">
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  Step #{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold uppercase">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                <InlineLinks links={s.links} />
              </li>
            ))}
          </ol>
        </Container>
        {data.related && (
          <Container className="mt-12">
            <p className="rounded-3xl bg-white p-6 text-ink shadow-sm sm:p-8">
              {data.related.lead}{" "}
              {data.related.links.map((l, i) => (
                <span key={l.href}>
                  <Link href={l.href} className="font-medium text-brand-blue underline-offset-4 hover:underline">
                    {l.label}
                  </Link>
                  {i < data.related!.links.length - 2 ? ", " : i === data.related!.links.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
          </Container>
        )}
      </section>

      <SmartGharCaseStudy heading={data.caseStudy.heading} work={data.caseStudy.work} />

      <Faqs title={data.faqsTitle} faqs={data.faqs} />

      <ContactSection intro={data.contactIntro} />
    </>
  );
}
