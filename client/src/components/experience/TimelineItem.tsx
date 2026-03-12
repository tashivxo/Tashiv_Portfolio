import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "work" | "education";
  skills?: string[];
  index: number;
}

export default function TimelineItem({ 
  title, 
  organization, 
  period, 
  description, 
  type, 
  skills,
  index 
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[5px] md:-translate-x-1/2 z-10" />

      <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="hidden md:block w-1/2" />
        
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary text-sm font-mono mb-2">
                {type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                <span>{type === "work" ? "Experience" : "Education"}</span>
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                <span className="font-medium text-foreground">{organization}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{description}</p>
              {skills && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
