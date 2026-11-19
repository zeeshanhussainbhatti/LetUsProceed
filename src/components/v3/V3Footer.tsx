import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "../ui";
import { Aurora, Cta, Mark, W, toV3 } from "./primitives";

export function V3Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <Aurora className="opacity-60" />
      <W className="relative py-20 sm:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Ready when you are</p>
            <p className="mt-4 text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-[8.5rem]">
              Let&apos;s go <span className="v3-grad">big.</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Cta href="/v3/contact-us">Get a Quote</Cta>
            <a href={`mailto:${site.email}`} className="text-lg font-semibold text-white/80 underline underline-offset-4 hover:text-white">
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark className="h-9 w-9" />
              <span className="text-2xl font-semibold tracking-tight">Proceed</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. Part of Sybrid Pvt.
              Ltd., a strategic business unit of the Lakson Group of Companies.
            </p>
            <SocialLinks className="mt-6 flex-wrap [&_a]:border-white/20 [&_a]:text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Company</p>
            <ul className="mt-5 space-y-3 text-white/75">
              {[...site.nav, { label: "Mala Group Case Study", href: "/mala-group-dubai" }, { label: "Get in Touch", href: "/contact-us" }].map((l) => (
                <li key={l.href}><Link href={toV3(l.href)} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
            <ul className="mt-5 space-y-3 text-white/75">
              {site.services.map((l) => (
                <li key={l.href}><Link href={toV3(l.href)} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Policies</p>
            <ul className="mt-5 space-y-3 text-white/75">
              {site.policies.map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <address className="space-y-6 not-italic">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Offices</p>
            {site.offices.map((o) => (
              <div key={o.id}>
                <p className="font-semibold">{o.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{o.address}</p>
                <a href={o.phone.href} className="mt-1 inline-block text-sm text-brand-orange hover:underline">{o.phone.display}</a>
              </div>
            ))}
          </address>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 Let Us Proceed. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/" className="hover:text-white">Version 1</Link>
            <Link href="/v2" className="hover:text-white">Version 2</Link>
          </p>
        </div>
      </W>
    </footer>
  );
}
