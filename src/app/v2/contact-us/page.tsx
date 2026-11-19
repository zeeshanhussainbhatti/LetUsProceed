import { V2Contact, V2PageHero } from "@/components/v2/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Contact Let Us Proceed | Get a Quote",
  description: "Contact Let Us Proceed in Karachi or Baldwin, New York. Email info@letusproceed.com or call +92 (213) 840 0967 or +1 (516) 206 6600 for a quote.",
  v1Path: "/contact-us",
});

export default function Page() {
  return (
    <>
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us" }]}
        kicker="Contact"
        title={<>Let&apos;s <span className="text-brand-orange">talk</span> about your <span className="text-brand-blue">goals</span></>}
        intro={<p>Tell us about your business, your website and the services you need. Our Karachi and New York teams review every request and reply with a recommended plan and quote.</p>}
      />
      <V2Contact title="Send us your brief" />
    </>
  );
}
