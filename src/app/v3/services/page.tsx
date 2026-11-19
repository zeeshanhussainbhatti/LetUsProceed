import Link from "next/link";
import { ArrowUpRight, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { Reveal, SpotlightGroup } from "@/components/v3/client";
import { Cta, Glass, Grad, H2, Pill, W } from "@/components/v3/primitives";
import { V3Contact, V3Faq, V3PageHero } from "@/components/v3/blocks";
import { servicesFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Services in Pakistan | Let Us Proceed",
  description: "Digital marketing services in Pakistan: SEO, social media, paid media, content writing, creative and web development from a Karachi agency.",
  v1Path: "/services",
});

const items = [
  { icon: Search, c: "#1772e6", title: "Search Engine Optimization (SEO)", href: "/v3/services/seo", text: "Our SEO team helps your website rank higher in search engines for the searches your customers make. We work on technical SEO, on-page optimization, content and link building, and follow current search engine best practices. We serve businesses in Karachi and across Pakistan." },
  { icon: Share2, c: "#c81418", title: "Social Media Services", href: "/v3/services/social-services", text: "Our social media marketing services help brands tell compelling stories and start conversations with their customers. We create engaging content that generates buzz and gets people talking about your brand." },
  { icon: Megaphone, c: "#f98a28", title: "Paid Media", href: "/v3/services/paid-media", text: "We are a digital media buying agency that makes every penny count. We plan and run paid campaigns on Google Ads to create awareness, engage your audience, sell products, generate leads or increase your brand reach." },
  { icon: Code2, c: "#0632c8", title: "Website Development", href: "/v3/services/web-development", text: "Customers now book consultations, learn and shop online, so your website is the base of every digital marketing plan. Our web development team builds attractive, simple and engaging WordPress and eCommerce websites that help visitors become customers." },
  { icon: PenLine, c: "#1772e6", title: "Content Writing", href: "/v3/services/content-writing", text: "We provide SEO content writing services. Our writers create content that is optimized for search engines and useful to the people who read it, so visitors find relevant answers and spend more time on your website." },
  { icon: Palette, c: "#f98a28", title: "Creative Services", href: "/v3/services/creative-services", text: "“If it doesn't sell, it isn't creative.” David Ogilvy. We are a digital creative agency. We design advertising, branding and creative content for products and services, and we build every piece to support a business goal." },
];

const chooser = [
  { goal: "Be found on Google", start: "SEO and content writing", href: "/v3/services/seo" },
  { goal: "Reach customers on social platforms", start: "Social media marketing", href: "/v3/services/social-services" },
  { goal: "Get leads or sales quickly", start: "Paid media", href: "/v3/services/paid-media" },
  { goal: "Give customers a place to learn, book or buy", start: "Website development", href: "/v3/services/web-development" },
  { goal: "Make your brand stand out", start: "Creative services", href: "/v3/services/creative-services" },
];

export default function Page() {
  return (
    <>
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        pill="Services"
        title={<>High-impact services to take your business to the <Grad>next level</Grad></>}
        intro={<p>Let Us Proceed offers six digital marketing services from our Karachi office: SEO, social media marketing, paid media, content writing, creative services and website development. You can hire one service or combine several into a single plan. We work with businesses in Pakistan and the US.</p>}
        actions={<Cta href="/v3/contact-us">Get a quote and we will recommend a plan</Cta>}
      />
      <section className="py-16 sm:py-24">
        <W>
          <SpotlightGroup className="grid gap-4 md:grid-cols-2">
            {items.map((s, i) => (
              <Reveal key={s.href} delay={(i % 2) * 80}>
                <Glass as="article" className="group h-full">
                  <Link href={s.href} className="relative flex h-full flex-col p-8 sm:p-10">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25 blur-3xl transition group-hover:opacity-50" style={{ background: s.c }} aria-hidden="true" />
                    <div className="relative flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: s.c }}><s.icon className="h-6 w-6" aria-hidden="true" /></span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition group-hover:rotate-45 group-hover:bg-white group-hover:text-ink"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
                    </div>
                    <h2 className="relative mt-8 text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                    <p className="relative mt-4 leading-relaxed text-white/65">{s.text}</p>
                  </Link>
                </Glass>
              </Reveal>
            ))}
          </SpotlightGroup>
        </W>
      </section>
      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill dot="#1772e6">Not sure?</Pill>
            <H2 className="mt-6">Which service is right for you?</H2>
          </Reveal>
          <ul className="mt-12 divide-y divide-white/10 overflow-hidden rounded-[2rem] border border-white/10">
            {chooser.map((c) => (
              <li key={c.goal}>
                <Link href={c.href} className="group grid gap-2 px-6 py-6 transition hover:bg-white/5 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:px-8">
                  <span className="text-white/55">If your goal is to <span className="text-white">{c.goal.toLowerCase()}</span></span>
                  <span className="font-semibold">Start with <Grad>{c.start}</Grad></span>
                  <ArrowUpRight className="h-5 w-5 text-white/50 transition group-hover:rotate-45 group-hover:text-white" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </W>
      </section>
      <V3Faq title="Frequently asked questions about our services" faqs={servicesFaqs} />
      <V3Contact intro="Tell us your goals and which services you need. We reply with a recommended plan and quote." />
    </>
  );
}
