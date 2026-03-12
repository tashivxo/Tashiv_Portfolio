import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionHeader title="Projects" subtitle="A selection of my work and personal projects." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
