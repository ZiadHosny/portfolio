import { Projects } from "@/components/sections/Projects";
import { CertsC } from "@/components/creative/CertsC";
import { ContactCTA } from "@/components/creative/ContactCTA";
import { ContentBento } from "@/components/creative/ContentBento";
import { CursorGlow } from "@/components/creative/CursorGlow";
import { ExperienceC } from "@/components/creative/ExperienceC";
import { HeroC } from "@/components/creative/HeroC";
import { ScrollProgress, SectionHeading } from "@/components/creative/Motion";
import { Ribbons } from "@/components/creative/Ribbons";
import { SkillsC } from "@/components/creative/SkillsC";

export default function CreativePreview() {
  return (
    <div className="grain">
      <ScrollProgress />
      <CursorGlow />
      <HeroC />
      <Ribbons />
      <ExperienceC />
      <Projects heading={<SectionHeading index="02" kicker="Work" title="Projects" id="projects-title" />} />
      <ContentBento />
      <SkillsC />
      <CertsC />
      <ContactCTA />
    </div>
  );
}
