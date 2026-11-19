import Link from "next/link";
import { ArrowUpRight, Code2, Megaphone, Palette, PenLine, Search, Share2, type LucideIcon } from "lucide-react";
import { Container } from "./ui";

type Service = {
  n: string;
  icon: LucideIcon;
  title: string;
  href: string;
  link: string;
  text: string;
  tags: string[];
  accent: string;
};

const services: Service[] = [
  {
    n: "01",
    icon: Search,
    title: "SEO services in Karachi and Pakistan",
    href: "/services/seo",
    link: "Explore SEO services",
    text: "Our SEO company in Karachi covers technical SEO, on-page SEO and off-page SEO. We fix what stops Google from crawling your site, then build the content and links that move rankings.",
    tags: ["Technical SEO", "On-page SEO", "Off-page SEO"],
    accent: "#1772e6",
  },
  {
    n: "02",
    icon: Share2,
    title: "Social media marketing in Karachi",
    href: "/services/social-services",
    link: "Explore social media marketing",
    text: "We plan, publish and manage your social channels, handle customer queries and audit what is working. The goal is a loyal audience, not just a bigger follower count.",
    tags: [],
    accent: "#c81418",
  },
  {
    n: "03",
    icon: Megaphone,
    title: "PPC and paid media advertising",
    href: "/services/paid-media",
    link: "Explore paid media services",
    text: "Our team runs Google Ads and Meta ads for brands across Pakistan. Campaigns are built around your goals and budget, then adjusted on real conversion data.",
    tags: [],
    accent: "#f98a28",
  },
  {
    n: "04",
    icon: Code2,
    title: "Web development in Karachi",
    href: "/services/web-development",
    link: "Explore web development",
    text: "We build WordPress, eCommerce and custom websites from mockups to back-end. Every site is built to load fast and rank.",
    tags: [],
    accent: "#0632c8",
  },
  {
    n: "05",
    icon: PenLine,
    title: "SEO content writing",
    href: "/services/content-writing",
    link: "Explore content writing",
    text: "We write blogs, web copy and brand content that answers what your customers search for. Each piece is planned around a keyword and a business goal.",
    tags: [],
    accent: "#1772e6",
  },
  {
    n: "06",
    icon: Palette,
    title: "Branding and creative services",
    href: "/services/creative-services",
    link: "Explore creative services",
    text: "We design logos, brand identities and campaign creative. The work is meant to make a visitor trust you quickly and act.",
    tags: ["Logos", "Brand identity", "Campaign creative"],
    accent: "#f98a28",
  },
];

/** Half ring from the logo geometry, used as a corner decoration that grows on hover. */
function Ring({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <path d="M0 100A100 100 0 0 1 200 100H140A40 40 0 0 0 60 100Z" fill={color} />
    </svg>
  );
}

function ArrowLink({ href, label, dark }: { href: string; label: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`relative z-10 mt-6 inline-flex items-center gap-3 font-medium after:absolute after:inset-0 after:content-[''] ${dark ? "text-white" : "text-ink"}`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full transition duration-300 group-hover:rotate-45 ${
          dark ? "bg-brand-orange text-white" : "bg-ink text-white group-hover:bg-brand-blue"
        }`}
      >
        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
      </span>
      {label}
    </Link>
  );
}

function Tags({ tags, dark }: { tags: string[]; dark?: boolean }) {
  if (!tags.length) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className={`rounded-full px-3 py-1 text-sm ${dark ? "bg-white/10 text-white" : "bg-white/70 text-ink ring-1 ring-black/10"}`}
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

const card =
  "group relative flex flex-col overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8";

function Small({ s }: { s: Service }) {
  return (
    <article className={`${card} border border-white bg-white/75 shadow-sm backdrop-blur`}>
      <Ring
        color={s.accent}
        className="pointer-events-none absolute -bottom-2 -right-16 w-44 opacity-15 transition duration-500 group-hover:scale-125 group-hover:opacity-30"
      />
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm" style={{ background: s.accent }}>
          <s.icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="font-display text-4xl font-semibold text-transparent [-webkit-text-stroke:1px_rgb(29_29_31/0.25)]" aria-hidden="true">
          {s.n}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold uppercase leading-snug">{s.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
      <ArrowLink href={s.href} label={s.link} />
    </article>
  );
}


export function ServicesBento() {
  const [seo, social, paid, web, content, creative] = services;

  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28">
      <Ring color="#1772e6" className="pointer-events-none absolute -left-24 top-10 w-72 rotate-90 opacity-10" />
      <Ring color="#f98a28" className="pointer-events-none absolute -right-20 bottom-24 w-80 -rotate-90 opacity-10" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">Our services</p>
            <h2 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
              Digital marketing services in Pakistan,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">under one roof</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-orange/40 sm:h-4" aria-hidden="true" />
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            We run six services from our Karachi office. Each one has its own page with scope, process and results.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured: SEO (tall) */}
          <article className={`${card} bg-ink text-white md:col-span-2 lg:col-span-1 lg:row-span-2`}>
            <svg viewBox="0 0 645 645" className="pointer-events-none absolute -bottom-20 -right-20 w-72 opacity-90 transition duration-700 group-hover:rotate-12 sm:w-96" aria-hidden="true">
              <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
              <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
              <rect x="484" y="0" width="161" height="323" fill="#0632c8" />
              <rect x="0" y="323" width="161" height="322" fill="#c81418" />
            </svg>
            <div className="relative flex flex-1 flex-col">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ink">
                  <seo.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-5xl font-semibold text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.35)]" aria-hidden="true">
                  {seo.n}
                </span>
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand-orange">Most requested</p>
              <h3 className="mt-2 text-2xl font-semibold uppercase leading-snug sm:text-3xl">{seo.title}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/80">{seo.text}</p>
              <Tags tags={seo.tags} dark />
              <ArrowLink href={seo.href} label={seo.link} dark />
              <div className="min-h-40 flex-1 lg:min-h-56" />
            </div>
          </article>

          <Small s={social} />
          <Small s={paid} />
          <Small s={web} />
          <Small s={content} />

          {/* Wide: Creative */}
          <article className={`${card} bg-gradient-to-br from-brand-red via-[#e4542a] to-brand-orange text-white md:col-span-2`}>
            <Ring color="#ffffff" className="pointer-events-none absolute -bottom-3 right-6 hidden w-56 opacity-20 sm:block transition duration-500 group-hover:scale-110 group-hover:opacity-30" />
            <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-red">
                <creative.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold uppercase leading-snug">{creative.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-white/90">{creative.text}</p>
                <Tags tags={creative.tags} dark />
                <ArrowLink href={creative.href} label={creative.link} dark />
              </div>
            </div>
          </article>

          {/* CTA */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-2 border-dashed border-brand-blue/40 bg-white/50 p-7 sm:p-8">
            <div>
              <p className="font-display text-2xl font-semibold uppercase leading-snug">Not sure where to start?</p>
              <p className="mt-3 leading-relaxed text-muted">Tell us your goal and we will recommend the right mix of services.</p>
            </div>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-medium text-white transition hover:brightness-95"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
