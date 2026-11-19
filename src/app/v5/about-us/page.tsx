import { Eye, Rocket } from "lucide-react";
import { site } from "@/lib/site";
import { Button5, Card5, Heading5, W5 } from "@/components/v5/ui5";
import { V5Contact, V5Faq, V5PageHero } from "@/components/v5/blocks5";
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
  { name: "People first", text: "We show great pride and confidence in our people. We strongly believe in putting our people first before anything, be it our colleagues, partners or clients. A strong and well-managed people's alliance means they are ready to overcome any challenges." },
  { name: "Disruptive", text: "We are sincere, upfront and confident while seeing things differently. We innovate to challenge the status quo and find chaos as an opportunity, ultimately leading to disruptive solutions." },
  { name: "Optimistic", text: "More than just pleasant, we're optimistic. Our optimism is grounded in our belief that we can achieve our purpose by providing exemplary services and digital solutions to our clients. We look at problems as opportunities and see setbacks as learning experiences. Because we're optimistic, we believe in our clients and help them achieve their milestones." },
  { name: "Systematic", text: "It is really important for us to make sure that the process is perfect. We behave in the best interest of our clients and partners. We are timely about completing tasks in the best possible manner and encourage an honest working relationship." },
  { name: "Lucid", text: "We're upfront with our clients, partners, and colleagues. No hidden agendas. We prefer keeping things as direct and transparent as possible." },
];

export default function Page() {
  return (
    <>
      <V5PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about-us" }]}
        eyebrow="Know us"
        title="Meet your partner, not your agency"
        intro={<p>Let Us Proceed is a digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. We are part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. Our 50+ person team provides SEO, social media marketing, paid media, content writing, branding and web development for businesses in Pakistan, the US and the UAE.</p>}
        actions={<><Button5 href="/v5/contact-us">Get a Quote</Button5><Button5 href="/v5/case-study" variant="secondary">See Our Work</Button5></>}
        image={{ src: "/images/astronaut.webp", w: 855, h: 522, alt: "Astronaut looking through a telescope from a red and orange half circle, illustration by Let Us Proceed" }}
      />

      <section className="py-16 sm:py-20">
        <W5 className="grid gap-5 lg:grid-cols-3">
          <Card5 className="p-8">
            <Heading5 eyebrow="Who we are" title="Part of Sybrid and the Lakson Group" />
            <p className="mt-4 leading-relaxed text-muted">
              Proceed is part of Sybrid Pvt. Ltd., a strategic business unit of the Lakson Group of Companies. We are a
              digital marketing agency and technology solutions partner. We have worked with clients across two
              continents on SEO, social media, paid media, content, branding and web development.
            </p>
          </Card5>
          {[
            { t: "Vision", icon: Eye, d: "We strive to be leaders in digital marketing services. Our success lies in achieving your goals and setting new standards of excellence and professionalism." },
            { t: "Mission", icon: Rocket, d: "We use data-driven, innovative digital marketing campaigns, from SEO and social media to paid media, content and web development, to help clients find the right customers for their products and services." },
          ].map((c, i) => (
            <Card5 key={c.t} as="article" className={`p-8 ${i ? "bg-gradient-to-br from-brand-blue to-brand-blue-deep text-white" : ""}`}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i ? "bg-white/15" : "bg-brand-orange/15 text-brand-orange"}`}><c.icon className="h-6 w-6" aria-hidden="true" /></span>
              <h2 className="mt-5 text-2xl font-semibold">{c.t}</h2>
              <p className={`mt-3 leading-relaxed ${i ? "text-white/85" : "text-muted"}`}>{c.d}</p>
            </Card5>
          ))}
        </W5>
      </section>

      <section className="bg-surface-soft py-20">
        <W5>
          <Heading5 eyebrow="Our journey" title="Work Together. Grow Together." lead="Our journey: how Let Us Proceed has grown." />
          <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t) => (
              <Card5 key={t.year} as="li" className="p-7">
                <p className="text-sm font-semibold text-brand-orange">{t.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
              </Card5>
            ))}
          </ol>
        </W5>
      </section>

      <section className="py-20">
        <W5>
          <p className="mx-auto max-w-4xl text-center text-[1.6rem] font-semibold leading-snug tracking-tight text-ink sm:text-[2rem]">
            We work as your partner, not just your agency. One team covers SEO, social media, paid media, content,
            branding and web development.
          </p>
        </W5>
      </section>

      <section className="bg-surface-soft py-20">
        <W5>
          <Heading5 eyebrow="What we believe" title="Core Values" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Card5 key={v.name} as="article" className={`p-7 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <p className="text-sm font-semibold text-brand-blue" aria-hidden="true">0{i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{v.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </Card5>
            ))}
          </div>
        </W5>
      </section>

      <section className="py-20">
        <W5>
          <Heading5 eyebrow="People & places" title="The team behind Let Us Proceed" lead="Our 50+ person team in Karachi and New York includes strategists, SEO specialists, designers, developers, writers and account managers." />
          <h2 className="mt-12 text-xl font-semibold text-ink">Our offices in Karachi and New York</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {site.offices.map((o) => (
              <Card5 key={o.id} className="p-7">
                <p className="text-sm font-semibold text-brand-orange">{o.city}</p>
                <p className="mt-2 text-lg font-medium leading-snug text-ink">{o.address}</p>
                <a href={o.phone.href} className="mt-4 inline-block font-semibold text-brand-blue">{o.phone.display}</a>
              </Card5>
            ))}
          </div>
          <p className="mt-6 text-muted">Email for both offices: <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a></p>
        </W5>
      </section>

      <V5Faq title="Frequently asked questions about Let Us Proceed" faqs={aboutFaqs} />
      <V5Contact intro="Tell us about your business and goals. Our Karachi and New York teams will review your website and channels and reply with a recommended plan and quote." />
    </>
  );
}
