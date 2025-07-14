import { HeroSection } from "@/components/views/hero-section/hero-section";
import { ProjectSection } from "@/components/views/project-section/project-section";
import { SkillsSection } from "@/components/views/skills-section/skills-section";

export default function Home() {
  return (
    <div className="bg-foreground p-8">
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
    </div>
  );
}
