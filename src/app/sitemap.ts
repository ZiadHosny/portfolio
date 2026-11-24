import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { languageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(Object.entries(languageAlternates).map(([k, v]) => [k, abs(v)]));
  const lastModified = new Date();
  return [
    { url: abs("/"), lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: abs("/ar"), lastModified, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
