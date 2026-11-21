import { ShowMore } from "../ShowMore";
import { skillGroups, type Skill } from "@/lib/data/skills";

const Chip = ({ name, Icon }: Skill) => (
  <li className="chip">
    <Icon aria-hidden="true" className="shrink-0" />
    {name}
  </li>
);

export const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <h2 id="skills-title" className="section-title" data-reveal>
      Skills
    </h2>

    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {skillGroups.map((g, i) => (
        <div
          key={g.title}
          className={`card p-5 sm:p-6 ${i === skillGroups.length - 1 && skillGroups.length % 2 ? "lg:col-span-2" : ""}`}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
        >
          <h3 className="flex items-center gap-2.5 text-lg font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple/15 text-purple" aria-hidden="true">
              {g.icon}
            </span>
            {g.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.top.map((s) => (
              <Chip key={s.name} {...s} />
            ))}
          </ul>
          {g.more.length > 0 && (
            <ShowMore count={g.more.length}>
              <ul className="mt-2 flex flex-wrap gap-2">
                {g.more.map((s) => (
                  <Chip key={s.name} {...s} />
                ))}
              </ul>
            </ShowMore>
          )}
        </div>
      ))}
    </div>
  </section>
);
