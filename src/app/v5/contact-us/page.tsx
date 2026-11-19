import { V5Contact, V5PageHero } from "@/components/v5/blocks5";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Contact Let Us Proceed | Get a Quote",
  description: "Contact Let Us Proceed in Karachi or Baldwin, New York. Email info@letusproceed.com or call +92 (213) 840 0967 or +1 (516) 206 6600 for a quote.",
  v1Path: "/contact-us",
});

export default function Page() {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us" }]}
        eyebrow="Contact"
        title="Let's talk about your goals"
        intro={<p>Tell us about your business, your website and the services you need. Our Karachi and New York teams review every request and reply with a recommended plan and quote.</p>}
      />
      <V5Contact title="Send us your brief" />
    </>
  );
}
