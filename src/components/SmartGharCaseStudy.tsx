import Link from "next/link";
import { Container } from "./ui";

// The live pages show four stats; 80% and 70% carried the same label, so only the three
// unambiguous figures are shown until the client confirms what the 70% measures.
const stats = [
  { value: "80%", label: "increase in overall sales growth" },
  { value: "95%", label: "increase in returning customers" },
  { value: "90%", label: "increase in conversion rate" },
];

export function SmartGharCaseStudy({
  heading = "Case Study: Smart Ghar",
  work,
  showLink = true,
}: {
  heading?: string;
  work?: string;
  showLink?: boolean;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-medium uppercase tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-2 font-semibold text-brand-orange">Smart Ghar</p>
            <p className="mt-5 leading-relaxed text-white/85">
              Smart Ghar is the sole distributor and authorised dealer of Sonoff in Pakistan, selling IoT home
              automation products through its online shop, smartghar.pk. The site had a high bounce rate and did not
              present the products as a solution to customers&apos; problems.
              {work ? ` ${work}` : ""}
            </p>
            {showLink && (
            <Link href="/case-study" className="mt-6 inline-block font-medium text-brand-orange underline-offset-4 hover:underline">
              See all our case studies →
            </Link>
            )}
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s) => (
              <li key={s.label} className="rounded-2xl bg-white/10 p-5">
                <span className="block font-display text-4xl font-semibold text-white">{s.value}</span>
                <span className="mt-1 block text-white/80">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
