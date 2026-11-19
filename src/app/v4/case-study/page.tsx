import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Box, C, Tag4, Wrap4 } from "@/components/v4/primitives";
import { V4Contact, V4PageHero } from "@/components/v4/blocks";
import { v2Meta } from "@/lib/metaV2";

export const metadata = v2Meta({
  title: "Digital Marketing Case Studies | Let Us Proceed",
  description: "Digital marketing case studies from Let Us Proceed, a Karachi agency: SEO, web, social media and paid media work for clients in Pakistan, the UAE and the US.",
  v1Path: "/case-study",
});

export default function Page() {
  return (
    <>
      <V4PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Case Study", href: "/case-study" }]}
        tag="Case studies"
        color={C.red}
        title="Our work, our results"
        intro={<p>Case studies from Let Us Proceed, a digital marketing agency in Karachi. Each one explains the client&apos;s challenge, what our team did and the results we measured.</p>}
      />
      <section className="py-20 sm:py-24">
        <Wrap4 className="grid gap-10 lg:grid-cols-2">
          <Link href="/v4/mala-group-dubai" className="v4-ticket v4-hover flex min-h-[28rem] flex-col justify-between border-[3px] border-ink bg-brand-orange p-8 sm:p-12">
            <div>
              <Tag4 bg="#fff">Mala Group – Dubai · Travel &amp; Tourism</Tag4>
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Recovering from a Google penalty and growing leads</h2>
              <p className="mt-4 max-w-md font-medium">Technical, on-site and off-site SEO for a Dubai destination management company.</p>
            </div>
            <div className="flex items-end justify-between border-t-[3px] border-dashed border-ink pt-6">
              <p><span className="block font-display text-7xl font-extrabold">256%</span><span className="font-semibold">more leads</span></p>
              <span className="flex h-14 w-14 items-center justify-center border-[3px] border-ink bg-white"><ArrowRight className="h-6 w-6" aria-hidden="true" /></span>
            </div>
          </Link>
          <Box as="article" shadow={C.blue} className="flex min-h-[28rem] flex-col justify-between bg-white p-8 sm:p-12">
            <div>
              <Tag4 bg={C.blue}>Smart Ghar · eCommerce</Tag4>
              <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">Case Study: Smart Ghar</h2>
              <p className="mt-4 max-w-md">Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home automation products through its online shop, smartghar.pk. The site had a high bounce rate and did not present the products as a solution to customers&apos; problems.</p>
            </div>
            <ul className="grid grid-cols-3 gap-4 border-t-[3px] border-ink pt-6">
              {[["80%", "increase in overall sales growth", C.orange], ["95%", "increase in returning customers", C.blue], ["90%", "increase in conversion rate", C.red]].map(([v, l, c]) => (
                <li key={l}><span className="block font-display text-4xl font-extrabold sm:text-5xl" style={{ color: c }}>{v}</span><span className="text-sm font-semibold">{l}</span></li>
              ))}
            </ul>
          </Box>
        </Wrap4>
        <Wrap4 className="mt-12"><p className="font-semibold">More case studies are being added.</p></Wrap4>
      </section>
      <V4Contact />
    </>
  );
}
