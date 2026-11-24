import type { Metadata } from "next";
import { site } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n";

const texts: Record<Locale, { title: string; description: string; short: string; keywords: string[]; ogLocale: string }> = {
  en: {
    title: `${site.name} | ${site.title}`,
    description: site.description,
    short: site.shortDescription,
    ogLocale: "en_US",
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
  },
  ar: {
    title: "زياد حسني | مهندس برمجيات Full-Stack",
    description:
      "زياد حسني مهندس برمجيات Full-Stack من مصر، بخبرة تزيد على 5 سنوات في بناء أنظمة Back-end قابلة للتوسع بـ Node.js وNestJS وPostgreSQL، وتطبيقات ويب حديثة بـ React وNext.js وTypeScript. يشرح System Design بالعربي على يوتيوب.",
    short:
      "مهندس برمجيات Full-Stack من مصر بخبرة تزيد على 5 سنوات في Node.js وNestJS وPostgreSQL وReact وNext.js، ويشرح System Design بالعربي.",
    ogLocale: "ar_AR",
    keywords: [
      "زياد حسني",
      "مهندس برمجيات",
      "مهندس برمجيات مصري",
      "مطوّر Full-Stack",
      "مطوّر Back-end",
      "System Design بالعربي",
      "شرح System Design",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "React",
      "Next.js",
      "Ziad Hosny",
    ],
  },
};

export const languageAlternates = {
  en: localePath("en"),
  ar: localePath("ar"),
  "x-default": localePath("en"),
};

export const buildMetadata = (locale: Locale): Metadata => {
  const t = texts[locale];
  const path = localePath(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: `%s | ${site.name}` },
    description: t.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    keywords: t.keywords,
    category: "technology",
    alternates: { canonical: path, languages: languageAlternates },
    openGraph: {
      type: "profile",
      url: path,
      siteName: site.name,
      title: t.title,
      description: t.short,
      locale: t.ogLocale,
      alternateLocale: locale === "ar" ? "en_US" : "ar_AR",
      firstName: "Ziad",
      lastName: "Hosny",
    },
    twitter: {
      card: "summary_large_image",
      site: "@ziadhosnydev",
      creator: "@ziadhosnydev",
      title: t.title,
      description: t.short,
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
};
