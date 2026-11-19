import Image from "next/image";
import { site } from "@/lib/site";
import { Box, C, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4PageHero } from "@/components/v4/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Careers at Let Us Proceed | Jobs in Karachi",
  description: "Careers at Let Us Proceed, a digital marketing agency in Karachi. Join our SEO, social media, content, design and development teams.",
  v1Path: "/careers",
});

const values = [["People first", C.blue], ["Disruptive", C.orange], ["Optimistic", C.red], ["Systematic", C.deep], ["Lucid", "#fff"]];

export default function Page() {
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
        tag="Careers"
        color={C.orange}
        title="Join the Team"
        intro={
          <>
            <p className="font-display text-2xl font-extrabold uppercase">We are Optimists who love to work together</p>
            <p>If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed is just the right place for you.</p>
          </>
        }
      />
      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Box className="bg-white p-4" shadow={C.blue}>
            <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} className="w-full" />
          </Box>
          <div>
            <Tag4 bg={C.blue}>Open roles</Tag4>
            <p className="mt-5 text-lg leading-relaxed">
              There are no open roles listed right now. We are always happy to hear from strategists, SEO specialists,
              designers, developers and writers. Send your CV and a short note about the work you want to do to{" "}
              <a href={`mailto:${site.email}?subject=Careers`} className="font-bold underline decoration-[3px] underline-offset-4">{site.email}</a>.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Our core values">
              {values.map(([v, c]) => (
                <li key={v} className="border-[3px] border-ink px-4 py-2 font-bold" style={{ background: c, color: c === C.orange || c === "#fff" ? C.ink : "#fff" }}>{v}</li>
              ))}
            </ul>
          </div>
        </Wrap4>
      </section>
    </>
  );
}
