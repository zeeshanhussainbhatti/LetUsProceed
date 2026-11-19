import Link from "next/link";
import type { ReactNode } from "react";
import { site, type SocialId } from "@/lib/site";
import type { Crumb } from "@/lib/schema";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-brand-orange text-white hover:brightness-95",
    dark: "bg-ink text-white hover:bg-black",
    outline: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:bg-white/90",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Decorative "( - )" brand pattern from the live site, drawn in the logo colours. */
export function Motif({ className = "" }: { className?: string }) {
  const rows = [
    ["l", "d", "r"],
    ["d", "r", "d"],
    ["l", "d", "l"],
    ["d", "r", "d"],
  ];
  return (
    <svg viewBox="0 0 120 160" className={`h-auto w-16 sm:w-24 ${className}`} aria-hidden="true">
      {rows.map((row, y) =>
        row.map((c, x) => {
          const cx = 20 + x * 40;
          const cy = 20 + y * 40;
          if (c === "d") return <rect key={`${x}${y}`} x={cx - 11} y={cy - 4} width="22" height="8" fill="var(--brand-red)" />;
          const d =
            c === "l"
              ? `M${cx + 6} ${cy - 14}a14 14 0 0 0 0 28v-8a6 6 0 0 1 0-12z`
              : `M${cx - 6} ${cy - 14}a14 14 0 0 1 0 28v-8a6 6 0 0 0 0-12z`;
          return <path key={`${x}${y}`} d={d} fill="var(--brand-blue)" />;
        }),
      )}
    </svg>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  lead,
  align = "left",
  motif = false,
  as: Tag = "h2",
  className = "",
}: {
  title: ReactNode;
  eyebrow?: string;
  lead?: ReactNode;
  align?: "left" | "center";
  motif?: boolean;
  as?: "h2" | "h3";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      <div className={`flex items-center gap-6 ${center ? "justify-center" : ""}`}>
        {motif && <Motif className="hidden shrink-0 md:block" />}
        <div className={center ? "max-w-4xl" : "max-w-3xl"}>
          {eyebrow && (
            <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue shadow-sm">
              {eyebrow}
            </p>
          )}
          <Tag className="text-3xl font-medium uppercase leading-tight tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            {title}
          </Tag>
          {lead && <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>}
        </div>
        {motif && <Motif className="hidden shrink-0 md:block" />}
      </div>
    </div>
  );
}

/** Orange tilted highlight used on "BIG" and "CLIENTS" on the live site. */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="mx-1 inline-block -rotate-6 bg-brand-orange px-3 py-0.5 font-semibold text-white">{children}</span>
  );
}

const socialPaths: Record<SocialId, ReactNode> = {
  facebook: <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H16.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />,
  x: <path d="M17.5 3.5h2.9l-6.4 7.3 7.5 9.7h-5.9l-4.6-6-5.3 6H2.8l6.8-7.8L2.5 3.5h6l4.2 5.5zm-1 15.3h1.6L7.6 5.1H5.9z" />,
  linkedin: <path d="M5 8.5h3v11H5zm1.5-5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM10 8.5h2.9V10c.4-.8 1.4-1.7 3-1.7 3.1 0 3.6 2 3.6 4.7v6.5h-3v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H10z" />,
  instagram: (
    <path d="M12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 7.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4.9-7.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zM12 3.6c2.3 0 2.6 0 3.5.1 2.3.1 3.4 1.2 3.5 3.5.1.9.1 1.2.1 3.5v2.6c0 2.3 0 2.6-.1 3.5-.1 2.3-1.2 3.4-3.5 3.5-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1c-2.3-.1-3.4-1.2-3.5-3.5-.1-.9-.1-1.2-.1-3.5v-2.6c0-2.3 0-2.6.1-3.5.1-2.3 1.2-3.4 3.5-3.5.9-.1 1.2-.1 3.5-.1zm0-1.6c-2.4 0-2.7 0-3.6.1-3.2.1-4.9 1.9-5 5-.1.9-.1 1.2-.1 3.6v2.6c0 2.4 0 2.7.1 3.6.1 3.2 1.9 4.9 5 5 .9.1 1.2.1 3.6.1s2.7 0 3.6-.1c3.2-.1 4.9-1.9 5-5 .1-.9.1-1.2.1-3.6v-2.6c0-2.4 0-2.7-.1-3.6-.1-3.2-1.9-4.9-5-5-.9-.1-1.2-.1-3.6-.1z" />
  ),
  youtube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />,
};

export function SocialIcon({ id }: { id: SocialId }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      {socialPaths[id]}
    </svg>
  );
}

export function SocialLinks({ className = "", vertical = false }: { className?: string; vertical?: boolean }) {
  return (
    <ul className={`flex gap-2.5 ${vertical ? "flex-col" : ""} ${className}`}>
      {site.social.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Let Us Proceed on ${s.label}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/70 text-ink transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"
          >
            <SocialIcon id={s.id} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.3L4 7.2V17h16V7.2z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

/** Email + phones block under each hero, as clickable links. */
export function ContactList({ className = "" }: { className?: string }) {
  const item = "flex items-center gap-3 text-[15px] text-ink hover:text-brand-blue";
  const dot = "flex h-8 w-8 items-center justify-center rounded-full border border-ink/60";
  return (
    <ul className={`space-y-2.5 ${className}`}>
      <li>
        <a href={`mailto:${site.email}`} className={item}>
          <span className={dot}><IconMail /></span>
          {site.email}
        </a>
      </li>
      {site.offices.map((o) => (
        <li key={o.id}>
          <a href={o.phone.href} className={item}>
            <span className={dot}><IconPhone /></span>
            {o.phone.display}
            <span className="text-sm text-muted">({o.label.replace(" Office", "")})</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {i < crumbs.length - 1 ? (
              <Link href={c.href} className="underline-offset-4 hover:text-brand-blue hover:underline">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LastUpdated() {
  return <p className="mt-6 text-sm text-muted">Last updated: {site.lastUpdated}</p>;
}

/**
 * Brand illustration built from the logo geometry (half rings + blocks).
 * Used where the original page illustration has not been supplied yet.
 */
export function BrandArt({
  tone = "blue",
  className = "",
}: {
  tone?: "blue" | "orange" | "red";
  className?: string;
}) {
  const main = { blue: "#1772e6", orange: "#f98a28", red: "#c81418" }[tone];
  const accent = { blue: "#0632c8", orange: "#c81418", red: "#f98a28" }[tone];
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <path d="M40 300A160 160 0 0 1 360 300H260A60 60 0 0 0 140 300Z" fill={main} />
      <path d="M260 300H360A160 160 0 0 0 300 175Z" fill={accent} opacity="0.9" />
      <circle cx="200" cy="120" r="34" fill="white" opacity="0.9" />
      <path d="M186 120a14 14 0 0 1 28 0" stroke={main} strokeWidth="8" fill="none" />
      <rect x="96" y="40" width="22" height="8" fill="#c81418" />
      <rect x="300" y="64" width="22" height="8" fill="#c81418" transform="rotate(25 311 68)" />
      <path d="M70 120a16 16 0 0 0 0 32v-9a7 7 0 0 1 0-14z" fill="#1772e6" />
      <path d="M330 140a16 16 0 0 1 0 32v-9a7 7 0 0 0 0-14z" fill="#1772e6" />
    </svg>
  );
}
