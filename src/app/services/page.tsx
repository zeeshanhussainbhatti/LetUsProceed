import Link from "next/link";
import { Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Faqs } from "@/components/Faqs";
import { ContactSection } from "@/components/ContactSection";
import { BrandArt, ButtonLink, Container, JsonLd, LastUpdated, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, faqSchema, graph, type Faq } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Digital Marketing Services in Pakistan | Let Us Proceed",
  description:
    "Digital marketing services in Pakistan: SEO, social media, paid media, content writing, creative and web development from a Karachi agency.",
  path: "/services",
});

const blocks = [
  {
    id: "creative",
    icon: Palette,
    tone: "orange" as const,
    title: "Creative Services",
    quote: "“If it doesn't sell, it isn't creative.” David Ogilvy",
    text: "We are a digital creative agency. We design advertising, branding and creative content for products and services, and we build every piece to support a business goal.",
    href: "/services/creative-services",
    link: "Explore creative services",
  },
  {
    id: "seo",
    icon: Search,
    tone: "blue" as const,
    title: "Search Engine Optimization (SEO)",
    text: "Our SEO team helps your website rank higher in search engines for the searches your customers make. We work on technical SEO, on-page optimization, content and link building, and follow current search engine best practices. We serve businesses in Karachi and across Pakistan.",
    href: "/services/seo",
    link: "Explore SEO services in Pakistan",
  },
  {
    id: "content-writing",
    icon: PenLine,
    tone: "blue" as const,
    title: "Content Writing",
    text: "We provide SEO content writing services. Our writers create content that is optimized for search engines and useful to the people who read it, so visitors find relevant answers and spend more time on your website.",
    href: "/services/content-writing",
    link: "Explore SEO content writing",
  },
  {
    id: "web-development",
    icon: Code2,
    tone: "blue" as const,
    title: "Website Development",
    text: "Customers now book consultations, learn and shop online, so your website is the base of every digital marketing plan. Our web development team builds attractive, simple and engaging WordPress and eCommerce websites that help visitors become customers.",
    href: "/services/web-development",
    link: "Explore web development services",
  },
  {
    id: "paid-media",
    icon: Megaphone,
    tone: "orange" as const,
    title: "Paid Media",
    text: "We are a digital media buying agency that makes every penny count. We plan and run paid campaigns on Google Ads to create awareness, engage your audience, sell products, generate leads or increase your brand reach.",
    href: "/services/paid-media",
    link: "Explore paid media services",
  },
  {
    id: "social-media",
    icon: Share2,
    tone: "red" as const,
    title: "Social Media Services",
    text: "Our social media marketing services help brands tell compelling stories and start conversations with their customers. We create engaging content that generates buzz and gets people talking about your brand.",
    href: "/services/social-services",
    link: "Explore social media marketing services",
  },
];

const chooser = [
  { goal: "Be found on Google", start: [{ label: "SEO", href: "/services/seo" }, { label: "content writing", href: "/services/content-writing" }] },
  { goal: "Reach customers on social platforms", start: [{ label: "Social media marketing", href: "/services/social-services" }] },
  { goal: "Get leads or sales quickly", start: [{ label: "Paid media", href: "/services/paid-media" }] },
  { goal: "Give customers a place to learn, book or buy", start: [{ label: "Website development", href: "/services/web-development" }] },
  { goal: "Make your brand stand out", start: [{ label: "Creative services", href: "/services/creative-services" }] },
];

const faqs: Faq[] = [
  {
    q: "What digital marketing services does Let Us Proceed offer?",
    a: "Let Us Proceed offers six services: SEO, social media marketing, paid media, SEO content writing, creative services and website development. They are delivered from our Karachi office, and you can hire one service or combine several into one plan.",
  },
  {
    q: "Can I hire just one service?",
    a: "Yes. You can hire any single service, such as SEO or paid media, or combine several. Tell us your goal through the Get in Touch form and we will recommend which services to start with and which can wait.",
  },
  {
    q: "Which service should a new business start with?",
    a: "It depends on your goal. A business that needs customers quickly often starts with paid media, while one building long-term visibility starts with SEO and content. Most also need a clear website. We review your goals and recommend a starting point.",
  },
  {
    q: "Where is Let Us Proceed based, and who do you work with?",
    a: "We are a digital marketing agency based in Karachi, Pakistan, with an office in Baldwin, New York. We work with businesses in Pakistan and the US and are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies.",
  },
  {
    q: "How much do your services cost?",
    a: "Price depends on the service, the scope and how long we work together. We do not publish fixed prices. Send your goals through the Get in Touch form or click Get a Quote, and we reply with a recommended plan and quote.",
  },
  {
    q: "How do I get started?",
    a: "Email info@letusproceed.com, call +92 (213) 840 0967 or +1 (516) 206 6600, or fill in the Get in Touch form on this page. We review your website and goals and reply with a recommended plan.",
  },
];

export default function Page() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            name: "Digital Marketing Services in Pakistan",
            url: `${site.url}/services`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: blocks.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.title, url: `${site.url}${b.href}` })),
            },
          },
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            High-impact services to take <span className="text-brand-orange">your business</span> to the{" "}
            <span className="text-brand-blue">next level</span>
          </>
        }
        intro={
          <>
            <p>
              Let Us Proceed offers six digital marketing services from our Karachi office: SEO, social media marketing,
              paid media, content writing, creative services and website development. You can hire one service or
              combine several into a single plan. We work with businesses in Pakistan and the US.
            </p>
            <p className="text-base">
              Not sure where to start?{" "}
              <Link href="/contact-us" className="font-medium text-brand-blue underline-offset-4 hover:underline">
                Get a quote and we will recommend a plan.
              </Link>
            </p>
          </>
        }
        footnote={<LastUpdated />}
        art={<BrandArt tone="blue" className="mx-auto w-full max-w-lg" />}
      />

      {blocks.map((b, i) => (
        <section key={b.id} id={b.id} className={`scroll-mt-10 py-16 sm:py-24 ${i % 2 ? "bg-brand-gradient" : ""}`}>
          <Container className="grid items-center gap-10 lg:grid-cols-2">
            <div className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
              <BrandArt tone={b.tone} className="mx-auto w-full max-w-md" />
              <span className="absolute left-1/2 top-[38%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-blue shadow-md">
                <b.icon className="h-7 w-7" aria-hidden="true" />
              </span>
            </div>
            <div>
              <SectionHeading title={b.title} />
              {b.quote && <p className="mt-5 text-lg font-medium italic text-ink">{b.quote}</p>}
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{b.text}</p>
              <ButtonLink href={b.href} className="mt-7">{b.link}</ButtonLink>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Which service is right for you?" />
          <div className="mt-10 overflow-x-auto rounded-3xl ring-1 ring-black/10">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">If your goal is to</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Start with</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 bg-white">
                {chooser.map((r) => (
                  <tr key={r.goal}>
                    <td className="px-6 py-4 text-ink">{r.goal}</td>
                    <td className="px-6 py-4">
                      {r.start.map((s, i) => (
                        <span key={s.href}>
                          {i > 0 && " and "}
                          <Link href={s.href} className="font-medium text-brand-blue underline-offset-4 hover:underline">{s.label}</Link>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <Faqs title="Frequently asked questions about our services" faqs={faqs} />
      <ContactSection intro="Tell us your goals and which services you need. We reply with a recommended plan and quote." />
    </>
  );
}
