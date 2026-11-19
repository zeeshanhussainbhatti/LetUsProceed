import Link from "next/link";
import { Btn, Kicker, Wrap } from "@/components/v2/primitives";
import { V2Contact, V2Faq, V2NumberedList, V2PageHero } from "@/components/v2/blocks";
import { servicesFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Services in Pakistan | Let Us Proceed",
  description: "Digital marketing services in Pakistan: SEO, social media, paid media, content writing, creative and web development from a Karachi agency.",
  v1Path: "/services",
});

const items = [
  { title: "Search Engine Optimization (SEO)", href: "/v2/services/seo", text: "Our SEO team helps your website rank higher in search engines for the searches your customers make. We work on technical SEO, on-page optimization, content and link building, and follow current search engine best practices. We serve businesses in Karachi and across Pakistan." },
  { title: "Social Media Services", href: "/v2/services/social-services", text: "Our social media marketing services help brands tell compelling stories and start conversations with their customers. We create engaging content that generates buzz and gets people talking about your brand." },
  { title: "Paid Media", href: "/v2/services/paid-media", text: "We are a digital media buying agency that makes every penny count. We plan and run paid campaigns on Google Ads to create awareness, engage your audience, sell products, generate leads or increase your brand reach." },
  { title: "Website Development", href: "/v2/services/web-development", text: "Customers now book consultations, learn and shop online, so your website is the base of every digital marketing plan. Our web development team builds attractive, simple and engaging WordPress and eCommerce websites that help visitors become customers." },
  { title: "Content Writing", href: "/v2/services/content-writing", text: "We provide SEO content writing services. Our writers create content that is optimized for search engines and useful to the people who read it, so visitors find relevant answers and spend more time on your website." },
  { title: "Creative Services", href: "/v2/services/creative-services", text: "“If it doesn't sell, it isn't creative.” David Ogilvy. We are a digital creative agency. We design advertising, branding and creative content for products and services, and we build every piece to support a business goal." },
];

const chooser = [
  { goal: "Be found on Google", start: "SEO and content writing", href: "/v2/services/seo", bg: "bg-brand-blue" },
  { goal: "Reach customers on social platforms", start: "Social media marketing", href: "/v2/services/social-services", bg: "bg-brand-red" },
  { goal: "Get leads or sales quickly", start: "Paid media", href: "/v2/services/paid-media", bg: "bg-brand-orange" },
  { goal: "Give customers a place to learn, book or buy", start: "Website development", href: "/v2/services/web-development", bg: "bg-brand-blue-deep" },
  { goal: "Make your brand stand out", start: "Creative services", href: "/v2/services/creative-services", bg: "bg-ink" },
];

export default function Page() {
  return (
    <>
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
        kicker="Services"
        title={<>High-impact services to take <span className="text-brand-orange">your business</span> to the <span className="text-brand-blue">next level</span></>}
        intro={
          <p>
            Let Us Proceed offers six digital marketing services from our Karachi office: SEO, social media marketing,
            paid media, content writing, creative services and website development. You can hire one service or combine
            several into a single plan. We work with businesses in Pakistan and the US.
          </p>
        }
        actions={<Btn href="/v2/contact-us">Get a quote and we will recommend a plan</Btn>}
      />
      <section className="bg-white py-20 sm:py-28">
        <Wrap>
          <V2NumberedList items={items} />
        </Wrap>
      </section>
      <section className="py-20 sm:py-28">
        <Wrap>
          <Kicker>Not sure?</Kicker>
          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">Which service is right for you?</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {chooser.map((c) => (
              <li key={c.goal}>
                <Link href={c.href} className={`group flex h-full min-h-60 flex-col justify-between rounded-[2rem] p-6 text-white transition hover:-translate-y-1 ${c.bg}`}>
                  <span className="text-sm text-white/75">If your goal is to</span>
                  <span>
                    <span className="block text-xl font-semibold leading-snug">{c.goal}</span>
                    <span className="mt-4 block text-sm text-white/75">Start with</span>
                    <span className="block font-semibold underline underline-offset-4">{c.start} →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>
      <V2Faq title="Frequently asked questions about our services" faqs={servicesFaqs} />
      <V2Contact intro="Tell us your goals and which services you need. We reply with a recommended plan and quote." />
    </>
  );
}
