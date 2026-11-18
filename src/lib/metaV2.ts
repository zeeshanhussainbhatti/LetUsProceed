import type { Metadata } from "next";

/** V2 pages: same title/description as V1, canonical points at the V1 page, never indexed. */
export function v2Meta(opts: { title: string; description: string; v1Path: string }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.v1Path },
    robots: { index: false, follow: false },
  };
}
