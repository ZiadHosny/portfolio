"use client";
import Image from "next/image";
import * as m from "motion/react-m";
import { FiArrowDown, FiFileText, FiMail } from "react-icons/fi";
import { CountUp } from "../fx/CountUp";
import { TypedLine } from "../TypedLine";
import { Magnetic } from "../Motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiYoutube } from "react-icons/si";
import { site, socialHref, stats } from "@/lib/site";
import { useIntroDone } from "../intro";

const typedLines = [
  "Full-Stack Software Engineer",
  "Node.js · NestJS · PostgreSQL",
  "React · Next.js · TypeScript",
  "System Design in Arabic",
];

const heroSocials = [
  { label: "YouTube", href: socialHref("youtube"), Icon: SiYoutube },
  { label: "LinkedIn", href: socialHref("linkedin"), Icon: FaLinkedinIn },
  { label: "GitHub", href: socialHref("github"), Icon: SiGithub },
];

const photoAlt = "Ziad Hosny smiling, wearing a black blazer and white shirt";

const EASE = [0.16, 1, 0.3, 1] as const;
const BASE = 0.05;

/** A line of text that slides up from behind a mask. */
const MaskLine = ({ children, delay, go, className = "" }: { children: React.ReactNode; delay: number; go: boolean; className?: string }) => (
  <span className="block overflow-hidden pb-[0.06em]">
    <m.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={go ? { y: 0 } : undefined}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </m.span>
  </span>
);

const fadeUp = (delay: number, go: boolean) => ({
  initial: { opacity: 0, y: 24 },
  animate: go ? { opacity: 1, y: 0 } : undefined,
  transition: { duration: 0.8, ease: EASE, delay },
});

/** Hero: clean big type, masked reveals, photo with soft glow. Light on the GPU. */
export const Hero = () => {
  // Animations start when the intro curtain lifts (immediately if there is no intro).
  const go = useIntroDone();
  return (
  <section id="top" className="relative isolate overflow-hidden">
    {/* one soft gradient + faint dot grid, no heavy effects */}
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="float-slower absolute -right-40 -top-40 h-[24rem] w-[24rem] sm:h-[36rem] sm:w-[36rem] rounded-full bg-[radial-gradient(circle,rgb(189_147_249_/_0.28),transparent_65%)]" />
      <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(255_121_198_/_0.14),transparent_65%)]" />
      <div className="dot-grid absolute inset-0" />
    </div>

    <div className="container-page flex min-h-[100svh] flex-col justify-center pb-12 pt-[calc(var(--nav-h)+2rem)] sm:pt-[calc(var(--nav-h)+3rem)]">
      <div className="flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full">
          <m.p {...fadeUp(BASE, go)} className="font-mono text-sm text-muted">
            <span className="text-green">●</span> Software engineer based in {site.country}
          </m.p>

          <h1 className="mt-4 text-[clamp(3.2rem,14vw,8.5rem)] font-black leading-[0.9] tracking-[-0.045em]">
            <MaskLine go={go} delay={BASE + 0.1}>Ziad</MaskLine>{" "}
            <MaskLine go={go} delay={BASE + 0.2} className="text-gradient-animated">
              Hosny.
            </MaskLine>
            <span className="sr-only"> - {site.title}</span>
          </h1>

          <m.div {...fadeUp(BASE + 0.45, go)}>
            <TypedLine
              lines={typedLines}
              prefix={<span className="mr-2 text-pink">/</span>}
              className="mt-6 min-h-[1.6em] font-mono text-base text-fg min-[400px]:text-lg sm:text-2xl"
            />
          </m.div>

          <m.p {...fadeUp(BASE + 0.55, go)} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-fg">5+ years</strong> building scalable back-ends with Node.js, NestJS and PostgreSQL,
            and fast web apps with React and Next.js. I also teach System Design in Arabic.
          </m.p>

          <m.div {...fadeUp(BASE + 0.65, go)} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href={site.resume} target="_blank" rel="noopener" className="btn-pop bg-purple [--pop-shadow:#ff79c6]">
                <FiFileText aria-hidden="true" /> Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${site.email}`} className="btn-pop bg-fg [--pop-shadow:#6272a4]">
                <FiMail aria-hidden="true" /> Email
              </a>
            </Magnetic>
            <div className="flex gap-1">
              {heroSocials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-12 w-12 place-items-center rounded-xl text-muted transition hover:-translate-y-1 hover:bg-white/5 hover:text-purple"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </m.div>
        </div>

        {/* Photo: circle + slow gradient ring + soft glow */}
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={go ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 1.1, ease: EASE, delay: BASE + 0.15 }}
          className="relative shrink-0"
        >
          <span className="absolute -inset-8 rounded-full bg-purple/30 blur-3xl" aria-hidden="true" />
          <div className="relative h-36 w-36 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
            <span className="photo-ring absolute inset-0 rounded-full" aria-hidden="true" />
            <span className="absolute inset-[5px] overflow-hidden rounded-full bg-bg">
              <Image src={site.photo} alt={photoAlt} fill priority sizes="(min-width: 1024px) 288px, (min-width: 640px) 224px, 144px" className="object-cover" />
            </span>
          </div>
        </m.div>
      </div>

      {/* Counters */}
      <m.ul {...fadeUp(BASE + 0.8, go)} className="mt-14 grid grid-cols-3 border-t border-white/10 pt-8 sm:mt-20">
        {stats.map((s, i) => (
          <li key={s.label} className={i ? "border-l border-white/10 pl-4 sm:pl-8" : ""}>
            <CountUp
              value={s.value}
              suffix={s.suffix}
              className={`block text-3xl font-black sm:text-5xl ${["text-purple", "text-pink", "text-cyan"][i]}`}
            />
            <span className="mt-1 block text-[11px] leading-tight text-muted sm:text-sm">{s.label}</span>
          </li>
        ))}
      </m.ul>

      <a href="#experience" className="mt-10 hidden items-center gap-2 self-start font-mono text-xs text-muted transition hover:text-purple sm:inline-flex">
        <FiArrowDown className="animate-bounce" aria-hidden="true" /> Scroll
      </a>
    </div>
  </section>
  );
};
