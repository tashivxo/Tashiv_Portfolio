import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import TimelineItem from "@/components/experience/TimelineItem";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionHeader title="Experience & Education" subtitle="My professional journey and academic background." />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Section */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                index={index}
                title={item.role}
                organization={item.company}
                period={item.period}
                description={item.description}
                type="work"
                skills={item.skills}
              />
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-8 mt-20">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                index={experience.length + index}
                title={item.degree}
                organization={item.institution}
                period={item.period}
                description={item.description}
                type="education"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
