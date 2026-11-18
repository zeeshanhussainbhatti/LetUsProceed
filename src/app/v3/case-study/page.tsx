import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/v3/client";
import { Grad, W } from "@/components/v3/primitives";
import { V3Contact, V3PageHero } from "@/components/v3/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Case Studies | Let Us Proceed",
  description: "Digital marketing case studies from Let Us Proceed, a Karachi agency: SEO, web, social media and paid media work for clients in Pakistan, the UAE and the US.",
  v1Path: "/case-study",
});

export default function Page() {
  return (
    <>
      <V3PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }]}
        pill="Case studies"
        title={<>Our work, <Grad>our results</Grad></>}
        intro={<p>Case studies from Let Us Proceed, a digital marketing agency in Karachi. Each one explains the client&apos;s challenge, what our team did and the results we measured.</p>}
      />
      <section className="pb-20 sm:pb-28">
        <W className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Link href="/v3/mala-group-dubai" className="group relative flex h-full min-h-[30rem] flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 sm:p-12" style={{ background: "radial-gradient(circle at 20% 15%, #1772e6, transparent 60%), radial-gradient(circle at 90% 95%, #f98a28, transparent 45%), #0f1219" }}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Mala Group – Dubai · Travel &amp; Tourism</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Recovering from a Google penalty and growing leads</h2>
                <p className="mt-4 max-w-md text-white/80">Technical, on-site and off-site SEO for a Dubai destination management company.</p>
              </div>
              <div className="flex items-end justify-between">
                <p><span className="block font-display text-7xl font-semibold">256%</span><span className="text-white/75">more leads</span></p>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink transition group-hover:rotate-45"><ArrowUpRight className="h-6 w-6" aria-hidden="true" /></span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <article className="flex h-full min-h-[30rem] flex-col justify-between rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Smart Ghar · eCommerce</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Case Study: Smart Ghar</h2>
                <p className="mt-4 max-w-md text-white/65">Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the products as a solution to customers&apos; problems.</p>
              </div>
              <ul className="grid grid-cols-3 gap-4">
                {[["80%", "increase in overall sales growth"], ["95%", "increase in returning customers"], ["90%", "increase in conversion rate"]].map(([v, l]) => (
                  <li key={l}><span className="v3-grad block font-display text-4xl font-semibold sm:text-5xl">{v}</span><span className="text-sm text-white/60">{l}</span></li>
                ))}
              </ul>
            </article>
          </Reveal>
        </W>
        <W className="mt-10"><p className="text-white/45">More case studies are being added.</p></W>
      </section>
      <V3Contact />
    </>
  );
}
