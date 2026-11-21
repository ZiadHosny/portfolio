"use client";
import Image from "next/image";
import * as m from "motion/react-m";
import { FiFileText, FiMail } from "react-icons/fi";
import {
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { Aurora } from "../fx/Aurora";
import { CountUp } from "../fx/CountUp";
import { TypedLine } from "../TypedLine";
import { container, heroSocials, item, photoAlt, typedLines } from "./shared";
import { site, stats } from "@/lib/site";

const tech = [
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redux", Icon: SiRedux },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Docker", Icon: SiDocker },
];

const letters = (word: string, offset: number) =>
  word.split("").map((ch, i) => (
    <m.span
      key={`${ch}-${i}`}
      className="inline-block"
      initial={{ opacity: 0, y: "0.6em", rotateX: -70 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 + (offset + i) * 0.045 }}
    >
      {ch}
    </m.span>
  ));

/** Variant B — "Center Stage": huge centered name with per-letter reveal, terminal card, inline counters, tech marquee. */
export const HeroB = () => (
  <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden" data-spotlight>
    <Aurora />

    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container-page relative flex flex-1 flex-col items-center justify-center pb-8 pt-[calc(var(--nav-h)+2rem)] text-center"
    >
      {/* Photo orb */}
      <m.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-32 w-32 sm:h-40 sm:w-40"
      >
        <span className="absolute -inset-8 rounded-full bg-purple/40 blur-3xl" aria-hidden="true" />
        <span className="photo-ring absolute inset-0 rounded-full shadow-[0_0_60px_rgb(255_121_198_/_0.45)]" aria-hidden="true" />
        <span className="absolute inset-[4px] overflow-hidden rounded-full bg-bg">
          <Image src={site.photo} alt={photoAlt} fill priority sizes="160px" className="object-cover" />
        </span>
      </m.div>

      <h1
        className="text-gradient-animated mt-6 text-[clamp(3.2rem,13vw,10.5rem)] font-black uppercase leading-[0.85] tracking-[-0.045em] [perspective:800px]"
        aria-label={site.name}
      >
        <span aria-hidden="true">
          {letters("Ziad", 0)}
          <span className="inline-block w-[0.25em]" />
          {letters("Hosny", 4)}
        </span>
      </h1>

      {/* Terminal card */}
      <m.div variants={item} className="glass mt-8 w-full max-w-xl overflow-hidden text-left font-mono text-sm sm:text-base">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5555]" />
          <span className="h-3 w-3 rounded-full bg-yellow" />
          <span className="h-3 w-3 rounded-full bg-green" />
          <span className="ml-3 text-xs text-comment">ziad@egypt: ~</span>
        </div>
        <div className="space-y-1.5 px-4 py-4">
          <p>
            <span className="text-green">➜</span> <span className="text-cyan">~</span> <span className="text-fg">whoami</span>
          </p>
          <TypedLine lines={typedLines} className="min-h-[1.5em] text-purple" />
          <p className="pt-1">
            <span className="text-green">➜</span> <span className="text-cyan">~</span> <span className="text-fg">cat about.txt</span>
          </p>
          <p className="text-muted">
            5+ years shipping back-ends &amp; web apps. Teaching System Design in Arabic. Based in {site.country}.
          </p>
        </div>
      </m.div>

      <m.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a href={site.resume} target="_blank" rel="noopener" className="btn-pop bg-pink [--pop-shadow:#bd93f9]">
          <FiFileText aria-hidden="true" /> Resume
        </a>
        <a href={`mailto:${site.email}`} className="btn-pop bg-green [--pop-shadow:#6272a4]">
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
              className="glass flex h-12 w-12 items-center justify-center !rounded-xl transition hover:-translate-y-1 hover:border-pink/60 hover:text-pink"
            >
              <Icon size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </m.div>

      {/* Inline counters */}
      <m.ul variants={item} className="mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/10">
        {stats.map((s, i) => (
          <li key={s.label} className="px-2">
            <CountUp
              value={s.value}
              suffix={s.suffix}
              className={`block text-4xl font-black sm:text-6xl ${["text-purple", "text-pink", "text-cyan"][i]}`}
            />
            <span className="mt-1 block text-[11px] leading-tight text-muted sm:text-sm sm:uppercase sm:tracking-wider">{s.label}</span>
          </li>
        ))}
      </m.ul>
    </m.div>

    {/* Tech marquee */}
    <div className="marquee relative border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur" aria-hidden="true">
      <div className="marquee-track gap-10 [--marquee-speed:35s]">
        {[...tech, ...tech].map(({ name, Icon }, i) => (
          <span key={i} className="flex items-center gap-2.5 whitespace-nowrap px-2 text-lg font-semibold text-fg/70">
            <Icon className="text-purple" size={22} /> {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);
