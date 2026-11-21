import { FiArrowUpRight, FiDatabase, FiLayers, FiList, FiPlay } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";
import { LiteYouTube } from "../LiteYouTube";
import { CountUp } from "../fx/CountUp";
import { Reveal, SectionHeading } from "./Motion";
import { stats, youtube } from "@/lib/site";

const videos = stats.find((s) => s.label.includes("Videos"));

const topics = [
  { name: "System Design", Icon: TbTopologyStar3, className: "bg-purple" },
  { name: "Databases", Icon: FiDatabase, className: "bg-cyan" },
  { name: "Design Patterns", Icon: FiLayers, className: "bg-green" },
];

/** Arabic Content as a bento grid: big Short + channel + playlist + topics. */
export const ContentBento = () => (
  <section id="content" className="section" aria-labelledby="content-title">
    <SectionHeading index="03" kicker="YouTube" title="Arabic Content" id="content-title" />
    <Reveal>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        I make Arabic content about System Design, Databases, and Design Patterns.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-[auto_auto]">
      {/* Big Short */}
      <Reveal from="scale" className="md:col-span-2 md:row-span-2">
        <div className="glass relative flex h-full flex-col gap-6 overflow-hidden p-5 sm:flex-row sm:items-center sm:p-7" data-spotlight>
          <span className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-pink/25 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:w-[48%]">
            <LiteYouTube
              id="CImjxn9SFKg"
              variant="short"
              title="01 · Scalability, Availability & Performance | System Design"
              poster="/images/short-system-design-01.jpg"
            />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink px-3 py-1 text-xs font-bold uppercase text-bg">
              <FiPlay aria-hidden="true" /> Latest short
            </span>
            <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
              Scalability, Availability &amp; Performance
            </h3>
            <p className="mt-3 text-muted">
              Episode 01 of <span className="font-semibold text-fg">System Design in Arabic</span>: what happens when your
              app goes from 10 users to 1M.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Channel */}
      <Reveal from="right" delay={0.1} className="md:col-span-2">
        <a
          href={youtube.channel}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff5555] via-pink to-purple p-6 text-bg shadow-[6px_6px_0_#6272a4] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#6272a4] sm:p-7"
        >
          <SiYoutube className="absolute -right-6 -top-6 h-40 w-40 opacity-15 transition duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-sm font-bold">@ziadhosnydev</p>
            <h3 className="mt-1 text-3xl font-black">YouTube Channel</h3>
          </div>
          <div className="relative flex items-end justify-between gap-4">
            {videos && (
              <p>
                <CountUp value={videos.value} suffix={videos.suffix} className="block text-5xl font-black leading-none" />
                <span className="text-sm font-semibold">videos and counting</span>
              </p>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-bg px-4 py-2 text-sm font-bold text-fg transition group-hover:bg-bg-deep">
              Subscribe <FiArrowUpRight aria-hidden="true" />
            </span>
          </div>
        </a>
      </Reveal>

      {/* Playlist */}
      <Reveal from="up" delay={0.15}>
        <a
          href={youtube.systemDesignPlaylist}
          target="_blank"
          rel="noopener noreferrer"
          className="glass group flex h-full flex-col justify-between gap-6 p-6 transition hover:-translate-y-1 hover:border-cyan/60"
          data-spotlight
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan text-bg">
            <FiList size={22} aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-cyan">Playlist</p>
            <h3 className="mt-1 text-xl font-bold leading-tight">System Design in Arabic</h3>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
              Watch <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </a>
      </Reveal>

      {/* Topics */}
      <Reveal from="up" delay={0.2}>
        <div className="glass flex h-full flex-col justify-between gap-5 p-6" data-spotlight>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">Topics</p>
          <ul className="flex flex-col gap-2.5">
            {topics.map(({ name, Icon, className }) => (
              <li key={name} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-bg ${className}`}>
                <Icon aria-hidden="true" /> {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
