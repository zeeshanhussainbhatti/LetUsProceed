import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/ui";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Careers at Let Us Proceed | Jobs in Karachi",
  description:
    "Careers at Let Us Proceed, a digital marketing agency in Karachi. Join our SEO, social media, content, design and development teams.",
  path: "/careers",
});

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]}
        showContacts={false}
        title={
          <>
            Join the <span className="text-brand-orange">team</span>
          </>
        }
        tagline="We are Optimists who love to work together"
        intro={
          <p>
            If you&apos;re up for something challenging yet interesting, don&apos;t mind working and reworking on a
            certain project until it&apos;s the best that could be delivered, and your own best critique, then Proceed is
            just the right place for you.
          </p>
        }
        art={
          <Image src="/images/join-team.webp" alt="Illustration of two team members, one holding a magnifying glass and one a megaphone" width={898} height={655} priority className="w-full" />
        }
      />
      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading title="Open roles" />
          <p className="mt-5 text-lg leading-relaxed text-muted">
            There are no open roles listed right now. We are always happy to hear from strategists, SEO specialists,
            designers, developers and writers. Send your CV and a short note about the work you want to do to{" "}
            <a href={`mailto:${site.email}?subject=Careers`} className="font-medium text-brand-blue hover:underline">{site.email}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
