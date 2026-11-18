import { notFound } from "next/navigation";
import { V2ServicePage } from "@/components/v2/V2ServicePage";
import type { ServiceData } from "@/components/ServicePage";
import { data as seo } from "@/content/services/seo";
import { data as creative } from "@/content/services/creative-services";
import { data as content } from "@/content/services/content-writing";
import { data as web } from "@/content/services/web-development";
import { data as paid } from "@/content/services/paid-media";
import { data as social } from "@/content/services/social-services";
import { v2Meta } from "@/lib/metaV2";

const services: Record<string, { data: ServiceData; title: string; description: string }> = {
  seo: {
    data: seo,
    title: "SEO Services in Pakistan & Karachi | Let Us Proceed",
    description: "SEO services in Pakistan from a Karachi agency: site audit, on-page, off-page and technical SEO, with a plan built around your website.",
  },
  "creative-services": {
    data: creative,
    title: "Creative Branding Agency in Pakistan | Let Us Proceed",
    description: "Creative branding agency in Pakistan: brand identity, logo and web design, social and email creatives, print, photography and video from Karachi.",
  },
  "content-writing": {
    data: content,
    title: "Content Writing Services in Pakistan | Let Us Proceed",
    description: "Content writing services in Pakistan from a Karachi agency: web, blog, article and eCommerce content and PR, researched, written and edited by our team.",
  },
  "web-development": {
    data: web,
    title: "Web Development Services in Pakistan | Let Us Proceed",
    description: "Web development services in Pakistan from a Karachi agency: WordPress, eCommerce, CMS, news, portfolio and open-source websites built to be SEO-friendly.",
  },
  "paid-media": {
    data: paid,
    title: "Paid Media Services in Pakistan | Let Us Proceed",
    description: "Paid media and Google Ads services in Pakistan from a Karachi agency: search, display, shopping, video and app campaigns, built around your goals.",
  },
  "social-services": {
    data: social,
    title: "Social Media Marketing Services in Pakistan | Let Us Proceed",
    description: "Social media marketing services in Pakistan from a Karachi agency: management, strategy, query handling and audits, built around your brand goals.",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/v2/services/[slug]">) {
  const { slug } = await params;
  const s = services[slug];
  if (!s) return {};
  return v2Meta({ title: s.title, description: s.description, v1Path: s.data.path });
}

export default async function Page({ params }: PageProps<"/v2/services/[slug]">) {
  const { slug } = await params;
  const s = services[slug];
  if (!s) notFound();
  return <V2ServicePage data={s.data} />;
}
