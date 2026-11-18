import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 flex items-center gap-2 font-sans text-lg font-medium">
        <span className="h-2 w-2 rounded-sm bg-brand-blue" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo />
        </div>
        <Column title="Quick Links">
          <ul className="space-y-3 text-muted">
            {site.nav.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
            <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
          </ul>
        </Column>
        <Column title="Services">
          <ul className="space-y-3 text-muted">
            {site.services.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
          </ul>
        </Column>
        <Column title="Policies">
          <ul className="space-y-3 text-muted">
            {site.policies.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand-blue">{l.label}</Link></li>
            ))}
          </ul>
        </Column>
        <Column title="Contact">
          <address className="space-y-3 not-italic text-muted">
            {site.offices.map((o) => (
              <p key={o.label}><span className="font-medium text-ink">{o.label}:</span> {o.address}</p>
            ))}
            {site.phones.map((p) => (
              <p key={p.href}><a href={p.href} className="hover:text-brand-blue">{p.display}</a></p>
            ))}
            <p><a href={`mailto:${site.email}`} className="hover:text-brand-blue">{site.email}</a></p>
          </address>
        </Column>
      </div>
      <p className="border-t border-black/10 py-6 text-center text-sm text-muted">
        © 2026 Proceed. All rights reserved.
      </p>
    </footer>
  );
}
