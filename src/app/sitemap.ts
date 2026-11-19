import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/about-us",
  "/services",
  "/services/seo",
  "/services/social-services",
  "/services/paid-media",
  "/services/web-development",
  "/services/content-writing",
  "/services/creative-services",
  "/case-study",
  "/mala-group-dubai",
  "/careers",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-18");
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "/" : p}`, lastModified, priority: p === "/" ? 1 : 0.8 }));
}
