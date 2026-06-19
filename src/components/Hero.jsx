import { motion } from "framer-motion";
import CursorStars from "./CursorStars";

export default function Hero({ introDone }) {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 md:px-8 py-4 md:py-8 bg-[#0B0813]">
      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col">
        <CursorStars />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2 }}
          className="
            flex-1
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-2
            -mt-6 sm:mt-0
          "
        >
          <h1
            className="
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              font-black leading-tight
              text-violet-500 glitch
            "
          >
            Hi I'm Harvee
          </h1>

          <div
            className="
              flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6
              mt-5 md:mt-8
              tracking-[0.15em]
              text-sm sm:text-base md:text-lg
            "
          >
            <span className="text-[#9D00FF]">.DEVELOPER</span>
            <span className="text-[#FF007F]">.CREATOR</span>
            <span className="text-cyan-400">.DESIGNER</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}