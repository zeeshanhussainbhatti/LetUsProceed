"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code2, Megaphone, Palette, PenLine, Search, Share2 } from "lucide-react";

const services = [
  { label: "SEO Services", href: "/v5/services/seo", icon: Search, note: "Technical, on-page and off-page SEO" },
  { label: "Social Media", href: "/v5/services/social-services", icon: Share2, note: "Management, strategy and audits" },
  { label: "Paid Media", href: "/v5/services/paid-media", icon: Megaphone, note: "Google Ads campaigns" },
  { label: "Web Development", href: "/v5/services/web-development", icon: Code2, note: "WordPress, eCommerce and custom sites" },
  { label: "Content Writing", href: "/v5/services/content-writing", icon: PenLine, note: "Web, blog, article and PR writing" },
  { label: "Creative Services", href: "/v5/services/creative-services", icon: Palette, note: "Branding, design and video" },
];

const links = [
  { label: "Know Us", href: "/v5/about-us" },
  { label: "Case Study", href: "/v5/case-study" },
  { label: "Careers", href: "/v5/careers" },
];

export function V5Header() {
  const pathname = usePathname();
  const [drop, setDrop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  const active = (href: string) => (href === "/v5" ? pathname === "/v5" : pathname.startsWith(href));
  const navCls = (href: string) =>
    `rounded-full px-4 py-2 text-[15px] font-medium transition ${active(href) ? "text-brand-blue" : "text-ink/75 hover:text-ink"}`;

  return (
    <header
      className={`sticky top-0 z-40 transition ${scrolled || mobile ? "border-b border-black/[0.07] bg-white/85 backdrop-blur-xl" : "bg-transparent"}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) {
          setDrop(false);
          setMobile(false);
        }
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/v5" aria-label="Let Us Proceed logo, go to homepage" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/proceed-mark.svg" alt="" width={34} height={34} className="h-[34px] w-[34px]" />
          <span className="text-[26px] font-semibold tracking-tight text-ink">Proceed</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <Link href="/v5" className={navCls("/v5")}>Home</Link>
          <div ref={dropRef} className="relative" onMouseLeave={() => setDrop(false)}>
            <button
              type="button"
              aria-expanded={drop}
              aria-controls="v5-services"
              onMouseEnter={() => setDrop(true)}
              onClick={() => setDrop((v) => !v)}
              className={`flex items-center gap-1 ${navCls("/v5/services")}`}
            >
              Services <ChevronDown className={`h-4 w-4 transition ${drop ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div id="v5-services" className={`absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3 transition ${drop ? "visible opacity-100" : "invisible translate-y-1 opacity-0"}`}>
              <div className="grid grid-cols-2 gap-1 rounded-3xl border border-black/[0.07] bg-white p-3 shadow-[0_24px_60px_-20px_rgba(16,24,40,0.35)]">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-start gap-3 rounded-2xl p-3 transition hover:bg-surface-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{s.label}</span>
                      <span className="block text-sm text-muted">{s.note}</span>
                    </span>
                  </Link>
                ))}
                <Link href="/v5/services" className="col-span-2 mt-1 rounded-2xl bg-surface-soft p-3 text-center text-sm font-semibold text-brand-blue hover:bg-brand-blue/10">
                  View all services
                </Link>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={navCls(l.href)}>{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/v5/contact-us" className="hidden rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(249,138,40,0.7)] transition hover:bg-[#ef7d1b] sm:inline-flex">
            Get a Quote
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            aria-controls="v5-mobile"
            onClick={() => setMobile((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-ink transition ${mobile ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-ink transition ${mobile ? "top-1.5 -rotate-45" : "top-2.5"}`} />
            </span>
          </button>
        </div>
      </div>

      <div id="v5-mobile" className={`border-t border-black/[0.07] bg-white lg:hidden ${mobile ? "block" : "hidden"}`}>
        <nav aria-label="Mobile" className="mx-auto max-h-[calc(100vh-72px)] max-w-[1200px] overflow-y-auto px-5 py-4">
          {[{ label: "Home", href: "/v5" }, ...links, { label: "All services", href: "/v5/services" }, { label: "Contact", href: "/v5/contact-us" }].map((l) => (
            <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-3 text-lg font-medium text-ink hover:bg-surface-soft">{l.label}</Link>
          ))}
          <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-muted">Services</p>
          <div className="grid grid-cols-2 gap-1">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-xl px-3 py-2.5 text-ink/80 hover:bg-surface-soft">{s.label}</Link>
            ))}
          </div>
          <Link href="/v5/contact-us" className="mt-4 block rounded-full bg-brand-orange px-4 py-3 text-center font-semibold text-white">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
