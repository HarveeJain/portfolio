import React, { useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* fallback */
const FALLBACK =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='220'><rect width='100%' height='100%' fill='%230b0813'/><text x='50%' y='50%' fill='%23fff' font-size='14' text-anchor='middle' dominant-baseline='middle'>Project</text></svg>";

/* CONFIG */
const RADIUS = 260;
const DRAG_SENSITIVITY = 0.5;
const AUTO_SPEED = 0.2;

const projects = [
  {
    title: "Audio Atlas",
    img: "src/assets/audioatlas.png",
    link: "https://harveejain.github.io/audio-atlas/",
  },
  {
    title: "Creativity Club official website",
    img: "src/assets/cc.png",
    link: "https://cc-jy3r.vercel.app/",
  },
  {
    title: "Dice Simulator",
    img: "src/assets/dice.png",
    link: "https://harveejain.github.io/dice-simulator/",
  },
  {
    title: "Rocket Air Clone",
    img: "src/assets/rocketair.png",
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

  const cards = useMemo(() => {
    return projects.map((p, i) => {
      const angle = (i * 360) / projects.length;
      return {
        ...p,
        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
      };
    });
  }, []);

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
    <section className="w-full py-24 flex flex-col items-center overflow-hidden">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-wider">
          PROJECTS
        </h2>
      </motion.div>

      {/* CAROUSEL */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{
          perspective: "1200px",
          width: "100%",
          height: "420px",
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        <div
          ref={wheelRef}
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              className="absolute w-[220px] h-[300px] left-1/2 top-1/2 -ml-[110px] -mt-[150px]
                         rounded-2xl overflow-hidden border border-white/10
                         bg-white/5 backdrop-blur-lg shadow-xl
                         transition-transform hover:scale-105"
              style={{
                transform: p.transform,
              }}
            >
              <img
                src={p.img}
                onError={(e) => (e.currentTarget.src = FALLBACK)}
                className="w-full h-[70%] object-cover"
              />

              <div className="p-3 text-white">
                <h3 className="text-sm font-bold">{p.title}</h3>
                <p className="text-xs text-white/60">
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