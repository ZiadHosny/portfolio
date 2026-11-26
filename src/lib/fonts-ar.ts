import { Noto_Kufi_Arabic } from "next/font/google";

/**
 * Arabic pages only (imported by app/(ar)/ar/layout.tsx). Arabic glyphs in this font, Latin text in
 * JetBrains Mono, for a bold "code" look. To try another Arabic font, change only this line
 * (e.g. Changa, Tajawal, Readex_Pro, Cairo).
 */
export const arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  // No Arial-based fallback face: it would also cover Latin and hide JetBrains Mono.
  adjustFontFallback: false,
  // Turbopack preloads every next/font on every route, which made the English page download this
  // 120KB font for nothing. Without preload the browser fetches it only when Arabic text needs it.
  preload: false,
});
