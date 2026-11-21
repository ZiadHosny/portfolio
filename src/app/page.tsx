import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ArabicContent } from "@/components/sections/ArabicContent";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
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
      <Hero />
      <Experience />
      <Projects />
      <ArabicContent />
      <Skills />
      <Certifications />
    </>
  );
}
