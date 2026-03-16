import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { animate } from "animejs";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export default function SectionHeader({ title, subtitle, alignment = "left" }: SectionHeaderProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!subtitle || !subtitleRef.current) return;

    // Wrap each character in a span for anime.js to target
    const el = subtitleRef.current;
    el.innerHTML = subtitle
      .split("")
      .map((char) =>
        char === " "
          ? '<span class="inline-block">&nbsp;</span>'
          : `<span class="inline-block opacity-0">${char}</span>`,
      )
      .join("");

    const chars = el.querySelectorAll("span");

    // Stagger-fade each character in with a slight upward drift
    animate(chars, {
      opacity: [0, 1],
      translateY: [8, 0],
      filter: ["blur(4px)", "blur(0px)"],
      duration: 600,
      delay: (_el: Element, i: number) => 40 * i,
      ease: "outExpo",
    });
  }, [subtitle]);

  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="text-primary font-mono mr-2">/</span>
          {title}
        </h2>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
