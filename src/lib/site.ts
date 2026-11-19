export const site = {
  name: "Let Us Proceed",
  shortName: "Proceed",
  url: "https://letusproceed.com",
  email: "info@letusproceed.com",
  lastUpdated: "November 2026",
  offices: [
    {
      id: "karachi",
      label: "Pakistan Office",
      city: "Karachi, Pakistan",
      address:
        "B-603 & 604, 6th Floor, Lakson Square, Building No.3, Sarwar Shaheed Road, Opp. Press Club, Karachi",
      phone: { display: "+92 (213) 840 0967", href: "tel:+922138400967" },
      schema: {
        streetAddress:
          "B-603 & 604, 6th Floor, Lakson Square, Building No.3, Sarwar Shaheed Road, Opp. Press Club",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
    },
    {
      id: "baldwin",
      label: "USA Office",
      city: "Baldwin, New York, USA",
      address: "1595 Grand Ave, Baldwin, NY 11510, USA",
      phone: { display: "+1 (516) 206 6600", href: "tel:+15162066600" },
      schema: {
        streetAddress: "1595 Grand Ave",
        addressLocality: "Baldwin",
        addressRegion: "NY",
        postalCode: "11510",
        addressCountry: "US",
      },
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Know Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Case Study", href: "/case-study" },
    { label: "Resources", href: "/resources" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "SEO Services", href: "/services/seo" },
    { label: "Social Media Services", href: "/services/social-services" },
    { label: "Paid Media", href: "/services/paid-media" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Content Writing", href: "/services/content-writing" },
    { label: "Creative Services", href: "/services/creative-services" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "SMS Terms & Conditions", href: "/sms-terms" },
  ],
  social: [
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/proceedglobal" },
    { id: "x", label: "X", href: "https://x.com/proceedglobal" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/proceedglobal" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/proceedglobal" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@proceed8896" },
  ],
} as const;

export type SocialId = (typeof site.social)[number]["id"];
