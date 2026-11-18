"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";

const services = [
  { label: "SEO Services", href: "/v3/services/seo", icon: Search, note: "Technical, on-page and off-page SEO" },
  { label: "Social Media", href: "/v3/services/social-services", icon: Share2, note: "Management, strategy and audits" },
  { label: "Paid Media", href: "/v3/services/paid-media", icon: Megaphone, note: "Google Ads campaigns" },
  { label: "Web Development", href: "/v3/services/web-development", icon: Code2, note: "WordPress, eCommerce, custom" },
  { label: "Content Writing", href: "/v3/services/content-writing", icon: PenLine, note: "Web, blog, article and PR writing" },
  { label: "Creative Services", href: "/v3/services/creative-services", icon: Palette, note: "Branding, design and video" },
];

const links = [
  { label: "Know Us", href: "/v3/about-us" },
  { label: "Case Study", href: "/v3/case-study" },
  { label: "Careers", href: "/v3/careers" },
];

export function V3Header() {
  const pathname = usePathname();
  const [drop, setDrop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDrop(false);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrop(false);
        setMobile(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const isActive = (href: string) => pathname.startsWith(href);
  const linkCls = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${isActive(href) ? "bg-white/15 text-white" : "text-white/70 hover:text-white"}`;

  return (
    <header
      className="fixed inset-x-0 top-4 z-40 px-3 sm:top-5"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) {
          setDrop(false);
          setMobile(false);
        }
      }}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 rounded-full border border-white/10 bg-[#0d0f15]/70 py-2 pl-4 pr-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <Link href="/v3" aria-label="Let Us Proceed logo, go to homepage" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/proceed-mark.svg" alt="" width={32} height={32} className="h-8 w-8" />
          <span className="text-2xl font-semibold tracking-tight text-white">Proceed</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Link href="/v3" className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === "/v3" ? "bg-white/15 text-white" : "text-white/70 hover:text-white"}`}>
            Home
          </Link>
          <div ref={dropRef} className="relative" onMouseLeave={() => setDrop(false)}>
            <button
              type="button"
              aria-expanded={drop}
              aria-controls="v3-services-menu"
              onClick={() => setDrop((v) => !v)}
              onMouseEnter={() => setDrop(true)}
              className={`flex items-center gap-1 ${linkCls("/v3/services")}`}
            >
              Services <ChevronDown className={`h-4 w-4 transition ${drop ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div
              id="v3-services-menu"
              className={`absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 transition ${drop ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
            >
              <div className="grid grid-cols-2 gap-1 rounded-3xl border border-white/10 bg-[#0d0f15] p-3 shadow-2xl">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-3 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-deep text-white">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{s.label}</span>
                      <span className="block text-sm text-white/55">{s.note}</span>
                    </span>
                  </Link>
                ))}
                <Link href="/v3/services" className="col-span-2 mt-1 rounded-2xl bg-white/5 p-3 text-center text-sm font-semibold text-white hover:bg-white/10">
                  View all services →
                </Link>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/v3/contact-us"
            className="hidden rounded-full bg-gradient-to-r from-brand-orange to-[#ff6a3d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(249,138,40,0.9)] sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            aria-controls="v3-mobile"
            onClick={() => setMobile((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-white transition ${mobile ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-white transition ${mobile ? "top-1.5 -rotate-45" : "top-2.5"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="v3-mobile"
        className={`mx-auto mt-2 max-w-[1180px] overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f15] transition-all duration-300 lg:hidden ${
          mobile ? "visible max-h-[80vh] opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto p-3">
          {[{ label: "Home", href: "/v3" }, ...links, { label: "All services", href: "/v3/services" }, { label: "Contact", href: "/v3/contact-us" }].map((l) => (
            <Link key={l.href} href={l.href} className="block rounded-2xl px-4 py-3 text-lg font-semibold text-white hover:bg-white/5">
              {l.label}
            </Link>
          ))}
          <p className="px-4 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Services</p>
          <div className="grid grid-cols-2 gap-1">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5">
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/v3/contact-us" className="mt-3 block rounded-2xl bg-brand-orange px-4 py-3 text-center font-semibold text-white">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
