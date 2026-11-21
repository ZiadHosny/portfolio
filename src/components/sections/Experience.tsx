"use client";
import * as m from "motion/react-m";
import { FiBookOpen } from "react-icons/fi";
import { education, jobs, type Job } from "@/lib/data/experience";
import { Reveal, SectionHeading, useScrollFill } from "../Motion";

const accents = ["text-purple", "text-pink", "text-cyan", "text-green", "text-orange"];

const JobCard = ({ job, i }: { job: Job; i: number }) => (
  <article className="glass p-5 transition duration-300 hover:border-purple/50 hover:shadow-[0_0_50px_-12px_rgb(189_147_249_/_0.55)] sm:p-7" data-spotlight>
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-muted">
        {job.start} – {job.end}
      </span>
      <span className="rounded-md bg-cyan/15 px-2 py-0.5 font-mono text-xs font-semibold text-cyan">{job.employment}</span>
      <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-muted">{job.workplace}</span>
    </div>
    <h3 className="mt-3 text-xl font-bold sm:text-2xl">{job.role}</h3>
    <p className={`font-semibold ${accents[i % accents.length]}`}>
      {job.company}
      {job.via && <span className="font-normal text-muted"> (via {job.via})</span>}
    </p>
    <ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-fg/85">
      {job.points.map((p) => (
        <li key={p} className="flex gap-2.5">
          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-pink" aria-hidden="true" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </article>
);

/** Dot that lights up while its entry is in the middle of the viewport. */
const Dot = ({ current }: { current: boolean }) => (
  <m.span
    className="relative z-10 block h-5 w-5 rounded-full border-4 border-bg-deep bg-surface"
    initial={false}
    whileInView={{ scale: 1.35, backgroundColor: current ? "#50fa7b" : "#ff79c6", boxShadow: "0 0 0 6px rgba(255,121,198,0.15), 0 0 24px rgba(255,121,198,0.9)" }}
    viewport={{ margin: "-45% 0px -45% 0px" }}
    transition={{ duration: 0.35 }}
    aria-hidden="true"
  />
);

export const Experience = () => {
  const { ref, scaleY } = useScrollFill();

  return (
    <section id="experience" className="section relative" aria-labelledby="experience-title">
      <SectionHeading index="01" kicker="Career" title="Experience" id="experience-title" />

      <div ref={ref} className="relative mt-16">
        {/* track + scroll-filled line */}
        <div className="absolute bottom-0 left-[9px] top-0 w-[3px] rounded-full bg-white/10 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true">
          <m.div className="h-full w-full origin-top rounded-full bg-gradient-to-b from-purple via-pink to-cyan shadow-[0_0_18px_rgb(255_121_198_/_0.7)]" style={{ scaleY }} />
        </div>

        <ol className="space-y-10 lg:space-y-16">
          {jobs.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <li key={`${job.company}-${job.start}`} className="relative grid grid-cols-[20px_1fr] gap-5 lg:grid-cols-[1fr_20px_1fr] lg:gap-10">
                <div className={`hidden lg:block ${left ? "" : "lg:col-start-1"}`}>
                  {left ? (
                    <Reveal from="left">
                      <JobCard job={job} i={i} />
                    </Reveal>
                  ) : (
                    <Reveal from="right" className="flex h-full items-start justify-end pt-6">
                      <span className="text-outline text-6xl font-black">{job.start.slice(3)}</span>
                    </Reveal>
                  )}
                </div>
                <div className="flex justify-center pt-7 lg:col-start-2 lg:row-start-1">
                  <Dot current={job.end === "Present"} />
                </div>
                <div className="lg:col-start-3 lg:row-start-1">
                  <div className="lg:hidden">
                    <Reveal from="right">
                      <JobCard job={job} i={i} />
                    </Reveal>
                  </div>
                  <div className="hidden lg:block">
                    {left ? (
                      <Reveal from="left" className="pt-6">
                        <span className="text-outline text-6xl font-black">{job.start.slice(3)}</span>
                      </Reveal>
                    ) : (
                      <Reveal from="right">
                        <JobCard job={job} i={i} />
                      </Reveal>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <Reveal className="mt-20">
        <h3 className="flex items-center gap-2 text-2xl font-bold">
          <FiBookOpen className="text-pink" aria-hidden="true" /> Education
        </h3>
      </Reveal>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <li key={e.title}>
            <Reveal from="scale" delay={i * 0.1} className="h-full">
              <div className="glass h-full p-6 transition hover:border-pink/50" data-spotlight>
                <p className="text-lg font-bold">{e.title}</p>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
                <p className="mt-3 font-mono text-xs text-cyan">{e.date}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
