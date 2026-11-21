"use client";
import { useEffect, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type Props = { text: string; className?: string; delay?: number; duration?: number };

/** "Decoding" text effect: random glyphs resolve left-to-right into the real text. */
export const ScrambleText = ({ text, className, delay = 0, duration = 1100 }: Props) => {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = 0;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / duration));
      if (now - last > 45) {
        last = now;
        const shown = Math.floor(p * text.length);
        setOut(
          text
            .split("")
            .map((ch, i) => (ch === " " || i < shown ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
            .join(""),
        );
      }
      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, duration]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{out}</span>
    </span>
  );
};
