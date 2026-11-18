import { site } from "./site";

export type Faq = { q: string; a: string };
export type Crumb = { name: string; href: string };

const abs = (href: string) => (href.startsWith("http") ? href : `${site.url}${href === "/" ? "/" : href}`);

export const orgId = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: site.name,
    alternateName: "Proceed",
    url: `${site.url}/`,
    logo: `${site.url}/images/proceed-mark.svg`,
    email: site.email,
    parentOrganization: { "@type": "Organization", name: "Sybrid Pvt. Ltd." },
    address: site.offices.map((o) => ({ "@type": "PostalAddress", ...o.schema })),
    telephone: site.offices.map((o) => o.phone.display),
    areaServed: ["Pakistan", "United States", "United Arab Emirates"],
    sameAs: site.social.map((s) => s.href),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.href),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  href: string;
  description: string;
  offers: string[];
}) {
  return {
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    url: abs(opts.href),
    description: opts.description,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: opts.name,
      itemListElement: opts.offers.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
