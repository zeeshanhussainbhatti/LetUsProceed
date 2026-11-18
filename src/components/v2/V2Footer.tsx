import Link from "next/link";
import { site } from "@/lib/site";
import { SocialLinks } from "../ui";
import { Btn, HalfRing, Wrap, toV2 } from "./primitives";

export function V2Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Big CTA */}
      <div className="relative overflow-hidden bg-brand-orange">
        <HalfRing color="#c81418" className="pointer-events-none absolute -bottom-2 left-[8%] w-64 opacity-60 sm:w-96" />
        <HalfRing color="#1772e6" className="pointer-events-none absolute -top-2 right-[6%] w-48 rotate-180 opacity-70 sm:w-72" />
        <Wrap className="relative py-20 sm:py-28">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Ready when you are</p>
          <p className="mt-4 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-8xl lg:text-[9rem]">
            Let&apos;s
            <br />
            proceed.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Btn href="/v2/contact-us" variant="ink">Get a Quote</Btn>
            <a href={`mailto:${site.email}`} className="text-lg font-semibold underline underline-offset-4">{site.email}</a>
          </div>
        </Wrap>
      </div>

      <Wrap className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        <div>
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/proceed-mark.svg" alt="Let Us Proceed logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-3xl font-semibold tracking-tight">Proceed</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            A digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. Part of Sybrid Pvt.
            Ltd., a strategic business unit of the Lakson Group of Companies.
          </p>
          <SocialLinks className="mt-6 flex-wrap [&_a]:border-white/30 [&_a]:text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Explore</p>
          <ul className="mt-5 space-y-3 text-white/80">
            {[...site.nav, { label: "Mala Group Case Study", href: "/mala-group-dubai" }, { label: "Get in Touch", href: "/contact-us" }].map((l) => (
              <li key={l.href}><Link href={toV2(l.href)} className="hover:text-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Services</p>
          <ul className="mt-5 space-y-3 text-white/80">
            {site.services.map((l) => (
              <li key={l.href}><Link href={toV2(l.href)} className="hover:text-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Policies</p>
          <ul className="mt-5 space-y-3 text-white/80">
            {site.policies.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-orange">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <address className="space-y-6 not-italic">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Offices</p>
          {site.offices.map((o) => (
            <div key={o.id}>
              <p className="font-semibold">{o.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/65">{o.address}</p>
              <a href={o.phone.href} className="mt-1 inline-block text-sm text-brand-orange hover:underline">{o.phone.display}</a>
            </div>
          ))}
        </address>
      </Wrap>
      <Wrap className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
        <p>© 2026 Let Us Proceed. All rights reserved.</p>
        <Link href="/" className="hover:text-white">View version 1</Link>
      </Wrap>
    </footer>
  );
}
