import type { Metadata } from "next";
import { V5Header } from "@/components/v5/V5Header";
import { V5Footer } from "@/components/v5/blocks5";

// Version 5 is a design preview: kept out of search results so it never competes with version 1.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V5Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow">
        Skip to content
      </a>
      <V5Header />
      <main id="main" className="flex-1">{children}</main>
      <V5Footer />
    </div>
  );
}
