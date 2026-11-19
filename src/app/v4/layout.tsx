import type { Metadata } from "next";
import { V4Sidebar } from "@/components/v4/V4Sidebar";
import { V4Footer } from "@/components/v4/V4Footer";

// Version 4 is a design preview: kept out of search results so it never competes with version 1.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function V4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="v4-root flex min-h-full flex-1 flex-col overflow-x-clip lg:pl-[92px]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-[3px] focus:border-ink focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <V4Sidebar />
      <main id="main" className="flex-1">{children}</main>
      <V4Footer />
    </div>
  );
}
