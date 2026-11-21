"use client";
import Image from "next/image";
import * as m from "motion/react-m";
import { FiArrowDownRight, FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import { Aurora } from "../fx/Aurora";
import { CountUp } from "../fx/CountUp";
import { TypedLine } from "../TypedLine";
import { container, heroSocials, item, photoAlt, typedLines } from "../hero/shared";
import { Magnetic, TiltCard } from "./Motion";
import { ParticleField } from "./ParticleField";
import { ScrambleText } from "./ScrambleText";
import { site, stats, youtube } from "@/lib/site";

const orbit = [
  { label: "NestJS", className: "-left-10 top-[12%] bg-pink", float: "float-slow" },
  { label: "PostgreSQL", className: "-right-12 top-[38%] bg-cyan", float: "float-slower" },
  { label: "Next.js", className: "-left-8 bottom-[16%] bg-green", float: "float-slower" },
];

/** Circular rotating text badge (SVG textPath) linking to the YouTube channel. */
const RotatingBadge = () => (
  <a
    href={youtube.channel}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="System Design in Arabic on YouTube"
    className="group absolute -bottom-10 -right-6 z-10 grid h-28 w-28 place-items-center rounded-full bg-bg-deep/80 backdrop-blur sm:h-32 sm:w-32"
  >
    <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <text className="fill-fg font-mono text-[8.5px] font-bold uppercase">
        <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">System Design in Arabic ✦ YouTube ✦</textPath>
      </text>
    </svg>
    <span className="grid h-11 w-11 place-items-center rounded-full bg-pink text-bg transition group-hover:scale-110 group-hover:bg-purple">
      <FiArrowDownRight size={22} aria-hidden="true" className="-rotate-90" />
    </span>
  </a>
);

/** Variant C — "Creative": particles, decoding name, 3D holo photo card, magnetic buttons, kinetic outline text. */
export const HeroC = () => (
  <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
    <Aurora className="opacity-70" />
    <ParticleField />

    {/* Giant outlined kinetic text in the background */}
    <div className="marquee pointer-events-none absolute inset-x-0 bottom-[14%] -z-0 opacity-60" aria-hidden="true">
      <div className="marquee-track [--marquee-speed:60s]">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="text-outline whitespace-nowrap pr-12 text-[clamp(5rem,16vw,15rem)] font-black uppercase leading-none">
            Full-Stack ✦ System Design ✦ Backend ✦
          </span>
        ))}
      </div>
    </div>

    <div className="container-page relative grid flex-1 items-center gap-14 pb-8 pt-[calc(var(--nav-h)+2rem)] lg:grid-cols-[1.35fr_1fr]">
      <m.div variants={container} initial="hidden" animate="show" className="order-2 text-center lg:order-1 lg:text-left">
        <m.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
          </span>
          <FiMapPin className="text-pink" aria-hidden="true" /> {site.country}
        </m.p>

        <h1 className="mt-5 text-[clamp(3.8rem,12.5vw,9.5rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
          <ScrambleText text="Ziad" className="text-gradient-animated block" delay={150} />
          <ScrambleText text="Hosny" className="text-gradient-animated block [animation-delay:-3s]" delay={350} />
        </h1>

        <m.div variants={item}>
          <TypedLine
            lines={typedLines}
            prefix={<span className="mr-2 text-green">&gt;</span>}
            className="mt-6 min-h-[1.6em] font-mono text-lg text-fg sm:text-2xl"
          />
        </m.div>

        <m.p variants={item} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
          <strong className="text-fg">5+ years</strong> building scalable back-ends with Node.js, NestJS and PostgreSQL, and
          fast web apps with React and Next.js. I also teach{" "}
          <span className="font-semibold text-pink">System Design in Arabic</span>.
        </m.p>

        <m.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Magnetic>
            <a href={site.resume} target="_blank" rel="noopener" className="btn-pop bg-purple [--pop-shadow:#ff79c6]">
              <FiFileText aria-hidden="true" /> Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a href={`mailto:${site.email}`} className="btn-pop bg-cyan [--pop-shadow:#bd93f9]">
              <FiMail aria-hidden="true" /> Email me
            </a>
          </Magnetic>
          <div className="flex gap-2">
            {heroSocials.map(({ label, href, Icon }) => (
              <Magnetic key={label} strength={0.5}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="glass flex h-12 w-12 items-center justify-center !rounded-xl text-fg transition hover:border-pink/60 hover:text-pink"
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              </Magnetic>
            ))}
          </div>
        </m.div>
      </m.div>

      {/* Holographic photo card */}
      <m.div
        initial={{ opacity: 0, y: 60, rotate: 8, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="relative order-1 mx-auto w-[min(64vw,260px)] sm:w-[320px] lg:order-2 lg:w-[min(30vw,400px)]"
      >
        <span className="absolute -inset-12 rounded-full bg-purple/40 blur-3xl" aria-hidden="true" />
        <span className="absolute -inset-4 rounded-[2.5rem] bg-pink/25 blur-2xl" aria-hidden="true" />
        <TiltCard className="holo-border rounded-[2rem] p-[3px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-3px)] bg-bg">
            <Image src={site.photo} alt={photoAlt} fill priority sizes="(min-width: 1024px) 400px, 320px" className="object-cover" />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-bg-deep/60 px-4 py-3 backdrop-blur-md [transform:translateZ(40px)]">
              <p className="text-sm font-bold">{site.name}</p>
              <p className="font-mono text-xs text-cyan">{site.title}</p>
            </div>
          </div>
        </TiltCard>
        {orbit.map((o) => (
          <span
            key={o.label}
            className={`absolute hidden rounded-full px-3.5 py-1.5 font-mono text-xs font-bold text-bg shadow-[4px_4px_0_#282a36] sm:block ${o.className} ${o.float}`}
            aria-hidden="true"
          >
            {o.label}
          </span>
        ))}
        <RotatingBadge />
      </m.div>
    </div>

    {/* Counters */}
    <m.ul
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
      className="container-page relative grid grid-cols-3 gap-3 pb-12 pt-6 sm:gap-5"
    >
      {stats.map((s, i) => (
        <m.li
          key={s.label}
          variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          className="glass group overflow-hidden p-4 sm:p-6"
          data-spotlight
        >
          <CountUp
            value={s.value}
            suffix={s.suffix}
            className={`block text-3xl font-black sm:text-6xl ${["text-purple", "text-pink", "text-cyan"][i]}`}
          />
          <span className="mt-1 block text-[11px] leading-tight text-muted sm:text-sm">{s.label}</span>
          <span
            className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${["bg-purple", "bg-pink", "bg-cyan"][i]}`}
            aria-hidden="true"
          />
        </m.li>
      ))}
    </m.ul>
  </section>
);
