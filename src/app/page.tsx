import Image from "next/image";
import Link from "next/link";
import { Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Faqs } from "@/components/Faqs";
import { ContactSection } from "@/components/ContactSection";
import { PlatformArcs } from "@/components/PlatformArcs";
import { ButtonLink, Container, Highlight, JsonLd, Motif, SectionHeading } from "@/components/ui";
import { faqSchema, graph, type Faq } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  path: "/",
});

const services = [
  {
    icon: Search,
    title: "SEO services in Karachi and Pakistan",
    href: "/services/seo",
    link: "Explore SEO services",
    text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings.",
  },
  {
    icon: Share2,
    title: "Social media marketing in Karachi",
    href: "/services/social-services",
    link: "Explore social media marketing",
    text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count.",
  },
  {
    icon: Megaphone,
    title: "PPC and paid media advertising",
    href: "/services/paid-media",
    link: "Explore paid media services",
    text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data.",
  },
  {
    icon: Code2,
    title: "Web development in Karachi",
    href: "/services/web-development",
    link: "Explore web development",
    text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank.",
  },
  {
    icon: PenLine,
    title: "SEO content writing",
    href: "/services/content-writing",
    link: "Explore content writing",
    text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal.",
  },
  {
    icon: Palette,
    title: "Branding and creative services",
    href: "/services/creative-services",
    link: "Explore creative services",
    text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act.",
  },
];

const steps = [
  { title: "Audit", text: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { title: "Plan", text: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { title: "Execute", text: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { title: "Measure", text: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
];

const portfolio = [
  { src: "/images/portfolio/sporadic.webp", w: 789, h: 756, alt: "Sporadic music website design shown on desktop", cls: "md:row-span-2" },
  { src: "/images/portfolio/touchstone.webp", w: 396, h: 414, alt: "Touchstone Communications UX/UI website design for a BPO company", cls: "" },
  { src: "/images/portfolio/pheeka-responsive.webp", w: 792, h: 756, alt: "Pheeka diabetes awareness website design by Let Us Proceed, shown on mobile", cls: "md:row-span-2" },
  { src: "/images/portfolio/pheeka-web.webp", w: 396, h: 330, alt: "Pheeka diabetes awareness website design by Let Us Proceed", cls: "" },
];

const clients = [
  { src: "/images/clients/sybrid.webp", alt: "Sybrid logo", dark: true },
  { src: "/images/clients/admediary.webp", alt: "AdMediary logo", dark: false },
  { src: "/images/clients/bakecarry.webp", alt: "Bakecarry logo", dark: false },
  { src: "/images/clients/amantech.webp", alt: "Amantech (Aman Foundation) logo", dark: true },
];

const faqs: Faq[] = [
  {
    q: "What is Let Us Proceed?",
    a: "Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. It is part of Sybrid and the Lakson Group. Our 50+ person team provides SEO, social media marketing, paid media, content writing, branding and web development.",
  },
  {
    q: "What services does a digital marketing agency like Let Us Proceed offer?",
    a: "We offer six services: SEO, social media marketing, PPC and paid media, web development, SEO content writing, and branding and creative design. You can hire one service or combine several under a single plan, so your website, content and ads work toward the same goal.",
  },
  {
    q: "How much do digital marketing services cost in Pakistan?",
    a: "Prices depend on the services, your market's competition, the size of your website and your ad budget. We do not publish one fixed price because each plan is different. After a short review of your goals and current setup, we send a written quote with what is included.",
  },
  {
    q: "How long does SEO take to work?",
    a: "SEO usually takes several months to show steady results, and the time depends on competition, site health and content. Technical fixes can help sooner, while rankings for competitive keywords build over time. We set milestones in the plan and report on rankings, traffic and leads.",
  },
  {
    q: "Should I choose SEO or paid ads?",
    a: "Choose SEO if you want lasting organic traffic, and paid ads if you need visitors quickly. SEO takes longer but keeps working without paying per click. Many businesses use both: ads for immediate leads while SEO grows. We recommend a mix based on your goals and budget.",
  },
  {
    q: "Do you work with businesses outside Karachi?",
    a: "Yes. We serve businesses across Pakistan and work with brands in the United States and the UAE. Our Karachi office handles clients in Pakistan, and our Baldwin, New York office supports clients in the US. Most work is done remotely, with calls and regular reports.",
  },
  {
    q: "Do you build websites as well as market them?",
    a: "Yes. Our web development team builds WordPress, eCommerce and custom websites, from mockups to back-end. Because our SEO and content teams work in the same company, the site is planned for search from the start rather than fixed after launch.",
  },
  {
    q: "How do I get started with Let Us Proceed?",
    a: "To get started, send your details through our Get a Quote form or call our Karachi office. We review your goals and current website, then reply with a recommended plan and quote.",
  },
];

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

      {/* Services */}
      <section className="bg-brand-gradient py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Digital marketing services in Pakistan, under one roof"
            lead="We run six services from our Karachi office. Each one has its own page with scope, process and results."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.href}
                className={`flex flex-col rounded-3xl p-7 sm:p-8 ${i === 0 ? "bg-ink text-white" : "border border-brand-blue/40 bg-white/70 backdrop-blur"}`}
              >
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${i === 0 ? "bg-white text-ink" : "bg-brand-blue text-white"}`}>
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold uppercase leading-snug">{s.title}</h3>
                <p className={`mt-3 flex-1 leading-relaxed ${i === 0 ? "text-white/85" : "text-muted"}`}>{s.text}</p>
                <Link href={s.href} className={`mt-6 font-medium underline-offset-4 hover:underline ${i === 0 ? "text-brand-orange" : "text-brand-blue"}`}>
                  {s.link} →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="How our digital marketing process works" align="center" motif />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl bg-surface-soft p-7">
                <span className="font-display text-5xl font-semibold text-brand-blue/25" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading title="Our portfolio: branding, websites, social media, SEO and logo design" align="center" />
        </Container>
        <div className="mt-12 grid gap-3 px-3 md:grid-cols-[2fr_1fr_2fr] md:grid-rows-2">
          {portfolio.map((p) => (
            <figure key={p.src} className={`overflow-hidden rounded-2xl bg-surface-soft ${p.cls}`}>
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href="/case-study" className="font-medium text-brand-blue underline-offset-4 hover:underline">
            See the full results in our digital marketing case studies →
          </Link>
        </p>
      </section>

      {/* Join the team */}
      <section className="overflow-hidden bg-white">
        <Container className="grid items-end gap-10 lg:grid-cols-2">
          <div className="self-center py-10">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Join the Team</h2>
            <p className="mt-3 text-xl font-medium">We are Optimists who love to work together</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
              certain project until it&apos;s the best that could be delivered, and your own best critique, then
              Proceed is just the right place for you.
            </p>
            <p className="mt-6">
              See open roles on our{" "}
              <Link href="/careers" className="font-medium text-brand-blue underline-offset-4 hover:underline">
                Careers at Let Us Proceed
              </Link>{" "}
              page.
            </p>
          </div>
          <Image
            src="/images/join-team.webp"
            alt="Illustration of two team members, one holding a magnifying glass and one a megaphone"
            width={898}
            height={655}
            className="w-full"
          />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="Testimonials" align="center" motif />
          <figure className="mx-auto mt-12 grid max-w-5xl items-center gap-8 rounded-[2rem] bg-gradient-to-br from-sky-200/70 via-sky-100 to-white p-7 shadow-sm sm:p-12 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-display text-2xl font-medium uppercase sm:text-3xl">Concave Craft</p>
              <blockquote className="mt-4 space-y-4 leading-relaxed text-ink/85">
                <p>
                  Wanted to share my gratitude towards Proceed for the amazing job done in the past 6 months. Starting
                  with the strategy for 4 brands and executing 2 brands with end to end cycle of content development,
                  design execution, excellent social media strategy and execution, reporting and managing accounts.
                </p>
                <p>Overall I&apos;m really happy with the account management and swift responses over all communication channels.</p>
                <p>
                  Proceed is highly recommended for B2B &amp; B2C segments for brand development &amp; management, social
                  media strategy &amp; execution and one window solution for SEO &amp; web development services as per
                  business requirements.
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-ink">
                Concave Craft: brand strategy, content development, design, social media management and reporting.
              </figcaption>
            </div>
            <Image
              src="/images/clients/concave-craft.webp"
              alt="Concave Craft logo"
              width={252}
              height={250}
              className="mx-auto w-40 rounded-md shadow-lg ring-2 ring-ink md:w-48"
            />
          </figure>
        </Container>
      </section>

      {/* Clients */}
      <section className="pb-20 sm:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex items-center gap-8">
            <Motif className="hidden shrink-0 md:block" />
            <div>
              <h2 className="text-4xl font-medium uppercase tracking-tight sm:text-5xl">
                Our
                <br />
                <Highlight>Clients</Highlight>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                We believe in working together and growing together, which is what sets us apart from other digital
                marketing companies in Pakistan.
              </p>
            </div>
          </div>
          <ul className="grid w-full max-w-md grid-cols-2 gap-4 justify-self-center lg:justify-self-end">
            {clients.map((c) => (
              <li key={c.src} className={`flex aspect-square items-center justify-center rounded-3xl p-4 shadow-sm ring-1 ring-black/10 ${c.dark ? "bg-[#2a2a2a]" : "bg-white"}`}>
                <Image src={c.src} alt={c.alt} width={210} height={210} className="w-full rounded-xl" />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Global reach */}
      <section className="bg-brand-gradient py-20 sm:py-28">
        <Container className="text-center">
          <div className="flex items-center justify-center gap-6">
            <Motif className="hidden md:block" />
            <div>
              <p className="font-display text-3xl font-medium uppercase tracking-tight sm:text-5xl">You&apos;ve reached enough.</p>
              <p className="mt-3 font-display text-2xl font-medium uppercase sm:text-3xl">Now let&apos;s do the impossible</p>
            </div>
            <Motif className="hidden md:block" />
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-ink/85">
            We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
            Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
          </p>
          <h2 className="mx-auto mt-14 max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">
            Digital marketing in Karachi, across Pakistan and in the US
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office in
            Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
          </p>
          <PlatformArcs />
        </Container>
      </section>

      <Faqs title="Frequently asked questions about our digital marketing agency in Karachi" faqs={faqs} />

      <ContactSection
        title="Talk to a digital marketing agency in Karachi that is ready to proceed"
        intro="Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote."
      />
    </>
  );
}
