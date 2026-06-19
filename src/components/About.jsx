import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import myImage from "../assets/myImage.jpeg";
import SkillsLoop from "./SkillsLoop";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-6 md:px-12 lg:px-20 py-8 md:py-14"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-[1fr_1fr]
          gap-6 md:gap-12
          items-center
        "
      >
        {/* IMAGE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 40 },
            show: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="flex justify-center lg:justify-start"
        >
          <div className="flex justify-center w-fit p-2">
            <BorderGlow
              edgeSensitivity={40}
              glowColor="268 100 76"
              backgroundColor="#0B0813"
              borderRadius={35}
              glowRadius={120}
              glowIntensity={10}
              coneSpread={65}
              animated={false}
              colors={["#9D00FF", "#FF007F", "#38bdf8"]}
            >
              <img
                src={myImage}
                alt="profile"
                className="
                  w-[70vw] sm:w-[60vw]
                  max-w-[320px]
                  aspect-[3/4]
                  object-cover object-top
                  rounded-[35px]
                "
              />
            </BorderGlow>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 60 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.2 },
            },
          }}
          className="flex justify-center"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-stroke leading-relaxed text-center lg:text-left space-y-5 max-w-2xl">
            <p>
              I am a passionate developer who loves building interactive and
              visually engaging web experiences.
            </p>

            <p>
              I specialize in frontend development, animations, and immersive UI
              design systems.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* SKILLS */}
      <div className="mt-10 md:mt-16">
        <SkillsLoop />
      </div>
    </section>
  );
}