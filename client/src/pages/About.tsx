import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/section-header";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import aboutImage from "@assets/generated_images/developer_working_in_a_high-tech_environment.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border/50 bg-card">
                <img
                  src={aboutImage}
                  alt="Coding Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              {personalInfo.title}
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4">
              <Button className="gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
