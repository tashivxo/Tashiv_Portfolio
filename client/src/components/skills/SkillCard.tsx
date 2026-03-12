import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  index: number;
}

export default function SkillCard({ name, icon: Icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
        <CardContent className="p-6 flex flex-col items-center text-center gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
