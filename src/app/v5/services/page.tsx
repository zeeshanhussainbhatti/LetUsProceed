import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { Button5, Card5, Heading5, W5 } from "@/components/v5/ui5";
import { V5Contact, V5Faq, V5PageHero } from "@/components/v5/blocks5";
import { servicesFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Services in Pakistan | Let Us Proceed",
  description: "Digital marketing services in Pakistan: SEO, social media, paid media, content writing, creative and web development from a Karachi agency.",
  v1Path: "/services",
});

const items = [
  { icon: Search, title: "Search Engine Optimization (SEO)", href: "/v5/services/seo", link: "Explore SEO services in Pakistan", text: "Our SEO team helps your website rank higher in search engines for the searches your customers make. We work on technical SEO, on-page optimization, content and link building, and follow current search engine best practices. We serve businesses in Karachi and across Pakistan." },
  { icon: Share2, title: "Social Media Services", href: "/v5/services/social-services", link: "Explore social media marketing services", text: "Our social media marketing services help brands tell compelling stories and start conversations with their customers. We create engaging content that generates buzz and gets people talking about your brand." },
  { icon: Megaphone, title: "Paid Media", href: "/v5/services/paid-media", link: "Explore paid media services", text: "We are a digital media buying agency that makes every penny count. We plan and run paid campaigns on Google Ads to create awareness, engage your audience, sell products, generate leads or increase your brand reach." },
  { icon: Code2, title: "Website Development", href: "/v5/services/web-development", link: "Explore web development services", text: "Customers now book consultations, learn and shop online, so your website is the base of every digital marketing plan. Our web development team builds attractive, simple and engaging WordPress and eCommerce websites that help visitors become customers." },
  { icon: PenLine, title: "Content Writing", href: "/v5/services/content-writing", link: "Explore SEO content writing", text: "We provide SEO content writing services. Our writers create content that is optimized for search engines and useful to the people who read it, so visitors find relevant answers and spend more time on your website." },
  { icon: Palette, title: "Creative Services", href: "/v5/services/creative-services", link: "Explore creative services", text: "“If it doesn't sell, it isn't creative.” David Ogilvy. We are a digital creative agency. We design advertising, branding and creative content for products and services, and we build every piece to support a business goal." },
];

const chooser = [
  { goal: "Be found on Google", start: "SEO and content writing", href: "/v5/services/seo" },
  { goal: "Reach customers on social platforms", start: "Social media marketing", href: "/v5/services/social-services" },
  { goal: "Get leads or sales quickly", start: "Paid media", href: "/v5/services/paid-media" },
  { goal: "Give customers a place to learn, book or buy", start: "Website development", href: "/v5/services/web-development" },
  { goal: "Make your brand stand out", start: "Creative services", href: "/v5/services/creative-services" },
];

export default function Page() {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        eyebrow="Services"
        title="High-impact services to take your business to the next level"
        intro={<p>Let Us Proceed offers six digital marketing services from our Karachi office: SEO, social media marketing, paid media, content writing, creative services and website development. You can hire one service or combine several into a single plan. We work with businesses in Pakistan and the US.</p>}
        actions={<Button5 href="/v5/contact-us">Get a quote and we will recommend a plan</Button5>}
      />
      <section className="pb-20">
        <W5 className="grid gap-5 md:grid-cols-2">
          {items.map((s) => (
            <Card5 key={s.href} as="article" className="flex flex-col p-8 transition hover:-translate-y-1 hover:border-brand-blue/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"><s.icon className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-2xl font-semibold text-ink">{s.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
              <Link href={s.href} className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-brand-blue">
                {s.link} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </Card5>
          ))}
        </W5>
      </section>
      <section className="bg-surface-soft py-20">
        <W5>
          <Heading5 eyebrow="Not sure where to start?" title="Which service is right for you?" />
          <Card5 className="mt-10 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-surface-soft text-sm text-muted">
                <tr><th scope="col" className="px-6 py-4 font-semibold">If your goal is to</th><th scope="col" className="px-6 py-4 font-semibold">Start with</th></tr>
              </thead>
              <tbody className="divide-y divide-black/[0.07]">
                {chooser.map((c) => (
                  <tr key={c.goal}>
                    <td className="px-6 py-4 text-ink">{c.goal}</td>
                    <td className="px-6 py-4"><Link href={c.href} className="font-semibold text-brand-blue hover:underline">{c.start}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card5>
        </W5>
      </section>
      <V5Faq title="Frequently asked questions about our services" faqs={servicesFaqs} />
      <V5Contact intro="Tell us your goals and which services you need. We reply with a recommended plan and quote." />
    </>
  );
}
