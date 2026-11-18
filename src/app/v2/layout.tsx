import type { Metadata } from "next";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

// Version 2 is a design preview: kept out of search results so it never competes with version 1.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v2-bg flex min-h-full flex-1 flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <V2Header />
      <main id="main" className="flex-1">{children}</main>
      <V2Footer />
    </div>
  );
}
