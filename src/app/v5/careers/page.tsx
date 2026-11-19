import { site } from "@/lib/site";
import { Card5, Heading5, W5 } from "@/components/v5/ui5";
import { V5PageHero } from "@/components/v5/blocks5";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Careers at Let Us Proceed | Jobs in Karachi",
  description: "Careers at Let Us Proceed, a digital marketing agency in Karachi. Join our SEO, social media, content, design and development teams.",
  v1Path: "/careers",
});

const values = ["People first", "Disruptive", "Optimistic", "Systematic", "Lucid"];

export default function Page() {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
        eyebrow="Careers"
        title="Join the Team"
        intro={
          <>
            <p className="text-xl font-semibold text-ink">We are Optimists who love to work together</p>
            <p>If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed is just the right place for you.</p>
          </>
        }
        image={{ src: "/images/join-team.webp", w: 898, h: 655, alt: "Illustration of two team members, one holding a magnifying glass and one a megaphone" }}
      />
      <section className="pb-24">
        <W5>
          <Card5 className="p-8 sm:p-12">
            <Heading5 eyebrow="Open roles" title="No open roles listed right now" />
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
              We are always happy to hear from strategists, SEO specialists, designers, developers and writers. Send your
              CV and a short note about the work you want to do to{" "}
              <a href={`mailto:${site.email}?subject=Careers`} className="font-semibold text-brand-blue">{site.email}</a>.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Our core values">
              {values.map((v) => <li key={v} className="rounded-full bg-surface-soft px-4 py-2 text-sm font-medium text-ink">{v}</li>)}
            </ul>
          </Card5>
        </W5>
      </section>
    </>
  );
}
