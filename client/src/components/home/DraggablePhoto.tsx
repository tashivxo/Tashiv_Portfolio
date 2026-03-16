import { useEffect, useRef, useCallback } from "react";
import { createDraggable, animate } from "animejs";

export default function DraggablePhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const draggableRef = useRef<ReturnType<typeof createDraggable> | null>(null);
  const lastGhostTime = useRef(0);

  // Detect when the dragged image nears a boundary wall and flash that edge
  const checkBoundaryCollision = useCallback(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const cRect = container.getBoundingClientRect();
    const iRect = image.getBoundingClientRect();
    const threshold = 6;

    // Each edge: detect proximity and flash a colored box-shadow on that side
    if (iRect.left <= cRect.left + threshold) {
      flashEdge("left");
    }
    if (iRect.right >= cRect.right - threshold) {
      flashEdge("right");
    }
    if (iRect.top <= cRect.top + threshold) {
      flashEdge("top");
    }
    if (iRect.bottom >= cRect.bottom - threshold) {
      flashEdge("bottom");
    }
  }, []);

  const flashEdge = (side: string) => {
    const container = containerRef.current;
    if (!container) return;

    // Avoid spamming — debounce per side
    const key = `_flash_${side}`;
    if ((container as any)[key]) return;
    (container as any)[key] = true;
    setTimeout(() => { (container as any)[key] = false; }, 300);

    const shadowMap: Record<string, string> = {
      left: "-8px 0 20px -4px hsl(210 100% 50% / 0.6)",
      right: "8px 0 20px -4px hsl(210 100% 50% / 0.6)",
      top: "0 -8px 20px -4px hsl(210 100% 50% / 0.6)",
      bottom: "0 8px 20px -4px hsl(210 100% 50% / 0.6)",
    };

    animate(container, {
      boxShadow: [
        { to: shadowMap[side], duration: 100 },
        { to: "0 0 0 0 transparent", duration: 400 },
      ],
      ease: "outCubic",
    });
  };

  // Spawn a ghost copy of the image at its current visual position
  const spawnGhost = useCallback(() => {
    const image = imageRef.current;
    const container = containerRef.current;
    if (!image || !container) return;

    const now = performance.now();
    if (now - lastGhostTime.current < 60) return; // throttle
    lastGhostTime.current = now;

    const iRect = image.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();

    const ghost = document.createElement("img");
    ghost.src = image.src;
    ghost.style.position = "absolute";
    ghost.style.left = `${iRect.left - cRect.left}px`;
    ghost.style.top = `${iRect.top - cRect.top}px`;
    ghost.style.width = `${iRect.width}px`;
    ghost.style.height = `${iRect.height}px`;
    ghost.style.borderRadius = "0.75rem";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0.45";
    ghost.style.filter = "blur(2px) saturate(1.4)";
    ghost.style.zIndex = "0";
    container.appendChild(ghost);

    animate(ghost, {
      opacity: [0.45, 0],
      scale: [1, 0.85],
      filter: ["blur(2px)", "blur(8px)"],
      duration: 600,
      ease: "outCubic",
      onComplete: () => {
        ghost.remove();
      },
    });
  }, []);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;
    if (!image || !container) return;

    // Entrance fade-in matching Framer Motion's delay: 0.2 duration pattern
    animate(image, {
      opacity: [0, 1],
      duration: 600,
      ease: "outCubic",
      delay: 200,
    });

    // Create draggable
    const draggable = createDraggable(image, {
      container: container,
      containerFriction: 0.75,
      releaseContainerFriction: 0.5,
      releaseStiffness: 50,
      releaseDamping: 12,
      releaseEase: "outElastic(1, .6)",
      cursor: true,
      onDrag: () => {
        spawnGhost();
        checkBoundaryCollision();
      },
    });

    draggableRef.current = draggable;

    return () => {
      draggable.revert();
    };
  }, [spawnGhost, checkBoundaryCollision]);

  const imageSrc = `${import.meta.env.BASE_URL}Me.png`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-xl overflow-hidden"
      style={{
        border: "1px solid hsl(210 100% 50% / 0.15)",
        background:
          "radial-gradient(circle at 50% 50%, hsl(210 100% 50% / 0.04), transparent 70%)",
        minHeight: "320px",
      }}
    >
      {/* Subtle corner markers to hint at the playground area */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/30 rounded-tl" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/30 rounded-tr" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/30 rounded-bl" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/30 rounded-br" />

      {/* Drag hint text */}
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50 select-none pointer-events-none font-mono">
        drag me around
      </span>

      <img
        ref={imageRef}
        src={imageSrc}
        alt="Tashiv Govender"
        draggable={false}
        className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover shadow-lg cursor-grab active:cursor-grabbing select-none"
        style={{
          opacity: 0,
          margin: "auto",
          display: "block",
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
}
