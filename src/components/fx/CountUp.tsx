"use client";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; duration?: number; className?: string };

/** Counts from 0 to `value` once it scrolls into view. Shows the final value with reduced motion / no JS. */
export const CountUp = ({ value, suffix = "", duration = 1.6, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || reduce || started.current) return;
    started.current = true;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
};
