"use client";
import { useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type ReactNode, type PointerEvent } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const FROM = {
  up: { y: 70 },
  down: { y: -50 },
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.8, y: 30 },
  rotate: { rotate: -6, y: 60, scale: 0.95 },
} as const;

type RevealProps = {
  children: ReactNode;
  from?: keyof typeof FROM;
  delay?: number;
  className?: string;
  amount?: number;
};

/** Scroll-triggered entrance: slide / scale / rotate in. Children can be server components. */
export const Reveal = ({ children, from = "up", delay = 0, className, amount = 0.2 }: RevealProps) => (
  <m.div
    className={className}
    initial={{ opacity: 0, ...FROM[from] }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </m.div>
);

/** Heading whose text slides up from behind a mask, with a giant outlined index number behind it. */
export const SectionHeading = ({ index, kicker, title, id }: { index: string; kicker: string; title: string; id: string }) => (
  <div className="relative">
    <span
      className="text-outline pointer-events-none absolute -top-10 right-0 select-none text-[clamp(5rem,18vw,14rem)] font-black leading-none sm:-top-16"
      aria-hidden="true"
    >
      {index}
    </span>
    <m.p
      className="font-mono text-sm text-pink"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {index} / {kicker}
    </m.p>
    <h2 id={id} className="mt-2 overflow-hidden pb-2">
      <m.span
        className="text-gradient-animated block text-[clamp(2.1rem,9vw,5.75rem)] font-black leading-[0.95] tracking-[-0.035em]"
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        {title}
      </m.span>
    </h2>
  </div>
);

/** 3D tilt that follows the pointer, with a moving holographic shine. */
export const TiltCard = ({ children, className = "", max = 12 }: { children: ReactNode; className?: string; max?: number }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const spring = { stiffness: 160, damping: 16 };
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), spring);
  const sx = useTransform(x, (v) => `${v * 100}%`);
  const sy = useTransform(y, (v) => `${v * 100}%`);
  const shine = useMotionTemplate`radial-gradient(circle at ${sx} ${sy}, rgba(255,255,255,0.28), transparent 55%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <m.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {children}
      <m.div className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay" style={{ background: shine }} aria-hidden="true" />
    </m.div>
  );
};

/** Pulls its child toward the cursor while hovered. */
export const Magnetic = ({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) => {
  const x = useSpring(0, { stiffness: 200, damping: 14 });
  const y = useSpring(0, { stiffness: 200, damping: 14 });
  return (
    <m.div
      className="inline-block"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </m.div>
  );
};

/** Thin gradient bar at the top showing page scroll progress. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <m.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-purple via-pink to-cyan"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

/** Vertical line that fills as its container scrolls through the viewport. */
export const useScrollFill = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  return { ref, scaleY };
};
