import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/web-development";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Web Development Services in Pakistan | Let Us Proceed",
  description:
    "Web development services in Pakistan from a Karachi agency: WordPress, eCommerce, CMS, news, portfolio and open-source websites built to be SEO-friendly.",
  path: "/services/web-development",
});

export default function Page() {
  return <ServicePage data={data} />;
}
