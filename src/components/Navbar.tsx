"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section currently in view
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition hover:text-purple ${
      active === id ? "text-purple" : "text-fg/80"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] transition duration-300 ${
        scrolled || open
          ? "border-b border-surface/60 bg-bg-deep/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-full items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-semibold" onClick={() => setOpen(false)}>
          <Logo size={32} title="" />
          <span>{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <ul
        id="mobile-menu"
        className={`container-page ${open ? "flex" : "hidden"} flex-col gap-1 border-b border-surface/60 bg-bg-deep/95 pb-4 backdrop-blur-md md:hidden`}
      >
        {navLinks.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className={`block ${linkClass(l.id)}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
