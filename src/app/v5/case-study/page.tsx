import { Bars5, Card5, TextLink5, W5 } from "@/components/v5/ui5";
import { V5Contact, V5PageHero } from "@/components/v5/blocks5";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Case Studies | Let Us Proceed",
  description: "Digital marketing case studies from Let Us Proceed, a Karachi agency: SEO, web, social media and paid media work for clients in Pakistan, the UAE and the US.",
  v1Path: "/case-study",
});

export default function Page() {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }]}
        eyebrow="Case studies"
        title="Our work, our results"
        intro={<p>Case studies from Let Us Proceed, a digital marketing agency in Karachi. Each one explains the client&apos;s challenge, what our team did and the results we measured.</p>}
      />
      <section className="pb-20">
        <W5 className="grid gap-5 lg:grid-cols-2">
          <Card5 as="article" className="flex flex-col p-8 sm:p-10">
            <p className="text-sm font-semibold text-brand-orange">Mala Group – Dubai · Travel &amp; Tourism</p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug text-ink sm:text-3xl">Recovering from a Google penalty and growing leads</h2>
            <p className="mt-3 leading-relaxed text-muted">Technical, on-site and off-site SEO for a Dubai destination management company.</p>
            <div className="mt-8 flex-1 rounded-2xl bg-surface-soft p-6">
              <Bars5 items={[{ label: "More leads", value: 256, color: "#f98a28" }, { label: "More organic new users", value: 18, color: "#1772e6" }, { label: "More sessions", value: 17, color: "#0632c8" }]} />
            </div>
            <div className="mt-6"><TextLink5 href="/v5/mala-group-dubai">Read the case study</TextLink5></div>
          </Card5>
          <Card5 as="article" className="flex flex-col p-8 sm:p-10">
            <p className="text-sm font-semibold text-brand-orange">Smart Ghar · eCommerce</p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug text-ink sm:text-3xl">Case Study: Smart Ghar</h2>
            <p className="mt-3 leading-relaxed text-muted">Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the products as a solution to customers&apos; problems.</p>
            <div className="mt-8 flex-1 rounded-2xl bg-surface-soft p-6">
              <Bars5 items={[{ label: "Increase in overall sales growth", value: 80, color: "#1772e6" }, { label: "Increase in returning customers", value: 95, color: "#f98a28" }, { label: "Increase in conversion rate", value: 90, color: "#0632c8" }]} />
            </div>
          </Card5>
        </W5>
        <W5 className="mt-8"><p className="text-muted">More case studies are being added.</p></W5>
      </section>
      <V5Contact />
    </>
  );
}
