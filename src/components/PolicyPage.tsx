import { PageHero } from "./PageHero";
import { site } from "@/lib/site";

// Placeholder until the legal text from the live site is supplied. Pages are noindex meanwhile.
export function PolicyPage({ title, path }: { title: string; path: string }) {
  return (
    <PageHero
      crumbs={[{ name: "Home", href: "/" }, { name: title, href: path }]}
      showContacts={false}
      title={title}
      titleClassName="text-4xl sm:text-5xl"
      intro={
        <p>
          This page is being updated. For any question about how Let Us Proceed handles your data or messages, email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-blue hover:underline">{site.email}</a>.
        </p>
      }
    />
  );
}
