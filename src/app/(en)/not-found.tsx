import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist. Go back to Ziad Hosny's portfolio.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col items-center justify-center pt-[var(--nav-h)] text-center">
      <p className="font-mono text-sm text-purple">404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or was moved.</p>
      <Link href="/" className="btn-primary mt-8">
        <FiArrowLeft aria-hidden="true" /> Back to home
      </Link>
    </section>
  );
}
