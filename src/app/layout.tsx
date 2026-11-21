import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/lib/site";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const fullTitle = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: fullTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Ziad Hosny",
    "Full-Stack Software Engineer",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "System Design in Arabic",
    "Egypt",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: fullTitle,
    description: site.shortDescription,
    locale: "en_US",
    firstName: "Ziad",
    lastName: "Hosny",
    images: [{ url: site.photoSquare, width: 400, height: 400, alt: site.name }],
  },
  twitter: {
    card: "summary",
    site: "@ziadhosnydev",
    creator: "@ziadhosnydev",
    title: fullTitle,
    description: site.shortDescription,
    images: [{ url: site.photoSquare, alt: site.name }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#282a36",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content never stays hidden */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
