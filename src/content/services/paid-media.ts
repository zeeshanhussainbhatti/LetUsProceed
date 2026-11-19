import { Megaphone, MousePointerClick, Repeat, Smartphone, Target, TrendingUp } from "lucide-react";
import type { ServiceData } from "@/components/ServicePage";

export const data: ServiceData = {
  path: "/services/paid-media",
  crumb: "Paid Media",
  h1: "Paid Media Services in Pakistan",
  tagline: "Turn prospects into customers.",
  intro:
    "Let Us Proceed is a Karachi agency that plans, buys and manages paid media for businesses in Pakistan. We set up Google Ads search, display, shopping, video and app campaigns around your goals, from brand awareness and website traffic to app installs and sales.",
  cta: { label: "Get a Paid Media Quote", href: "#get-in-touch" },
  tone: "orange",
  cardsTitle: "Paid Media Services We Offer in Pakistan",
  cards: [
    {
      icon: Megaphone,
      title: "Brand Awareness Campaigns",
      text: "Introduce your brand to the audience that matters to you and explain how it makes their lives better, with media planned and bought by our team.",
    },
    {
      icon: MousePointerClick,
      title: "Engagement Campaigns",
      text: "Google Ads campaigns we plan, manage and run to bring visitors who stay and interact with your website.",
    },
    {
      icon: TrendingUp,
      title: "Website Traffic Campaigns",
      text: "Paid campaigns aimed at people who are more likely to be interested in what you sell, so your budget goes to the right audience.",
    },
    {
      icon: Smartphone,
      title: "App Install Campaigns",
      text: "Campaigns that put your app in front of your target audience on their smartphones and drive installs.",
    },
    {
      icon: Target,
      title: "Conversion Campaigns",
      text: "Campaigns built around the action you want, such as a sale, a form fill or a call, and adjusted using your campaign data.",
    },
    {
      icon: Repeat,
      title: "Remarketing Campaigns",
      text: "Show your ads again to people who have already visited your site or shown interest, to bring them back to finish the action.",
    },
  ],
  processTitle: "How Does Our Paid Media Process Work?",
  processLead: "Our paid media process has five steps, from competitor analysis to keyword creation.",
  steps: [
    {
      title: "Competitor and Website Analysis",
      text: "Our Google Ads specialist starts by analysing your competitors' websites with analysis tools: their traffic, where it comes from and which keywords bring it. This shows where you stand and helps us set goals for your brand or product and find the routes to reach them.",
    },
    {
      title: "Setting Campaign Goals",
      text: "Based on the analysis, we agree your campaign goals with you. Goals can be brand awareness, website traffic, or more sales of your services or products. Each goal decides who we target and how we measure the campaign.",
    },
    {
      title: "Campaign Selection",
      text: "To meet your goals, we select the campaign type that suits them. If you already know what you want, we follow your choice; otherwise our SEM team recommends one. Options include search, display, shopping, video and app campaigns, and each leads to different results.",
    },
    {
      title: "Setting the Campaign",
      text: "Next we build the campaign around your goals: campaign name, locations, audience, budget, Google bidding type and ad group. Everything is set up so the campaign works towards the goals agreed in Step #02.",
    },
    {
      title: "Keyword Creation",
      text: "We create and select keywords for each ad group, using exact, phrase or broad match depending on the campaign goal. Exact match shows your ad for searches with the same meaning as the keyword, phrase match for searches that include its meaning, and broad match reaches the widest range of related searches.",
    },
  ],
  related: {
    lead: "Ads convert better with strong creative and a fast website. See our",
    links: [
      { label: "creative services", href: "/services/creative-services" },
      { label: "web development services", href: "/services/web-development" },
      { label: "SEO services", href: "/services/seo" },
    ],
  },
  caseStudy: { heading: "Paid Media Case Study: Smart Ghar", work: "" },
  faqsTitle: "Paid Media FAQs",
  faqs: [
    {
      q: "What paid media services do you offer in Pakistan?",
      a: "Let Us Proceed plans, buys and manages paid media campaigns for brand awareness, engagement, website traffic, app installs, conversions and remarketing. We run Google Ads search, display, shopping, video and app campaigns from our Karachi office.",
    },
    {
      q: "What is paid media?",
      a: "Paid media is advertising you pay for to reach an audience, such as search ads, display banners and video ads. The campaign is set up to show your ads to people who match your target audience, and you pay for the clicks or views the platform delivers.",
    },
    {
      q: "How does your paid media process work?",
      a: "We analyse your competitors and your website, set campaign goals with you, select the campaign type, set up the campaign and create the keywords.",
    },
    {
      q: "Which platforms do you run ads on?",
      a: "Our process is built around Google Ads: search, display, shopping, video and app campaigns.",
    },
    {
      q: "What is the difference between paid media and SEO?",
      a: "SEO earns organic rankings over time and has no cost per click. Paid media places ads that can start showing as soon as a campaign is live and stop when the budget stops. Many businesses use both, and our SEO team can work alongside the paid media team.",
    },
    {
      q: "How much do paid media services cost?",
      a: "There are two costs: the ad budget, which is paid to the advertising platform, and our management fee. We agree the budget during campaign setup and quote our fee after we review your goals. Send your details through the Get in Touch form or to info@letusproceed.com.",
    },
    {
      q: "Can you guarantee leads or sales?",
      a: "No one can promise a fixed result, because ad performance depends on budget, competition, your offer and your website. We set goals with you, track the results and adjust the campaign.",
    },
    {
      q: "How will I know how my campaigns are performing?",
      a: "We track results against the goals set at the start and share reports with you.",
    },
  ],
  contactIntro: "Tell us your goals and budget and we will reply with a recommended campaign plan and quote.",
  schema: {
    name: "Paid Media Services",
    serviceType: "Paid media and Google Ads management",
    description:
      "Google Ads search, display, shopping, video and app campaigns for brand awareness, engagement, traffic, app installs, conversions and remarketing.",
  },
};
