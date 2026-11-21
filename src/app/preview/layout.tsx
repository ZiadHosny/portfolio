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
        <Link href="/preview/hero-a" className="rounded-full px-4 py-2 hover:bg-white/10">A<span className="hidden sm:inline"> · Aurora Split</span></Link>
        <Link href="/preview/hero-b" className="rounded-full px-4 py-2 hover:bg-white/10">B<span className="hidden sm:inline"> · Center Stage</span></Link>
        <Link href="/preview/creative" className="rounded-full px-4 py-2 hover:bg-white/10">C<span className="hidden sm:inline"> · Creative (full page)</span><span className="sm:hidden"> · Creative</span></Link>
        <Link href="/preview/simple" className="rounded-full bg-purple px-4 py-2 text-bg hover:bg-pink">D<span className="hidden sm:inline"> · Simple</span></Link>
      </nav>
    </>
  );
}
