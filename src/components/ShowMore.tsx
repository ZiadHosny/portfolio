"use client";
import { useId, useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

type Props = { count: number; children: ReactNode; className?: string };

/** Hides `children` behind a "Show all" toggle. Children are server-rendered. */
export const ShowMore = ({ count, children, className }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <div id={id} hidden={!open} className={className}>
        {children}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple transition hover:text-fg"
      >
        {open ? "Show less" : `Show all (+${count})`}
        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );
};
