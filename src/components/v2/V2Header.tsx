"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { toV2 } from "./primitives";

const links = [
  { label: "Home", href: "/v2" },
  { label: "Know Us", href: "/v2/about-us" },
  { label: "Services", href: "/v2/services" },
  { label: "Case Study", href: "/v2/case-study" },
  { label: "Careers", href: "/v2/careers" },
  { label: "Contact", href: "/v2/contact-us" },
];

export function V2Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
          scrolled && !open ? "bg-[#f6f3ee]/85 shadow-sm backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 sm:px-8">
          <Link href="/v2" aria-label="Let Us Proceed logo, go to homepage" className="relative z-50 flex items-center gap-2.5" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/proceed-mark.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className={`text-[30px] font-semibold leading-none tracking-tight transition ${open ? "text-white" : "text-ink"}`}>Proceed</span>
          </Link>
          <div className="relative z-50 flex items-center gap-3">
            <Link
              href="/v2/contact-us"
              className="hidden rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 sm:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="v2-menu"
              className={`group flex items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-semibold transition ${
                open ? "bg-white text-ink" : "bg-ink text-white"
              }`}
            >
              {open ? "Close" : "Menu"}
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange">
                <span className={`absolute h-0.5 w-3.5 bg-white transition ${open ? "rotate-45" : "-translate-y-1"}`} />
                <span className={`absolute h-0.5 w-3.5 bg-white transition ${open ? "-rotate-45" : "translate-y-1"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="v2-menu"
        className={`fixed inset-0 z-30 overflow-y-auto bg-ink text-white transition duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <svg viewBox="0 0 645 645" className="pointer-events-none absolute -bottom-40 -right-40 w-[38rem] opacity-20" aria-hidden="true">
          <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
          <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
        </svg>
        <div className="relative mx-auto grid min-h-full max-w-[1320px] gap-12 px-4 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <nav aria-label="Main">
            <ul className="space-y-1">
              {links.map((l, i) => {
                const active = l.href === "/v2" ? pathname === "/v2" : pathname.startsWith(l.href);
                return (
                  <li key={l.href} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }} className={`transition duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-baseline gap-5 py-1 font-display text-5xl font-medium uppercase tracking-tight transition hover:text-brand-orange sm:text-7xl"
                    >
                      <span className="text-sm font-semibold text-white/40">0{i + 1}</span>
                      <span className={active ? "text-brand-orange" : ""}>{l.label}</span>
                      <ArrowUpRight className="h-8 w-8 -translate-x-3 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="space-y-8 self-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Services</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-white/85">
                {site.services.map((s) => (
                  <li key={s.href}>
                    <Link href={toV2(s.href)} onClick={() => setOpen(false)} className="hover:text-brand-orange">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Say hello</p>
              <a href={`mailto:${site.email}`} className="mt-3 block text-2xl font-semibold hover:text-brand-orange">{site.email}</a>
              {site.offices.map((o) => (
                <a key={o.id} href={o.phone.href} className="mt-1 block text-white/80 hover:text-white">
                  {o.phone.display} <span className="text-white/50">· {o.label.replace(" Office", "")}</span>
                </a>
              ))}
            </div>
            <Link href="/" onClick={() => setOpen(false)} className="inline-block text-sm text-white/50 underline underline-offset-4 hover:text-white">
              View version 1 of the site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
