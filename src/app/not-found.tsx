import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      showContacts={false}
      title={<>Page not <span className="text-brand-orange">found</span></>}
      intro={<p>The page you are looking for has moved or does not exist.</p>}
      actions={<><ButtonLink href="/">Go to the homepage</ButtonLink><ButtonLink href="/services" variant="outline">See our services</ButtonLink></>}
    />
  );
}
