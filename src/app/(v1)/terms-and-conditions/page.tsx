import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "Terms & Conditions | Let Us Proceed", description: "Terms & Conditions for Let Us Proceed.", path: "/terms-and-conditions", noindex: true });

export default function Page() {
  return <PolicyPage title="Terms & Conditions" path="/terms-and-conditions" />;
}
