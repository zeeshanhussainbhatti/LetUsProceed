import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "../ui";
import { Btn4, C, Mark4, PieceTile, Wrap4, toV4 } from "./primitives";

export function V4Footer() {
  return (
    <footer className="border-t-[3px] border-ink">
      <div className="grid border-b-[3px] border-ink lg:grid-cols-[1.6fr_1fr]">
        <div className="bg-brand-orange p-8 sm:p-14 lg:border-r-[3px] lg:border-ink">
          <p className="font-display text-xs font-bold uppercase tracking-[0.25em]">Ready when you are</p>
          <p className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Let&apos;s
            <br />
            proceed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Btn4 href="/v4/contact-us" bg={C.ink}>Get a Quote</Btn4>
            <a href={`mailto:${site.email}`} className="text-lg font-bold underline decoration-[3px] underline-offset-4">{site.email}</a>
          </div>
        </div>
        <div className="grid grid-cols-2" aria-hidden="true">
          <PieceTile piece="a" className="h-full min-h-40 w-full border-b-[3px] border-r-[3px] border-ink" />
          <PieceTile piece="b" className="h-full min-h-40 w-full border-b-[3px] border-ink" />
          <PieceTile piece="c" className="h-full min-h-40 w-full border-r-[3px] border-ink" />
          <PieceTile piece="d" className="h-full min-h-40 w-full" />
        </div>
      </div>

      <Wrap4 className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark4 className="h-10 w-10" />
            <span className="text-3xl font-semibold tracking-tight">Proceed</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. Part of Sybrid Pvt.
            Ltd., a strategic business unit of the Lakson Group of Companies.
          </p>
          <SocialLinks className="mt-6 flex-wrap [&_a]:rounded-none [&_a]:border-2 [&_a]:border-ink" />
        </div>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Company</p>
          <ul className="mt-5 space-y-2.5">
            {[...site.nav, { label: "Mala Group Case Study", href: "/mala-group-dubai" }, { label: "Get in Touch", href: "/contact-us" }].map((l) => (
              <li key={l.href}><Link href={toV4(l.href)} className="font-medium hover:bg-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Services</p>
          <ul className="mt-5 space-y-2.5">
            {site.services.map((l) => (
              <li key={l.href}><Link href={toV4(l.href)} className="font-medium hover:bg-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em]">Policies</p>
          <ul className="mt-5 space-y-2.5">
            {site.policies.map((l) => (
              <li key={l.href}><Link href={l.href} className="font-medium hover:bg-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <address className="space-y-6 not-italic">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em]">Offices</p>
          {site.offices.map((o) => (
            <div key={o.id}>
              <p className="font-bold">{o.label}</p>
              <p className="mt-1 text-sm leading-relaxed">{o.address}</p>
              <a href={o.phone.href} className="mt-1 inline-block text-sm font-bold underline underline-offset-2">{o.phone.display}</a>
            </div>
          ))}
        </address>
      </Wrap4>
      <div className="border-t-[3px] border-ink bg-ink text-white">
        <Wrap4 className="flex flex-col gap-3 py-5 text-sm sm:flex-row sm:justify-between">
          <p>© 2026 Let Us Proceed. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/" className="hover:text-brand-orange">Version 1</Link>
            <Link href="/v2" className="hover:text-brand-orange">Version 2</Link>
            <Link href="/v3" className="hover:text-brand-orange">Version 3</Link>
          </p>
        </Wrap4>
      </div>
    </footer>
  );
}
