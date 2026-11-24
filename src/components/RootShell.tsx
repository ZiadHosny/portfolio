import type { ReactNode } from "react";
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { MotionProvider } from "@/components/fx/MotionProvider";
import { Spotlight } from "@/components/fx/Spotlight";
import { arabic, inter, mono } from "@/lib/fonts";
import { getDict, type Locale } from "@/lib/i18n";
import { HeadScript } from "@/components/HeadScript";

/** Adds `js` (enables scroll-reveal styles) and `intro-skip` to <html> before first paint. */
const BEFORE_PAINT =
  "var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('zh-intro-seen')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('intro-skip')}catch(e){d.classList.add('intro-skip')}";

/** Shared <html>/<body> for both languages. Each language has its own root layout so `lang` and `dir` are in the HTML. */
export const RootShell = ({ locale, children }: { locale: Locale; children: ReactNode }) => {
  const t = getDict(locale);
  // Arabic: monospace Latin + Kufi Arabic (bold "code" look). English: Inter.
  const fonts = locale === "ar" ? `ar-fonts ${arabic.variable}` : inter.variable;
  return (
    <html lang={t.htmlLang} dir={t.dir} className={`${fonts} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content never stays hidden */}
        <HeadScript code={BEFORE_PAINT} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-bg"
        >
          {t.skip}
        </a>
        <MotionProvider>
          <Navbar locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </MotionProvider>
        <RevealObserver />
        <Spotlight />
      </body>
    </html>
  );
};
