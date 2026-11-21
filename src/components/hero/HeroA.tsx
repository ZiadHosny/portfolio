"use client";
import Image from "next/image";
import * as m from "motion/react-m";
import { FiArrowDown, FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import { Aurora } from "../fx/Aurora";
import { CountUp } from "../fx/CountUp";
import { TypedLine } from "../TypedLine";
import { container, heroSocials, item, photoAlt, typedLines } from "./shared";
import { site, stats } from "@/lib/site";

const floatingTech = [
  { label: "NestJS", className: "left-[-8%] top-[14%] text-pink", float: "float-slow" },
  { label: "PostgreSQL", className: "right-[-12%] top-[30%] text-cyan", float: "float-slower" },
  { label: "Next.js", className: "left-[-4%] bottom-[12%] text-green", float: "float-slower" },
];

/** Variant A — "Aurora Split": giant gradient name on the left, glowing photo with floating tech on the right. */
export const HeroA = () => (
  <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
    <Aurora />

    <div className="container-page relative grid flex-1 items-center gap-8 pb-10 pt-[calc(var(--nav-h)+1.5rem)] lg:gap-12 lg:pt-[calc(var(--nav-h)+2.5rem)] lg:grid-cols-[1.25fr_1fr]">
      <m.div variants={container} initial="hidden" animate="show" className="order-2 text-center lg:order-1 lg:text-left">
        <m.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
          <FiMapPin className="text-pink" aria-hidden="true" /> Based in {site.country}
        </m.p>

        <m.h1
          variants={item}
          className="mt-5 text-[clamp(3.4rem,11vw,8.25rem)] font-black leading-[0.88] tracking-[-0.04em]"
        >
          <span className="text-gradient-animated block">Ziad</span>
          <span className="text-gradient-animated block [animation-delay:-2s]">Hosny</span>
        </m.h1>

        <m.div variants={item}>
          <TypedLine
            lines={typedLines}
            prefix={<span className="mr-2 text-green">&gt;</span>}
            className="mt-6 min-h-[1.6em] font-mono text-lg text-fg sm:text-2xl"
          />
        </m.div>

        <m.p variants={item} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
          <strong className="text-fg">5+ years</strong> building scalable back-ends with Node.js, NestJS and
          PostgreSQL, and fast web apps with React and Next.js. I also teach System Design in Arabic.
        </m.p>

        <m.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a href={site.resume} target="_blank" rel="noopener" className="btn-pop bg-purple [--pop-shadow:#ff79c6]">
            <FiFileText aria-hidden="true" /> Resume
          </a>
          <a href={`mailto:${site.email}`} className="btn-pop bg-cyan [--pop-shadow:#6272a4]">
            <FiMail aria-hidden="true" /> Email
          </a>
          <div className="flex gap-2">
            {heroSocials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="glass flex h-12 w-12 items-center justify-center !rounded-xl text-fg transition hover:-translate-y-1 hover:border-purple/60 hover:text-purple"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </m.div>
      </m.div>

      {/* Photo */}
      <m.div
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative order-1 mx-auto w-[min(60vw,250px)] sm:w-[min(70vw,340px)] lg:order-2 lg:w-[min(32vw,440px)]"
      >
        {/* v1-style blobs behind the photo */}
        <span className="float-slower absolute -right-6 -top-6 h-2/5 w-2/5 rounded-[40%_60%_55%_45%] bg-pink/70 blur-[2px]" aria-hidden="true" />
        <span className="float-slow absolute -bottom-4 -left-6 h-1/3 w-1/3 rounded-[60%_40%_45%_55%] bg-cyan/60 blur-[2px]" aria-hidden="true" />
        <span className="absolute -inset-10 rounded-full bg-purple/35 blur-3xl" aria-hidden="true" />

        <div className="relative aspect-square">
          <div className="photo-ring absolute inset-0 rounded-full shadow-[0_0_80px_rgb(189_147_249_/_0.55)]" aria-hidden="true" />
          <div className="absolute inset-[6px] overflow-hidden rounded-full bg-bg">
            <Image src={site.photo} alt={photoAlt} fill priority sizes="(min-width: 1024px) 440px, (min-width: 640px) 340px, 250px" className="object-cover" />
          </div>
        </div>

        {floatingTech.map((t) => (
          <span
            key={t.label}
            className={`glass absolute hidden !rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold sm:block ${t.className} ${t.float}`}
            aria-hidden="true"
          >
            {t.label}
          </span>
        ))}
      </m.div>
    </div>

    {/* Counters */}
    <m.ul
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } } }}
      className="container-page relative grid grid-cols-3 gap-3 pb-12 sm:gap-5"
    >
      {stats.map((s, i) => (
        <m.li
          key={s.label}
          variants={{ hidden: { opacity: 0, y: 30, scale: 0.92 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }}
          className="glass p-4 text-center sm:p-6 lg:text-left"
          data-spotlight
        >
          <CountUp
            value={s.value}
            suffix={s.suffix}
            className={`block text-3xl font-black sm:text-5xl ${["text-purple", "text-pink", "text-cyan"][i]}`}
          />
          <span className="mt-1 block text-xs text-muted sm:text-sm">{s.label}</span>
        </m.li>
      ))}
    </m.ul>

    <a href="#experience" className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-muted transition hover:text-purple md:block" aria-label="Scroll to experience">
      <FiArrowDown className="animate-bounce" size={20} aria-hidden="true" />
    </a>
  </section>
);
