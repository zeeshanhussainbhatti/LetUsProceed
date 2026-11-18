import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended...) are all allowed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
