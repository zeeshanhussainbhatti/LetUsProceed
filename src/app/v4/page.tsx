import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { Band, Block, Box, Btn4, C, H2b, PieceTile, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4Contact, V4Faq } from "@/components/v4/blocks";
import { homeFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Agency in Karachi | Let Us Proceed",
  description:
    "Let Us Proceed is a digital marketing agency in Karachi and Pakistan offering SEO, social media, paid ads and web development. Get a quote.",
  v1Path: "/",
});

const panels = [
  { n: "01", icon: Search, bg: C.blue, fg: "#fff", label: "SEO", title: "SEO services in Karachi and Pakistan", href: "/v4/services/seo", text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings." },
  { n: "02", icon: Share2, bg: C.red, fg: "#fff", label: "Social", title: "Social media marketing in Karachi", href: "/v4/services/social-services", text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count." },
  { n: "03", icon: Megaphone, bg: C.orange, fg: C.ink, label: "Paid Media", title: "PPC and paid media advertising", href: "/v4/services/paid-media", text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data." },
  { n: "04", icon: Code2, bg: C.deep, fg: "#fff", label: "Web Dev", title: "Web development in Karachi", href: "/v4/services/web-development", text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank." },
  { n: "05", icon: PenLine, bg: "#fff6ec", fg: C.ink, label: "Content", title: "SEO content writing", href: "/v4/services/content-writing", text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal." },
  { n: "06", icon: Palette, bg: C.ink, fg: "#fff", label: "Creative", title: "Branding and creative services", href: "/v4/services/creative-services", text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act." },
];

const steps = [
  { t: "Audit", c: C.blue, d: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { t: "Plan", c: C.orange, d: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { t: "Execute", c: C.red, d: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { t: "Measure", c: C.deep, d: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
];

const work = [
  { src: "/images/portfolio/sporadic.webp", w: 789, h: 756, name: "Sporadic", tag: "Music website", alt: "Sporadic music website design shown on desktop", c: C.red, r: "-rotate-1" },
  { src: "/images/portfolio/pheeka-responsive.webp", w: 792, h: 756, name: "Pheeka", tag: "Responsive design", alt: "Pheeka diabetes awareness website design by Let Us Proceed, shown on mobile", c: C.blue, r: "rotate-1" },
  { src: "/images/portfolio/touchstone.webp", w: 396, h: 414, name: "Touchstone Communications", tag: "UX/UI design", alt: "Touchstone Communications UX/UI website design for a BPO company", c: C.orange, r: "rotate-1" },
  { src: "/images/portfolio/pheeka-web.webp", w: 396, h: 330, name: "Pheeka", tag: "Web design", alt: "Pheeka diabetes awareness website design by Let Us Proceed", c: C.deep, r: "-rotate-1" },
];

const clients = [
  { src: "/images/clients/sybrid.webp", alt: "Sybrid logo", bg: "#2a2a2a" },
  { src: "/images/clients/admediary.webp", alt: "AdMediary logo", bg: "#fff" },
  { src: "/images/clients/bakecarry.webp", alt: "Bakecarry logo", bg: "#fff" },
  { src: "/images/clients/amantech.webp", alt: "Amantech (Aman Foundation) logo", bg: "#2a2a2a" },
];

export default function HomeV4() {
  return (
    <>
      {/* Hero */}
      <section className="v4-dots border-b-[3px] border-ink">
        <Wrap4 className="grid gap-12 py-12 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <Tag4 bg={C.blue}>Digital marketing agency · Karachi &amp; New York</Tag4>
            <h1 className="mt-7 font-display text-[2.7rem] font-extrabold uppercase leading-[1.04] tracking-tight sm:text-7xl lg:text-[5.4rem]">
              <span className="bg-white">Let&apos;s go</span> <Block bg={C.orange}>big</Block>
              <br />
              <span className="bg-white">Let you &amp; us</span>
              <br />
              <Block bg={C.blue}>Proceed</Block>
            </h1>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="grid grid-cols-2 border-[3px] border-ink bg-white" style={{ boxShadow: `12px 12px 0 0 ${C.ink}` }} aria-hidden="true">
              <PieceTile piece="a" className="aspect-square w-full border-b-[3px] border-r-[3px] border-ink" />
              <PieceTile piece="b" className="aspect-square w-full border-b-[3px] border-ink" />
              <PieceTile piece="c" className="aspect-square w-full border-r-[3px] border-ink" />
              <PieceTile piece="d" className="aspect-square w-full" />
            </div>
            <Tag4 bg="#fff" className="absolute -left-6 -top-5 rotate-[-8deg] text-sm">50+ people</Tag4>
            <Tag4 bg={C.red} className="absolute -right-4 top-1/2 rotate-[6deg] text-sm">6 services</Tag4>
            <Tag4 bg={C.orange} className="absolute -bottom-5 left-8 rotate-[-4deg] text-sm">Karachi · NY</Tag4>
          </div>

          <Box className="bg-white p-6 sm:p-8 lg:col-span-2">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
              <p className="text-xl font-bold leading-snug">
                A digital marketing agency in Karachi offering SEO, social media, paid ads, content, creative and web
                development, with teams in Karachi and New York.
              </p>
              <p className="leading-relaxed">
                Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with a second office in Baldwin, New
                York. Part of Sybrid and the Lakson Group, our 50+ person team delivers SEO, social media marketing, paid
                media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.
              </p>
              <div className="flex flex-wrap gap-4 lg:flex-col">
                <Btn4 href="/v4/contact-us">Get a Quote</Btn4>
                <Btn4 href="/v4/case-study" bg="#fff">See Our Work</Btn4>
              </div>
            </div>
          </Box>
        </Wrap4>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-2 border-b-[3px] border-ink lg:grid-cols-4">
        {[
          { v: "50+", l: "people in one team", bg: C.orange, fg: C.ink },
          { v: "2", l: "offices: Karachi and New York", bg: "#fff", fg: C.ink },
          { v: "6", l: "services under one roof", bg: C.blue, fg: "#fff" },
          { v: "3", l: "markets: Pakistan, US, UAE", bg: C.ink, fg: "#fff" },
        ].map((s, i) => (
          <div key={s.l} className={`p-6 sm:p-10 ${i % 2 === 0 ? "border-r-[3px] border-ink" : ""} ${i < 2 ? "border-b-[3px] border-ink lg:border-b-0" : ""} ${i === 1 ? "lg:border-r-[3px]" : ""}`} style={{ background: s.bg, color: s.fg }}>
            <span className="block font-display text-6xl font-extrabold sm:text-7xl">{s.v}</span>
            <span className="mt-2 block font-semibold">{s.l}</span>
          </div>
        ))}
      </section>

      <Band items={["SEO", "Social Media", "Paid Media", "Web Development", "Content", "Branding"]} />

      {/* Why */}
      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Tag4 bg={C.orange}>Why choose Proceed</Tag4>
            <H2b className="mt-5">Why choose Proceed to go <Block bg={C.orange}>big</Block></H2b>
            <p className="mt-6 text-lg leading-relaxed">
              Let Us Proceed is a Karachi digital marketing agency backed by Sybrid and the Lakson Group. We plan, build
              and run SEO, social media, paid ads, content, branding and websites as one connected plan, so every channel
              works toward the same goal.
            </p>
            <p className="mt-6 inline-block -rotate-1 border-[3px] border-ink bg-[#fff6ec] px-4 py-3 font-bold">
              We are not into making outlandish promises; we want you to see it all for yourself.
            </p>
          </div>
          <Box className="overflow-hidden bg-white" shadow={C.orange}>
            <Image src="/images/astronaut.webp" alt="Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed" width={855} height={522} className="w-full" />
          </Box>
        </Wrap4>
        <Wrap4 className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { t: "Group backing", c: C.blue, d: "Let Us Proceed is part of Sybrid and the Lakson Group, so you work with an established organization." },
            { t: "Two offices", c: C.orange, d: "Our Karachi team works from Lakson Square, and our US office is in Baldwin, New York." },
            { t: "A team of 50+", c: C.red, d: "Strategists, designers, developers and writers sit in one company, so SEO, ads, content and web development follow the same plan." },
          ].map((p) => (
            <Box key={p.t} as="article" hover shadow={p.c} className="bg-white p-7">
              <span className="block h-3 w-16 border-2 border-ink" style={{ background: p.c }} />
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase">{p.t}</h3>
              <p className="mt-3 leading-relaxed">{p.d}</p>
            </Box>
          ))}
        </Wrap4>
      </section>

      {/* Services: expanding panels */}
      <section className="border-t-[3px] border-ink bg-[#fff6ec] py-20 sm:py-24">
        <Wrap4>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Tag4 bg={C.red}>What we do</Tag4>
              <H2b className="mt-5">Digital marketing services in Pakistan, under one roof</H2b>
            </div>
            <p className="text-lg leading-relaxed">We run six services from our Karachi office. Each one has its own page with scope, process and results. <span className="hidden font-bold lg:inline">Hover a panel to open it.</span></p>
          </div>
          <div className="v4-panels mt-12 flex flex-col gap-4 lg:h-[30rem] lg:flex-row">
            {panels.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative flex min-w-0 flex-col overflow-hidden border-[3px] border-ink p-6"
                style={{ background: p.bg, color: p.fg, boxShadow: `6px 6px 0 0 ${C.ink}` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-ink bg-white text-ink">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-extrabold">{p.n}</span>
                </div>
                <span className="v4-panel-v pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap font-display text-3xl font-extrabold uppercase transition-opacity [writing-mode:vertical-rl] lg:block" aria-hidden="true">
                  {p.label}
                </span>
                <div className="v4-panel-body mt-6 lg:mt-auto lg:w-[26rem] lg:max-w-full">
                  <h3 className="font-display text-2xl font-extrabold uppercase leading-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed opacity-90">{p.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold underline decoration-[3px] underline-offset-4">
                    Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Wrap4>
      </section>

      {/* Process */}
      <section className="border-t-[3px] border-ink py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.blue}>How we work</Tag4>
          <H2b className="mt-5 max-w-4xl">How our digital marketing process works</H2b>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <Box hover shadow={s.c} className="h-full bg-white p-7">
                  <span className="flex h-16 w-16 items-center justify-center border-[3px] border-ink font-display text-2xl font-extrabold" style={{ background: s.c, color: s.c === C.orange ? C.ink : "#fff" }}>
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold uppercase">{s.t}</h3>
                  <p className="mt-3 leading-relaxed">{s.d}</p>
                </Box>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-7 top-1/2 hidden h-6 w-6 -translate-y-1/2 lg:block" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </Wrap4>
      </section>

      {/* Work */}
      <section className="border-t-[3px] border-ink bg-ink py-20 text-white sm:py-24">
        <Wrap4>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Tag4 bg={C.orange}>Selected work</Tag4>
              <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl">
                Our portfolio: branding, websites, social media, SEO and logo design
              </h2>
            </div>
            <Btn4 href="/v4/case-study" bg="#fff">All case studies</Btn4>
          </div>

          <Link href="/v4/mala-group-dubai" className="v4-ticket mt-14 grid border-[3px] border-white bg-brand-orange text-ink lg:grid-cols-[1.5fr_1fr]">
            <div className="p-8 sm:p-12 lg:border-r-[3px] lg:border-dashed lg:border-ink">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.25em]">Case study · Mala Group, Dubai</p>
              <h3 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">Recovering from a Google penalty and growing leads</h3>
              <span className="mt-8 inline-flex items-center gap-2 border-[3px] border-ink bg-white px-5 py-3 font-display text-sm font-extrabold uppercase">
                Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div className="grid grid-cols-2 border-t-[3px] border-dashed border-ink lg:grid-cols-1 lg:border-t-0">
              <p className="p-8 sm:px-12"><span className="block font-display text-6xl font-extrabold sm:text-7xl">256%</span><span className="font-semibold">more leads</span></p>
              <p className="border-l-[3px] border-dashed border-ink p-8 sm:px-12 lg:border-l-0 lg:border-t-[3px]"><span className="block font-display text-6xl font-extrabold sm:text-7xl">18%</span><span className="font-semibold">more organic new users</span></p>
            </div>
          </Link>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {work.map((p) => (
              <figure key={p.src} className={`v4-hover border-[3px] border-white bg-white text-ink ${p.r}`} style={{ boxShadow: `10px 10px 0 0 ${p.c}` }}>
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="aspect-[4/3] w-full border-b-[3px] border-ink object-cover" />
                <figcaption className="flex items-center justify-between px-5 py-3">
                  <span className="font-display font-extrabold uppercase">{p.name}</span>
                  <span className="text-sm font-semibold">{p.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Wrap4>
      </section>

      {/* Testimonial: speech bubble */}
      <section className="border-t-[3px] border-ink py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.red}>What clients say</Tag4>
          <h2 className="sr-only">Testimonials</h2>
          <figure className="mt-8">
            <div className="relative">
              <blockquote className="relative border-[3px] border-ink bg-[#fff6ec] p-8 sm:p-12" style={{ boxShadow: `12px 12px 0 0 ${C.blue}` }}>
                <span className="absolute -top-10 left-6 font-display text-[7rem] font-extrabold leading-none text-brand-orange" aria-hidden="true">&ldquo;</span>
                <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
                  Wanted to share my gratitude towards Proceed for the amazing job done in the past 6 months. Starting with
                  the strategy for 4 brands and executing 2 brands with end to end cycle of content development, design
                  execution, excellent social media strategy and execution, reporting and managing accounts.
                </p>
                <div className="mt-6 grid gap-5 leading-relaxed md:grid-cols-2">
                  <p>Overall I&apos;m really happy with the account management and swift responses over all communication channels.</p>
                  <p>
                    Proceed is highly recommended for B2B &amp; B2C segments for brand development &amp; management, social
                    media strategy &amp; execution and one window solution for SEO &amp; web development services as per
                    business requirements.
                  </p>
                </div>
              </blockquote>
              <span className="absolute -bottom-[22px] left-16 h-10 w-10 rotate-45 border-b-[3px] border-r-[3px] border-ink bg-[#fff6ec]" aria-hidden="true" />
            </div>
            <figcaption className="mt-10 flex items-center gap-5 pl-6">
              <Image src="/images/clients/concave-craft.webp" alt="Concave Craft logo" width={252} height={250} className="h-20 w-20 border-[3px] border-ink" />
              <span>
                <span className="block font-display text-xl font-extrabold uppercase">Concave Craft</span>
                <span className="text-sm">Brand strategy, content development, design, social media management and reporting.</span>
              </span>
            </figcaption>
          </figure>
        </Wrap4>
      </section>

      {/* Clients */}
      <section className="border-t-[3px] border-ink bg-[#fff6ec] py-16 sm:py-20">
        <Wrap4 className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <H2b className="text-4xl sm:text-5xl">Our <Block bg={C.orange}>clients</Block></H2b>
            <p className="mt-5 text-lg leading-relaxed">
              We believe in working together and growing together, which is what sets us apart from other digital
              marketing companies in Pakistan.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {clients.map((c, i) => (
              <Box key={c.src} as="li" hover shadow={[C.blue, C.orange, C.red, C.deep][i]} className="flex aspect-square items-center justify-center p-3" style={{ background: c.bg }}>
                <Image src={c.src} alt={c.alt} width={210} height={210} className="w-full" />
              </Box>
            ))}
          </ul>
        </Wrap4>
      </section>

      {/* Global reach */}
      <section className="border-t-[3px] border-ink">
        <div className="bg-white py-16 sm:py-20">
          <Wrap4>
            <p className="font-display text-4xl font-extrabold uppercase leading-[1] tracking-tight sm:text-7xl">
              You&apos;ve reached enough.
              <br />
              <Block bg={C.red}>Now let&apos;s do the impossible</Block>
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed">
              We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
              Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
            </p>
          </Wrap4>
        </div>
        <div className="grid border-t-[3px] border-ink md:grid-cols-3">
          {[
            { city: "Karachi", role: "Headquarters", text: "Serving businesses across Pakistan from Lakson Square.", bg: C.orange, fg: C.ink },
            { city: "New York", role: "US office", text: "Our Baldwin, New York office supports clients in the United States.", bg: C.blue, fg: "#fff" },
            { city: "UAE", role: "Client market", text: "We also work with brands in the UAE.", bg: C.red, fg: "#fff" },
          ].map((p, i) => (
            <div key={p.city} className={`p-8 sm:p-12 ${i ? "border-t-[3px] border-ink md:border-l-[3px] md:border-t-0" : ""}`} style={{ background: p.bg, color: p.fg }}>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.25em]">{p.role}</p>
              <p className="mt-3 font-display text-5xl font-extrabold uppercase sm:text-6xl">{p.city}</p>
              <p className="mt-3 font-medium">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="border-t-[3px] border-ink bg-white py-12">
          <Wrap4 className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">Digital marketing in Karachi, across Pakistan and in the US</h2>
              <p className="mt-3 leading-relaxed">
                Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office
                in Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3" aria-label="Platforms we market on">
              {["Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube", "X", "Pinterest", "Snapchat"].map((p, i) => (
                <li key={p} className="border-[3px] border-ink px-4 py-2 font-bold" style={{ background: [C.orange, "#fff", C.blue, "#fff"][i % 4], color: i % 4 === 2 ? "#fff" : C.ink }}>{p}</li>
              ))}
            </ul>
          </Wrap4>
        </div>
      </section>

      {/* Join */}
      <section className="border-t-[3px] border-ink py-20 sm:py-24">
        <Wrap4 className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Tag4 bg={C.blue}>Careers</Tag4>
            <H2b className="mt-5 normal-case">Join the <Block bg={C.orange}>Team</Block></H2b>
            <p className="mt-4 text-xl font-bold">We are Optimists who love to work together</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
              certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed
              is just the right place for you.
            </p>
            <p className="mt-8">
              See open roles on our{" "}
              <Link href="/v4/careers" className="font-bold underline decoration-[3px] underline-offset-4 hover:bg-brand-orange">Careers at Let Us Proceed</Link> page.
            </p>
          </div>
          <Box className="bg-white p-4" shadow={C.blue}>
            <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
          </Box>
        </Wrap4>
      </section>

      <V4Faq title="Frequently asked questions about our digital marketing agency in Karachi" faqs={homeFaqs} />
      <V4Contact title="Talk to a digital marketing agency in Karachi that is ready to proceed" />
    </>
  );
}
