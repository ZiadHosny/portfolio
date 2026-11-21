import { FiArrowUpRight, FiList } from "react-icons/fi";
import { SiYoutube } from "react-icons/si";
import { LiteYouTube } from "../LiteYouTube";
import { youtube } from "@/lib/site";

const cards = [
  {
    title: "YouTube Channel",
    handle: "@ziadhosnydev",
    text: "Software engineering explained in Arabic: System Design, Databases and Design Patterns.",
    href: youtube.channel,
    cta: "Visit channel",
    Icon: SiYoutube,
  },
  {
    title: "System Design in Arabic",
    handle: "Playlist",
    text: "A step-by-step series on designing scalable systems: scalability, availability, performance and more.",
    href: youtube.systemDesignPlaylist,
    cta: "Watch playlist",
    Icon: FiList,
  },
];

export const ArabicContent = () => (
  <section id="content" className="section" aria-labelledby="content-title">
    <h2 id="content-title" className="section-title" data-reveal>
      Arabic Content
    </h2>
    <p className="mt-3 max-w-2xl text-muted" data-reveal>
      I make Arabic content about System Design, Databases, and Design Patterns.
    </p>

    <div className="mt-10 grid items-start gap-6 md:grid-cols-[1fr_300px]">
      <div className="grid gap-6">
        {cards.map(({ title, handle, text, href, cta, Icon }, i) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group flex gap-4 p-5 sm:p-6"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-purple">
              <Icon size={24} aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block text-xs font-medium uppercase tracking-wider text-comment">{handle}</span>
              <span className="mt-0.5 block text-lg font-semibold">{title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-muted">{text}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-purple">
                {cta}
                <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mx-auto w-full max-w-[300px]" data-reveal>
        <LiteYouTube
          id="CImjxn9SFKg"
          variant="short"
          title="01 · Scalability, Availability & Performance | System Design"
          poster="/images/short-system-design-01.jpg"
        />
        <p className="mt-3 text-center text-sm text-muted">
          01 · Scalability, Availability &amp; Performance
        </p>
      </div>
    </div>
  </section>
);
