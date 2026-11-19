import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const V4_PATHS = ["/about-us", "/services", "/case-study", "/mala-group-dubai", "/contact-us", "/careers"];

/** Rewrites an internal link so V4 pages keep visitors inside V4. */
export function toV4(href: string) {
  if (href === "/") return "/v4";
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return V4_PATHS.some((p) => href === p || href.startsWith(`${p}/`)) ? `/v4${href}` : href;
}

export const C = { blue: "#1772e6", deep: "#0632c8", orange: "#f98a28", red: "#c81418", ink: "#1d1d1f" } as const;

export function Wrap4({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

/** Hard-shadow box: thick ink border with a solid offset shadow that moves on hover. */
export function Box({
  children,
  className = "",
  shadow = C.ink,
  hover = false,
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  shadow?: string;
  hover?: boolean;
  as?: "div" | "article" | "li" | "figure";
  style?: React.CSSProperties;
}) {
  return (
    <Tag
      className={`v4-box border-[3px] border-ink ${hover ? "v4-hover" : ""} ${className}`}
      style={{ ["--sh" as string]: shadow, ...style }}
    >
      {children}
    </Tag>
  );
}

/** Sticker-style label. */
export function Tag4({ children, bg = C.orange, className = "" }: { children: ReactNode; bg?: string; className?: string }) {
  return (
    <span
      className={`inline-block -rotate-2 border-[3px] border-ink px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-ink ${className}`}
      style={{ background: bg, color: bg === C.ink || bg === C.blue || bg === C.deep || bg === C.red ? "#fff" : C.ink }}
    >
      {children}
    </span>
  );
}

/** A word inside a coloured block, used inside headlines. */
export function Block({ children, bg = C.orange }: { children: ReactNode; bg?: string }) {
  const light = bg === C.orange || bg === "#fff";
  return (
    <span className="mx-[0.06em] inline-block border-[3px] border-ink px-[0.18em] leading-[1.05]" style={{ background: bg, color: light ? C.ink : "#fff" }}>
      {children}
    </span>
  );
}

export function Btn4({
  href,
  children,
  bg = C.orange,
  className = "",
}: {
  href: string;
  children: ReactNode;
  bg?: string;
  className?: string;
}) {
  const dark = bg === C.ink || bg === C.blue || bg === C.deep || bg === C.red;
  return (
    <Link
      href={href}
      className={`v4-btn inline-flex items-center gap-3 border-[3px] border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wider ${className}`}
      style={{ background: bg, color: dark ? "#fff" : C.ink }}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function H2b({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl ${className}`}>{children}</h2>;
}

/** The four logo pieces as square colour tiles. */
export function PieceTile({ piece, className = "" }: { piece: "a" | "b" | "c" | "d"; className?: string }) {
  const map = {
    a: { bg: C.blue, d: <rect x="30" y="0" width="40" height="100" fill={C.deep} /> },
    b: { bg: "#fff", d: <path d="M0 100A50 50 0 0 1 100 100H70A20 20 0 0 0 30 100Z" fill={C.blue} /> },
    c: { bg: "#fff", d: <path d="M0 0A50 50 0 0 0 100 0H70A20 20 0 0 1 30 0Z" fill={C.orange} /> },
    d: { bg: C.orange, d: <path d="M0 0H50V100A50 50 0 0 1 0 50Z" fill={C.red} /> },
  }[piece];
  return (
    <svg viewBox="0 0 100 100" className={className} style={{ background: map.bg }} aria-hidden="true">
      {map.d}
    </svg>
  );
}

export function Mark4({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 645 645" className={className} aria-hidden="true">
      <rect x="484" y="0" width="161" height="323" fill={C.blue} />
      <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill={C.blue} />
      <path d="M484 323H645A242 242 0 0 0 484 95Z" fill={C.deep} />
      <rect x="0" y="323" width="161" height="322" fill={C.orange} />
      <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill={C.orange} />
      <path d="M161 323H0A242 242 0 0 0 161 551Z" fill={C.red} />
    </svg>
  );
}

/** Thick scrolling band with outlined words. */
export function Band({ items, bg = C.ink }: { items: string[]; bg?: string }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee border-y-[3px] border-ink py-4" style={{ background: bg }} aria-hidden="true">
      <div className="marquee-track gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 font-display text-3xl font-extrabold uppercase text-white sm:text-5xl">
            <span className={i % 2 ? "v2-outline [--stroke:#fff]" : ""}>{t}</span>
            <span className="h-5 w-5 rotate-45 border-[3px] border-white" style={{ background: [C.orange, C.blue, C.red][i % 3] }} />
          </span>
        ))}
      </div>
    </div>
  );
}
