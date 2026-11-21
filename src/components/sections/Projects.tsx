import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiGoogleplay } from "react-icons/si";
import { projects } from "@/lib/data/projects";

export const Projects = () => (
  <section id="projects" className="section" aria-labelledby="projects-title">
    <h2 id="projects-title" className="section-title" data-reveal>
      Projects
    </h2>

    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {projects.map((p, i) => (
        <article
          key={p.title}
          className="card card-hover group flex flex-col overflow-hidden"
          data-reveal
          style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-surface/70 bg-bg-deep">
            <Image
              src={p.image}
              alt={p.imageAlt}
              fill
              sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
              className={`transition duration-500 group-hover:scale-[1.04] ${
                p.fit === "contain" ? "object-contain p-3" : "object-cover object-top"
              }`}
            />
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
                  <FiExternalLink aria-hidden="true" /> Live
                </a>
              )}
              {p.code && (
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
                  <FiGithub aria-hidden="true" /> Code
                </a>
              )}
              {p.googlePlay && (
                <a href={p.googlePlay} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2">
                  <SiGoogleplay aria-hidden="true" /> Google Play
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
