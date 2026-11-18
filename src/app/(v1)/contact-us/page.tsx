import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { BrandArt, JsonLd } from "@/components/ui";
import { breadcrumbSchema, graph, orgId } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Let Us Proceed | Get a Quote",
  description:
    "Contact Let Us Proceed in Karachi or Baldwin, New York. Email info@letusproceed.com or call +92 (213) 840 0967 or +1 (516) 206 6600 for a quote.",
  path: "/contact-us",
});

export default function Page() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      <JsonLd data={graph({ "@type": "ContactPage", name: "Contact Let Us Proceed", url: `${site.url}/contact-us`, about: { "@id": orgId } }, breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Let&apos;s <span className="text-brand-orange">talk</span> about your{" "}
            <span className="text-brand-blue">goals</span>
          </>
        }
        intro={
          <p>
            Tell us about your business, your website and the services you need. Our Karachi and New York teams review
            every request and reply with a recommended plan and quote.
          </p>
        }
        art={<BrandArt tone="blue" className="mx-auto w-full max-w-lg" />}
      />
      <ContactSection />
    </>
  );
}
