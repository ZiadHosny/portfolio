import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ArabicContent } from "@/components/sections/ArabicContent";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress, SectionHeading } from "@/components/Motion";
import { site, socials } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  image: `${site.url}${site.photoSquare}`,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: site.countryCode,
  },
  homeLocation: { "@type": "Country", name: site.country },
  knowsAbout: ["Node.js", "NestJS", "PostgreSQL", "React", "Next.js", "TypeScript", "System Design"],
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Must render before the hero: the hero waits for the intro curtain */}
      <Preloader />
      <ScrollProgress />
      <Hero />
      <Experience />
      <Projects heading={<SectionHeading index="02" kicker="Work" title="Projects" id="projects-title" />} />
      <ArabicContent />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
