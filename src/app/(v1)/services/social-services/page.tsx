import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/social-services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Social Media Marketing Services in Pakistan | Let Us Proceed",
  description:
    "Social media marketing services in Pakistan from a Karachi agency: management, strategy, query handling and audits, built around your brand goals.",
  path: "/services/social-services",
});

export default function Page() {
  return <ServicePage data={data} />;
}
