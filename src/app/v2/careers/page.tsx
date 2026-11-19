import Image from "next/image";
import { site } from "@/lib/site";
import { Kicker, Wrap } from "@/components/v2/primitives";
import { V2PageHero } from "@/components/v2/blocks";
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
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
        kicker="Careers"
        title={<>Join the <span className="text-brand-orange">team</span></>}
        intro={
          <>
            <p className="font-display text-2xl font-semibold text-ink">We are Optimists who love to work together</p>
            <p>If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed is just the right place for you.</p>
          </>
        }
      />
      <section className="bg-white py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
          <div>
            <Kicker>Open roles</Kicker>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              There are no open roles listed right now. We are always happy to hear from strategists, SEO specialists,
              designers, developers and writers. Send your CV and a short note about the work you want to do to{" "}
              <a href={`mailto:${site.email}?subject=Careers`} className="font-semibold text-ink underline underline-offset-4">{site.email}</a>.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Our core values">
              {values.map((v) => <li key={v} className="rounded-full bg-[#f6f3ee] px-4 py-2 text-sm font-medium">{v}</li>)}
            </ul>
          </div>
        </Wrap>
      </section>
    </>
  );
}
