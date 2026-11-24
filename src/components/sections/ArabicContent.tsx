import { FiArrowUpRight, FiDatabase, FiLayers, FiList, FiPlay } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import { LiteYouTube } from "../LiteYouTube";
import { CountUp } from "../fx/CountUp";
import { Reveal, SectionHeading } from "../Motion";
import { stats, youtube } from "@/lib/site";
import { getDict, type Locale } from "@/lib/i18n";

const videos = stats.find((s) => s.label.includes("Videos"));

const playlists = [
  {
    href: youtube.systemDesignPlaylist,
    Icon: FiList,
    icon: "bg-cyan",
    text: "text-cyan",
    hover: "hover:border-cyan/60",
  },
  {
    href: youtube.advancedDatabasePlaylist,
    Icon: FiDatabase,
    icon: "bg-purple",
    text: "text-purple",
    hover: "hover:border-purple/60",
  },
  {
    href: youtube.designPatternsPlaylist,
    Icon: FiLayers,
    icon: "bg-green",
    text: "text-green",
    hover: "hover:border-green/60",
  },
];

/** Arabic Content as a bento grid: big Short + channel + playlists. */
export const ArabicContent = ({ locale }: { locale: Locale }) => {
  const t = getDict(locale);
  const c = t.content;
  return (
  <section id="content" className="section" aria-labelledby="content-title">
    <SectionHeading index="03" kicker={t.sections.content.kicker} title={t.sections.content.title} id="content-title" />
    <Reveal>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        {c.intro}
      </p>
    </Reveal>

    <div className="mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-[auto_auto]">
      {/* Big Short */}
      <Reveal from="scale" className="md:col-span-2 md:row-span-2">
        <div className="glass relative flex h-full flex-col gap-6 overflow-hidden p-5 sm:flex-row sm:items-center sm:p-7" data-spotlight>
          <span className="absolute -start-20 -top-20 h-72 w-72 rounded-full bg-pink/25 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:w-[48%]">
            <LiteYouTube
              id="CImjxn9SFKg"
              variant="short"
              title={c.shortVideoTitle}
              poster="/images/short-system-design-01.jpg"
            />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink px-3 py-1 text-xs font-bold uppercase text-bg">
              <FiPlay aria-hidden="true" /> {c.latest}
            </span>
            <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
              {c.shortTitle}
            </h3>
            <p className="mt-3 text-muted">
              {c.shortBody}
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
          <SiYoutube className="absolute -end-6 -top-6 h-40 w-40 opacity-15 transition duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-sm font-bold">@ziadhosnydev</p>
            <h3 className="mt-1 text-3xl font-black">{c.channel}</h3>
          </div>
          <div className="relative flex items-end justify-between gap-4">
            {videos && (
              <p>
                <CountUp value={videos.value} suffix={videos.suffix} className="block text-5xl font-black leading-none" />
                <span className="text-sm font-semibold">{c.videos}</span>
              </p>
            )}
            <span className="inline-flex items-center gap-1 rounded-full bg-bg px-4 py-2 text-sm font-bold text-fg transition group-hover:bg-bg-deep">
              {c.subscribe} <FiArrowUpRight aria-hidden="true" className="rtl:-scale-x-100" />
            </span>
          </div>
        </a>
      </Reveal>

      {/* Playlists */}
      <div className="grid gap-5 sm:grid-cols-2 md:col-span-2">
        {playlists.map(({ href, Icon, icon, text, hover }, i) => {
          const title = c.playlists[i];
          return (
          <Reveal
            key={title}
            from="up"
            delay={0.15 + i * 0.07}
            className={playlists.length % 2 && i === playlists.length - 1 ? "sm:col-span-2" : ""}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass group flex h-full flex-col justify-between gap-6 p-6 transition hover:-translate-y-1 ${hover}`}
              data-spotlight
            >
              <span className={`grid h-12 w-12 place-items-center rounded-xl text-bg ${icon}`}>
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <p className={`font-mono text-xs uppercase tracking-wider ${text}`}>{c.playlist}</p>
                <h3 className="mt-1 text-xl font-bold leading-tight">{title}</h3>
                <span className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${text}`}>
                  {c.watch} <FiArrowUpRight className="rtl:-scale-x-100 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>
          );
        })}
      </div>
    </div>
  </section>
  );
};
