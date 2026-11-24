import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { ShowMore } from "../ShowMore";
import { Reveal, SectionHeading } from "../Motion";
import { certifications, type Certification } from "@/lib/data/certifications";
import { getDict, type Locale } from "@/lib/i18n";

const VISIBLE = 6;
const ISSUER_COLOR: Record<string, string> = {
  HackerRank: "text-green",
  freeCodeCamp: "text-cyan",
  ITI: "text-pink",
  "Mahara-Tech (ITI)": "text-purple",
};

const Card = ({ c, i, locale }: { c: Certification; i: number; locale: Locale }) => (

  <li>
    <Reveal from="scale" delay={(i % 3) * 0.08} className="h-full">
      <a
        href={c.href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass group flex h-full items-start gap-4 p-5 transition hover:-translate-y-1 hover:border-purple/50"
        data-spotlight
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-yellow transition group-hover:rotate-12 group-hover:bg-yellow group-hover:text-bg">
          <FiAward size={20} aria-hidden="true" />
        </span>
        <span className="flex-1">
          <span className="block font-bold leading-snug">{c.title}</span>
          <span className={`mt-1 block text-sm font-semibold ${ISSUER_COLOR[c.issuer] ?? "text-orange"}`}>{c.issuer}</span>
          <span className="mt-1 block font-mono text-xs text-muted">{c.date}</span>
        </span>
        <FiArrowUpRight className="shrink-0 text-comment rtl:-scale-x-100 transition group-hover:text-purple" aria-label={getDict(locale).certifications.open} />
      </a>
    </Reveal>
  </li>
);

export const Certifications = ({ locale }: { locale: Locale }) => {
  const t = getDict(locale);
  return (
  <section id="certifications" className="section" aria-labelledby="certifications-title">
    <SectionHeading index="05" kicker={t.sections.certifications.kicker} title={t.sections.certifications.title} id="certifications-title" />
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.slice(0, VISIBLE).map((c, i) => (
        <Card key={c.title + c.issuer} c={c} i={i} locale={locale} />
      ))}
    </ul>
    <ShowMore count={certifications.length - VISIBLE} locale={locale}>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.slice(VISIBLE).map((c, i) => (
          <Card key={c.title + c.issuer} c={c} i={i} locale={locale} />
        ))}
      </ul>
    </ShowMore>
  </section>
  );
};
