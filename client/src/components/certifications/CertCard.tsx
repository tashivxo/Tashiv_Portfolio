import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Award, Calendar, ExternalLink, FileText } from "lucide-react";

interface CertCardProps {
  name: string;
  issuer: string;
  date: string;
  pdfUrl?: string;
  index: number;
}

export default function CertCard({ name, issuer, date, pdfUrl, index }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors h-full flex flex-col">
        <CardHeader className="flex flex-row items-start justify-between gap-4 pb-2">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <Award className="w-6 h-6" />
          </div>
          <Badge variant="outline" className="whitespace-nowrap text-xs">
            {issuer}
          </Badge>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between gap-4">
          <div>
            <CardTitle className="text-lg mb-2 leading-snug line-clamp-2 h-14">{name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          
          {pdfUrl && (
            <AnimatedButton variant="ghost" size="sm" className="w-full justify-between group mt-2 border border-border/50 hover:bg-primary/10" asChild>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Certificate
                </span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </AnimatedButton>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
