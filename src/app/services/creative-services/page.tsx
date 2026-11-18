import { Camera, Globe, Layers, Mail, Megaphone, Printer } from "lucide-react";
import { ServicePage, type ServiceData } from "@/components/ServicePage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Creative Branding Agency in Pakistan | Let Us Proceed",
  description:
    "Creative branding agency in Pakistan: brand identity, logo and web design, social and email creatives, print, photography and video from Karachi.",
  path: "/services/creative-services",
});

const data: ServiceData = {
  path: "/services/creative-services",
  crumb: "Creative Services",
  h1: "Less Design + More Chemistry = Our Brand Identity Services",
  intro:
    "Let Us Proceed is a creative branding agency in Pakistan, with an office in Karachi. Our creative services cover full-scale branding, email creatives, website design, social media and banner ads, print material, and photography and video production, so your brand looks and sounds the same everywhere your customers meet it.",
  cta: { label: "Get a quote for your brand", href: "#get-in-touch" },
  tone: "orange",
  cardsTitle: "Creative services we offer in Pakistan",
  cards: [
    {
      icon: Layers,
      title: "Full Scale Branding",
      text: "Full-scale branding covers your logo, your corporate branding design and the social media designs that carry them. You get one consistent identity that customers recognise on every channel.",
    },
    {
      icon: Mail,
      title: "Email Creatives",
      text: "Email creatives designed for each campaign, with a clear message and a design that matches your brand, so every email looks like it comes from you.",
    },
    {
      icon: Globe,
      title: "Website Design",
      text: "Website design that follows your brand identity and builds trust with first-time visitors. Need the site built as well?",
      links: [{ label: "See our web development services", href: "/services/web-development" }],
    },
    {
      icon: Megaphone,
      title: "Social Media & Banner Ads",
      text: "Social media posts and banner ads designed for your audience, so people stop scrolling and notice your offer. Want us to run the channels too?",
      links: [{ label: "See our social media services", href: "/services/social-services" }],
    },
    {
      icon: Printer,
      title: "Print Material",
      text: "Print material designed to match your brand. Made to be kept and read, not thrown away.",
    },
    {
      icon: Camera,
      title: "Photography & Video Production",
      text: "Photography and video production that shows your brand, products and services to your audience. Use it on your website, social media and ads.",
    },
  ],
  processTitle: "How do we build your brand identity?",
  processLead: "Our brand identity process has four steps, from the first brainstorm to going live.",
  steps: [
    {
      title: "Joining Heads",
      text: "We start by brainstorming the idea that defines your brand personality. We narrow the ideas down, review the shortlist together, and settle on one direction before any design work begins.",
    },
    {
      title: "Creating Brand Strategy",
      text: "Next we turn the idea into a brand strategy. We look at the ways your audience can get to know and remember your brand, and choose the one that fits your story best. The result is a clear plan for how your brand will look and speak to customers.",
    },
    {
      title: "Developing Memorable Visuals",
      text: "With the idea and strategy agreed, we design the visuals: photographs, videos, animations and social media designs that feel natural and say the same thing. Each one presents your brand at the moment a customer meets the problem you solve.",
    },
    {
      title: "Executing The Process",
      text: "Everything we planned and designed now goes live across your channels. Your brand identity shows up the same way in front of your audience every time, which builds recognition and trust over time.",
    },
  ],
  caseStudy: { heading: "Case Study: Smart Ghar", work: "" },
  faqsTitle: "Creative services FAQs",
  faqs: [
    {
      q: "What creative services do you offer in Pakistan?",
      a: "Let Us Proceed offers six creative services from our Karachi office: full-scale branding, email creatives, website design, social media and banner ads, print material, and photography and video production. You can hire us for one service or for a complete brand identity.",
    },
    {
      q: "What does a brand identity include?",
      a: "Full-scale branding covers your logo, your corporate branding design and the social media designs that carry them.",
    },
    {
      q: "How does your brand identity process work?",
      a: "We work in four steps: joining heads to brainstorm the idea, creating the brand strategy, developing the visuals, and executing across your channels. We settle on one direction before design work begins.",
    },
    {
      q: "Do you design websites as well as build them?",
      a: "Our website design service makes sure your site follows your brand identity. If you also need it built, our team can do that too: see our web development services.",
    },
    {
      q: "Can you create social media posts and banner ads?",
      a: "Yes. We design social media posts and banner ads for your audience. If you want us to manage your channels as well, see our social media services.",
    },
    {
      q: "Do you offer photography and video production?",
      a: "Yes. We produce photography and video that present your brand, products and services, for use on your website, social media and ads.",
    },
    {
      q: "Do you work with businesses outside Karachi?",
      a: "Yes. We work with clients across Pakistan from our Karachi office, and we also have an office in Baldwin, New York, USA.",
    },
    {
      q: "How do I get a quote?",
      a: "Use the Get a Quote button or the form on this page, tell us which creative services you need, and we reply with a plan and a quote. We do not publish fixed prices because every brand is different.",
    },
  ],
  contactIntro: "Tell us which creative services you need and we will reply with a plan and a quote.",
  schema: {
    name: "Creative and Branding Services",
    serviceType: "Branding and creative design",
    description:
      "Full-scale branding, email creatives, website design, social media and banner ads, print material, and photography and video production.",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
