import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/paid-media";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Paid Media Services in Pakistan | Let Us Proceed",
  description:
    "Paid media and Google Ads services in Pakistan from a Karachi agency: search, display, shopping, video and app campaigns, built around your goals.",
  path: "/services/paid-media",
});

export default function Page() {
  return <ServicePage data={data} />;
}
