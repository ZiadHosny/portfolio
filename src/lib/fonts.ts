import { JetBrains_Mono } from "next/font/google";

/**
 * Shared by both languages. Language-specific fonts live in fonts-en.ts / fonts-ar.ts and are
 * imported only by their own layout, so each page preloads only the fonts it uses.
 */
export const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
