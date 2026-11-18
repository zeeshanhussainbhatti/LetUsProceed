import type { Faq } from "@/lib/schema";
import { Container, SectionHeading } from "./ui";

/** FAQs shown open on the page (the text must match the FAQPage schema word for word). */
export function Faqs({ title, faqs, lead }: { title: string; faqs: Faq[]; lead?: string }) {
  return (
    <section className="bg-surface-soft py-20 sm:py-24" id="faqs">
      <Container>
        <SectionHeading title={title} lead={lead} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.q} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <h3 className="text-lg font-semibold leading-snug text-ink">{f.q}</h3>
              <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
