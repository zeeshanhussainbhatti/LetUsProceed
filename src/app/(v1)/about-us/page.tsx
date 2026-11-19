import { Eye, Rocket } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Faqs } from "@/components/Faqs";
import { ContactSection } from "@/components/ContactSection";
import { BrandArt, ButtonLink, Container, JsonLd, LastUpdated, SectionHeading } from "@/components/ui";
import { breadcrumbSchema, faqSchema, graph, orgId } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";
import { aboutFaqs as faqs } from "@/content/faqs";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Proceed | Digital Marketing Agency in Karachi",
  description:
    "Let Us Proceed is a Karachi digital marketing agency, part of Sybrid and the Lakson Group, serving clients in Pakistan and the US.",
  path: "/about-us",
});

const timeline = [
  { year: "2017–2020", title: "Local market expansion", text: "We grew our local presence with social media, SEO and web development services across departments." },
  { year: "2022", title: "PR function established", text: "We began building narratives and brand voice for clients." },
  { year: "2023", title: "International operations", text: "We expanded beyond Pakistan while strengthening our local presence." },
  { year: "2024", title: "Expanded workplace", text: "We moved into a bigger office." },
  { year: "2025", title: "50+ team members", text: "Our team grew past 50 people." },
  { year: "2026", title: "Scaling new horizons", text: "Our focus is innovation, impact and sustained growth." },
];

const values = [
  { name: "People first", color: "bg-[#3a8bf0]", text: "We show great pride and confidence in our people. We strongly believe in putting our people first before anything, be it our colleagues, partners or clients. A strong and well-managed people's alliance means they are ready to overcome any challenges." },
  { name: "Disruptive", color: "bg-[#ec9a52]", text: "We are sincere, upfront and confident while seeing things differently. We innovate to challenge the status quo and find chaos as an opportunity, ultimately leading to disruptive solutions." },
  { name: "Optimistic", color: "bg-[#c85560]", text: "More than just pleasant, we're optimistic. Our optimism is grounded in our belief that we can achieve our purpose by providing exemplary services and digital solutions to our clients. We look at problems as opportunities and see setbacks as learning experiences. Because we're optimistic, we believe in our clients and help them achieve their milestones." },
  { name: "Systematic", color: "bg-[#9b51c9]", text: "It is really important for us to make sure that the process is perfect. We behave in the best interest of our clients and partners. We are timely about completing tasks in the best possible manner and encourage an honest working relationship." },
  { name: "Lucid", color: "bg-[#3a8bf0]", text: "We're upfront with our clients, partners, and colleagues. No hidden agendas. We prefer keeping things as direct and transparent as possible." },
];


export default function Page() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          { "@type": "AboutPage", name: "About Let Us Proceed", url: `${site.url}/about-us`, about: { "@id": orgId } },
          breadcrumbSchema(crumbs),
          faqSchema(faqs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Meet your
            <br />
            <span className="text-brand-orange">partner,</span>
            <br />
            not your <span className="text-brand-blue">agency</span>
          </>
        }
        intro={
          <p>
            Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. We
            are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. Our 50+ person
            team provides SEO, social media marketing, paid media, content writing, branding and web development for
            businesses in Pakistan, the US and the UAE.
          </p>
        }
        actions={
          <>
            <ButtonLink href="/contact-us">Get a Quote</ButtonLink>
            <ButtonLink href="/case-study" variant="outline">See Our Work</ButtonLink>
          </>
        }
        footnote={<LastUpdated />}
        art={<BrandArt tone="orange" className="mx-auto w-full max-w-lg" />}
      />

      {/* Who we are */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-surface-soft p-10">
            <BrandArt tone="blue" className="mx-auto w-full max-w-sm" />
            <p className="mt-6 text-center text-sm font-semibold uppercase tracking-wider text-muted">
              Lakson Group · Sybrid · Proceed
            </p>
          </div>
          <div>
            <SectionHeading title="Who We Are" />
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Proceed is part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. We are a
              digital marketing agency and technology solutions partner. We have worked with clients across two
              continents on SEO, social media, paid media, content, branding and web development.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & mission */}
      <section className="bg-brand-gradient py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {[
            { icon: Eye, title: "Vision", text: "We strive to be leaders in digital marketing services. Our success lies in achieving your goals and setting new standards of excellence and professionalism." },
            { icon: Rocket, title: "Mission", text: "We use data-driven, innovative digital marketing campaigns, from SEO and social media to paid media, content and web development, to help clients find the right customers for their products and services." },
          ].map((c) => (
            <article key={c.title} className="rounded-3xl bg-ink p-8 text-white sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue">
                <c.icon className="h-6 w-6" aria-label={`${c.title} icon for Let Us Proceed`} />
              </span>
              <h2 className="mt-5 text-2xl font-semibold">{c.title}</h2>
              <p className="mt-3 leading-relaxed text-white/80">{c.text}</p>
            </article>
          ))}
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Work Together. Grow Together."
            lead="Our journey: how Let Us Proceed has grown."
            align="center"
            motif
          />
          <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            <span className="absolute left-0 right-0 top-12 hidden border-t-2 border-dashed border-brand-orange/60 lg:block" aria-hidden="true" />
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#c8a58a] text-center font-display text-lg font-semibold text-white shadow-md ring-8 ring-white">
                  {t.year}
                </span>
                <h3 className="mt-5 text-center text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-center leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Partner strip */}
      <section className="bg-ink py-14 text-white">
        <Container>
          <p className="mx-auto max-w-4xl text-center font-display text-2xl font-medium leading-snug sm:text-3xl">
            We work as your partner, not just your agency. One team covers SEO, social media, paid media, content,
            branding and web development.
          </p>
        </Container>
      </section>

      {/* Core values */}
      <section className="bg-brand-gradient py-20 sm:py-28">
        <Container>
          <SectionHeading title="Core Values" align="center" />
          <ol className="mx-auto mt-12 max-w-4xl space-y-5">
            {values.map((v, i) => (
              <li
                key={v.name}
                className={`flex gap-5 rounded-3xl p-6 text-white shadow-sm sm:gap-8 sm:p-8 md:w-[88%] ${v.color} ${i % 2 ? "md:ml-auto" : ""}`}
              >
                <span className="font-display text-5xl font-light leading-none text-white/80 sm:text-6xl" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{v.name}</h3>
                  <p className="mt-2 leading-relaxed text-white/95">{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team & offices */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="The team behind Let Us Proceed"
            lead="Our 50+ person team in Karachi and New York includes strategists, SEO specialists, designers, developers, writers and account managers."
          />
          <h2 className="mt-16 text-2xl font-medium uppercase tracking-tight sm:text-3xl">Our offices in Karachi and New York</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl ring-1 ring-black/10">
            <table className="w-full min-w-[560px] text-left">
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">Office</th>
                  <th scope="col" className="px-6 py-4">Address</th>
                  <th scope="col" className="px-6 py-4">Phone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {site.offices.map((o) => (
                  <tr key={o.id}>
                    <td className="px-6 py-4 font-medium">{o.city}</td>
                    <td className="px-6 py-4 text-muted">{o.address}</td>
                    <td className="px-6 py-4"><a href={o.phone.href} className="text-brand-blue hover:underline">{o.phone.display}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-muted">
            Email for both offices: <a href={`mailto:${site.email}`} className="text-brand-blue hover:underline">{site.email}</a>
          </p>
        </Container>
      </section>

      <Faqs title="Frequently asked questions about Let Us Proceed" faqs={faqs} />
      <ContactSection intro="Tell us about your business and goals. Our Karachi and New York teams will review your website and channels and reply with a recommended plan and quote." />
    </>
  );
}
