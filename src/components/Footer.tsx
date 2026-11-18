import Link from "next/link";
import { Logo } from "./Logo";
import { SocialLinks } from "./ui";
import { site } from "@/lib/site";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-5 flex items-center gap-2 text-lg font-medium">
        <span className="h-2 w-2 rounded-sm bg-brand-blue" aria-hidden="true" />
        {title}
      </p>
      {children}
    </div>
  );
}

const quickLinks = [
  ...site.nav,
  { label: "Mala Group Case Study", href: "/mala-group-dubai" },
  { label: "Get in Touch", href: "/contact-us" },
];

export function Footer() {
  const link = "hover:text-brand-blue";
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.4fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A digital marketing agency in Karachi, Pakistan, with an office in Baldwin, New York. Part of Sybrid Pvt.
            Ltd., a strategic business unit of the Lakson Group of Companies.
          </p>
          <SocialLinks className="mt-6 flex-wrap" />
        </div>
        <Column title="Quick Links">
          <ul className="space-y-3 text-muted">
            {quickLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
            ))}
          </ul>
        </Column>
        <Column title="Services">
          <ul className="space-y-3 text-muted">
            {site.services.map((l) => (
              <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
            ))}
          </ul>
        </Column>
        <Column title="Policies">
          <ul className="space-y-3 text-muted">
            {site.policies.map((l) => (
              <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>
            ))}
          </ul>
        </Column>
        <Column title="Contact">
          <address className="space-y-4 not-italic text-muted">
            {site.offices.map((o) => (
              <div key={o.id}>
                <p><span className="font-medium text-ink">{o.label}:</span> {o.address}</p>
                <p className="mt-1">
                  Call: <a href={o.phone.href} className={link}>{o.phone.display}</a>
                </p>
              </div>
            ))}
            <p>
              Email: <a href={`mailto:${site.email}`} className={link}>{site.email}</a>
            </p>
          </address>
        </Column>
      </div>
      <p className="border-t border-black/10 px-4 py-6 text-center text-sm text-muted">
        © 2026 Let Us Proceed. All rights reserved.
      </p>
    </footer>
  );
}
