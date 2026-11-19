import Image from "next/image";
import Link from "next/link";
import { BarChart3, Building2, Code2, Map as MapIcon, Megaphone, Palette, PenLine, Quote, Rocket, ScanSearch, Search, Share2, Users } from "lucide-react";
import { Accent, Bars5, Button5, Card5, Eyebrow5, Heading5, TextLink5, W5 } from "@/components/v5/ui5";
import { V5Contact, V5Cta, V5Faq } from "@/components/v5/blocks5";
import { homeFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  v1Path: "/",
});

const services = [
  { icon: Search, title: "SEO services in Karachi and Pakistan", href: "/v5/services/seo", text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings." },
  { icon: Share2, title: "Social media marketing in Karachi", href: "/v5/services/social-services", text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count." },
  { icon: Megaphone, title: "PPC and paid media advertising", href: "/v5/services/paid-media", text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data." },
  { icon: Code2, title: "Web development in Karachi", href: "/v5/services/web-development", text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank." },
  { icon: PenLine, title: "SEO content writing", href: "/v5/services/content-writing", text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal." },
  { icon: Palette, title: "Branding and creative services", href: "/v5/services/creative-services", text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act." },
];

const steps = [
  { icon: ScanSearch, title: "Audit", text: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { icon: MapIcon, title: "Plan", text: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { icon: Rocket, title: "Execute", text: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { icon: BarChart3, title: "Measure", text: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
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
  { src: "/images/clients/concave-craft.webp", alt: "Concave Craft logo", dark: false },
];

export default function HomeV5() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-[#eaf2ff] via-[#f3f0ff]/60 to-transparent" aria-hidden="true" />
        <W5 className="relative grid items-center gap-14 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
          <div>
            <Eyebrow5>Digital marketing agency · Karachi &amp; New York</Eyebrow5>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.6rem]">
              Let&apos;s go big.
              <br />
              Let you &amp; us <Accent>Proceed</Accent>.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-ink/80">
              A digital marketing agency in Karachi offering SEO, social media, paid ads, content, creative and web
              development, with teams in Karachi and New York.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with a second office in Baldwin, New York.
              Part of Sybrid and the Lakson Group, our 50+ person team delivers SEO, social media marketing, paid media,
              content writing, branding and web development for businesses in Pakistan, the US and the UAE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button5 href="/v5/contact-us">Get a Quote</Button5>
              <Button5 href="/v5/case-study" variant="secondary">See Our Work</Button5>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <Building2 className="h-4 w-4 text-brand-blue" aria-hidden="true" />
              Part of Sybrid Pvt. Ltd. and the Lakson Group of Companies
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#dbe9ff] to-[#eef4ff] px-6 pt-16">
              <Image src="/images/hero-globe.webp" alt="Blue dotted globe showing the regions Let Us Proceed serves" width={1105} height={559} priority className="w-full" />
            </div>
            <Card5 className="absolute -left-4 top-6 flex items-center gap-3 px-4 py-3 sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange"><BarChart3 className="h-5 w-5" aria-hidden="true" /></span>
              <span><span className="block text-lg font-semibold leading-none text-ink">256%</span><span className="text-xs text-muted">more leads · Mala Group</span></span>
            </Card5>
            <Card5 className="absolute -right-2 top-1/3 flex items-center gap-3 px-4 py-3 sm:-right-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"><Users className="h-5 w-5" aria-hidden="true" /></span>
              <span><span className="block text-lg font-semibold leading-none text-ink">50+</span><span className="text-xs text-muted">people in one team</span></span>
            </Card5>
          </div>
        </W5>

        {/* Logo row */}
        <W5 className="relative pb-6">
          <p className="text-center text-sm text-muted">Brands we work with</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {clients.map((c) => (
              <li key={c.src} className={`flex h-20 w-32 items-center justify-center overflow-hidden rounded-2xl p-1.5 ring-1 ring-black/[0.07] ${c.dark ? "bg-[#2a2a2a]" : "bg-white"}`}>
                <Image src={c.src} alt={c.alt} width={120} height={120} className="max-h-full w-auto object-contain" />
              </li>
            ))}
          </ul>
        </W5>
      </section>

      {/* Stats */}
      <section className="py-14">
        <W5>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/[0.07] bg-black/[0.07] lg:grid-cols-4">
            {[
              ["50+", "people in one team"],
              ["2", "offices: Karachi and New York"],
              ["6", "services under one roof"],
              ["3", "markets: Pakistan, US, UAE"],
            ].map(([v, l]) => (
              <div key={l} className="bg-white p-6 sm:p-8">
                <dt className="text-sm text-muted">{l}</dt>
                <dd className="mt-1 text-4xl font-semibold tracking-tight text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </W5>
      </section>

      {/* Why */}
      <section className="py-16 sm:py-20">
        <W5 className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Card5 className="overflow-hidden p-4">
            <Image src="/images/astronaut.webp" alt="Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed" width={855} height={522} className="w-full rounded-2xl" />
          </Card5>
          <div>
            <Heading5
              eyebrow="Why choose Proceed"
              title={<>Why choose Proceed to go <span className="text-brand-orange">big</span></>}
              lead="Let Us Proceed is a Karachi digital marketing agency backed by Sybrid and the Lakson Group. We plan, build and run SEO, social media, paid ads, content, branding and websites as one connected plan, so every channel works toward the same goal."
            />
            <ul className="mt-8 space-y-5">
              {[
                { t: "Group backing", d: "Let Us Proceed is part of Sybrid and the Lakson Group, so you work with an established organization." },
                { t: "Two offices", d: "Our Karachi team works from Lakson Square, and our US office is in Baldwin, New York." },
                { t: "A team of 50+", d: "Strategists, designers, developers and writers sit in one company, so SEO, ads, content and web development follow the same plan." },
              ].map((p) => (
                <li key={p.t} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  <span>
                    <h3 className="font-semibold text-ink">{p.t}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{p.d}</p>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-4 border-brand-orange pl-4 italic text-ink/80">
              We are not into making outlandish promises; we want you to see it all for yourself.
            </p>
          </div>
        </W5>
      </section>

      {/* Services */}
      <section className="bg-surface-soft py-20 sm:py-24">
        <W5>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading5
              eyebrow="What we do"
              title="Digital marketing services in Pakistan, under one roof"
              lead="We run six services from our Karachi office. Each one has its own page with scope, process and results."
            />
            <Button5 href="/v5/services" variant="secondary">All services</Button5>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card5 key={s.href} as="article" className="group relative flex flex-col p-7 transition hover:-translate-y-1 hover:border-brand-blue/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  <Link href={s.href} className="after:absolute after:inset-0 after:content-['']">{s.title}</Link>
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{s.text}</p>
                <span className="mt-5 text-sm font-semibold text-brand-blue" aria-hidden="true">Learn more →</span>
              </Card5>
            ))}
          </div>
        </W5>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <W5>
          <Heading5 center eyebrow="How we work" title="How our digital marketing process works" />
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue lg:block" aria-hidden="true" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_6px_20px_-6px_rgba(23,114,230,0.5)] ring-1 ring-brand-blue/20">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm font-semibold text-brand-orange">Step {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </W5>
      </section>

      {/* Work */}
      <section className="bg-surface-soft py-20 sm:py-24">
        <W5>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading5 eyebrow="Selected work" title="Our portfolio: branding, websites, social media, SEO and logo design" />
            <Button5 href="/v5/case-study" variant="secondary">All case studies</Button5>
          </div>

          <Card5 className="mt-12 grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-brand-orange">Case study · Mala Group, Dubai</p>
              <h3 className="mt-2 text-2xl font-semibold leading-snug text-ink sm:text-3xl">Recovering from a Google penalty and growing leads</h3>
              <p className="mt-3 leading-relaxed text-muted">Technical, on-site and off-site SEO for a Dubai destination management company.</p>
              <div className="mt-6"><TextLink5 href="/v5/mala-group-dubai">Read the case study</TextLink5></div>
            </div>
            <div className="rounded-2xl bg-surface-soft p-6">
              <Bars5
                items={[
                  { label: "More leads", value: 256, color: "#f98a28" },
                  { label: "More organic new users", value: 18, color: "#1772e6" },
                  { label: "More sessions", value: 17, color: "#0632c8" },
                  { label: "Lower bounce rate", value: 8, color: "#c81418" },
                ]}
              />
            </div>
          </Card5>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {work.map((p) => (
              <figure key={p.src} className="group overflow-hidden rounded-3xl border border-black/[0.07] bg-white">
                <div className="overflow-hidden">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <figcaption className="flex items-center justify-between px-6 py-4">
                  <span className="font-semibold text-ink">{p.name}</span>
                  <span className="text-sm text-muted">{p.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </W5>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-24">
        <W5>
          <Heading5 center eyebrow="Testimonials" title="What our clients say" />
          <Card5 as="article" className="mx-auto mt-12 max-w-4xl p-8 sm:p-12">
            <Quote className="h-10 w-10 fill-brand-orange/20 text-brand-orange" aria-hidden="true" />
            <blockquote className="mt-5 space-y-4 text-lg leading-relaxed text-ink/85">
              <p>
                Wanted to share my gratitude towards Proceed for the amazing job done in the past 6 months. Starting with
                the strategy for 4 brands and executing 2 brands with end to end cycle of content development, design
                execution, excellent social media strategy and execution, reporting and managing accounts.
              </p>
              <p>Overall I&apos;m really happy with the account management and swift responses over all communication channels.</p>
              <p>
                Proceed is highly recommended for B2B &amp; B2C segments for brand development &amp; management, social
                media strategy &amp; execution and one window solution for SEO &amp; web development services as per
                business requirements.
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-black/[0.07] pt-6">
              <Image src="/images/clients/concave-craft.webp" alt="Concave Craft logo" width={252} height={250} className="h-14 w-14 rounded-xl ring-1 ring-black/10" />
              <div>
                <p className="font-semibold text-ink">Concave Craft</p>
                <p className="text-sm text-muted">Brand strategy, content development, design, social media management and reporting.</p>
              </div>
            </div>
          </Card5>
        </W5>
      </section>

      {/* Global reach */}
      <section className="bg-surface-soft py-20 sm:py-24">
        <W5 className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow5>Where we work</Eyebrow5>
            <p className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[2.6rem]">
              You&apos;ve reached enough. <span className="text-brand-orange">Now let&apos;s do the impossible.</span>
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
              Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
            </p>
            <h2 className="mt-10 text-xl font-semibold text-ink">Digital marketing in Karachi, across Pakistan and in the US</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office in
              Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { city: "Karachi, Pakistan", role: "Headquarters", text: "Lakson Square, serving businesses across Pakistan." },
              { city: "Baldwin, New York", role: "US office", text: "Supports our clients in the United States." },
              { city: "United Arab Emirates", role: "Client market", text: "We also work with brands in the UAE." },
            ].map((p, i) => (
              <Card5 key={p.city} className="flex items-center gap-5 p-6">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${["bg-brand-blue", "bg-brand-orange", "bg-brand-blue-deep"][i]}`}>
                  <MapIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{p.role}</p>
                  <p className="text-lg font-semibold text-ink">{p.city}</p>
                  <p className="text-sm text-muted">{p.text}</p>
                </div>
              </Card5>
            ))}
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Platforms we market on">
              {["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube", "X", "Pinterest", "Snapchat"].map((p) => (
                <li key={p} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-ink/80 ring-1 ring-black/[0.07]">{p}</li>
              ))}
            </ul>
          </div>
        </W5>
      </section>

      {/* Careers */}
      <section className="py-20 sm:py-24">
        <W5 className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Heading5
              eyebrow="Careers"
              title="Join the Team"
              lead="If you're up for something challenging yet interesting, don't mind working and reworking on a certain project until it's the best that could be delivered, and your own best critique, then Proceed is just the right place for you."
            />
            <p className="mt-4 font-semibold text-ink">We are Optimists who love to work together</p>
            <p className="mt-6 text-muted">
              See open roles on our{" "}
              <Link href="/v5/careers" className="font-semibold text-brand-blue hover:underline">Careers at Let Us Proceed</Link> page.
            </p>
          </div>
          <Card5 className="p-4">
            <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full rounded-2xl" />
          </Card5>
        </W5>
      </section>

      <V5Faq title="Frequently asked questions about our digital marketing agency in Karachi" faqs={homeFaqs} />
      <V5Contact title="Talk to a digital marketing agency in Karachi that is ready to proceed" />
      <V5Cta />
    </>
  );
}
