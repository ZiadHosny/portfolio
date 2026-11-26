import type { Viewport } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";
import { arabic } from "@/lib/fonts-ar";

export const metadata = buildMetadata("ar");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282a36",
  colorScheme: "dark",
};

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <RootShell fontClass={`ar-fonts ${arabic.variable}`} locale="ar">{children}</RootShell>;
}
