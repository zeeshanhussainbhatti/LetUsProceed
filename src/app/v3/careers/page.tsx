import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/v3/client";
import { Grad, Pill, W } from "@/components/v3/primitives";
import { V3PageHero } from "@/components/v3/blocks";
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
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
        pill="Careers"
        title={<>Join the <Grad>Team</Grad></>}
        intro={
          <>
            <p className="text-2xl font-semibold text-white">We are Optimists who love to work together</p>
            <p>If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed is just the right place for you.</p>
          </>
        }
      />
      <section className="pb-24">
        <W>
          <Reveal>
            <div className="grid items-center gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6">
                <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
              </div>
              <div>
                <Pill dot="#1772e6">Open roles</Pill>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  There are no open roles listed right now. We are always happy to hear from strategists, SEO specialists,
                  designers, developers and writers. Send your CV and a short note about the work you want to do to{" "}
                  <a href={`mailto:${site.email}?subject=Careers`} className="font-semibold text-white underline underline-offset-4">{site.email}</a>.
                </p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Our core values">
                  {values.map((v) => <li key={v} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">{v}</li>)}
                </ul>
              </div>
            </div>
          </Reveal>
        </W>
      </section>
    </>
  );
}
