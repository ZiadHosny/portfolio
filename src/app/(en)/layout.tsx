import type { Viewport } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";
import { inter } from "@/lib/fonts-en";

export const metadata = buildMetadata("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#282a36",
  colorScheme: "dark",
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell fontClass={inter.variable} locale="en">{children}</RootShell>;
}
