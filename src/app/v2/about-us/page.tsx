import { site } from "@/lib/site";
import { AnimatedMark, Btn, HalfRing, Kicker, Wrap } from "@/components/v2/primitives";
import { V2Contact, V2Faq, V2PageHero } from "@/components/v2/blocks";
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
  { name: "Lucid", c: "#1d1d1f", text: "We're upfront with our clients, partners, and colleagues. No hidden agendas. We prefer keeping things as direct and transparent as possible." },
];

export default function Page() {
  return (
    <>
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us" }]}
        kicker="Know us"
        title={<>Meet your <span className="text-brand-orange">partner,</span> not your <span className="text-brand-blue">agency</span></>}
        intro={<p>Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. We are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. Our 50+ person team provides SEO, social media marketing, paid media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.</p>}
        actions={<><Btn href="/v2/contact-us">Get a Quote</Btn><Btn href="/v2/case-study" variant="line">See Our Work</Btn></>}
      />

      {/* Who we are + vision/mission */}
      <section className="bg-white py-20 sm:py-28">
        <Wrap className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Kicker>Who we are</Kicker>
            <p className="mt-6 font-display text-2xl font-medium leading-snug sm:text-3xl">
              Proceed is part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. We are a
              digital marketing agency and technology solutions partner. We have worked with clients across two
              continents on SEO, social media, paid media, content, branding and web development.
            </p>
            <p className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-widest text-muted">
              Lakson Group <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Sybrid <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> Proceed
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Vision", bg: "bg-ink", d: "We strive to be leaders in digital marketing services. Our success lies in achieving your goals and setting new standards of excellence and professionalism." },
              { t: "Mission", bg: "bg-brand-blue", d: "We use data-driven, innovative digital marketing campaigns, from SEO and social media to paid media, content and web development, to help clients find the right customers for their products and services." },
            ].map((c) => (
              <article key={c.t} className={`relative flex min-h-80 flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-white ${c.bg}`}>
                <HalfRing color="#f98a28" className="absolute -right-6 top-6 w-32 rotate-180 opacity-60" />
                <h2 className="text-3xl font-semibold uppercase">{c.t}</h2>
                <p className="mt-3 leading-relaxed text-white/85">{c.d}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <Wrap>
          <Kicker tone="orange">Our journey</Kicker>
          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">Work Together. Grow Together.</h2>
          <p className="mt-4 text-lg text-muted">Our journey: how Let Us Proceed has grown.</p>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t) => (
              <li key={t.year} className="group bg-[#f6f3ee] p-8 transition hover:bg-white">
                <span className="v2-outline font-display text-5xl font-semibold transition [--stroke:#1772e6] group-hover:text-brand-blue">{t.year}</span>
                <h3 className="mt-6 text-xl font-semibold uppercase">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      {/* Partner line */}
      <section className="bg-brand-orange py-16 text-white sm:py-20">
        <Wrap className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
            We work as your partner, not just your agency. One team covers SEO, social media, paid media, content,
            branding and web development.
          </p>
          <AnimatedMark className="w-32 shrink-0 sm:w-44" />
        </Wrap>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <Wrap>
          <Kicker>What we believe</Kicker>
          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">Core Values</h2>
          <ol className="mt-12 border-t border-ink/15">
            {values.map((v, i) => (
              <li key={v.name} className="grid gap-4 border-b border-ink/15 py-8 md:grid-cols-[6rem_18rem_1fr] md:items-baseline">
                <span className="font-display text-sm font-semibold text-muted" aria-hidden="true">0{i + 1}</span>
                <h3 className="flex items-center gap-3 text-3xl font-semibold uppercase">
                  <span className="h-4 w-4 rounded-full" style={{ background: v.c }} aria-hidden="true" />
                  {v.name}
                </h3>
                <p className="max-w-3xl text-lg leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
          </ol>
        </Wrap>
      </section>

      {/* Team & offices */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Wrap>
          <Kicker tone="orange">People &amp; places</Kicker>
          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1] tracking-tight sm:text-6xl">The team behind Let Us Proceed</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">Our 50+ person team in Karachi and New York includes strategists, SEO specialists, designers, developers, writers and account managers.</p>
          <h2 className="mt-16 text-2xl font-semibold uppercase">Our offices in Karachi and New York</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {site.offices.map((o, i) => (
              <div key={o.id} className={`rounded-[2rem] p-8 ${i ? "bg-brand-orange" : "bg-brand-blue"}`}>
                <p className="text-sm font-semibold uppercase tracking-widest text-white/75">{o.city}</p>
                <p className="mt-3 text-xl font-semibold leading-snug">{o.address}</p>
                <a href={o.phone.href} className="mt-6 inline-block text-lg font-semibold underline underline-offset-4">{o.phone.display}</a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70">Email for both offices: <a href={`mailto:${site.email}`} className="font-semibold text-white underline underline-offset-4">{site.email}</a></p>
        </Wrap>
      </section>

      <V2Faq title="Frequently asked questions about Let Us Proceed" faqs={aboutFaqs} />
      <V2Contact intro="Tell us about your business and goals. Our Karachi and New York teams will review your website and channels and reply with a recommended plan and quote." />
    </>
  );
}
