import Link from "next/link";

// Placeholder mark until the original logo file is supplied (drop it in /public/images/logo.svg).
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Proceed home" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <path d="M22 2h10v10H22z" fill="var(--brand-blue-deep)" />
        <path d="M8 14a12 12 0 0 1 24 0h-8a4 4 0 0 0-8 0z" fill="var(--brand-blue)" />
        <path d="M8 14h8a4 4 0 0 0 4 4v8A12 12 0 0 1 8 14z" fill="var(--brand-orange)" />
        <path d="M2 22h8v10H2z" fill="var(--brand-red)" />
      </svg>
      <span className="font-display text-3xl font-medium tracking-tight text-ink">Proceed</span>
    </Link>
  );
}
