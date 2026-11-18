import { Briefcase, Code2, LayoutTemplate, Newspaper, ShoppingCart, UserRound } from "lucide-react";
import type { ServiceData } from "@/components/ServicePage";

export const data: ServiceData = {
  path: "/services/web-development",
  crumb: "Web Development",
  h1: "One-Window Web Development Services in Pakistan",
  intro:
    "Let Us Proceed is a Karachi agency that designs and develops websites in Pakistan, from WordPress and eCommerce stores to news, portfolio and open-source sites. Every site is built to be easy to use and friendly to search engines, and to guide visitors towards the action you want them to take.",
  cta: { label: "Get a Web Development Quote", href: "#get-in-touch" },
  tone: "blue",
  cardsTitle: "Web Development Services We Offer in Pakistan",
  cards: [
    {
      icon: UserRound,
      title: "Subscription & Membership Websites",
      text: "Websites for memberships and recurring plans, with sign-up, login and member areas laid out so customers reach what interests them first.",
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Web Design & Development",
      text: "Online stores designed around how your customers shop: clear product pages, an easy cart and checkout, and a catalogue you can manage.",
    },
    {
      icon: LayoutTemplate,
      title: "WordPress & CMS Website Development",
      text: "WordPress websites and sites on other content management systems, built so your team can update pages and posts without a developer.",
    },
    {
      icon: Newspaper,
      title: "News & Blog Websites",
      text: "News and blog websites with categories, author pages, search and simple publishing, built around how your readers browse.",
    },
    {
      icon: Briefcase,
      title: "Business & Portfolio Websites",
      text: "Corporate and portfolio websites that say clearly what you do, match your brand and keep navigation simple.",
    },
    {
      icon: Code2,
      title: "Open-Source Website Development",
      text: "Websites built on open-source platforms and extended with themes, plugins and custom features.",
    },
  ],
  processTitle: "How Does Our Web Development Process Work?",
  processLead: "Our web development process has four steps, from the first mockup to the back-end.",
  steps: [
    {
      title: "Mockups",
      text: "We start from the requirements you give us, or ones we propose, and build realistic mockups of your whole website or a single page. You review them and decide whether to go ahead with the design or change it.",
    },
    {
      title: "Front-End Development",
      text: "Once you approve the design, we build the front-end: the pages, graphics and interface your visitors see. Colours, fonts and elements follow your brand, and the layout makes it easy for visitors to find what they came for.",
    },
    {
      title: "Database Development",
      text: "Next we set up the database, based on your requirements. For membership and eCommerce websites this means organising products, customers and orders so data is stored accurately and loads quickly.",
    },
    {
      title: "Back-End Development",
      text: "Finally, we build the back-end, the server side of your website: programming, security, scalability and how data moves between the database and the server, so pages load and forms and checkouts work as they should.",
    },
  ],
  related: {
    lead: "A new website works harder with search and traffic behind it:",
    links: [
      { label: "SEO services in Pakistan", href: "/services/seo" },
      { label: "creative and branding services", href: "/services/creative-services" },
      { label: "paid media", href: "/services/paid-media" },
      { label: "content writing", href: "/services/content-writing" },
    ],
  },
  caseStudy: { heading: "Web Development Case Study: Smart Ghar", work: "" },
  faqsTitle: "Web Development FAQs",
  faqs: [
    {
      q: "What web development services do you offer in Pakistan?",
      a: "Let Us Proceed designs and develops subscription and membership websites, eCommerce stores, WordPress and other CMS websites, news and blog websites, business and portfolio websites, and websites on open-source platforms. Our team works from our Karachi office.",
    },
    {
      q: "How does your website development process work?",
      a: "We work in four steps: mockups, front-end development, database development and back-end development. You review the mockups first and decide whether to go ahead or change the design.",
    },
    {
      q: "Do you build WordPress websites?",
      a: "Yes. We build WordPress websites and sites on other content management systems, so your team can update pages and posts without a developer.",
    },
    {
      q: "Can you build an eCommerce website for my business?",
      a: "Yes. We design and develop online stores with product pages, a cart and checkout.",
    },
    {
      q: "Will my website be SEO-friendly?",
      a: "We build every website to be friendly to search engines, with clean page structure, headings, page titles and meta tags. Rankings also depend on content, competition and links, so we do not promise a position. Our SEO team can continue the work after launch.",
    },
    {
      q: "Can I see the design before development starts?",
      a: "Yes. We start with mockups of your whole website or a single page. You review them and decide whether to proceed with the design or ask for changes before we build the front-end.",
    },
    {
      q: "How long does it take to build a website?",
      a: "The time depends on the number of pages, the features and how quickly feedback comes back. We confirm a timeline with the quote after reviewing your requirements.",
    },
    {
      q: "How much does website development cost in Pakistan?",
      a: "Every project is quoted after we review the requirements: the type of website, number of pages, features and platform. Send your details through the Get in Touch form or to info@letusproceed.com and we will reply with a plan and a quote.",
    },
  ],
  contactIntro: "Tell us about the website you need and we will reply with a plan and a quote.",
  schema: {
    name: "Web Development Services",
    serviceType: "Website design and development",
    description:
      "Subscription, eCommerce, WordPress and CMS, news and blog, business and portfolio, and open-source websites, from mockups to back-end.",
  },
};
