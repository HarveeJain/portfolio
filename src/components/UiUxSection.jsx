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
    rotate: "0deg",
    glow: "#FF007F",
  },
  {
    title: "Load Lagao",
    desc: "laundry management app to minimize conflicts and make hostel laundry easier.",
    image: loadLagao,
    behance: "https://www.behance.net/gallery/246597893/Load-Lagao-laundry-service-app-design",
    rotate: "0deg",
    glow: "#00F0FF",
  },
  {
    title: "Soochna",
    desc: "App designed regarding student pain points to make hostel life easier",
    image: soochna,
    behance: "https://behance.net/",
    rotate: "0deg",
    glow: "#9D00FF",
  },
];

export default function UiUxSection() {
  return (
    <section
      id="uiux"
      className="relative min-h-[75vh] overflow-hidden bg-[#0B0813] flex items-center justify-center px-6 py-24"
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
          className="mb-24 text-center"
        >

          <h2 className="text-5xl md:text-7xl font-black uppercase">
            UI/UX WORK
          </h2>

        </motion.div>

        {/* PROJECT TIMELINE */}
        <div className="flex flex-col gap-32 max-w-6xl mx-auto">


        {projects.map((project, i) => (
            <div
            key={i}
            
            className="
                relative
                flex
                flex-col
                md:flex-row
                items-center
                gap-10
                md:gap-20
                group
            "
            >

            {/* PHONE SIDE */}
            <div className="relative flex items-center">

                {/* CONNECTOR LINE */}
                <div
                    className="
                        hidden md:block
                        absolute
                        left-full
                        ml-6
                        w-20
                        h-[2px]
                        rounded-full
                    "
                    style={{
                        background: `linear-gradient(to right, ${project.glow}, transparent)`,
                      
                    }}
                />


                {/* PHONE BODY */}
                <motion.div
                whileHover={{
                    y: -10,
                    scale: 1.03,
                }}
                className="
                relative
                w-[220px]
                h-[450px]
                rounded-[3rem]
                border
                border-white/20
                bg-gradient-to-b
                from-[#111827]
                via-[#09090f]
                to-black
                backdrop-blur-xl
                overflow-hidden
                "
                style={{
                boxShadow: `
                    0 0 1px rgba(255,255,255,0.4),
                    0 0 10px ${project.glow}99,
                    0 0 15px ${project.glow}66,
                    inset 0 0 20px rgba(255,255,255,0.04)
                `,
                }}
                >

                {/* CAMERA */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-black z-20" />

                {/* SCREEN */}
                <div className="absolute inset-3 rounded-[2.5rem] overflow-hidden">

                    <img
                    src={project.image}
                    alt={project.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />

                    {/* REFLECTION */}
                    <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-white/20
                        via-transparent
                        to-transparent
                        opacity-40
                    "
                    />

                </div>
                </motion.div>
            </div>

            {/* DESCRIPTION SIDE */}
            <motion.div
                className="
                flex-1
                relative
                rounded-[2rem]
                border
                border-white/10
                bg-[#0F1117]/90
                backdrop-blur-xl
                p-10
                overflow-hidden
                "
                style={{
                boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.04),
                    0 10px 40px rgba(0,0,0,0.45)
                `,
                }}
            >

                {/* BACKGROUND GLOW */}
                <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    background: `radial-gradient(circle at top left, ${project.glow}, transparent 55%)`,
                }}
                />

                <div className="relative z-10">

                <p
                className="text-sm uppercase tracking-[0.3em] mb-3"
                style={{
                    color: project.glow,
                }}
                >
                    CASE STUDY {i + 1}
                </p>

                <h3 className="text-4xl font-black mb-5">
                    {project.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-lg mb-8 max-w-xl">
                    {project.desc}
                </p>

                <a
                href={project.behance}
                target="_blank"
                rel="noreferrer"

                className="
                    inline-flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-full
                    border
                    text-sm
                    tracking-wide
                    uppercase
                "
                style={{
                    borderColor: `${project.glow}66`,
                    background: `${project.glow}15`,
                    color: project.glow,
                }}
                >
                    View Project
                    <ExternalLink size={16} />
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