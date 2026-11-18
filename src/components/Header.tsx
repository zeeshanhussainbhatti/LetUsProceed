import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6">
        <Logo />
        <nav aria-label="Main" className="hidden rounded-full bg-white/90 p-1.5 shadow-sm lg:block">
          <ul className="flex items-center">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-5 py-2.5 text-[15px] text-ink transition hover:bg-ink hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-brand-orange px-6 py-3 font-medium text-white shadow-sm transition hover:brightness-95"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
