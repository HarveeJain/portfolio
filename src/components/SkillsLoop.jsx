import { motion } from "framer-motion";

import {
  SiPython,
  SiC,
  SiCplusplus,
  SiDart,
  SiReact,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { icon: <SiPython />, color: "#3776AB", name: "Python" },
  { icon: <SiC />, color: "#A8B9CC", name: "C" },
  { icon: <SiCplusplus />, color: "#00599C", name: "C++" },
  { icon: "☕", color: "#F89820", name: "Java" },
  { icon: <SiDart />, color: "#0175C2", name: "Dart" },

  { icon: <SiReact />, color: "#61DAFB", name: "React" },
  { icon: <SiHtml5 />, color: "#E34F26", name: "HTML" },
  { icon: "🎨", color: "#1572B6", name: "CSS" },
  { icon: <SiJavascript />, color: "#F7DF1E", name: "JavaScript" },
  { icon: <SiTailwindcss />, color: "#38BDF8", name: "Tailwind" },
  { icon: <SiBootstrap />, color: "#7952B3", name: "Bootstrap" },
  { icon: <SiFramer />, color: "#ffffff", name: "Framer Motion" },

  { icon: <SiNodedotjs />, color: "#5FA04E", name: "Node.js" },
  { icon: <SiExpress />, color: "#ffffff", name: "Express.js" },
  { icon: <SiMysql />, color: "#4479A1", name: "MySQL" },
  { icon: <SiPostgresql />, color: "#4169E1", name: "PostgreSQL" },

  { icon: <SiFigma />, color: "#F24E1E", name: "Figma" },

  { icon: <SiGit />, color: "#F05032", name: "Git" },
  { icon: <SiGithub />, color: "#ffffff", name: "GitHub" },

  { icon: "🧠", color: "#9D00FF", name: "DSA" },
  { icon: "⚡", color: "#00F0FF", name: "REST APIs" },
];

export default function SkillsLoop() {
  return (
    <div className="relative overflow-hidden pt-28 pb-2 w-full">
      <h4
        className="
          text-center
          text-4xl
          md:text-5xl
          font-black
          uppercase
          mb-10
          tracking-[0.2em]
          text-white
        "
      >
        MY SKILLS
      </h4>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0B0813] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0B0813] to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="
                flex items-center gap-3
                px-4 py-2.5
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-lg
                shrink-0
              "
            >
              <div
                className="text-3xl"
                style={{
                  color: skill.color,
                  filter: `drop-shadow(0 0 10px ${skill.color})`,
                }}
              >
                {skill.icon}
              </div>

              <span className="text-white/80 tracking-wide text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}