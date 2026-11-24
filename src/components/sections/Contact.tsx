import { FiFileText, FiMail } from "react-icons/fi";
import { Magnetic, Reveal } from "../Motion";
import { site } from "@/lib/site";

/** Big closing call-to-action before the footer. */
export const Contact = () => (
  <section className="relative isolate overflow-hidden py-24 sm:py-32" aria-labelledby="cta-title">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgb(189_147_249_/_0.18),transparent_70%)]" aria-hidden="true" />
    <div className="container-page relative text-center">
      <Reveal>
        <p className="font-mono text-sm text-pink">06 / Contact</p>
      </Reveal>
      <Reveal from="rotate" delay={0.05}>
        <h2 id="cta-title" className="mx-auto mt-4 max-w-4xl text-[clamp(2.3rem,9vw,6.5rem)] font-black leading-[0.95] tracking-[-0.04em]">
          Let&apos;s build something <span className="text-gradient-animated">great.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Back-end systems, full-stack products, or a System Design chat — my inbox is open.
        </p>
      </Reveal>
      <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <Magnetic>
          <a href={`mailto:${site.email}`} className="btn-pop bg-pink px-7 py-4 text-base [--pop-shadow:#bd93f9]">
            <FiMail aria-hidden="true" /> Say hello
          </a>
        </Magnetic>
        <Magnetic>
          <a href={site.resume} target="_blank" rel="noopener" className="btn-pop bg-green px-7 py-4 text-base [--pop-shadow:#6272a4]">
            <FiFileText aria-hidden="true" /> Resume
          </a>
        </Magnetic>
      </Reveal>
    </div>
  </section>
);
