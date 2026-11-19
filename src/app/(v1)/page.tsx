import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Faqs } from "@/components/Faqs";
import { ContactSection } from "@/components/ContactSection";
import {
  ClientsSection,
  GlobalReachSection,
  JoinTeamSection,
  PortfolioSection,
  ProcessSection,
  TestimonialSection,
} from "@/components/HomeSections";
import { ServicesBento } from "@/components/ServicesBento";
import { ButtonLink, Container, Highlight, JsonLd, Motif } from "@/components/ui";
import { faqSchema, graph } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { homeFaqs as faqs } from "@/content/faqs";

export const metadata = pageMeta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  path: "/",
});


export default function Home() {
  return (
    <>
      <JsonLd data={graph(faqSchema(faqs))} />

      <PageHero
        title={
          <>
            Let&apos;s go big
            <br />
            <span className="text-brand-orange">Let you</span>
            <br />
            &amp; <span className="text-brand-blue">us Proceed</span>
          </>
        }
        tagline="A digital marketing agency in Karachi offering SEO, social media, paid ads, content, creative and web development, with teams in Karachi and New York."
        intro={
          <p>
            Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with a second office in Baldwin, New
            York. Part of Sybrid and the Lakson Group, our 50+ person team delivers SEO, social media marketing, paid
            media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/contact-us">Get a Quote</ButtonLink>
            <ButtonLink href="/case-study" variant="outline">See Our Work</ButtonLink>
          </>
        }
        art={
          <Image
            src="/images/hero-globe.webp"
            alt="Blue dotted globe showing the regions Let Us Proceed serves"
            width={1105}
            height={559}
            priority
            className="w-full"
          />
        }
        artClassName="self-end lg:-mb-20 lg:translate-x-16"
        titleClassName="text-5xl sm:text-6xl lg:text-7xl"
      />

      {/* Why choose */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex items-center justify-center gap-6 text-center">
            <Motif className="hidden md:block" />
            <h2 className="text-3xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
              Why choose Proceed
              <br />
              to go <Highlight>BIG</Highlight>
            </h2>
            <Motif className="hidden md:block" />
          </div>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/images/astronaut.webp"
              alt="Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed"
              width={855}
              height={522}
              className="w-full"
            />
            <div>
              <p className="text-lg leading-relaxed text-ink">
                Let Us Proceed is a Karachi digital marketing agency backed by Sybrid and the Lakson Group. We plan,
                build and run SEO, social media, paid ads, content, branding and websites as one connected plan, so
                every channel works toward the same goal.
              </p>
              <ul className="mt-8 space-y-6 border-l-4 border-brand-blue pl-6 sm:pl-10">
                <li>
                  <h3 className="font-semibold">Group backing</h3>
                  <p className="mt-1 text-muted">Let Us Proceed is part of Sybrid and the Lakson Group, so you work with an established organization.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Two offices</h3>
                  <p className="mt-1 text-muted">Our Karachi team works from Lakson Square, and our US office is in Baldwin, New York.</p>
                </li>
                <li>
                  <h3 className="font-semibold">A team of 50+</h3>
                  <p className="mt-1 text-muted">Strategists, designers, developers and writers sit in one company, so SEO, ads, content and web development follow the same plan.</p>
                </li>
                <li>
                  <p className="text-ink">We are not into making outlandish promises; we want you to see it all for yourself.</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ServicesBento />

      <ProcessSection />
      <PortfolioSection />
      <JoinTeamSection />
      <TestimonialSection />
      <ClientsSection />
      <GlobalReachSection />

      <Faqs title="Frequently asked questions about our digital marketing agency in Karachi" faqs={faqs} />

      <ContactSection
        title="Talk to a digital marketing agency in Karachi that is ready to proceed"
        intro="Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote."
      />
    </>
  );
}
