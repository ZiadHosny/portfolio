import { ShowMore } from "../ShowMore";
import { Reveal, SectionHeading } from "../Motion";
import { skillGroups, type Skill } from "@/lib/data/skills";

// v1-style solid chips with an offset shadow, cycling Dracula colors
const POP = ["bg-purple", "bg-pink", "bg-cyan", "bg-green", "bg-orange", "bg-yellow"];

const byTitle = (t: string) => skillGroups.find((g) => g.title === t)!;
const rowA = [...byTitle("Frontend").top, ...byTitle("AI").top];
const rowB = [...byTitle("Backend").top, ...byTitle("Databases").top, ...byTitle("Tools").top.slice(0, 5)];

const MarqueeRow = ({ items, reverse }: { items: Skill[]; reverse?: boolean }) => (
  <div className={`marquee py-2 ${reverse ? "marquee-reverse" : ""}`} aria-hidden="true">
    <div className="marquee-track gap-4 [--marquee-speed:45s]">
      {[...items, ...items].map(({ name, Icon }, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-bg px-4 py-3 text-base font-bold sm:px-5 sm:py-3.5 sm:text-lg">
          <Icon className={["text-purple", "text-pink", "text-cyan", "text-green"][i % 4]} size={26} />
          {name}
        </span>
      ))}
    </div>
  </div>
);

const Chip = ({ name, Icon, i }: Skill & { i: number }) => (
  <li
    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-bold text-bg shadow-[3px_3px_0_#282a36] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#282a36] ${POP[i % POP.length]}`}
  >
    <Icon aria-hidden="true" className="shrink-0" />
    {name}
  </li>
);

export const Skills = () => (
  <section id="skills" className="overflow-hidden py-16 sm:py-24" aria-labelledby="skills-title">
    <div className="container-page">
      <SectionHeading index="04" kicker="Toolbox" title="Skills" id="skills-title" />
    </div>

    <div className="mt-12 -rotate-1 space-y-3">
      <MarqueeRow items={rowA} />
      <MarqueeRow items={rowB} reverse />
    </div>

    <div className="container-page mt-14 grid gap-5 lg:grid-cols-2">
      {skillGroups.map((g, gi) => (
        <Reveal
          key={g.title}
          from={gi % 2 ? "right" : "left"}
          delay={(gi % 2) * 0.08}
          className={gi === skillGroups.length - 1 && skillGroups.length % 2 ? "lg:col-span-2" : ""}
        >
          <div className="glass h-full !bg-bg/80 !backdrop-blur-none p-6 sm:p-7" data-spotlight>
            <h3 className="flex items-center gap-3 text-xl font-bold">
              <span className={`grid h-10 w-10 place-items-center rounded-xl text-bg ${POP[gi % POP.length]}`} aria-hidden="true">
                {g.icon}
              </span>
              {g.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {g.top.map((s, i) => (
                <Chip key={s.name} {...s} i={i + gi} />
              ))}
            </ul>
            {g.more.length > 0 && (
              <ShowMore count={g.more.length}>
                <ul className="mt-2.5 flex flex-wrap gap-2.5">
                  {g.more.map((s, i) => (
                    <Chip key={s.name} {...s} i={i + gi + 3} />
                  ))}
                </ul>
              </ShowMore>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
