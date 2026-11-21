const top = ["Node.js", "NestJS", "PostgreSQL", "React", "Next.js", "TypeScript", "React Native", "Docker"];
const bottom = ["System Design in Arabic", "Databases", "Design Patterns", "Clean APIs", "Scalable Back-ends"];

const Band = ({ words, className, reverse }: { words: string[]; className: string; reverse?: boolean }) => (
  <div className={`marquee absolute inset-x-[-5%] top-1/2 py-3 shadow-[0_10px_40px_-10px_rgb(0_0_0_/_0.6)] sm:py-4 ${reverse ? "marquee-reverse" : ""} ${className}`}>
    <div className="marquee-track [--marquee-speed:30s]">
      {[0, 1].map((k) => (
        <span key={k} className="flex shrink-0 items-center">
          {words.map((w) => (
            <span key={w} className="flex items-center whitespace-nowrap px-5 text-xl font-black uppercase tracking-tight sm:text-3xl">
              {w}
              <span className="ml-10 text-2xl sm:text-4xl">✦</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  </div>
);

/** Two crossing kinetic ribbons used as a section divider. */
export const Ribbons = () => (
  <div className="relative h-40 overflow-hidden sm:h-56" aria-hidden="true">
    <Band words={bottom} className="-translate-y-1/2 rotate-[3deg] bg-pink text-bg" reverse />
    <Band words={top} className="-translate-y-1/2 rotate-[-3deg] bg-purple text-bg" />
  </div>
);
