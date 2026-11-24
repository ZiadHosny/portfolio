import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { MotionProvider } from "@/components/fx/MotionProvider";
import { Spotlight } from "@/components/fx/Spotlight";
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
    "Software Engineer Egypt",
    "Backend Developer",
    "System Design in Arabic",
    "System Design بالعربي",
    "زياد حسني",
    "مهندس برمجيات",
    "Egypt",
  ],
  category: "technology",
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziadhosnydev",
    creator: "@ziadhosnydev",
    title: fullTitle,
    description: site.shortDescription,
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282a36",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content never stays hidden */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('zh-intro-seen')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('intro-skip')}catch(e){d.classList.add('intro-skip')}",
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <RevealObserver />
        <Spotlight />
      </body>
    </html>
  );
}
