import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HalfRing, Kicker, Wrap } from "@/components/v2/primitives";
import { V2Contact, V2PageHero } from "@/components/v2/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Case Studies | Let Us Proceed",
  description: "Digital marketing case studies from Let Us Proceed, a Karachi agency: SEO, web, social media and paid media work for clients in Pakistan, the UAE and the US.",
  v1Path: "/case-study",
});

export default function Page() {
  return (
    <>
      <V2PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }]}
        kicker="Case studies"
        title={<>Our work, <span className="text-brand-blue">our results</span></>}
        intro={<p>Case studies from Let Us Proceed, a digital marketing agency in Karachi. Each one explains the client&apos;s challenge, what our team did and the results we measured.</p>}
      />
      <section className="pb-20 sm:pb-28">
        <Wrap className="grid gap-4 lg:grid-cols-2">
          <Link href="/v2/mala-group-dubai" className="group relative flex min-h-[30rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-blue p-8 text-white sm:p-12">
            <HalfRing color="#0632c8" className="pointer-events-none absolute -bottom-2 -right-6 w-96 transition duration-700 group-hover:scale-110" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Mala Group – Dubai · Travel &amp; Tourism</p>
              <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight sm:text-4xl">Recovering from a Google penalty and growing leads</h2>
              <p className="mt-4 max-w-md text-white/85">Technical, on-site and off-site SEO for a Dubai destination management company.</p>
            </div>
            <div className="relative flex items-end justify-between">
              <p><span className="block font-display text-7xl font-semibold">256%</span><span className="text-white/80">more leads</span></p>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink transition group-hover:rotate-45"><ArrowUpRight className="h-6 w-6" aria-hidden="true" /></span>
            </div>
          </Link>
          <article className="relative flex min-h-[30rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Smart Ghar · eCommerce</p>
              <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight sm:text-4xl">Case Study: Smart Ghar</h2>
              <p className="mt-4 max-w-md text-white/80">Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the products as a solution to customers&apos; problems.</p>
            </div>
            <ul className="grid grid-cols-3 gap-4">
              {[["80%", "increase in overall sales growth"], ["95%", "increase in returning customers"], ["90%", "increase in conversion rate"]].map(([v, l]) => (
                <li key={l}><span className="block font-display text-4xl font-semibold text-brand-orange sm:text-5xl">{v}</span><span className="text-sm text-white/70">{l}</span></li>
              ))}
            </ul>
          </article>
        </Wrap>
        <Wrap className="mt-12">
          <Kicker>More coming</Kicker>
          <p className="mt-3 text-muted">More case studies are being added.</p>
        </Wrap>
      </section>
      <V2Contact />
    </>
  );
}
