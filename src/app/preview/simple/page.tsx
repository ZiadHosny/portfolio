import { Projects } from "@/components/sections/Projects";
import { CertsC } from "@/components/creative/CertsC";
import { ContactCTA } from "@/components/creative/ContactCTA";
import { ContentBento } from "@/components/creative/ContentBento";
import { ExperienceC } from "@/components/creative/ExperienceC";
import { ScrollProgress, SectionHeading } from "@/components/creative/Motion";
import { SkillsC } from "@/components/creative/SkillsC";
import { HeroD } from "@/components/simple/HeroD";
import { Preloader } from "@/components/simple/Preloader";

// Variant D — simple & light: no canvas, no cursor effects, no grain; CSS + small motion reveals.
export default function SimplePreview() {
  return (
    <>
      {/* Must render before the hero (the hero waits for it) */}
      <Preloader />
      <ScrollProgress />
      <HeroD />
      <ExperienceC />
      <Projects heading={<SectionHeading index="02" kicker="Work" title="Projects" id="projects-title" />} />
      <ContentBento />
      <SkillsC />
      <CertsC />
      <ContactCTA aurora={false} />
    </>
  );
}
