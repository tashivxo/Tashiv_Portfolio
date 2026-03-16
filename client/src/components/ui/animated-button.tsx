import * as React from "react";
import { useRef, useCallback } from "react";
import { animate } from "animejs";
import { Button, type ButtonProps } from "./button";
import { cn } from "@/lib/utils";

/**
 * AnimatedButton — wraps the shadcn Button with anime.js v4 effects:
 *  • Magnetic tilt on hover (button gently follows the cursor)
 *  • Ripple burst on click
 *  • Subtle shine sweep on hover
 */
const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, onClick, asChild, ...props }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);
    const shineRef = useRef<HTMLSpanElement>(null);

    /* ── Magnetic hover ── */
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      animate(el, {
        translateX: x * 0.15,
        translateY: y * 0.15,
        scale: 1.04,
        duration: 300,
        ease: "outCubic",
      });
    }, []);

    const handleMouseLeave = useCallback(() => {
      const el = wrapperRef.current;
      if (!el) return;
      animate(el, {
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 500,
        ease: "outElastic(1, .6)",
      });
    }, []);

    /* ── Shine sweep on hover ── */
    const handleMouseEnter = useCallback(() => {
      if (!shineRef.current) return;
      animate(shineRef.current, {
        translateX: ["-100%", "200%"],
        duration: 700,
        ease: "inOutQuad",
      });
    }, []);

    /* ── Ripple on click ── */
    const handleWrapperClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const el = wrapperRef.current;
        const ripple = rippleRef.current;
        if (!el || !ripple) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        animate(ripple, {
          scale: [0, 4],
          opacity: [0.5, 0],
          duration: 600,
          ease: "outExpo",
        });

        // Punch scale
        animate(el, {
          scale: [0.95, 1],
          duration: 400,
          ease: "outElastic(1, .5)",
        });
      },
      [],
    );

    return (
      <div
        ref={wrapperRef}
        className="relative inline-flex overflow-hidden rounded-md will-change-transform"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleWrapperClick}
      >
        {/* Shine overlay */}
        <span
          ref={shineRef}
          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
          aria-hidden
        />
        {/* Ripple dot */}
        <span
          ref={rippleRef}
          className="pointer-events-none absolute z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
          style={{ scale: 0, opacity: 0 }}
          aria-hidden
        />
        <Button
          ref={ref}
          className={cn("w-full", className)}
          onClick={onClick}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  },
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
