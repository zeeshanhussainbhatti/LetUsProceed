import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/seo";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "SEO Services in Pakistan & Karachi | Let Us Proceed",
  description:
    "SEO services in Pakistan from a Karachi agency: site audit, on-page, off-page and technical SEO, with a plan built around your website.",
  path: "/services/seo",
});

export default function Page() {
  return <ServicePage data={data} />;
}
