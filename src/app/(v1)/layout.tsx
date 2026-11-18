import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
