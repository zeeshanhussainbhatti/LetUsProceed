import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "SMS Terms & Conditions | Let Us Proceed", description: "SMS Terms & Conditions for Let Us Proceed.", path: "/sms-terms", noindex: true });

export default function Page() {
  return <PolicyPage title="SMS Terms & Conditions" path="/sms-terms" />;
}
