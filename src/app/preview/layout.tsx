import type { Metadata } from "next";
import Link from "next/link";

// Temporary design previews — removed after a hero is chosen.
export const metadata: Metadata = {
  title: "Hero preview",
  robots: { index: false, follow: false },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <nav
        aria-label="Hero variants"
        className="glass fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 gap-1 whitespace-nowrap !rounded-full p-1 text-xs font-semibold sm:text-sm"
      >
        <Link href="/preview/hero-a" className="rounded-full px-4 py-2 hover:bg-white/10">A · Aurora Split</Link>
        <Link href="/preview/hero-b" className="rounded-full px-4 py-2 hover:bg-white/10">B · Center Stage</Link>
      </nav>
    </>
  );
}
