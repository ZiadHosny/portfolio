"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "./Logo";
import { navLinks, site } from "@/lib/site";

/** Floating "island" navbar: glass pills, active-section indicator that slides between links. */
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the section currently in view; clear it when back at the top
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
    const top = document.getElementById("top");
    const ioTop = new IntersectionObserver(([e]) => e.isIntersecting && setActive(""), { rootMargin: "-45% 0px -50% 0px" });
    if (top) ioTop.observe(top);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      ioTop.disconnect();
    };
  }, []);

  // Move the sliding indicator under the active link
  useLayoutEffect(() => {
    const el = listRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const island = `border border-white/10 backdrop-blur-xl transition duration-300 ${
    scrolled || open ? "bg-bg-deep/75 shadow-[0_8px_30px_-10px_rgb(0_0_0_/_0.6)]" : "bg-white/[0.03]"
  }`;

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <nav className="container-page flex h-[calc(var(--nav-h)-12px)] items-center justify-between gap-3" aria-label="Main">
        <a
          href="#top"
          className={`flex h-full items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 font-semibold hover:border-purple/50 ${island}`}
          onClick={() => setOpen(false)}
        >
          <Logo size={34} title="" />
          <span>{site.name}</span>
        </a>

        <ul ref={listRef} className={`relative hidden h-full items-center rounded-full p-1.5 md:flex ${island}`}>
          <span
            className="absolute bottom-1.5 top-1.5 rounded-full bg-purple transition-all duration-300 ease-out"
            style={{ left: pill?.left ?? 0, width: pill?.width ?? 0, opacity: pill ? 1 : 0 }}
            aria-hidden="true"
          />
          {navLinks.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  active === l.id ? "text-bg" : "text-fg/80 hover:text-purple"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`grid h-full aspect-square place-items-center rounded-full text-fg md:hidden ${island}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <div className="container-page md:hidden">
        <ul
          id="mobile-menu"
          className={`mt-2 ${open ? "flex" : "hidden"} flex-col gap-1 rounded-3xl border border-white/10 bg-bg-deep/90 p-2 backdrop-blur-xl`}
        >
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                  active === l.id ? "bg-purple text-bg" : "text-fg/85 hover:bg-white/5"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
