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

const personId = `${site.url}/#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      alternateName: ["زياد حسني", "Ziad Hosny Dev", "ziadhosnydev"],
      jobTitle: site.title,
      description: site.description,
      url: site.url,
      image: `${site.url}${site.photoSquare}`,
      email: `mailto:${site.email}`,
      nationality: { "@type": "Country", name: site.country },
      address: { "@type": "PostalAddress", addressCountry: site.countryCode },
      homeLocation: { "@type": "Country", name: site.country },
      worksFor: { "@type": "Organization", name: "AZM Squad" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Mansoura University" },
        { "@type": "EducationalOrganization", name: "Information Technology Institute (ITI)" },
      ],
      knowsLanguage: ["en", "ar"],
      knowsAbout: ["Node.js", "NestJS", "PostgreSQL", "React", "Next.js", "TypeScript", "System Design", "Software Architecture"],
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: `${site.name} Portfolio`,
      description: site.shortDescription,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: `${site.name} | ${site.title}`,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": personId },
      about: { "@id": personId },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
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
