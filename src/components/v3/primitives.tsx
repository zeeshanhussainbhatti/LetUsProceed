import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const V3_PATHS = ["/about-us", "/services", "/case-study", "/mala-group-dubai", "/contact-us", "/careers"];

/** Rewrites an internal link so V3 pages keep visitors inside V3. */
export function toV3(href: string) {
  if (href === "/") return "/v3";
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return V3_PATHS.some((p) => href === p || href.startsWith(`${p}/`)) ? `/v3${href}` : href;
}

export function W({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

export function Pill({ children, dot = "#f98a28" }: { children: ReactNode; dot?: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: dot }} />
        <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: dot }} />
      </span>
      {children}
    </p>
  );
}

/** Headline with the brand gradient running through the text. */
export function Grad({ children }: { children: ReactNode }) {
  return <span className="v3-grad">{children}</span>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl ${className}`}>{children}</h2>;
}

export function Cta({
  href,
  children,
  variant = "glow",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "glow" | "glass" | "white";
  className?: string;
}) {
  const v = {
    glow: "bg-gradient-to-r from-brand-orange to-[#ff6a3d] text-white shadow-[0_10px_40px_-10px_rgba(249,138,40,0.8)] hover:shadow-[0_10px_50px_-5px_rgba(249,138,40,0.9)]",
    glass: "border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10",
    white: "bg-white text-ink hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold transition ${v} ${className}`}>
      {children}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/20 transition duration-300 group-hover:rotate-45">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

/** Glass card with a pointer spotlight (needs a SpotlightGroup ancestor for the glow to follow). */
export function Glass({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "article" | "li" }) {
  return <Tag className={`v3-spot relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur ${className}`}>{children}</Tag>;
}

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 645 645" className={className} aria-hidden="true">
      <rect x="484" y="0" width="161" height="323" fill="#1772e6" />
      <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
      <path d="M484 323H645A242 242 0 0 0 484 95Z" fill="#0632c8" />
      <rect x="0" y="323" width="161" height="322" fill="#f98a28" />
      <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
      <path d="M161 323H0A242 242 0 0 0 161 551Z" fill="#c81418" />
    </svg>
  );
}

/** Background blobs in the brand colours. */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="v3-blob absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-brand-blue opacity-30 blur-[120px]" />
      <div className="v3-blob absolute right-[-10rem] top-40 h-[30rem] w-[30rem] rounded-full bg-brand-orange opacity-25 blur-[120px] [animation-delay:-6s]" />
      <div className="v3-blob absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-red opacity-20 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}
