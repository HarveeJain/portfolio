import { useEffect, useRef } from "react";

export default function CursorStars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createStar = (x, y) => {
      const star = document.createElement("div");

      const size = Math.random() * 14 + 10;

      const colors = [
        "#00F0FF",
        "#FF007F",
        "#9D00FF",
      ];

      const color =
        colors[Math.floor(Math.random() * colors.length)];

      const rotation = Math.random() * 180;

      star.style.position = "absolute";
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.pointerEvents = "none";

      star.style.background = color;

      star.style.clipPath =
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

      star.style.boxShadow = `
        0 0 8px ${color},
        0 0 18px ${color},
        0 0 28px ${color}
      `;

      star.style.opacity = "1";

      star.style.transform = `
        translate(-50%, -50%)
        rotate(${rotation}deg)
        scale(1)
      `;

      star.style.transition =
        "all 0.8s cubic-bezier(0.22,1,0.36,1)";

      container.appendChild(star);

      requestAnimationFrame(() => {
        star.style.opacity = "0";

        star.style.transform = `
          translate(-50%, -50%)
          rotate(${rotation + 180}deg)
          scale(0)
        `;

        star.style.top = `${y - 30}px`;
      });

      setTimeout(() => {
        star.remove();
      }, 800);
    };

    const spawn = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // only inside hero area
      if (
        x >= 0 &&
        x <= rect.width &&
        y >= 0 &&
        y <= rect.height
      ) {
        if (Math.random() > 0.7) {
          createStar(x, y);
        }
      }
    };

    const handlePointerMove = (e) => {
      if (e.pointerType === "touch") {
        e.preventDefault();
      }

      spawn(e.clientX, e.clientY);
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: false }
    );

    return () => {
      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        absolute
        inset-0
        overflow-hidden
        z-20
      "
      style={{
        touchAction: "pan-y",
      }}
    />
  );
}