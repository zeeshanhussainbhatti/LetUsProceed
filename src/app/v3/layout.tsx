import type { Metadata } from "next";
import { V3Header } from "@/components/v3/V3Header";
import { V3Footer } from "@/components/v3/V3Footer";

// Version 3 is a design preview: kept out of search results so it never competes with version 1.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v3-bg flex min-h-full flex-1 flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <V3Header />
      <main id="main" className="flex-1">{children}</main>
      <V3Footer />
    </div>
  );
}
