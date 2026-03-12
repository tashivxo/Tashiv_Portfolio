import { ReactNode } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50 mt-20">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Tashiv Govender. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}
