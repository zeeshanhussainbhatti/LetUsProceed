import { V3Contact, V3PageHero } from "@/components/v3/blocks";
import { Grad } from "@/components/v3/primitives";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Contact Let Us Proceed | Get a Quote",
  description: "Contact Let Us Proceed in Karachi or Baldwin, New York. Email info@letusproceed.com or call +92 (213) 840 0967 or +1 (516) 206 6600 for a quote.",
  v1Path: "/contact-us",
});

export default function Page() {
  return (
    <>
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us" }]}
        pill="Contact"
        title={<>Let&apos;s talk about your <Grad>goals</Grad></>}
        intro={<p>Tell us about your business, your website and the services you need. Our Karachi and New York teams review every request and reply with a recommended plan and quote.</p>}
      />
      <V3Contact title="Send us your brief" />
    </>
  );
}
