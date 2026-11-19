import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { Box, Btn4, C, H2b, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4Contact, V4Faq, V4PageHero } from "@/components/v4/blocks";
import { servicesFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Services in Pakistan | Let Us Proceed",
  description: "Digital marketing services in Pakistan: SEO, social media, paid media, content writing, creative and web development from a Karachi agency.",
  v1Path: "/services",
});

const items = [
  { icon: Search, c: C.blue, title: "Search Engine Optimization (SEO)", href: "/v4/services/seo", text: "Our SEO team helps your website rank higher in search engines for the searches your customers make. We work on technical SEO, on-page optimization, content and link building, and follow current search engine best practices. We serve businesses in Karachi and across Pakistan." },
  { icon: Share2, c: C.red, title: "Social Media Services", href: "/v4/services/social-services", text: "Our social media marketing services help brands tell compelling stories and start conversations with their customers. We create engaging content that generates buzz and gets people talking about your brand." },
  { icon: Megaphone, c: C.orange, title: "Paid Media", href: "/v4/services/paid-media", text: "We are a digital media buying agency that makes every penny count. We plan and run paid campaigns on Google Ads to create awareness, engage your audience, sell products, generate leads or increase your brand reach." },
  { icon: Code2, c: C.deep, title: "Website Development", href: "/v4/services/web-development", text: "Customers now book consultations, learn and shop online, so your website is the base of every digital marketing plan. Our web development team builds attractive, simple and engaging WordPress and eCommerce websites that help visitors become customers." },
  { icon: PenLine, c: C.blue, title: "Content Writing", href: "/v4/services/content-writing", text: "We provide SEO content writing services. Our writers create content that is optimized for search engines and useful to the people who read it, so visitors find relevant answers and spend more time on your website." },
  { icon: Palette, c: C.orange, title: "Creative Services", href: "/v4/services/creative-services", text: "“If it doesn't sell, it isn't creative.” David Ogilvy. We are a digital creative agency. We design advertising, branding and creative content for products and services, and we build every piece to support a business goal." },
];

const chooser = [
  { goal: "Be found on Google", start: "SEO and content writing", href: "/v4/services/seo", c: C.blue },
  { goal: "Reach customers on social platforms", start: "Social media marketing", href: "/v4/services/social-services", c: C.red },
  { goal: "Get leads or sales quickly", start: "Paid media", href: "/v4/services/paid-media", c: C.orange },
  { goal: "Give customers a place to learn, book or buy", start: "Website development", href: "/v4/services/web-development", c: C.deep },
  { goal: "Make your brand stand out", start: "Creative services", href: "/v4/services/creative-services", c: C.ink },
];

export default function Page() {
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        tag="Services"
        title="High-impact services to take your business to the next level"
        intro={<p>Let Us Proceed offers six digital marketing services from our Karachi office: SEO, social media marketing, paid media, content writing, creative services and website development. You can hire one service or combine several into a single plan. We work with businesses in Pakistan and the US.</p>}
        actions={<Btn4 href="/v4/contact-us">Get a quote and we will recommend a plan</Btn4>}
      />
      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-10 md:grid-cols-2">
          {items.map((s, i) => (
            <Box key={s.href} as="article" hover shadow={s.c} className="bg-white">
              <Link href={s.href} className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b-[3px] border-ink px-7 py-5" style={{ background: s.c, color: s.c === C.orange ? C.ink : "#fff" }}>
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                  <span className="font-display text-2xl font-extrabold">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl font-extrabold uppercase leading-tight">{s.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold underline decoration-[3px] underline-offset-4">Explore <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                </div>
              </Link>
            </Box>
          ))}
        </Wrap4>
      </section>
      <section className="border-t-[3px] border-ink bg-[#fff6ec] py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.blue}>Not sure?</Tag4>
          <H2b className="mt-5">Which service is right for you?</H2b>
          <ul className="mt-12 border-[3px] border-ink bg-white" style={{ boxShadow: `10px 10px 0 0 ${C.ink}` }}>
            {chooser.map((c, i) => (
              <li key={c.goal} className={i ? "border-t-[3px] border-ink" : ""}>
                <Link href={c.href} className="group grid gap-2 px-6 py-5 hover:bg-[#fff6ec] sm:grid-cols-[1.2fr_1fr_auto] sm:items-center">
                  <span>If your goal is to <strong>{c.goal.toLowerCase()}</strong></span>
                  <span className="flex items-center gap-3 font-bold"><span className="h-4 w-4 border-2 border-ink" style={{ background: c.c }} />Start with {c.start}</span>
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Wrap4>
      </section>
      <V4Faq title="Frequently asked questions about our services" faqs={servicesFaqs} />
      <V4Contact intro="Tell us your goals and which services you need. We reply with a recommended plan and quote." />
    </>
  );
}
