import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden rounded-full bg-white/95 p-1.5 shadow-sm lg:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact-us"
            className="hidden rounded-full bg-brand-orange px-6 py-3 font-medium text-white shadow-sm transition hover:brightness-95 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <details className="group relative lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-white shadow-sm [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 group-open:hidden" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg viewBox="0 0 24 24" className="hidden h-5 w-5 group-open:block" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </summary>
            <nav aria-label="Mobile" className="absolute right-0 mt-3 w-64 rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5">
              <ul>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-2xl px-4 py-3 text-ink hover:bg-surface-soft">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Link href="/contact-us" className="block rounded-2xl bg-brand-orange px-4 py-3 text-center font-medium text-white">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
