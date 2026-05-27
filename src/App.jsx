import VideoText from "./components/VideoText";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import UiUxSection from "./components/UiUxSection";
import ProjectsSection from "./components/WebProjectsSection";

export default function App() {
  const mainRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1600);

    const t2 = setTimeout(() => {
      setIntroDone(true);
      document.body.style.overflow = "auto";
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="bg-[#0B0813] text-white overflow-x-hidden touch-action-none">
      <CursorGlow />

      {/* INTRO */}
      {!introDone && (
        <section className="fixed inset-0 flex items-center justify-center z-50 bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('src/assets/neonimg.jpg')" }}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative h-[220px] md:h-[340px] w-screen max-w-[100vw] overflow-visible flex items-center justify-center"
            >
              <VideoText
                src="https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4"
                fontSize={7}
                fontWeight="900"
                letterSpacing="0.12em"
                fontFamily="Helvetica, Arial, sans-serif"
                textTransform="uppercase"
              >
                PORTFOLIO
              </VideoText>
            </motion.div>

            <motion.div
              animate={{
                opacity: [1, 0, 1, 0, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                times: [0, 0.2, 0.4, 0.6, 1],
              }}
              className="mt-2 text-white/70 tracking-[0.3em]"
            >
              INITIALIZING EXPERIENCE
            </motion.div>
          </div>
        </section>
      )}

      {/* MAIN */}
      <div ref={mainRef}>
        <Navbar hidden={!introDone} />

        <section>
          <Hero introDone={introDone} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <UiUxSection />
        </section>

        <section>
          <ProjectsSection />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
}