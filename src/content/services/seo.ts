import { FileSearch, Link2, Settings } from "lucide-react";
import type { ServiceData } from "@/components/ServicePage";

export const data: ServiceData = {
  path: "/services/seo",
  crumb: "SEO Services",
  h1: "Site Specific SEO Services In Pakistan",
  intro:
    "Let Us Proceed is an SEO company in Karachi that helps businesses across Pakistan get found on Google. Our SEO services cover a site audit and competitor analysis, on-page SEO, off-page SEO and technical SEO, planned around your website and what your customers search for.",
  cta: { label: "Get an SEO quote", href: "#get-in-touch" },
  tone: "blue",
  cardsTitle: "SEO services we offer in Pakistan",
  cards: [
    {
      icon: FileSearch,
      title: "On-Page SEO Services",
      text: "On-page SEO improves each page of your site so search engines and visitors understand it: keyword research, relevant content, and on-page elements such as titles, headings and internal links.",
    },
    {
      icon: Link2,
      title: "Off-Page SEO Services",
      text: "Off-page SEO builds your site's authority. We work to get links from established, relevant websites that vouch for yours, which tells search engines your site can be trusted.",
    },
    {
      icon: Settings,
      title: "Technical SEO Services",
      text: "Technical SEO fixes the problems that stop search engines from crawling and understanding your site, such as errors, slow loading and site structure, so the rest of your SEO work can rank.",
    },
  ],
  processTitle: "How Do Our SEO Services in Pakistan Work?",
  processLead: "Our SEO process has four steps, from the first audit to the content that goes live on your site.",
  steps: [
    {
      title: "Site Audit & Competition Analysis",
      text: "We start with an audit of your website: how old it is, what SEO work was done before, and what is holding it back. Then we compare your site with the competitors already ranking for your keywords. This shows where you stand on the main SEO factors and what to fix first.",
    },
    {
      title: "On-Page & Off-Page Strategy",
      text: "From the audit results, we plan the on-page and off-page work for your site. Our team researches keywords, plans SEO-optimized content and maps out how to build your site's authority on search engines.",
    },
    {
      title: "Technical SEO",
      text: "We fix the technical foundation of your site: the errors that slow or stop its ranking progress, and anything that makes it hard for visitors and search engines to understand and navigate. Our technical SEO services in Karachi keep your on-page and off-page work from going to waste.",
    },
    {
      title: "On-Page SEO Integration",
      text: "Our in-house writers create SEO-optimized content, and we publish it on your site with the on-page elements that help it rank, such as page titles, meta descriptions, headings, image alt text and internal links.",
      links: [{ label: "Our content writing services", href: "/services/content-writing" }],
    },
  ],
  related: {
    lead: "SEO works best with a strong site and content behind it. See our",
    links: [
      { label: "content writing services", href: "/services/content-writing" },
      { label: "web development services", href: "/services/web-development" },
      { label: "case studies", href: "/case-study" },
    ],
  },
  caseStudy: { heading: "Case Study: Smart Ghar", work: "" },
  faqsTitle: "SEO services FAQs",
  faqs: [
    {
      q: "What SEO services do you offer in Pakistan?",
      a: "Let Us Proceed offers on-page SEO, off-page SEO and technical SEO from our Karachi office. Every project starts with a site audit and a competitor analysis. Our in-house writers also create SEO-optimized content: see our content writing services.",
    },
    {
      q: "How does your SEO process work?",
      a: "We work in four steps: a site audit and competition analysis, an on-page and off-page strategy, technical SEO, and on-page SEO integration with new content. The audit decides what we fix first.",
    },
    {
      q: "What is the difference between on-page and off-page SEO?",
      a: "On-page SEO improves the pages of your own website, such as content and on-page elements. Off-page SEO builds authority through links from other trusted websites that vouch for yours.",
    },
    {
      q: "What is technical SEO?",
      a: "Technical SEO fixes the errors that slow or stop your site's ranking progress and makes it easy for visitors and search engines to understand and navigate your site.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO is not instant. Most sites need several months to show a clear change, depending on the site's age, its competition and its starting point. After the audit we give you a realistic timeline.",
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "No. Nobody controls Google's results, so we do not promise a position. We promise a clear plan, regular work on your site and honest reporting of what changes.",
    },
    {
      q: "Do you offer SEO services in Karachi and across Pakistan?",
      a: "Yes. We work from our Karachi office with clients across Pakistan, and we also have an office in Baldwin, New York, USA.",
    },
    {
      q: "How do I get an SEO quote?",
      a: "Use the Get a Quote button or the form on this page, tell us about your website, and we reply with a plan and a quote. We do not publish fixed prices because every site needs different work.",
    },
  ],
  contactIntro: "Tell us about your website and we will reply with a plan and a quote.",
  schema: {
    name: "SEO Services",
    serviceType: "Search engine optimization",
    description: "On-page SEO, off-page SEO and technical SEO, starting with a site audit and competitor analysis.",
  },
};
