import React, { useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import audioAtlas from "../assets/audioatlas.png";
import creativityClub from "../assets/cc.png";
import dice from "../assets/dice.png";
import rocketAir from "../assets/rocketair.png";

/* fallback */
const FALLBACK =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='220'><rect width='100%' height='100%' fill='%230b0813'/><text x='50%' y='50%' fill='%23fff' font-size='14' text-anchor='middle' dominant-baseline='middle'>Project</text></svg>";

const DRAG_SENSITIVITY = 0.5;
const AUTO_SPEED = 0.2;

const projects = [
  {
    title: "Audio Atlas",
    img: audioAtlas,
    link: "https://harveejain.github.io/audio-atlas/",
  },
  {
    title: "Creativity Club official website",
    img: creativityClub,
    link: "https://cc-jy3r.vercel.app/",
  },
  {
    title: "Dice Simulator",
    img: dice,
    link: "https://harveejain.github.io/dice-simulator/",
  },
  {
    title: "Rocket Air Clone",
    img: rocketAir,
    link: "https://harveejain.github.io/RocketAir-clone/",
  },
];

export default function ProjectsSection() {
  const wheelRef = useRef(null);

  const rotation = useRef(0);
  const velocity = useRef(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startRot = useRef(0);
  const frame = useRef(null);

  /* responsive radius */
  const RADIUS = typeof window !== "undefined" && window.innerWidth < 640 ? 140 : 180;

  const cards = useMemo(() => {
    return projects.map((p, i) => {
      const angle = (i * 360) / projects.length;
      return {
        ...p,
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
      };
    });
  }, [RADIUS]);

  useEffect(() => {
    const animate = () => {
      if (!dragging.current) {
        rotation.current += velocity.current || AUTO_SPEED;
        velocity.current *= 0.95;
      }

      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotateY(${rotation.current}deg)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    startRot.current = rotation.current;
  };

  const onMove = (e) => {
    if (!dragging.current) return;

    const delta = e.clientX - startX.current;
    const newRot = startRot.current + delta * DRAG_SENSITIVITY;

    velocity.current = newRot - rotation.current;
    rotation.current = newRot;
  };

  const onUp = () => {
    dragging.current = false;
  };

  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center relative z-10 pb-32 overflow-visible">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-wider">
          PROJECTS
        </h2>
      </motion.div>

      {/* CAROUSEL */}
      <div
        className="
          relative
          cursor-grab active:cursor-grabbing
          w-full
          h-[280px] sm:h-[340px] md:h-[420px]
          overflow-visible
        "
        style={{
          perspective: "1200px",
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => onDown(e.touches[0])}
        onTouchMove={(e) => onMove(e.touches[0])}
        onTouchEnd={onUp}
      >
        <div
          ref={wheelRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2

                w-[140px] sm:w-[170px] md:w-[220px]
                h-[200px] sm:h-[250px] md:h-[300px]

                rounded-xl sm:rounded-2xl
                overflow-hidden
                border border-white/10
                bg-white/5 backdrop-blur-lg
                shadow-xl
                transition-transform
                hover:scale-105
              "
              style={{
                transform: p.transform,
              }}
            >
              <img
                src={p.img}
                onError={(e) => (e.currentTarget.src = FALLBACK)}
                className="w-full h-[65%] object-cover"
              />

              <div className="p-2 sm:p-3 text-white">
                <h3 className="text-xs sm:text-sm font-bold">
                  {p.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/60">
                  Click to view project
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}