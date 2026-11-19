import { ServicePage } from "@/components/ServicePage";
import { data } from "@/content/services/content-writing";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Content Writing Services in Pakistan | Let Us Proceed",
  description:
    "Content writing services in Pakistan from a Karachi agency: web, blog, article and eCommerce content and PR, researched, written and edited by our team.",
  path: "/services/content-writing",
});

export default function Page() {
  return <ServicePage data={data} />;
}
