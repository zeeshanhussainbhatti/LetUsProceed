import { PolicyPage } from "@/components/PolicyPage";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: "Privacy Policy | Let Us Proceed", description: "Privacy Policy for Let Us Proceed.", path: "/privacy-policy", noindex: true });

export default function Page() {
  return <PolicyPage title="Privacy Policy" path="/privacy-policy" />;
}
