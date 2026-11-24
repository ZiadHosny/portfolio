import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ArabicContent } from "@/components/sections/ArabicContent";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress, SectionHeading } from "@/components/Motion";
import { getDict, localePath, type Locale } from "@/lib/i18n";
import { site, socials } from "@/lib/site";

const personId = `${site.url}/#person`;

const person = (locale: Locale) => ({
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
  ...(locale === "ar" ? { description: "مهندس برمجيات Full-Stack من مصر، يشرح System Design بالعربي على يوتيوب." } : {}),
});

const jsonLd = (locale: Locale) => {
  const url = `${site.url}${localePath(locale) === "/" ? "" : localePath(locale)}`;
  const title = locale === "ar" ? "زياد حسني | مهندس برمجيات Full-Stack" : `${site.name} | ${site.title}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      person(locale),
      // One WebSite entity for the whole domain, declared on the main (English) page
      ...(locale === "en"
        ? [
            {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              url: site.url,
              name: site.name,
              alternateName: `${site.name} Portfolio`,
              description: site.shortDescription,
              inLanguage: ["en", "ar"],
              publisher: { "@id": personId },
            },
          ]
        : []),
      {
        "@type": "ProfilePage",
        "@id": `${url}/#profile`,
        url,
        name: title,
        inLanguage: locale,
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
    ],
  };
};

/** The whole one-page site, in either language. */
export const HomePage = ({ locale }: { locale: Locale }) => {
  const t = getDict(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)).replace(/</g, "\u003c") }}
      />
      {/* Must render before the hero: the hero waits for the intro curtain */}
      <Preloader />
      <ScrollProgress />
      <Hero locale={locale} />
      <Experience locale={locale} />
      <Projects
        locale={locale}
        heading={<SectionHeading index="02" kicker={t.sections.projects.kicker} title={t.sections.projects.title} id="projects-title" />}
      />
      <ArabicContent locale={locale} />
      <Skills locale={locale} />
      <Certifications locale={locale} />
      <Contact locale={locale} />
    </>
  );
};
