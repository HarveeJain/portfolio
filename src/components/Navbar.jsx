import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ hidden }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          hidden
            ? "opacity-0 -translate-y-6 pointer-events-none"
            : "opacity-100 translate-y-0"
        }
      `}
    >
      <nav className="px-4 md:px-8 py-4">
        {/* GLASS PANEL */}
        <div
          className="
            mx-auto
            max-w-6xl
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          "
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* LOGO */}
            <a
              href="#"
              className="
                text-white
                font-black
                tracking-[0.3em]
                text-sm md:text-base
              "
            >
              HARVEE
            </a>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex gap-10 text-sm tracking-[0.3em]">
              <a
                href="#about"
                className="
                  text-white/80
                  hover:text-violet-500
                  transition-colors
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-violet-500
                  after:transition-all
                  hover:after:w-full
                "
              >
                ABOUT
              </a>

              <a
                href="#projects"
                className="
                  text-white/80
                  hover:text-pink-500
                  transition-colors
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-pink-500
                  after:transition-all
                  hover:after:w-full
                "
              >
                PROJECTS
              </a>

              <a
                href="#contact"
                className="
                  text-white/80
                  hover:text-cyan-400
                  transition-colors
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                CONTACT
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                text-white
                p-2
                rounded-lg
                hover:bg-white/10
                transition
              "
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all duration-300
              ${
                isOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                border-t border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                px-6 py-5
                flex flex-col gap-5
                tracking-[0.25em]
                text-sm
              "
            >
              <a
                href="#about"
                onClick={closeMenu}
                className="text-white/80 hover:text-violet-500 transition"
              >
                ABOUT
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="text-white/80 hover:text-pink-500 transition"
              >
                PROJECTS
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white/80 hover:text-cyan-400 transition"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}