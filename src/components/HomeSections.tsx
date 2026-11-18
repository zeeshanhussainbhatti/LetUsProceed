import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, MapPin, Quote, Rocket, ScanSearch, Map as MapIcon } from "lucide-react";
import { Container, Highlight, Motif } from "./ui";

function Ring({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <path d="M0 100A100 100 0 0 1 200 100H140A40 40 0 0 0 60 100Z" fill={color} />
    </svg>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`font-display text-sm font-semibold uppercase tracking-[0.25em] ${light ? "text-brand-orange" : "text-brand-blue"}`}>
      {children}
    </p>
  );
}

/* ---------------- Process ---------------- */

const steps = [
  { icon: ScanSearch, color: "#1772e6", title: "Audit", text: "We review your website, search visibility, social channels and competitors, and agree the goals that matter to your business." },
  { icon: MapIcon, color: "#f98a28", title: "Plan", text: "We choose the channels, keywords and budget, and give you a written plan with timelines." },
  { icon: Rocket, color: "#c81418", title: "Execute", text: "Our SEO, content, design, development and ads teams deliver the plan, with regular updates to you." },
  { icon: BarChart3, color: "#0632c8", title: "Measure", text: "We report on rankings, traffic, leads and sales, then adjust the plan on what the data shows." },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <Ring color="#1772e6" className="pointer-events-none absolute -right-24 -top-6 w-96 rotate-180 opacity-20" />
      <Ring color="#f98a28" className="pointer-events-none absolute -bottom-2 -left-20 w-80 opacity-15" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow light>How we work</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
            How our digital marketing process works
          </h2>
        </div>
        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t-2 border-dashed border-white/25 lg:block"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="group relative">
              <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full ring-8 ring-ink transition duration-300 group-hover:scale-110" style={{ background: s.color }}>
                <s.icon className="h-8 w-8 text-white" aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-ink">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                <h3 className="text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */

const portfolio = [
  { src: "/images/portfolio/sporadic.webp", w: 789, h: 756, name: "Sporadic", tag: "Music website", alt: "Sporadic music website design shown on desktop", cls: "md:row-span-2" },
  { src: "/images/portfolio/touchstone.webp", w: 396, h: 414, name: "Touchstone Communications", tag: "UX/UI design", alt: "Touchstone Communications UX/UI website design for a BPO company", cls: "" },
  { src: "/images/portfolio/pheeka-responsive.webp", w: 792, h: 756, name: "Pheeka", tag: "Responsive design", alt: "Pheeka diabetes awareness website design by Let Us Proceed, shown on mobile", cls: "md:row-span-2" },
  { src: "/images/portfolio/pheeka-web.webp", w: 396, h: 330, name: "Pheeka", tag: "Web design", alt: "Pheeka diabetes awareness website design by Let Us Proceed", cls: "" },
];

export function PortfolioSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
              Our portfolio: branding, websites, social media, SEO and logo design
            </h2>
          </div>
          <Link
            href="/case-study"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 font-medium text-white transition hover:bg-brand-blue"
          >
            See the full results in our digital marketing case studies
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-[2fr_1fr_2fr] md:grid-rows-2">
          {portfolio.map((p) => (
            <figure key={p.src} className={`group relative overflow-hidden rounded-[1.75rem] bg-surface-soft ${p.cls}`}>
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur transition duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <span>
                  <span className="block font-semibold text-ink">{p.name}</span>
                  <span className="block text-sm text-muted">{p.tag}</span>
                </span>
                <span className="h-3 w-3 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Join the team ---------------- */

const values = ["People first", "Disruptive", "Optimistic", "Systematic", "Lucid"];

export function JoinTeamSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative grid items-end overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-blue via-[#1f5fe0] to-brand-blue-deep text-white lg:grid-cols-[1.1fr_1fr]">
          <Ring color="#f98a28" className="pointer-events-none absolute -left-16 top-0 w-72 rotate-180 opacity-30" />
          <div className="relative p-8 sm:p-12 lg:py-16">
            <Eyebrow light>Careers</Eyebrow>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Join the Team</h2>
            <p className="mt-3 text-xl font-medium text-white/95">We are Optimists who love to work together</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
              certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed
              is just the right place for you.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Our core values">
              {values.map((v) => (
                <li key={v} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm">{v}</li>
              ))}
            </ul>
            <p className="mt-8">
              See open roles on our{" "}
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-ink transition hover:bg-brand-orange hover:text-white"
              >
                Careers at Let Us Proceed
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" aria-hidden="true" />
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="relative px-6 pt-6 lg:px-0 lg:pr-8 lg:pt-12">
            <div className="overflow-hidden rounded-t-[12rem] bg-white px-4 pt-10 sm:rounded-t-[16rem]">
              <Image
                src="/images/join-team.webp"
                alt="Illustration of two team members, one holding a magnifying glass and one a megaphone"
                width={898}
                height={655}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28">
      <Container className="relative">
        <div className="flex items-center justify-center gap-6 text-center">
          <Motif className="hidden md:block" />
          <div>
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight sm:text-5xl">Testimonials</h2>
          </div>
          <Motif className="hidden md:block" />
        </div>
        <figure className="relative mx-auto mt-14 grid max-w-6xl gap-10 overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white shadow-2xl sm:p-14 lg:grid-cols-[1fr_auto] lg:items-center">
                    <Ring color="#1772e6" className="pointer-events-none absolute -bottom-2 right-10 w-64 opacity-25" />
          <div className="relative">
            <Quote className="mb-5 h-12 w-12 fill-brand-orange text-brand-orange" aria-hidden="true" />
            <blockquote className="space-y-5 text-lg leading-relaxed text-white/90 sm:text-xl">
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
            <figcaption className="mt-8">
              <span className="block font-display text-2xl font-semibold uppercase">Concave Craft</span>
              <span className="mt-3 flex flex-wrap gap-2">
                <span className="sr-only">Concave Craft:</span>
                {["Brand strategy", "Content development", "Design", "Social media management", "Reporting"].map((t, i, arr) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                    {t}
                    <span className="sr-only">{i < arr.length - 1 ? ", " : "."}</span>
                  </span>
                ))}
              </span>
            </figcaption>
          </div>
          <div className="relative mx-auto">
            <span className="absolute -inset-3 rotate-6 rounded-3xl bg-brand-orange" aria-hidden="true" />
            <Image
              src="/images/clients/concave-craft.webp"
              alt="Concave Craft logo"
              width={252}
              height={250}
              className="relative w-44 -rotate-3 rounded-2xl shadow-xl sm:w-52"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}

/* ---------------- Clients ---------------- */

const clients = [
  { src: "/images/clients/sybrid.webp", alt: "Sybrid logo", dark: true },
  { src: "/images/clients/admediary.webp", alt: "AdMediary logo", dark: false },
  { src: "/images/clients/bakecarry.webp", alt: "Bakecarry logo", dark: false },
  { src: "/images/clients/amantech.webp", alt: "Amantech (Aman Foundation) logo", dark: true },
  { src: "/images/clients/concave-craft.webp", alt: "Concave Craft logo", dark: false },
];

export function ClientsSection() {
  const row = [...clients, ...clients];
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.slice(0, 4).map((c, i) => (
            <div
              key={c.src}
              className={`flex aspect-square items-center justify-center rounded-3xl p-3 shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-2 hover:rotate-2 hover:shadow-xl ${c.dark ? "bg-[#2a2a2a]" : "bg-white"} ${i % 2 ? "sm:translate-y-8" : ""}`}
            >
              <Image src={c.src} alt={c.alt} width={210} height={210} className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      </Container>
      <div className="marquee mt-16 border-y border-black/10 py-6" aria-hidden="true">
        <div className="marquee-track gap-6">
          {row.map((c, i) => (
            <span key={i} className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-2xl p-2 ${c.dark ? "bg-[#2a2a2a]" : "bg-surface-soft"}`}>
              <Image src={c.src} alt="" width={120} height={120} className="max-h-full w-auto rounded-lg object-contain" />
            </span>
          ))}
          {["SEO", "Social Media", "Paid Media", "Web Development", "Content", "Branding"].map((t) => (
            <span key={t} className="flex shrink-0 items-center gap-3 font-display text-2xl font-semibold uppercase text-ink/80">
              <span className="h-3 w-3 rounded-full bg-brand-orange" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Global reach ---------------- */

const places = [
  { city: "Karachi, Pakistan", role: "Headquarters", text: "Lakson Square, serving businesses across Pakistan.", color: "#f98a28" },
  { city: "Baldwin, New York", role: "US office", text: "Supports our clients in the United States.", color: "#1772e6" },
  { city: "United Arab Emirates", role: "Client market", text: "We also work with brands in the UAE.", color: "#c81418" },
];

const platforms = [
  { name: "Facebook", c: "#1877f2" },
  { name: "Instagram", c: "#d62976" },
  { name: "LinkedIn", c: "#0a66c2" },
  { name: "TikTok", c: "#111111" },
  { name: "YouTube", c: "#ff0000" },
  { name: "X", c: "#111111" },
  { name: "Pinterest", c: "#e60023" },
  { name: "Snapchat", c: "#f7d600" },
];

export function GlobalReachSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1f4d] py-20 text-white sm:py-28">
      <Image
        src="/images/hero-globe.webp"
        alt=""
        width={1105}
        height={559}
        className="pointer-events-none absolute -bottom-10 left-1/2 w-[900px] max-w-none -translate-x-1/2 opacity-25 sm:w-[1200px]"
      />
      <Container className="relative text-center">
        <p className="font-display text-3xl font-medium uppercase tracking-tight sm:text-6xl">You&apos;ve reached enough.</p>
        <p className="mt-3 font-display text-xl font-medium uppercase text-brand-orange sm:text-3xl">Now let&apos;s do the impossible</p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
          We operate on a global frequency, delivering solutions from the tech hubs of New York to the boardrooms of
          Dubai. While we have deep roots in the high-growth markets of Pakistan, our focus is on the horizon.
        </p>

        <h2 className="mx-auto mt-16 max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">
          Digital marketing in Karachi, across Pakistan and in the US
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/75">
          Let Us Proceed is headquartered in Karachi, Pakistan, and serves businesses across Pakistan. Our US office in
          Baldwin, New York supports clients in the United States. We also work with brands in the UAE.
        </p>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 text-left sm:grid-cols-3">
          {places.map((p) => (
            <li key={p.city} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
              <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: p.color }}>
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/60">{p.role}</p>
              <p className="mt-1 text-lg font-semibold">{p.city}</p>
              <p className="mt-1 text-sm text-white/75">{p.text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-14 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Platforms we market on</p>
        <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-3">
          {platforms.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-ink shadow-sm transition hover:-translate-y-1"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.c }} aria-hidden="true" />
              {p.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
