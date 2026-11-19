import type { Metadata } from "next";

/** Per-page title, description, canonical and social tags. */
export function pageMeta(opts: { title: string; description: string; path: string; type?: "website" | "article"; noindex?: boolean }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: { title: opts.title, description: opts.description, url: opts.path, type: opts.type ?? "website" },
    twitter: { title: opts.title, description: opts.description },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
