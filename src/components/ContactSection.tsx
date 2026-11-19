import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Container, SocialLinks } from "./ui";

export function ContactSection({
  title = "Get in Touch",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="relative grid overflow-hidden rounded-[2.5rem] bg-ink text-white lg:grid-cols-[1fr_1.25fr]">
          <svg viewBox="0 0 645 645" className="pointer-events-none absolute -bottom-32 -left-32 w-96 opacity-20" aria-hidden="true">
            <path d="M161 323A242 242 0 0 1 645 323H484A81 81 0 0 0 322 323Z" fill="#1772e6" />
            <path d="M0 323A242 242 0 0 0 484 323H323A81 81 0 0 1 161 323Z" fill="#f98a28" />
          </svg>

          {/* Info side */}
          <div className="relative p-8 sm:p-12">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Get in touch</p>
            <h2 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/75">{intro}</p>

            <p className="mt-10 font-display text-lg font-semibold uppercase tracking-wide">Connect with us</p>
            <address className="mt-5 space-y-4 not-italic">
              {site.offices.map((o) => (
                <div key={o.id} className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold">{o.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">{o.address}</p>
                    <a href={o.phone.href} className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:underline">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {o.phone.display}
                    </a>
                  </div>
                </div>
              ))}
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold">Email</span>
                  <span className="block text-sm text-white/75">{site.email}</span>
                </span>
              </a>
            </address>
            <SocialLinks className="mt-8 flex-wrap [&_a]:border-white/40 [&_a]:text-white" />
          </div>

          {/* Form side */}
          <div className="relative bg-brand-gradient p-6 text-ink sm:p-10 lg:m-4 lg:rounded-[2rem] lg:p-12">
            <p className="mb-6 font-display text-xl font-semibold uppercase">Send us a message</p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
