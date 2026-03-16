import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group">
        <CardHeader>
          <div className="mb-4 h-40 rounded-md bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-colors flex items-center justify-center border border-border/50">
            <ExternalLink className="w-12 h-12 text-primary/50 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/20 bg-primary/5">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <div className="flex gap-4 w-full">
            <AnimatedButton variant="outline" className="w-full gap-2" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Source Code
              </a>
            </AnimatedButton>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
