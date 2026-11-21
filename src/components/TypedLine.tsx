"use client";
import { useEffect, useState } from "react";

type Props = { lines: string[]; className?: string };

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 1800;

/**
 * Types each line, holds, deletes, moves to the next.
 * Server render shows the first line in full (good for SEO / no-JS);
 * the animation starts by deleting it after the hold time.
 */
export const TypedLine = ({ lines, className }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(lines[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const full = lines[index];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === full) delay = HOLD_MS;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % lines.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, lines]);

  return (
    <p className={className}>
      <span className="sr-only">{lines.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret" />
      </span>
    </p>
  );
};
