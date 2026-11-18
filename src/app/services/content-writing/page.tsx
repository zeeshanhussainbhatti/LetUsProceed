import { FileText, Megaphone, Newspaper, PenLine, ShoppingCart } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Content Writing Services in Pakistan | Let Us Proceed",
  description:
    "Content writing services in Pakistan from a Karachi agency: web, blog, article and eCommerce content and PR, researched, written and edited by our team.",
  path: "/services/content-writing",
});

const data: ServiceData = {
  path: "/services/content-writing",
  crumb: "Content Writing",
  h1: "Expert, Authoritative & Trustworthy Content Writing Services in Pakistan",
  intro:
    "Let Us Proceed provides content writing services in Pakistan from our Karachi office. Our writers research your audience and your competitors, then write website content, blog posts, articles, eCommerce copy and PR content that is accurate, on-brand and written with SEO in mind.",
  cta: { label: "Get a content writing quote", href: "#get-in-touch" },
  tone: "blue",
  cardsTitle: "Content writing services we offer in Pakistan",
  cards: [
    {
      icon: PenLine,
      title: "Web Content Writing Services",
      text: "Our website content writers research your audience and write clear, original pages that answer what visitors are looking for and match your brand.",
    },
    {
      icon: Newspaper,
      title: "Blog Content Writing Services",
      text: "SEO blog posts written around what your customers search for, to bring more organic visitors to your website and help turn them into leads.",
    },
    {
      icon: FileText,
      title: "Article Writing Services",
      text: "In-depth articles on your niche that show your expertise to readers and help build your site's authority with search engines.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Content Writing Services",
      text: "eCommerce copy that supports shoppers on their way to buying, and helps them choose and buy from your online store.",
    },
    {
      icon: Megaphone,
      title: "Public Relations Writing Services",
      text: "Public relations writing that spreads awareness of your offerings and reaches a wider audience.",
    },
  ],
  processTitle: "How Do Our Content Writing Services Work?",
  processLead: "Our content writing process has four steps, from research to proofreading and publishing.",
  steps: [
    {
      title: "Fact-Finding",
      text: "We start with research. First we learn what your audience expects, then how search engines can help you meet those expectations. We find the gaps in your competitors' content and cover them in yours, backed by facts that show authority to readers and search engines.",
    },
    {
      title: "Drafting",
      text: "With the facts gathered, we draft. We put every creative idea about your niche on a page, then choose the one that best engages your audience and expresses your brand.",
    },
    {
      title: "Writing",
      text: "We combine the facts and the draft into a well-researched piece written in your brand's voice. Our writers follow SEO practices throughout, so the content is built to be found on search engines and to stand out in your niche.",
    },
    {
      title: "Proofreading & Editing",
      text: "Our editors check every piece for accuracy, consistency and your brand guidelines. You receive content that is ready to publish, or we can publish it for you if you prefer.",
    },
  ],
  related: {
    lead: "Content ranks best on a technically sound site. See our",
    links: [
      { label: "SEO services", href: "/services/seo" },
      { label: "web development services", href: "/services/web-development" },
    ],
  },
  caseStudy: { heading: "Case Study: Smart Ghar", work: "" },
  faqsTitle: "Content writing services FAQs",
  faqs: [
    {
      q: "What content writing services do you offer in Pakistan?",
      a: "Let Us Proceed offers five content services from our Karachi office: web content writing, blog writing, article writing, eCommerce content writing and public relations writing.",
    },
    {
      q: "Do you write SEO content?",
      a: "Yes. Our writers follow SEO practices in every piece, and our blog and article services are built to bring organic traffic. For the technical and link side of SEO, see our SEO services.",
    },
    {
      q: "How does your content writing process work?",
      a: "We work in four steps: fact-finding (research), drafting, writing, and proofreading and editing. We research your audience and your competitors before any writing starts.",
    },
    {
      q: "Who writes and edits my content?",
      a: "Our writers research and write each piece, and our editors then check it for accuracy, consistency and your brand guidelines before it reaches you.",
    },
    {
      q: "Can you publish the content for me?",
      a: "Yes. Your content arrives ready to publish, and if you prefer, we can handle the publishing for you as well.",
    },
    {
      q: "How long does a content project take?",
      a: "It depends on the length, the research needed and how many pieces you order. We confirm the delivery dates with the quote.",
    },
    {
      q: "How do I get a quote?",
      a: "Use the Get a Quote button or the form on this page, tell us what you need written, and we reply with a plan and a quote. We do not publish fixed prices because every project is different.",
    },
  ],
  contactIntro: "Tell us what you need written and we will reply with a plan and a quote.",
  schema: {
    name: "Content Writing Services",
    serviceType: "Content writing",
    description: "Web content, blog, article, eCommerce and public relations writing, researched, written and edited in-house.",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
