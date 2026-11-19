import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { AnimatedMark, Btn, HalfRing, Kicker, Ticker, Wrap } from "@/components/v2/primitives";
import { V2Contact, V2Faq, V2NumberedList } from "@/components/v2/blocks";
import { homeFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  v1Path: "/",
});

const services = [
  { title: "SEO services in Karachi and Pakistan", href: "/v2/services/seo", text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings." },
  { title: "Social media marketing in Karachi", href: "/v2/services/social-services", text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count." },
  { title: "PPC and paid media advertising", href: "/v2/services/paid-media", text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data." },
  { title: "Web development in Karachi", href: "/v2/services/web-development", text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank." },
  { title: "SEO content writing", href: "/v2/services/content-writing", text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal." },
  { title: "Branding and creative services", href: "/v2/services/creative-services", text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act." },
];

const steps = [
  { title: "Audit", bg: "bg-brand-blue", text: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { title: "Plan", bg: "bg-brand-orange", text: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { title: "Execute", bg: "bg-brand-red", text: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { title: "Measure", bg: "bg-brand-blue-deep", text: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
];

const stats = [
  { value: "50+", label: "people in one team" },
  { value: "2", label: "offices: Karachi and New York" },
  { value: "6", label: "services under one roof" },
  { value: "3", label: "markets: Pakistan, US, UAE" },
];

const work = [
  { src: "/images/portfolio/sporadic.webp", w: 789, h: 756, name: "Sporadic", tag: "Music website", alt: "Sporadic music website design shown on desktop" },
  { src: "/images/portfolio/pheeka-responsive.webp", w: 792, h: 756, name: "Pheeka", tag: "Responsive design", alt: "Pheeka diabetes awareness website design by Let Us Proceed, shown on mobile" },
  { src: "/images/portfolio/touchstone.webp", w: 396, h: 414, name: "Touchstone Communications", tag: "UX/UI design", alt: "Touchstone Communications UX/UI website design for a BPO company" },
  { src: "/images/portfolio/pheeka-web.webp", w: 396, h: 330, name: "Pheeka", tag: "Web design", alt: "Pheeka diabetes awareness website design by Let Us Proceed" },
];

const clients = [
  { src: "/images/clients/sybrid.webp", alt: "Sybrid logo", dark: true },
  { src: "/images/clients/admediary.webp", alt: "AdMediary logo", dark: false },
  { src: "/images/clients/bakecarry.webp", alt: "Bakecarry logo", dark: false },
  { src: "/images/clients/amantech.webp", alt: "Amantech (Aman Foundation) logo", dark: true },
];

export default function HomeV2() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <Wrap className="relative">
          <Kicker>Digital marketing agency · Karachi &amp; New York</Kicker>
          <h1 className="mt-8 font-semibold uppercase leading-[0.92] tracking-tight">
            <span className="block whitespace-nowrap text-[11.2vw] lg:text-[8.6rem]">Let&apos;s go big</span>
            <span className="flex items-center gap-[0.25em] text-[11.2vw] lg:text-[8.6rem]">
              <span className="v2-outline [--stroke:#f98a28]">Let you</span>
              <AnimatedMark className="h-[0.85em] w-[0.85em] shrink-0" />
            </span>
            <span className="block whitespace-nowrap text-[11.2vw] lg:text-[8.6rem]">
              &amp; <span className="text-brand-blue">us Proceed</span>
            </span>
          </h1>
          <div className="mt-12 grid gap-8 border-t border-ink/15 pt-8 lg:grid-cols-[1fr_1fr_auto]">
            <p className="text-xl font-semibold leading-snug sm:text-2xl">
              A digital marketing agency in Karachi offering SEO, social media, paid ads, content, creative and web
              development, with teams in Karachi and New York.
            </p>
            <p className="leading-relaxed text-muted">
              Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with a second office in Baldwin, New
              York. Part of Sybrid and the Lakson Group, our 50+ person team delivers SEO, social media marketing, paid
              media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.
            </p>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Btn href="/v2/contact-us">Get a Quote</Btn>
              <Btn href="/v2/case-study" variant="line">See Our Work</Btn>
            </div>
          </div>
        </Wrap>
        <div className="mt-16 -rotate-1 bg-ink py-5 text-white">
          <Ticker items={["SEO", "Social Media", "Paid Media", "Web Development", "Content Writing", "Branding"]} />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <Wrap>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-ink/10 lg:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="bg-[#f6f3ee] p-6 sm:p-10">
                <span className="block font-display text-5xl font-semibold tracking-tight sm:text-7xl">{s.value}</span>
                <span className="mt-2 block text-muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      {/* Why */}
      <section className="pb-20 sm:pb-28">
        <Wrap className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative">
            <span className="absolute inset-6 rounded-full bg-white" aria-hidden="true" />
            <Image
              src="/images/astronaut.webp"
              alt="Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed"
              width={855}
              height={522}
              className="v2-float relative w-full"
            />
          </div>
          <div>
            <Kicker tone="orange">Why choose Proceed</Kicker>
            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">
              To go <span className="text-brand-orange">big</span>
            </h2>
            <p className="mt-6 text-xl leading-relaxed">
              Let Us Proceed is a Karachi digital marketing agency backed by Sybrid and the Lakson Group. We plan, build
              and run SEO, social media, paid ads, content, branding and websites as one connected plan, so every channel
              works toward the same goal.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { t: "Group backing", c: "border-brand-blue", d: "Let Us Proceed is part of Sybrid and the Lakson Group, so you work with an established organization." },
                { t: "Two offices", c: "border-brand-orange", d: "Our Karachi team works from Lakson Square, and our US office is in Baldwin, New York." },
                { t: "A team of 50+", c: "border-brand-red", d: "Strategists, designers, developers and writers sit in one company, so SEO, ads, content and web development follow the same plan." },
              ].map((p) => (
                <div key={p.t} className={`border-t-4 pt-4 ${p.c}`}>
                  <h3 className="font-semibold uppercase">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 font-display text-lg font-medium italic">
              We are not into making outlandish promises; we want you to see it all for yourself.
            </p>
          </div>
        </Wrap>
      </section>

      {/* Services */}
      <section className="bg-white py-20 sm:py-28">
        <Wrap>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Kicker>What we do</Kicker>
              <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">
                Digital marketing services in Pakistan, under one roof
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted">
              We run six services from our Karachi office. Each one has its own page with scope, process and results.
            </p>
          </div>
          <div className="mt-14">
            <V2NumberedList items={services} />
          </div>
        </Wrap>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <Wrap>
          <Kicker>How we work</Kicker>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">
            How our digital marketing process works
          </h2>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className={`group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] p-7 text-white ${s.bg}`}>
                <span className="font-display text-8xl font-semibold leading-none text-white/25 transition duration-500 group-hover:-translate-y-2 group-hover:text-white/40" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold uppercase">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      {/* Work */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Wrap>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Kicker tone="orange">Selected work</Kicker>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">
                Our portfolio: branding, websites, social media, SEO and logo design
              </h2>
            </div>
            <Btn href="/v2/case-study" variant="white">All case studies</Btn>
          </div>

          <Link href="/v2/mala-group-dubai" className="group relative mt-14 grid overflow-hidden rounded-[2rem] bg-brand-blue p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <HalfRing color="#0632c8" className="pointer-events-none absolute -bottom-2 right-0 w-96 opacity-70 transition duration-700 group-hover:scale-110" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Case study · Mala Group, Dubai</p>
              <h3 className="mt-4 text-3xl font-semibold uppercase leading-tight sm:text-4xl">Recovering from a Google penalty and growing leads</h3>
              <span className="mt-8 inline-flex items-center gap-3 font-semibold">
                Read the case study
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </span>
            </div>
            <div className="relative mt-10 flex gap-10 lg:mt-0 lg:justify-end">
              <p>
                <span className="block font-display text-6xl font-semibold sm:text-8xl">256%</span>
                <span className="text-white/80">more leads</span>
              </p>
              <p>
                <span className="block font-display text-6xl font-semibold sm:text-8xl">18%</span>
                <span className="text-white/80">more organic new users</span>
              </p>
            </div>
          </Link>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {work.map((p) => (
              <figure key={p.src} className="group relative overflow-hidden rounded-[2rem] bg-white/5">
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
                  {p.name} <span className="font-normal text-muted">· {p.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-[auto_1fr]">
          <div className="flex items-start gap-6 lg:flex-col">
            <Image src="/images/clients/concave-craft.webp" alt="Concave Craft logo" width={252} height={250} className="w-28 rounded-2xl shadow-lg sm:w-40" />
            <div>
              <p className="font-display text-xl font-semibold uppercase">Concave Craft</p>
              <p className="mt-1 max-w-[14rem] text-sm text-muted">Brand strategy, content development, design, social media management and reporting.</p>
            </div>
          </div>
          <figure>
            <Quote className="h-14 w-14 fill-brand-orange text-brand-orange" aria-hidden="true" />
            <blockquote className="mt-6">
              <p className="font-display text-2xl font-medium leading-snug sm:text-4xl">
                Wanted to share my gratitude towards Proceed for the amazing job done in the past 6 months. Starting with
                the strategy for 4 brands and executing 2 brands with end to end cycle of content development, design
                execution, excellent social media strategy and execution, reporting and managing accounts.
              </p>
              <div className="mt-8 grid gap-6 text-lg leading-relaxed text-muted md:grid-cols-2">
                <p>Overall I&apos;m really happy with the account management and swift responses over all communication channels.</p>
                <p>
                  Proceed is highly recommended for B2B &amp; B2C segments for brand development &amp; management, social
                  media strategy &amp; execution and one window solution for SEO &amp; web development services as per
                  business requirements.
                </p>
              </div>
            </blockquote>
            <figcaption className="sr-only">Concave Craft: brand strategy, content development, design, social media management and reporting.</figcaption>
          </figure>
        </Wrap>
      </section>

      {/* Clients */}
      <section className="pb-20 sm:pb-28">
        <Wrap>
          <div className="grid gap-8 rounded-[2rem] bg-white p-8 sm:p-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <Kicker>Our clients</Kicker>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We believe in working together and growing together, which is what sets us apart from other digital
                marketing companies in Pakistan.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {clients.map((c) => (
                <li key={c.src} className={`flex aspect-square items-center justify-center rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${c.dark ? "bg-[#2a2a2a]" : "bg-[#f6f3ee]"}`}>
                  <Image src={c.src} alt={c.alt} width={210} height={210} className="w-full rounded-xl" />
                </li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      {/* Global reach */}
      <section className="relative overflow-hidden bg-brand-blue-deep py-20 text-white sm:py-28">
        <Image src="/images/hero-globe.webp" alt="" width={1105} height={559} className="pointer-events-none absolute -bottom-6 right-[-10%] w-[900px] max-w-none opacity-30" />
        <Wrap className="relative">
          <p className="font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            You&apos;ve reached enough.
            <br />
            <span className="text-brand-orange">Now let&apos;s do the impossible</span>
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
            We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
            Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
          </p>
          <div className="mt-16 grid gap-10 border-t border-white/20 pt-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">Digital marketing in Karachi, across Pakistan and in the US</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office
                in Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
              </p>
            </div>
            <ul className="space-y-2 font-display text-3xl font-semibold uppercase sm:text-5xl">
              <li className="flex items-baseline justify-between border-b border-white/15 pb-2">Karachi <span className="text-sm font-medium normal-case text-white/60">Headquarters</span></li>
              <li className="flex items-baseline justify-between border-b border-white/15 pb-2">New York <span className="text-sm font-medium normal-case text-white/60">US office</span></li>
              <li className="flex items-baseline justify-between border-b border-white/15 pb-2">UAE <span className="text-sm font-medium normal-case text-white/60">Client market</span></li>
            </ul>
          </div>
          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Platforms we market on">
            {["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube", "X", "Pinterest", "Snapchat"].map((p) => (
              <li key={p} className="rounded-full border border-white/30 px-4 py-2 text-sm">{p}</li>
            ))}
          </ul>
        </Wrap>
      </section>

      {/* Join the team */}
      <section className="py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Kicker tone="orange">Careers</Kicker>
            <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">Join the Team</h2>
            <p className="mt-4 text-xl font-semibold">We are Optimists who love to work together</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
              certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed
              is just the right place for you.
            </p>
            <p className="mt-8 text-muted">
              See open roles on our{" "}
              <Link href="/v2/careers" className="font-semibold text-ink underline underline-offset-4 hover:text-brand-blue">
                Careers at Let Us Proceed
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6">
            <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
          </div>
        </Wrap>
      </section>

      <V2Faq title="Frequently asked questions about our digital marketing agency in Karachi" faqs={homeFaqs} />
      <V2Contact title="Talk to a digital marketing agency in Karachi that is ready to proceed" />
    </>
  );
}
