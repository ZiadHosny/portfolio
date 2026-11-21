"use client";
import { useSyncExternalStore } from "react";

/**
 * Shared intro state so the hero waits for the preloader curtain.
 * Whether the intro plays is decided before first paint by the inline <head> script
 * (it adds `intro-skip` to <html> when the intro should not play).
 */
const EVENT = "zh-intro-done";
let finished = false;

export const finishIntro = () => {
  if (finished) return;
  finished = true;
  window.dispatchEvent(new Event(EVENT));
};

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};
const getSnapshot = () =>
  finished ||
  document.documentElement.classList.contains("intro-skip") ||
  !document.querySelector(".preloader"); // no intro on this page → don't wait
const getServerSnapshot = () => false;

/** True once the hero may animate in. */
export const useIntroDone = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
