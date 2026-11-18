import type { ReactNode } from "react";
import type { Crumb } from "@/lib/schema";
import { Breadcrumbs, ContactList, Container, SocialLinks } from "./ui";

export function PageHero({
  title,
  tagline,
  intro,
  actions,
  art,
  crumbs,
  showContacts = true,
  footnote,
  artClassName = "",
  titleClassName = "text-4xl sm:text-5xl lg:text-6xl",
}: {
  title: ReactNode;
  tagline?: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  art?: ReactNode;
  crumbs?: Crumb[];
  showContacts?: boolean;
  footnote?: ReactNode;
  artClassName?: string;
  titleClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-10 pb-16 pt-36 lg:min-h-[720px] lg:grid-cols-[1.15fr_1fr] lg:pb-20 lg:pt-40">
        <div>
          {crumbs && <Breadcrumbs crumbs={crumbs} />}
          <h1 className={`font-medium uppercase leading-[1.05] tracking-tight text-ink ${titleClassName}`}>
            {title}
          </h1>
          {tagline && <p className="mt-5 text-xl font-medium text-ink sm:text-2xl">{tagline}</p>}
          {intro && <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-ink/80">{intro}</div>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          {footnote}
          {showContacts && <ContactList className="mt-10" />}
        </div>
        {art && <div className={`relative ${artClassName}`}>{art}</div>}
      </Container>
      <SocialLinks vertical className="absolute right-5 top-40 hidden xl:flex" />
    </section>
  );
}
