import { FiBookOpen } from "react-icons/fi";
import { education, jobs } from "@/lib/data/experience";

export const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <h2 id="experience-title" className="section-title" data-reveal>
      Experience
    </h2>

    <ol className="relative mt-10 border-l border-surface pl-6 sm:pl-8">
      {jobs.map((job, i) => (
        <li
          key={`${job.company}-${job.start}`}
          className="relative mb-8 last:mb-0"
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 3) * 60}ms` }}
        >
          <span
            className={`absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg-deep sm:-left-[39px] ${
              job.end === "Present" ? "bg-green shadow-[0_0_12px_#50fa7b]" : "bg-purple"
            }`}
            aria-hidden="true"
          />
          <article className="card card-hover p-5 sm:p-6">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                <p className="text-purple">
                  {job.company}
                  {job.via && <span className="text-muted"> (via {job.via})</span>}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <span className="font-mono text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>
            </header>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="tag !text-cyan">{job.employment}</span>
              <span className="tag">{job.workplace}</span>
            </div>
            <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-fg/85">
              {job.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-comment" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>

    <div className="mt-14" data-reveal>
      <h3 className="flex items-center gap-2 text-xl font-semibold">
        <FiBookOpen className="text-purple" aria-hidden="true" /> Education
      </h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <li key={e.title} className="card card-hover p-5">
            <p className="font-semibold">{e.title}</p>
            <p className="mt-1 text-sm text-muted">{e.place}</p>
            <p className="mt-2 font-mono text-xs text-comment">{e.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
