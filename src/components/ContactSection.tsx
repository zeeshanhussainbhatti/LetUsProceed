import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Container } from "./ui";

export function ContactSection({
  title = "Get in Touch",
  intro = "Tell us about your business and goals. Our team will review your website and channels and reply with a recommended plan and quote.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section id="get-in-touch" className="scroll-mt-24 py-20 sm:py-24">
      <Container className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-0">
        <div className="rounded-[2rem] bg-brand-gradient p-6 sm:p-10 lg:rounded-r-none lg:py-12 lg:pr-14">
          <h2 className="text-3xl font-medium uppercase tracking-tight sm:text-4xl">{title}</h2>
          <p className="mb-8 mt-3 max-w-xl text-muted">{intro}</p>
          <ContactForm />
        </div>
        <aside className="relative overflow-hidden rounded-[2rem] bg-brand-blue p-6 pb-24 text-white sm:p-10 sm:pb-28 lg:-my-6">
          <p className="font-display text-3xl font-medium uppercase tracking-tight sm:text-4xl">Connect with us</p>
          <address className="mt-8 space-y-7 not-italic">
            {site.offices.map((o) => (
              <div key={o.id}>
                <p className="font-semibold">{o.label}</p>
                <p className="mt-1 text-white/90">{o.address}</p>
                <a href={o.phone.href} className="mt-1 inline-block font-medium underline-offset-4 hover:underline">
                  {o.phone.display}
                </a>
              </div>
            ))}
            <div>
              <p className="font-semibold">Email</p>
              <a href={`mailto:${site.email}`} className="mt-1 inline-block font-medium underline-offset-4 hover:underline">
                {site.email}
              </a>
            </div>
          </address>
          <div className="pointer-events-none absolute -bottom-16 left-10 h-32 w-32 rounded-full border-[28px] border-white" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 top-24 hidden h-32 w-32 xl:block rounded-full border-[28px] border-brand-orange" aria-hidden="true" />
        </aside>
      </Container>
    </section>
  );
}
