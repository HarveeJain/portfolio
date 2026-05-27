import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/20 bg-[#0B0813] text-white relative z-10">

      <div className="w-full flex flex-col md:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 p-12 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-wide">
            Made by{" "}
            <span className="text-[#9D00FF]">
              Harvee
            </span>
          </h2>

          <p className="text-[#FF007F] mt-4 max-w-md leading-relaxed">
            crafting experiences that matter
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >

          <table className="w-full h-full border-collapse text-left">

            <thead>
              <tr>
                <th className="border border-white/20 px-8 py-6 text-2xl text-[#00F0FF] font-semibold">
                  Catch Me Here
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-300">

              <tr>
                <td className="border border-white/20 px-8 py-6">
                  <p
                    className="hover:text-purple-400 transition"
                  >
                    Mail ID- harveej2006@gmail.com
                  </p>
                </td>
              </tr>

              <tr>
                <td className="border border-white/20 px-8 py-6">
                  <a
                    href="https://www.linkedin.com/in/harvee-jain-06959b332/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    LinkedIn
                  </a>
                </td>
              </tr>

              <tr>
                <td className="border border-white/20 px-8 py-6">
                  <a
                    href="https://github.com/HarveeJain"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    GitHub
                  </a>
                </td>
              </tr>

              <tr>
                <td className="border border-white/20 px-8 py-6">
                  <a
                    href="https://www.behance.net/harveejain"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition"
                  >
                    Behance
                  </a>
                </td>
              </tr>

            </tbody>

          </table>

        </motion.div>

      </div>

    </footer>
  );
}