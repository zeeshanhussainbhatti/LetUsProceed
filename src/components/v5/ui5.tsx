import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const V5_PATHS = ["/about-us", "/services", "/case-study", "/mala-group-dubai", "/contact-us", "/careers"];

/** Rewrites an internal link so V5 pages keep visitors inside V5. */
export function toV5(href: string) {
  if (href === "/") return "/v5";
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return V5_PATHS.some((p) => href === p || href.startsWith(`${p}/`)) ? `/v5${href}` : href;
}

export function W5({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow5({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-[13px] font-semibold text-brand-blue">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Heading5({
  eyebrow,
  title,
  lead,
  center = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow5>{eyebrow}</Eyebrow5>}
      <Tag className="mt-4 text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[2.6rem]">{title}</Tag>
      {lead && <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

/** Brand gradient on a word. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="bg-gradient-to-r from-brand-blue to-brand-blue-deep bg-clip-text text-transparent">{children}</span>;
}

export function Button5({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "blue" | "secondary" | "white";
  className?: string;
}) {
  const v = {
    primary: "bg-brand-orange text-white shadow-[0_8px_20px_-8px_rgba(249,138,40,0.7)] hover:bg-[#ef7d1b]",
    blue: "bg-brand-blue text-white shadow-[0_8px_20px_-8px_rgba(23,114,230,0.7)] hover:bg-[#1265d1]",
    secondary: "bg-white text-ink ring-1 ring-black/10 hover:ring-black/25",
    white: "bg-white text-ink hover:bg-white/90",
  }[variant];
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition ${v} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function Card5({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "article" | "li" }) {
  return (
    <Tag className={`rounded-3xl border border-black/[0.07] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.12)] ${className}`}>
      {children}
    </Tag>
  );
}

export function TextLink5({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 font-semibold text-brand-blue">
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

/** Small horizontal bar chart for results (values are percentages). */
export function Bars5({ items }: { items: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <ul className="space-y-4">
      {items.map((i) => (
        <li key={i.label}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-muted">{i.label}</span>
            <span className="font-semibold text-ink">{i.value}%</span>
          </div>
          <div className="mt-1.5 h-2.5 rounded-full bg-black/[0.06]">
            <div className="h-full rounded-full" style={{ width: `${Math.max(6, (i.value / max) * 100)}%`, background: i.color }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
