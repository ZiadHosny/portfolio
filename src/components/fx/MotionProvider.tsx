"use client";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/** Loads only the DOM animation features (smaller bundle) and honors prefers-reduced-motion. */
export const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  </LazyMotion>
);
