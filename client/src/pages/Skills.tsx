import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import SkillCard from "@/components/skills/SkillCard";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionHeader title="Skills & Expertise" subtitle="Technologies and tools I work with." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              index={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
