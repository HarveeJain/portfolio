import { motion } from "framer-motion";
import CursorStars from "./CursorStars";

export default function Hero({ introDone }) {
  return (
    <section className="relative min-h-screen overflow-hidden px-8 py-12 bg-[#0B0813]">

      <div className="relative z-10 max-w-6xl mx-auto">
        <CursorStars />

        {/* TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2 }}
          className="min-h-[80vh] flex flex-col items-center justify-center text-center"
        >

          <h1
            className="
              text-5xl md:text-8xl font-black leading-none
              relative text-violet-500
              glitch
            "
          >
            Hi I'm Harvee
          </h1>

          <div className="flex gap-6 mt-8 tracking-[0.3em]">

            <span className="text-[#9D00FF] drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
              .DEVELOPER
            </span>

            <span className="text-[#FF007F] drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
              .CREATOR
            </span>

            <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              .DESIGNER
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}