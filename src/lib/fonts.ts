import { Inter, JetBrains_Mono, Noto_Kufi_Arabic } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

/**
 * Arabic glyphs only. On /ar, Latin text (Node.js, React…) uses JetBrains Mono and Arabic uses
 * this font, for a bold "code" look. To try another Arabic font, change only this line
 * (e.g. Changa, Tajawal, Readex_Pro, Cairo).
 */
export const arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  // No Arial-based fallback face: it would also cover Latin and hide JetBrains Mono.
  adjustFontFallback: false,
});
