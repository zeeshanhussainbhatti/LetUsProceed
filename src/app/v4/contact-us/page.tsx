import { V4Contact, V4PageHero } from "@/components/v4/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Contact Let Us Proceed | Get a Quote",
  description: "Contact Let Us Proceed in Karachi or Baldwin, New York. Email info@letusproceed.com or call +92 (213) 840 0967 or +1 (516) 206 6600 for a quote.",
  v1Path: "/contact-us",
});

export default function Page() {
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us" }]}
        tag="Contact"
        title="Let's talk about your goals"
        intro={<p>Tell us about your business, your website and the services you need. Our Karachi and New York teams review every request and reply with a recommended plan and quote.</p>}
      />
      <V4Contact title="Send us your brief" />
    </>
  );
}
