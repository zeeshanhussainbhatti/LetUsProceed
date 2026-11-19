"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center">
      {site.nav.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`block rounded-full px-5 py-2.5 text-[15px] transition ${
                active ? "bg-ink text-white" : "text-ink hover:bg-surface-soft"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
