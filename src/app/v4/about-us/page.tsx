import { site } from "@/lib/site";
import { Block, Box, Btn4, C, H2b, Mark4, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4Contact, V4Faq, V4PageHero } from "@/components/v4/blocks";
import { aboutFaqs } from "@/content/faqs";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "About Proceed | Digital Marketing Agency in Karachi",
  description: "Let Us Proceed is a Karachi digital marketing agency, part of Sybrid and the Lakson Group, serving clients in Pakistan and the US.",
  v1Path: "/about-us",
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
  { name: "People first", c: C.blue, text: "We show great pride and confidence in our people. We strongly believe in putting our people first before anything, be it our colleagues, partners or clients. A strong and well-managed people's alliance means they are ready to overcome any challenges." },
  { name: "Disruptive", c: C.orange, text: "We are sincere, upfront and confident while seeing things differently. We innovate to challenge the status quo and find chaos as an opportunity, ultimately leading to disruptive solutions." },
  { name: "Optimistic", c: C.red, text: "More than just pleasant, we're optimistic. Our optimism is grounded in our belief that we can achieve our purpose by providing exemplary services and digital solutions to our clients. We look at problems as opportunities and see setbacks as learning experiences. Because we're optimistic, we believe in our clients and help them achieve their milestones." },
  { name: "Systematic", c: C.deep, text: "It is really important for us to make sure that the process is perfect. We behave in the best interest of our clients and partners. We are timely about completing tasks in the best possible manner and encourage an honest working relationship." },
  { name: "Lucid", c: C.ink, text: "We're upfront with our clients, partners, and colleagues. No hidden agendas. We prefer keeping things as direct and transparent as possible." },
];

export default function Page() {
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us" }]}
        tag="Know us"
        color={C.orange}
        title={<>Meet your partner, not your agency</>}
        intro={<p>Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. We are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. Our 50+ person team provides SEO, social media marketing, paid media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.</p>}
        actions={<><Btn4 href="/v4/contact-us">Get a Quote</Btn4><Btn4 href="/v4/case-study" bg="#fff">See Our Work</Btn4></>}
      />

      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-10 lg:grid-cols-3">
          <Box className="bg-[#fff6ec] p-8">
            <Tag4 bg={C.blue}>Who we are</Tag4>
            <p className="mt-5 text-lg leading-relaxed">
              Proceed is part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. We are a
              digital marketing agency and technology solutions partner. We have worked with clients across two
              continents on SEO, social media, paid media, content, branding and web development.
            </p>
            <p className="mt-6 font-display text-xs font-extrabold uppercase tracking-[0.2em]">Lakson Group → Sybrid → Proceed</p>
          </Box>
          {[
            { t: "Vision", bg: C.blue, d: "We strive to be leaders in digital marketing services. Our success lies in achieving your goals and setting new standards of excellence and professionalism." },
            { t: "Mission", bg: C.red, d: "We use data-driven, innovative digital marketing campaigns, from SEO and social media to paid media, content and web development, to help clients find the right customers for their products and services." },
          ].map((c) => (
            <Box key={c.t} as="article" className="flex flex-col justify-end p-8 text-white" style={{ background: c.bg }}>
              <h2 className="font-display text-4xl font-extrabold uppercase">{c.t}</h2>
              <p className="mt-4 leading-relaxed">{c.d}</p>
            </Box>
          ))}
        </Wrap4>
      </section>

      <section className="border-t-[3px] border-ink bg-[#fff6ec] py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.orange}>Our journey</Tag4>
          <H2b className="mt-5">Work Together. <Block bg={C.blue}>Grow Together.</Block></H2b>
          <p className="mt-4 text-lg">Our journey: how Let Us Proceed has grown.</p>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <Box key={t.year} as="li" hover shadow={[C.blue, C.orange, C.red][i % 3]} className="bg-white p-7">
                <span className="inline-block border-[3px] border-ink px-3 py-1 font-display text-2xl font-extrabold" style={{ background: [C.blue, C.orange, C.red][i % 3], color: i % 3 === 1 ? C.ink : "#fff" }}>{t.year}</span>
                <h3 className="mt-5 font-display text-xl font-extrabold uppercase">{t.title}</h3>
                <p className="mt-2 leading-relaxed">{t.text}</p>
              </Box>
            ))}
          </ol>
        </Wrap4>
      </section>

      <section className="border-y-[3px] border-ink bg-brand-orange py-14">
        <Wrap4 className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-4xl font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            We work as your partner, not just your agency. One team covers SEO, social media, paid media, content,
            branding and web development.
          </p>
          <div className="shrink-0 border-[3px] border-ink bg-white p-4" style={{ boxShadow: `8px 8px 0 0 ${C.ink}` }}>
            <Mark4 className="h-28 w-28" />
          </div>
        </Wrap4>
      </section>

      <section className="py-20 sm:py-24">
        <Wrap4>
          <Tag4 bg={C.red}>What we believe</Tag4>
          <H2b className="mt-5">Core Values</H2b>
          <ol className="mt-12 space-y-6">
            {values.map((v, i) => (
              <Box key={v.name} as="li" hover shadow={v.c} className="grid bg-white md:grid-cols-[14rem_1fr]">
                <div className="flex items-center gap-4 border-b-[3px] border-ink p-6 text-white md:border-b-0 md:border-r-[3px]" style={{ background: v.c, color: v.c === C.orange ? C.ink : "#fff" }}>
                  <span className="font-display text-4xl font-extrabold" aria-hidden="true">0{i + 1}</span>
                  <h3 className="font-display text-xl font-extrabold uppercase">{v.name}</h3>
                </div>
                <p className="p-6 text-lg leading-relaxed">{v.text}</p>
              </Box>
            ))}
          </ol>
        </Wrap4>
      </section>

      <section className="border-t-[3px] border-ink bg-ink py-20 text-white sm:py-24">
        <Wrap4>
          <Tag4 bg={C.orange}>People &amp; places</Tag4>
          <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.98] sm:text-6xl">The team behind Let Us Proceed</h2>
          <p className="mt-6 max-w-3xl text-lg text-white/85">Our 50+ person team in Karachi and New York includes strategists, SEO specialists, designers, developers, writers and account managers.</p>
          <h2 className="mt-14 font-display text-2xl font-extrabold uppercase">Our offices in Karachi and New York</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {site.offices.map((o, i) => (
              <div key={o.id} className="border-[3px] border-white p-7" style={{ background: i ? C.orange : C.blue, color: i ? C.ink : "#fff", boxShadow: "8px 8px 0 0 #fff" }}>
                <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em]">{o.city}</p>
                <p className="mt-3 text-xl font-bold leading-snug">{o.address}</p>
                <a href={o.phone.href} className="mt-5 inline-block text-lg font-extrabold underline decoration-[3px] underline-offset-4">{o.phone.display}</a>
              </div>
            ))}
          </div>
          <p className="mt-8">Email for both offices: <a href={`mailto:${site.email}`} className="font-bold underline underline-offset-4">{site.email}</a></p>
        </Wrap4>
      </section>

      <V4Faq title="Frequently asked questions about Let Us Proceed" faqs={aboutFaqs} />
      <V4Contact intro="Tell us about your business and goals. Our Karachi and New York teams will review your website and channels and reply with a recommended plan and quote." />
    </>
  );
}
