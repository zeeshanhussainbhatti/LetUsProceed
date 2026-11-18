import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/creative-services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Creative Branding Agency in Pakistan | Let Us Proceed",
  description:
    "Creative branding agency in Pakistan: brand identity, logo and web design, social and email creatives, print, photography and video from Karachi.",
  path: "/services/creative-services",
});

export default function Page() {
  return <ServicePage data={data} />;
}
