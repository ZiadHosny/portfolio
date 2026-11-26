import { Inter } from "next/font/google";

/** English pages only (imported by app/(en)/layout.tsx). */
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
