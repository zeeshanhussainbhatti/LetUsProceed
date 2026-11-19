import { CalendarDays, Compass, MessageCircle, Search } from "lucide-react";
import type { ServiceData } from "@/components/ServicePage";

export const data: ServiceData = {
  path: "/services/social-services",
  crumb: "Social Media Services",
  h1: "Social Media Marketing Services in Pakistan",
  tagline: "Raise your brand with a loyal customer base.",
  intro:
    "Let Us Proceed is a social media marketing agency in Karachi that works with businesses across Pakistan. We plan your strategy, create the content, handle audience queries and audit your existing presence, all built around the goals you set for your brand.",
  cta: { label: "Get a Social Media Quote", href: "#get-in-touch" },
  tone: "red",
  cardsTitle: "Social Media Services We Offer in Pakistan",
  cards: [
    {
      icon: CalendarDays,
      title: "Social Media Management",
      text: "We manage your brand's social media accounts, planning and publishing content that matches your goals.",
    },
    {
      icon: MessageCircle,
      title: "Customer Query Management",
      text: "We monitor your comments and messages and answer customer questions, so people who want to buy from you do not go unanswered.",
    },
    {
      icon: Compass,
      title: "Social Media Strategy",
      text: "We build a social media strategy around your brand, audience and goals: what to post, where and when, and how we will measure it.",
    },
    {
      icon: Search,
      title: "Social Media Audit",
      text: "We review your current accounts, content and results, find the gaps and recommend what to fix.",
    },
  ],
  processTitle: "How Does Our Social Media Process Work?",
  processLead: "Our social media process runs from research and concept to publishing and reporting.",
  steps: [
    {
      title: "Research and Concept",
      text: "We start with your brand, your audience and your goals. Our creative team brainstorms ideas that fit your brand's image and narrows them down to one clear concept for your social media.",
    },
    {
      title: "Strategy and Brand Story",
      text: "We turn the concept into a plan: the story your brand tells, the platforms to use, the themes your content will cover and the numbers we will track.",
    },
    {
      title: "Content Creation",
      text: "Our videographers, photographers, animators and visual artists produce the photos, videos and animations your channels need, in a style that matches your brand.",
    },
    {
      title: "Design and Approval",
      text: "Our graphic designers turn each idea into finished posts, stories and cover images, and you review them before anything goes live.",
    },
    {
      title: "Publishing and Community Management",
      text: "We publish your content on the agreed days and reply to comments and messages, so your audience always gets an answer.",
    },
    {
      title: "Reporting and Improvement",
      text: "We track how your accounts perform against your goals, share a report with you and adjust the plan.",
    },
  ],
  related: {
    lead: "Need ads or design as well? See our",
    links: [
      { label: "Paid Media services", href: "/services/paid-media" },
      { label: "Creative services", href: "/services/creative-services" },
    ],
  },
  caseStudy: { heading: "Case Study: Smart Ghar", work: "" },
  faqsTitle: "Social Media Marketing FAQs",
  faqs: [
    {
      q: "Which social media platforms do you work on?",
      a: "We manage business accounts on the main social platforms. During planning we recommend the platforms where your customers are, so you do not spend effort on channels that do not fit your brand.",
    },
    {
      q: "What does social media management include?",
      a: "It includes planning your content, creating it, publishing it on the agreed days and replying to comments and messages. We also track how your accounts perform and share a report.",
    },
    {
      q: "What is query management?",
      a: "Query management means we monitor your comments and messages and answer customer questions on your behalf, so potential buyers are not left waiting.",
    },
    {
      q: "What does a social media audit cover?",
      a: "We review your current accounts, content and results, point out the gaps and recommend what to fix first.",
    },
    {
      q: "How much do your social media marketing services cost?",
      a: "The cost depends on the platforms, how often you post and what content you need. Send your goals through the form on this page and we will reply with a quote.",
    },
    {
      q: "Can you guarantee more followers or sales?",
      a: "No agency can fully control how audiences and platforms respond. We set goals with you, work on them every month and report the numbers, so you can see what is working.",
    },
    {
      q: "How will I know how my accounts are performing?",
      a: "We share a report on the numbers that match your goals, for example reach, engagement and messages received.",
    },
    {
      q: "How is social media marketing different from paid media?",
      a: "Social media marketing is the content, community and strategy on your own accounts. Paid media is advertising you pay for, such as Google Ads and social ads. Many brands use both, and you can read more on our Paid Media services page.",
    },
  ],
  contactIntro: "Tell us about your brand and your social channels and we will reply with a plan and a quote.",
  schema: {
    name: "Social Media Marketing Services",
    serviceType: "Social media marketing",
    description: "Social media management, customer query management, social media strategy and social media audits.",
  },
};
