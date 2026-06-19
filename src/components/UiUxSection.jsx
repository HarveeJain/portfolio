import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import figmaDesign from "../assets/Instagram-story-1.png";
import loadLagao from "../assets/Main-screen.png";
import soochna from "../assets/iPhone-16-&-17-Pro-Max-7.png";

const projects = [
  {
    title: "Figma designs",
    desc: "Figma portfolio showcasing designs for instagram posts/stories and personal explorations",
    image: figmaDesign,
    behance: "https://www.behance.net/gallery/241415881/figma-designs",
    glow: "#FF007F",
  },
  {
    title: "Load Lagao",
    desc: "Laundry management app to minimize conflicts and make hostel laundry easier.",
    image: loadLagao,
    behance: "https://www.behance.net/gallery/246597893/Load-Lagao-laundry-service-app-design",
    glow: "#00F0FF",
  },
  {
    title: "Soochna",
    desc: "App designed regarding student pain points to make hostel life easier",
    image: soochna,
    behance: "https://behance.net/",
    glow: "#9D00FF",
  },
];

export default function UiUxSection() {
  return (
    <section
      id="uiux"
      className="relative min-h-[75vh] overflow-hidden bg-[#0B0813] flex items-center justify-center px-4 sm:px-6 py-12 md:py-24"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#0B0813 1px, transparent 1px), linear-gradient(90deg, #070511 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase">
            UI/UX WORK
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="flex flex-col gap-16 md:gap-32 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="
                relative
                flex flex-col md:flex-row
                items-center md:items-start
                gap-8 md:gap-20
                group
              "
            >
              {/* PHONE */}
              <div className="relative flex items-center justify-center w-full md:w-auto">
                
                {/* CONNECTOR LINE (desktop only) */}
                <div
                  className="
                    hidden md:block
                    absolute left-full ml-6
                    w-20 h-[2px] rounded-full
                  "
                  style={{
                    background: `linear-gradient(to right, ${project.glow}, transparent)`,
                  }}
                />

                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="
                    relative
                    w-[160px] sm:w-[200px] md:w-[220px]
                    h-[320px] sm:h-[400px] md:h-[450px]
                    rounded-[2.5rem] md:rounded-[3rem]
                    border border-white/20
                    bg-gradient-to-b from-[#111827] via-[#09090f] to-black
                    overflow-hidden
                  "
                  style={{
                    boxShadow: `
                      0 0 10px ${project.glow}66,
                      inset 0 0 20px rgba(255,255,255,0.04)
                    `,
                  }}
                >
                  {/* CAMERA */}
                  <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-20 md:w-28 h-4 md:h-6 rounded-full bg-black z-20" />

                  {/* SCREEN */}
                  <div className="absolute inset-2 md:inset-3 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-110 transition duration-700
                      "
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                  </div>
                </motion.div>
              </div>

              {/* TEXT */}
              <motion.div
                className="
                  flex-1 w-full
                  rounded-[1.5rem] md:rounded-[2rem]
                  border border-white/10
                  bg-[#0F1117]/90
                  backdrop-blur-xl
                  p-5 sm:p-8 md:p-10
                "
                style={{
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                <div className="relative z-10">
                  <p
                    className="text-xs sm:text-sm uppercase tracking-[0.25em] mb-2 md:mb-3"
                    style={{ color: project.glow }}
                  >
                    CASE STUDY {i + 1}
                  </p>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-5">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {project.desc}
                  </p>

                  <a
                    href={project.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2
                      px-4 md:px-5 py-2 md:py-3
                      rounded-full border
                      text-xs sm:text-sm uppercase tracking-wide
                    "
                    style={{
                      borderColor: `${project.glow}66`,
                      background: `${project.glow}15`,
                      color: project.glow,
                    }}
                  >
                    View Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}