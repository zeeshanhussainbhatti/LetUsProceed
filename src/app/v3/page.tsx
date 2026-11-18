import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { CountUp, PointerGlow, Reveal, ServiceExplorer, SpotlightGroup, type ExplorerItem } from "@/components/v3/client";
import { Aurora, Cta, Glass, Grad, H2, Mark, Pill, W } from "@/components/v3/primitives";
import { V3Contact, V3Faq } from "@/components/v3/blocks";
import { homeFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  v1Path: "/",
});

const explorer: ExplorerItem[] = [
  { key: "seo", label: "SEO", color: "#1772e6", href: "/v3/services/seo", title: "SEO services in Karachi and Pakistan", text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings.", tags: ["Technical SEO", "On-page SEO", "Off-page SEO", "Site audit"] },
  { key: "social", label: "Social Media", color: "#c81418", href: "/v3/services/social-services", title: "Social media marketing in Karachi", text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count.", tags: ["Management", "Query handling", "Strategy", "Audits"] },
  { key: "paid", label: "Paid Media", color: "#f98a28", href: "/v3/services/paid-media", title: "PPC and paid media advertising", text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data.", tags: ["Awareness", "Traffic", "Conversions", "Remarketing"] },
  { key: "web", label: "Web Development", color: "#0632c8", href: "/v3/services/web-development", title: "Web development in Karachi", text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank.", tags: ["WordPress", "eCommerce", "Custom builds", "SEO-friendly"] },
  { key: "content", label: "Content Writing", color: "#1772e6", href: "/v3/services/content-writing", title: "SEO content writing", text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal.", tags: ["Web copy", "Blogs", "Articles", "PR"] },
  { key: "creative", label: "Creative", color: "#f98a28", href: "/v3/services/creative-services", title: "Branding and creative services", text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act.", tags: ["Logos", "Brand identity", "Campaign creative", "Video"] },
];

const steps = [
  { title: "Audit", c: "#1772e6", text: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { title: "Plan", c: "#f98a28", text: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { title: "Execute", c: "#c81418", text: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { title: "Measure", c: "#0632c8", text: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
];

const work = [
  { src: "/images/portfolio/sporadic.webp", w: 789, h: 756, name: "Sporadic", tag: "Music website", alt: "Sporadic music website design shown on desktop" },
  { src: "/images/portfolio/pheeka-responsive.webp", w: 792, h: 756, name: "Pheeka", tag: "Responsive design", alt: "Pheeka diabetes awareness website design by Let Us Proceed, shown on mobile" },
  { src: "/images/portfolio/touchstone.webp", w: 396, h: 414, name: "Touchstone Communications", tag: "UX/UI design", alt: "Touchstone Communications UX/UI website design for a BPO company" },
  { src: "/images/portfolio/pheeka-web.webp", w: 396, h: 330, name: "Pheeka", tag: "Web design", alt: "Pheeka diabetes awareness website design by Let Us Proceed" },
];

const clients = [
  { src: "/images/clients/sybrid.webp", alt: "Sybrid logo" },
  { src: "/images/clients/admediary.webp", alt: "AdMediary logo" },
  { src: "/images/clients/bakecarry.webp", alt: "Bakecarry logo" },
  { src: "/images/clients/amantech.webp", alt: "Amantech (Aman Foundation) logo" },
  { src: "/images/clients/concave-craft.webp", alt: "Concave Craft logo" },
];

export default function HomeV3() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <Aurora />
        <div className="v3-grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <PointerGlow />
        <W className="relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal>
              <Pill>Digital marketing agency · Karachi &amp; New York</Pill>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-[3.2rem] font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.6rem]">
                Let&apos;s go big
                <br />
                <span className="text-white/45">Let you &amp; us</span>
                <br />
                <Grad>Proceed</Grad>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-xl font-medium leading-snug text-white/90">
                A digital marketing agency in Karachi offering SEO, social media, paid ads, content, creative and web
                development, with teams in Karachi and New York.
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-white/60">
                Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with a second office in Baldwin, New
                York. Part of Sybrid and the Lakson Group, our 50+ person team delivers SEO, social media marketing, paid
                media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Cta href="/v3/contact-us">Get a Quote</Cta>
                <Cta href="/v3/case-study" variant="glass">See Our Work</Cta>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-brand-blue/30 blur-3xl" aria-hidden="true" />
            <div className="v2-float relative">
              <Mark className="mx-auto w-3/4 drop-shadow-[0_30px_60px_rgba(23,114,230,0.45)]" />
            </div>
            {[
              { t: "SEO", cls: "left-0 top-6" },
              { t: "Paid Media", cls: "right-0 top-1/3" },
              { t: "Web Development", cls: "bottom-4 left-4" },
            ].map((c) => (
              <span key={c.t} className={`absolute ${c.cls} rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md`}>
                {c.t}
              </span>
            ))}
          </Reveal>
        </W>

        <W className="relative mt-20">
          <SpotlightGroup className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { n: 50, s: "+", l: "people in one team" },
              { n: 2, s: "", l: "offices: Karachi and New York" },
              { n: 6, s: "", l: "services under one roof" },
              { n: 3, s: "", l: "markets: Pakistan, US, UAE" },
            ].map((x) => (
              <Glass key={x.l} className="p-6 sm:p-8">
                <p className="relative">
                  <CountUp to={x.n} suffix={x.s} className="block font-display text-5xl font-semibold sm:text-6xl" />
                  <span className="mt-2 block text-sm text-white/60">{x.l}</span>
                </p>
              </Glass>
            ))}
          </SpotlightGroup>
        </W>
      </section>

      {/* Clients strip */}
      <section className="border-y border-white/10 py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Brands we work with</p>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track gap-5">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <span key={i} className="flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/90 p-2">
                <Image src={c.src} alt="" width={140} height={140} className="max-h-full w-auto object-contain" />
              </span>
            ))}
          </div>
        </div>
        <ul className="sr-only">
          {clients.slice(0, 4).map((c) => <li key={c.src}>{c.alt.replace(" logo", "")}</li>)}
        </ul>
      </section>

      {/* Why — bento */}
      <section className="py-20 sm:py-28">
        <W>
          <Reveal>
            <Pill dot="#1772e6">Why choose Proceed</Pill>
            <H2 className="mt-6">Why choose Proceed to go <Grad>BIG</Grad></H2>
          </Reveal>
          <SpotlightGroup className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <Reveal className="lg:col-span-2">
              <Glass className="h-full p-8 sm:p-10">
                <div className="relative grid h-full gap-8 sm:grid-cols-[1.2fr_1fr] sm:items-center">
                  <p className="text-2xl font-medium leading-snug">
                    Let Us Proceed is a Karachi digital marketing agency backed by Sybrid and the Lakson Group. We plan,
                    build and run SEO, social media, paid ads, content, branding and websites as one connected plan, so
                    every channel works toward the same goal.
                  </p>
                  <Image src="/images/astronaut.webp" alt="Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed" width={855} height={522} className="w-full rounded-2xl" />
                </div>
              </Glass>
            </Reveal>
            {[
              { t: "Group backing", c: "#1772e6", d: "Let Us Proceed is part of Sybrid and the Lakson Group, so you work with an established organization." },
              { t: "Two offices", c: "#f98a28", d: "Our Karachi team works from Lakson Square, and our US office is in Baldwin, New York." },
              { t: "A team of 50+", c: "#c81418", d: "Strategists, designers, developers and writers sit in one company, so SEO, ads, content and web development follow the same plan." },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <Glass className="h-full p-8">
                  <div className="relative">
                    <span className="block h-1.5 w-12 rounded-full" style={{ background: p.c }} />
                    <h3 className="mt-6 text-xl font-semibold">{p.t}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{p.d}</p>
                  </div>
                </Glass>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <div className="flex h-full items-end rounded-[1.75rem] bg-gradient-to-br from-brand-orange to-brand-red p-8">
                <p className="text-xl font-semibold leading-snug">We are not into making outlandish promises; we want you to see it all for yourself.</p>
              </div>
            </Reveal>
          </SpotlightGroup>
        </W>
      </section>

      {/* Service explorer */}
      <section className="relative py-20 sm:py-28">
        <W>
          <Reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Pill>What we do</Pill>
              <H2 className="mt-6">Digital marketing services in Pakistan, <Grad>under one roof</Grad></H2>
            </div>
            <p className="text-lg leading-relaxed text-white/60">We run six services from our Karachi office. Each one has its own page with scope, process and results.</p>
          </Reveal>
          <Reveal className="mt-14">
            <ServiceExplorer items={explorer} />
          </Reveal>
        </W>
      </section>

      {/* Process — stacking cards */}
      <section className="py-20 sm:py-28">
        <W className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Pill dot="#c81418">How we work</Pill>
            <H2 className="mt-6">How our digital marketing process works</H2>
            <p className="mt-6 max-w-md text-white/60">Four steps, one plan, every channel pulling in the same direction.</p>
          </Reveal>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="sticky" style={{ top: `${7 + i * 1.5}rem` }}>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141c] p-8 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)] sm:p-10">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl" style={{ background: s.c }} aria-hidden="true" />
                  <span className="relative font-display text-7xl font-semibold text-white/10">0{i + 1}</span>
                  <h3 className="relative mt-2 text-3xl font-semibold">{s.title}</h3>
                  <p className="relative mt-4 max-w-lg text-lg leading-relaxed text-white/65">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </W>
      </section>

      {/* Work */}
      <section className="py-20 sm:py-28">
        <W>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Pill>Selected work</Pill>
              <H2 className="mt-6 max-w-4xl">Our portfolio: branding, websites, social media, SEO and logo design</H2>
            </div>
            <Cta href="/v3/case-study" variant="glass">All case studies</Cta>
          </Reveal>

          <Reveal className="mt-14">
            <Link href="/v3/mala-group-dubai" className="group relative block overflow-hidden rounded-[2.5rem] p-8 sm:p-14" style={{ background: "radial-gradient(circle at 15% 20%, #1772e6, transparent 55%), radial-gradient(circle at 90% 90%, #f98a28, transparent 50%), #0f1219" }}>
              <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Case study · Mala Group, Dubai</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Recovering from a Google penalty and growing leads</h3>
                  <span className="mt-8 inline-flex items-center gap-3 font-semibold">
                    Read the case study
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
                  </span>
                </div>
                <div className="flex gap-10 lg:justify-end">
                  <p><span className="block font-display text-6xl font-semibold sm:text-8xl">256%</span><span className="text-white/75">more leads</span></p>
                  <p><span className="block font-display text-6xl font-semibold sm:text-8xl">18%</span><span className="text-white/75">more organic new users</span></p>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:px-8">
            {work.map((p) => (
              <figure key={p.src} className="group relative w-[80%] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-white/10 sm:w-[46%] lg:w-[38%]">
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-6 pt-16">
                  <span className="block text-lg font-semibold">{p.name}</span>
                  <span className="text-sm text-white/70">{p.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 text-sm text-white/40">Swipe or scroll sideways to see more →</p>
        </W>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28">
        <W>
          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-blue via-white/20 to-brand-orange p-px">
              <figure className="grid gap-10 rounded-[2.5rem] bg-[#0d1017] p-8 sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <Quote className="h-12 w-12 fill-brand-orange text-brand-orange" aria-hidden="true" />
                  <blockquote className="mt-6 space-y-5">
                    <p className="text-2xl font-medium leading-snug sm:text-3xl">
                      Wanted to share my gratitude towards Proceed for the amazing job done in the past 6 months. Starting
                      with the strategy for 4 brands and executing 2 brands with end to end cycle of content development,
                      design execution, excellent social media strategy and execution, reporting and managing accounts.
                    </p>
                    <p className="leading-relaxed text-white/60">Overall I&apos;m really happy with the account management and swift responses over all communication channels.</p>
                    <p className="leading-relaxed text-white/60">
                      Proceed is highly recommended for B2B &amp; B2C segments for brand development &amp; management, social
                      media strategy &amp; execution and one window solution for SEO &amp; web development services as per
                      business requirements.
                    </p>
                  </blockquote>
                  <figcaption className="mt-8">
                    <span className="block text-xl font-semibold">Concave Craft</span>
                    <span className="text-white/55">Brand strategy, content development, design, social media management and reporting.</span>
                  </figcaption>
                </div>
                <Image src="/images/clients/concave-craft.webp" alt="Concave Craft logo" width={252} height={250} className="w-40 rounded-3xl shadow-[0_20px_60px_-15px_rgba(249,138,40,0.7)] sm:w-52" />
              </figure>
            </div>
          </Reveal>
        </W>
      </section>

      {/* Global reach */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image src="/images/hero-globe.webp" alt="" width={1105} height={559} className="pointer-events-none absolute -bottom-10 left-1/2 w-[1100px] max-w-none -translate-x-1/2 opacity-25" />
        <W className="relative text-center">
          <Reveal>
            <p className="text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-7xl">
              You&apos;ve reached enough.
              <br />
              <Grad>Now let&apos;s do the impossible</Grad>
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65">
              We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
              Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
            </p>
          </Reveal>
          <SpotlightGroup className="mx-auto mt-14 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
            {[
              { city: "Karachi", role: "Headquarters", text: "Serving businesses across Pakistan from Lakson Square." },
              { city: "New York", role: "US office", text: "Our Baldwin, New York office supports clients in the United States." },
              { city: "UAE", role: "Client market", text: "We also work with brands in the UAE." },
            ].map((p, i) => (
              <Reveal key={p.city} delay={i * 80}>
                <Glass className="h-full p-7">
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{p.role}</p>
                    <p className="mt-2 text-3xl font-semibold">{p.city}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </SpotlightGroup>
          <Reveal className="mx-auto mt-14 max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Digital marketing in Karachi, across Pakistan and in the US</h2>
            <p className="mt-4 leading-relaxed text-white/65">
              Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office in
              Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Platforms we market on">
              {["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube", "X", "Pinterest", "Snapchat"].map((p) => (
                <li key={p} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">{p}</li>
              ))}
            </ul>
          </Reveal>
        </W>
      </section>

      {/* Join */}
      <section className="py-20 sm:py-28">
        <W>
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:grid-cols-2">
              <div>
                <Pill dot="#1772e6">Careers</Pill>
                <h2 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">Join the <Grad>Team</Grad></h2>
                <p className="mt-4 text-xl font-semibold">We are Optimists who love to work together</p>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
                  If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
                  certain project until it&apos;s the best that could be delivered, and your own best critique, then
                  Proceed is just the right place for you.
                </p>
                <p className="mt-8 text-white/65">
                  See open roles on our{" "}
                  <Link href="/v3/careers" className="font-semibold text-white underline underline-offset-4 hover:text-brand-orange">Careers at Let Us Proceed</Link> page.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-6">
                <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
              </div>
            </div>
          </Reveal>
        </W>
      </section>

      <V3Faq title="Frequently asked questions about our digital marketing agency in Karachi" faqs={homeFaqs} />
      <V3Contact title="Talk to a digital marketing agency in Karachi that is ready to proceed" />
    </>
  );
}
