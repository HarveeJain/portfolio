import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import myImage from "../assets/myImage.jpeg";
import SkillsLoop from "./SkillsLoop";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-20"
    >
      {/* IMAGE + DESCRIPTION */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-center pb-0"
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
          className="flex justify-start lg:pr-6"
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
                  w-[270px]
                  md:w-[320px]
                  h-[540px]
                  md:h-[400px]
                  object-cover
                  object-top
                  block
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
              transition: { duration: 1, delay: 0.3 },
            },
          }}
        >
          <div className="text-lg md:text-2xl text-stroke leading-relaxed text-justify space-y-6">
            <p>
              I am a passionate developer who loves building interactive and
              visually engaging web experiences. My focus is on creating modern,
              high-performance interfaces that combine both logic and aesthetics.
            </p>

            <p>
              I specialize in frontend development, crafting smooth animations,
              responsive layouts, and immersive UI experiences. I enjoy
              experimenting with creative visual effects and pushing the
              boundaries of web design.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div>
        <SkillsLoop />
      </div>
    </section>
  );
}