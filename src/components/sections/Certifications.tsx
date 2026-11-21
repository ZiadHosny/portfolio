import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { ShowMore } from "../ShowMore";
import { certifications, type Certification } from "@/lib/data/certifications";

const VISIBLE = 6;

const CertCard = ({ title, issuer, date, href }: Certification) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex h-full items-start gap-3 p-4"
    >
      <FiAward className="mt-0.5 shrink-0 text-purple" size={20} aria-hidden="true" />
      <span className="flex-1">
        <span className="block font-medium leading-snug">{title}</span>
        <span className="mt-1 block text-sm text-muted">{issuer}</span>
        <span className="mt-1 block font-mono text-xs text-comment">{date}</span>
      </span>
      <FiArrowUpRight
        className="shrink-0 text-comment transition group-hover:text-purple"
        aria-label="Open certificate"
      />
    </a>
  </li>
);

export const Certifications = () => (
  <section id="certifications" className="section" aria-labelledby="certifications-title">
    <h2 id="certifications-title" className="section-title" data-reveal>
      Certifications
    </h2>

    <div data-reveal>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.slice(0, VISIBLE).map((c) => (
          <CertCard key={c.title + c.issuer} {...c} />
        ))}
      </ul>
      <ShowMore count={certifications.length - VISIBLE}>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.slice(VISIBLE).map((c) => (
            <CertCard key={c.title + c.issuer} {...c} />
          ))}
        </ul>
      </ShowMore>
    </div>
  </section>
);
