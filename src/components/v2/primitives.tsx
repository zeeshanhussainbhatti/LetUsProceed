import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Internal V1 paths that also exist in V2. */
const V2_PATHS = [
  "/about-us",
  "/services",
  "/case-study",
  "/mala-group-dubai",
  "/contact-us",
  "/careers",
];

/** Rewrites an internal link so V2 pages keep visitors inside V2. */
export function toV2(href: string) {
  if (href === "/") return "/v2";
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return V2_PATHS.some((p) => href === p || href.startsWith(`${p}/`)) ? `/v2${href}` : href;
}

export function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

export function Kicker({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "orange" | "light" }) {
  const c = { blue: "text-brand-blue", orange: "text-brand-orange", light: "text-white/70" }[tone];
  return (
    <p className={`flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] ${c}`}>
      <span className="h-px w-10 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Btn({
  href,
  children,
  variant = "orange",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "orange" | "ink" | "white" | "line";
  className?: string;
}) {
  const v = {
    orange: "bg-brand-orange text-white",
    ink: "bg-ink text-white",
    white: "bg-white text-ink",
    line: "border border-current",
  }[variant];
  const dot = {
    orange: "bg-white text-brand-orange",
    ink: "bg-brand-orange text-white",
    white: "bg-ink text-white",
    line: "bg-ink text-white",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold transition hover:shadow-lg ${v} ${className}`}
    >
      {children}
      <span className={`flex h-9 w-9 items-center justify-center rounded-full transition duration-300 group-hover:rotate-45 ${dot}`}>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}

/** The Proceed mark, drawn in four pieces that slide into place on load. */
export function AnimatedMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 645 645" className={`v2-mark ${className}`} aria-hidden="true">
      <rect className="v2-mark-a" x="484" y="0" width="161" height="323" fill="#1772e6" />
      <path className="v2-mark-b" d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
      <path className="v2-mark-c" d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
      <rect className="v2-mark-d" x="0" y="323" width="161" height="322" fill="#f98a28" />
      <path className="v2-mark-e" d="M484 323H645A242 242 0 0 0 484 95Z" fill="#0632c8" />
      <path className="v2-mark-f" d="M161 323H0A242 242 0 0 0 161 551Z" fill="#c81418" />
    </svg>
  );
}

export function HalfRing({ color, className = "" }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <path d="M0 100A100 100 0 0 1 200 100H140A40 40 0 0 0 60 100Z" fill={color} />
    </svg>
  );
}

export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10 font-display text-2xl font-semibold uppercase sm:text-4xl">
            {t}
            <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
              <path d="M8 20A12 12 0 0 1 32 20H25A5 5 0 0 0 15 20Z" fill={["#1772e6", "#f98a28", "#c81418"][i % 3]} />
              <path d="M8 20A12 12 0 0 0 32 20H25A5 5 0 0 1 15 20Z" fill={["#f98a28", "#c81418", "#1772e6"][i % 3]} />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
