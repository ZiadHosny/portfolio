"use client";
import { useId, useState, type ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";
import { getDict, type Locale } from "@/lib/i18n";

type Props = { count: number; children: ReactNode; className?: string; locale?: Locale };

/** Hides `children` behind a "Show all" toggle. Children are server-rendered. */
export const ShowMore = ({ count, children, className, locale = "en" }: Props) => {
  const t = getDict(locale).showMore;
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
        {open ? t.less : t.all(count)}
        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
    </>
  );
};
