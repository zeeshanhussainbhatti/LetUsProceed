import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BrandArt } from "@/components/ui";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Resources | Let Us Proceed",
  description: "Guides and articles on SEO, social media, paid media, content and web development from Let Us Proceed.",
  path: "/resources",
  noindex: true,
});

export default function Page() {
  return (
    <PageHero
      crumbs={[{ name: "Home", href: "/" }, { name: "Resources", href: "/resources" }]}
      showContacts={false}
      title={<>Resources</>}
      intro={
        <p>
          Guides and articles from our SEO, social media, paid media, content and web development teams are on their
          way. Meanwhile, see our{" "}
          <Link href="/case-study" className="font-medium text-brand-blue hover:underline">case studies</Link> or{" "}
          <Link href="/services" className="font-medium text-brand-blue hover:underline">services</Link>.
        </p>
      }
      art={<BrandArt tone="red" className="mx-auto w-full max-w-lg" />}
    />
  );
}
