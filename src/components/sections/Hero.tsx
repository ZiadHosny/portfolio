import Image from "next/image";
import { FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiYoutube } from "react-icons/si";
import { TypedLine } from "../TypedLine";
import { site, socialHref } from "@/lib/site";

const typedLines = [
  "Full-Stack Software Engineer",
  "Node.js · NestJS · PostgreSQL",
  "React · Next.js · TypeScript",
  "System Design in Arabic",
];

const heroLinks = [
  { label: "YouTube", href: socialHref("youtube"), Icon: SiYoutube },
  { label: "LinkedIn", href: socialHref("linkedin"), Icon: FaLinkedinIn },
  { label: "GitHub", href: socialHref("github"), Icon: SiGithub },
];

export const Hero = () => (
  <section
    id="top"
    className="container-page flex min-h-[100svh] flex-col-reverse items-center justify-center gap-10 pb-16 pt-[calc(var(--nav-h)+2rem)] md:flex-row md:justify-between md:gap-12"
  >
    <div className="animate-[fadeUp_0.7s_ease-out_both] text-center md:text-left">
      <p className="mb-3 font-mono text-sm text-purple">Hi, I&apos;m</p>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">{site.name}</h1>

      <TypedLine
        lines={typedLines}
        className="mt-4 min-h-[2em] font-mono text-lg text-cyan sm:text-2xl"
      />

      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted md:mx-0">
        {site.title} with <strong className="text-fg">5+ years of experience</strong> building
        scalable back-end systems and modern web apps. I work mostly with Node.js, NestJS and
        PostgreSQL on the server, and React, Next.js and TypeScript on the client. I also make
        Arabic content about System Design, Databases and Design Patterns.
      </p>

      <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
        <FiMapPin className="text-purple" aria-hidden="true" /> {site.country}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
        <a href={site.resume} target="_blank" rel="noopener" className="btn-primary">
          <FiFileText aria-hidden="true" /> Resume
        </a>
        <a href={`mailto:${site.email}`} className="btn-ghost">
          <FiMail aria-hidden="true" /> Email
        </a>
        <div className="flex items-center gap-2">
          {heroLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="btn-ghost h-11 w-11 !p-0"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Option A: circular crop with a purple gradient ring + soft glow */}
    <div className="relative shrink-0 animate-[fadeIn_0.9s_ease-out_both]">
      <div className="absolute -inset-6 rounded-full bg-purple/20 blur-3xl" aria-hidden="true" />
      <div className="relative h-56 w-56 sm:h-72 sm:w-72">
        <div className="photo-ring absolute inset-0 rounded-full" aria-hidden="true" />
        <div className="absolute inset-[5px] overflow-hidden rounded-full bg-bg">
          <Image
            src={site.photo}
            alt="Ziad Hosny smiling, wearing a black blazer and white shirt"
            fill
            priority
            sizes="(min-width: 640px) 288px, 224px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
