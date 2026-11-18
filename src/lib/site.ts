export const site = {
  name: "Proceed",
  legalName: "Let Us Proceed",
  url: "https://letusproceed.com",
  email: "info@letusproceed.com",
  phones: [
    { label: "USA", display: "+1 (516) 206 6600", href: "tel:+15162066600" },
    { label: "Pakistan", display: "+92 (213) 840 0967", href: "tel:+922138400967" },
  ],
  offices: [
    {
      label: "Pakistan Office",
      address:
        "B-603 & 604, 6th Floor, Lakson Square, Building No. 3, Sarwar Shaheed Road, Opp. Press Club, Karachi",
    },
    { label: "USA Office", address: "1595 Grand Ave, Baldwin, NY 11510, USA" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Know Us", href: "/know-us" },
    { label: "Services", href: "/services" },
    { label: "Case Study", href: "/case-study" },
    { label: "Resources", href: "/resources" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Creative Services", href: "/services#creative" },
    { label: "Content Writing", href: "/services#content-writing" },
    { label: "SEO", href: "/services#seo" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "Paid Media", href: "/services#paid-media" },
    { label: "Social Media Services", href: "/services#social-media" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "SMS Terms & Conditions", href: "/sms-terms" },
  ],
  // TODO: replace with the real profile URLs
  social: [
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
} as const;
