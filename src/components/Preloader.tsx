"use client";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useState } from "react";
import { finishIntro } from "./intro";

export const INTRO_KEY = "zh-intro-seen";

/**
 * How long the 0→100 counter runs. Total time on screen ≈ INTRO_MS + 250ms hold + 800ms curtain
 * exit, so 2000 ≈ 3 seconds.
 */
const INTRO_MS = 2000;
/** The counter always runs at least this long after the page becomes interactive. */
const MIN_MS = 600;

/**
 * Intro: counter 0→100 + name, then the curtain slides up.
 * Rendered on the server so there is no flash of the page before it. An inline <head> script adds
 * `intro-skip` to <html> before first paint when it was already seen this session, when the user
 * prefers reduced motion, or when JS is off (no `.js` class) — CSS then hides it.
 */
export const Preloader = () => {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    // Skipped (already seen / reduced motion): CSS hides it; nothing to run.
    if (document.documentElement.classList.contains("intro-skip")) return;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {}

    document.documentElement.style.overflow = "hidden";
    // Count from when the page started loading, not from hydration: on a slow phone the JS can take
    // seconds to boot, and starting the 2s counter only then made visitors wait load time + 3s.
    // Fast devices see the same intro as before; slow ones never wait less than MIN_MS.
    const now = performance.now();
    const p0 = Math.min(now / INTRO_MS, 1 - MIN_MS / INTRO_MS);
    const start = now - p0 * INTRO_MS;
    let raf = 0;
    let timer = 0;
    const finish = () => {
      setShow(false);
      finishIntro();
      document.documentElement.style.overflow = "";
    };
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / INTRO_MS);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = window.setTimeout(finish, 250);
    };
    raf = requestAnimationFrame(tick);
    // Cleanup must only cancel. React dev (StrictMode) runs effect → cleanup → effect on mount,
    // and calling finish() here used to dismiss the curtain immediately.
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          key="preloader"
          className="preloader fixed inset-0 z-[100] flex flex-col justify-between bg-bg-deep p-6 sm:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <p className="font-mono text-sm text-muted">ziad@egypt ~ loading portfolio</p>
          <div className="flex items-end justify-between gap-6">
            <p className="overflow-hidden text-3xl font-black sm:text-5xl">
              <m.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Ziad <span className="text-purple">Hosny</span>
              </m.span>
            </p>
            <p className="font-mono text-6xl font-black tabular-nums text-purple sm:text-8xl">{n}</p>
          </div>
          <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple to-pink" style={{ width: `${n}%` }} />
        </m.div>
      )}
    </AnimatePresence>
  );
};
