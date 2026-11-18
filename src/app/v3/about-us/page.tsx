import { site } from "@/lib/site";
import { Reveal, SpotlightGroup } from "@/components/v3/client";
import { Cta, Glass, Grad, H2, Mark, Pill, W } from "@/components/v3/primitives";
import { V3Contact, V3Faq, V3PageHero } from "@/components/v3/blocks";
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
  { name: "People first", c: "#1772e6", text: "We show great pride and confidence in our people. We strongly believe in putting our people first before anything, be it our colleagues, partners or clients. A strong and well-managed people's alliance means they are ready to overcome any challenges." },
  { name: "Disruptive", c: "#f98a28", text: "We are sincere, upfront and confident while seeing things differently. We innovate to challenge the status quo and find chaos as an opportunity, ultimately leading to disruptive solutions." },
  { name: "Optimistic", c: "#c81418", text: "More than just pleasant, we're optimistic. Our optimism is grounded in our belief that we can achieve our purpose by providing exemplary services and digital solutions to our clients. We look at problems as opportunities and see setbacks as learning experiences. Because we're optimistic, we believe in our clients and help them achieve their milestones." },
  { name: "Systematic", c: "#0632c8", text: "It is really important for us to make sure that the process is perfect. We behave in the best interest of our clients and partners. We are timely about completing tasks in the best possible manner and encourage an honest working relationship." },
  { name: "Lucid", c: "#ffffff", text: "We're upfront with our clients, partners, and colleagues. No hidden agendas. We prefer keeping things as direct and transparent as possible." },
];

export default function Page() {
  return (
    <>
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us" }]}
        pill="Know us"
        title={<>Meet your partner, not your <Grad>agency</Grad></>}
        intro={<p>Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. We are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. Our 50+ person team provides SEO, social media marketing, paid media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.</p>}
        actions={<><Cta href="/v3/contact-us">Get a Quote</Cta><Cta href="/v3/case-study" variant="glass">See Our Work</Cta></>}
      />

      <section className="py-16 sm:py-24">
        <W>
          <SpotlightGroup className="grid gap-4 lg:grid-cols-3">
            <Reveal className="lg:col-span-1">
              <Glass className="h-full p-8 sm:p-10">
                <div className="relative">
                  <Pill dot="#1772e6">Who we are</Pill>
                  <p className="mt-6 text-xl leading-relaxed">
                    Proceed is part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. We are
                    a digital marketing agency and technology solutions partner. We have worked with clients across two
                    continents on SEO, social media, paid media, content, branding and web development.
                  </p>
                  <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Lakson Group · Sybrid · Proceed</p>
                </div>
              </Glass>
            </Reveal>
            {[
              { t: "Vision", g: "from-brand-blue to-brand-blue-deep", d: "We strive to be leaders in digital marketing services. Our success lies in achieving your goals and setting new standards of excellence and professionalism." },
              { t: "Mission", g: "from-brand-orange to-brand-red", d: "We use data-driven, innovative digital marketing campaigns, from SEO and social media to paid media, content and web development, to help clients find the right customers for their products and services." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i + 1) * 80}>
                <article className={`flex h-full min-h-80 flex-col justify-end rounded-[1.75rem] bg-gradient-to-br p-8 sm:p-10 ${c.g}`}>
                  <h2 className="text-4xl font-semibold">{c.t}</h2>
                  <p className="mt-4 leading-relaxed text-white/90">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </SpotlightGroup>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill>Our journey</Pill>
            <H2 className="mt-6">Work Together. <Grad>Grow Together.</Grad></H2>
            <p className="mt-4 text-white/60">Our journey: how Let Us Proceed has grown.</p>
          </Reveal>
          <ol className="relative mt-14 border-l border-white/15 pl-8 sm:ml-4 sm:pl-12">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full ring-4 ring-[#08090d] sm:-left-[3.45rem]" style={{ background: ["#1772e6", "#f98a28", "#c81418"][i % 3] }} />
                <Reveal>
                  <p className="v3-grad font-display text-3xl font-semibold sm:text-4xl">{t.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
                  <p className="mt-2 max-w-xl text-white/60">{t.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <div className="flex flex-col items-start gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                We work as your partner, not just your agency. <Grad>One team</Grad> covers SEO, social media, paid media,
                content, branding and web development.
              </p>
              <Mark className="v2-float w-28 shrink-0 sm:w-40" />
            </div>
          </Reveal>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill dot="#c81418">What we believe</Pill>
            <H2 className="mt-6">Core Values</H2>
          </Reveal>
          <SpotlightGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 70} className={i === 0 ? "lg:col-span-2" : ""}>
                <Glass as="article" className="h-full p-8">
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="h-3 w-3 rounded-full" style={{ background: v.c }} />
                      <span className="font-display text-5xl font-semibold text-white/10" aria-hidden="true">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold">{v.name}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{v.text}</p>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </SpotlightGroup>
        </W>
      </section>

      <section className="py-16 sm:py-24">
        <W>
          <Reveal>
            <Pill dot="#1772e6">People &amp; places</Pill>
            <H2 className="mt-6">The team behind Let Us Proceed</H2>
            <p className="mt-6 max-w-3xl text-lg text-white/65">Our 50+ person team in Karachi and New York includes strategists, SEO specialists, designers, developers, writers and account managers.</p>
            <h2 className="mt-14 text-2xl font-semibold">Our offices in Karachi and New York</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {site.offices.map((o, i) => (
              <Reveal key={o.id} delay={i * 80}>
                <div className="h-full rounded-[2rem] p-px" style={{ background: i ? "linear-gradient(135deg,#f98a28,transparent)" : "linear-gradient(135deg,#1772e6,transparent)" }}>
                  <div className="h-full rounded-[2rem] bg-[#0d1017] p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">{o.city}</p>
                    <p className="mt-3 text-xl font-semibold leading-snug">{o.address}</p>
                    <a href={o.phone.href} className="mt-6 inline-block text-lg font-semibold text-brand-orange hover:underline">{o.phone.display}</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-white/60">Email for both offices: <a href={`mailto:${site.email}`} className="font-semibold text-white underline underline-offset-4">{site.email}</a></p>
        </W>
      </section>

      <V3Faq title="Frequently asked questions about Let Us Proceed" faqs={aboutFaqs} />
      <V3Contact intro="Tell us about your business and goals. Our Karachi and New York teams will review your website and channels and reply with a recommended plan and quote." />
    </>
  );
}
