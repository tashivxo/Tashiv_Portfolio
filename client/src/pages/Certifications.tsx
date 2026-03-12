import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import CertCard from "@/components/certifications/CertCard";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionHeader title="Certifications" subtitle="Professional certifications and courses completed." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertCard
              key={index}
              index={index}
              {...cert}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
