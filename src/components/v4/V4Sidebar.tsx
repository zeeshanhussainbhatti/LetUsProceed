"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "/v4", c: "#f98a28" },
  { label: "Know Us", href: "/v4/about-us", c: "#1772e6" },
  { label: "Services", href: "/v4/services", c: "#c81418" },
  { label: "Case Study", href: "/v4/case-study", c: "#0632c8" },
  { label: "Careers", href: "/v4/careers", c: "#f98a28" },
  { label: "Contact", href: "/v4/contact-us", c: "#1772e6" },
];

const services = [
  { label: "SEO", href: "/v4/services/seo" },
  { label: "Social Media", href: "/v4/services/social-services" },
  { label: "Paid Media", href: "/v4/services/paid-media" },
  { label: "Web Development", href: "/v4/services/web-development" },
  { label: "Content Writing", href: "/v4/services/content-writing" },
  { label: "Creative", href: "/v4/services/creative-services" },
];

export function V4Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/v4" ? pathname === "/v4" : pathname.startsWith(href));

  return (
    <>
      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[92px] flex-col items-center justify-between border-r-[3px] border-ink bg-white py-6 lg:flex">
        <Link href="/v4" aria-label="Let Us Proceed logo, go to homepage" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/proceed-mark.svg" alt="" width={48} height={48} className="h-12 w-12" />
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-col items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active(l.href) ? "page" : undefined}
                  className="group relative flex items-center justify-center px-3 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180"
                >
                  <span
                    className={`absolute inset-x-2 inset-y-1 border-2 border-ink transition ${active(l.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    style={{ background: l.c }}
                    aria-hidden="true"
                  />
                  <span className={`relative ${active(l.href) ? "text-white" : "text-ink group-hover:text-white"}`}>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/v4/contact-us"
          className="v4-btn flex h-14 w-14 items-center justify-center border-[3px] border-ink bg-brand-orange font-display text-[10px] font-extrabold uppercase leading-tight text-ink"
        >
          Get a<br />Quote
        </Link>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b-[3px] border-ink bg-white px-4 py-3 lg:hidden">
        <Link href="/v4" aria-label="Let Us Proceed logo, go to homepage" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/proceed-mark.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <span className="text-2xl font-semibold tracking-tight">Proceed</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="v4-mobile"
          className="v4-btn border-[3px] border-ink bg-brand-orange px-4 py-2 font-display text-xs font-extrabold uppercase"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <div id="v4-mobile" className={`fixed inset-x-0 bottom-0 top-[63px] z-30 overflow-y-auto bg-white p-4 lg:hidden ${open ? "block" : "hidden"}`}>
        <nav aria-label="Mobile">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="v4-btn block border-[3px] border-ink px-5 py-4 font-display text-2xl font-extrabold uppercase"
                  style={{ background: active(l.href) ? l.c : "#fff", color: active(l.href) ? "#fff" : "#1d1d1f" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em]">Services</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} onClick={() => setOpen(false)} className="block border-2 border-ink px-3 py-2 font-medium">{s.label}</Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="mt-8 block font-semibold underline underline-offset-4">{site.email}</a>
        </nav>
      </div>
    </>
  );
}
