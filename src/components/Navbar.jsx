export default function Navbar({ hidden }) {
  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-40
        transition-all duration-500
        ${hidden ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"}
      `}
    >
      <nav className="flex items-center px-10 py-5">

        {/* LEFT SIDE LINKS */}
        <div className="flex gap-10 text-sm tracking-[0.3em]">
          <a
            href="#about"
            className="
              text-white/80
              hover:text-violet-600
              transition-colors duration-300
              relative
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-violet-600
              after:transition-all
              hover:after:w-full
              cursor-pointer
            "
          >
            ABOUT
          </a>

          <a
            href="#projects"
            className="
              text-white/80
              hover:text-[#FF007F]
              transition-colors duration-300
              relative
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-[#FF007F]
              after:transition-all
              hover:after:w-full
              cursor-pointer
            "
          >
            PROJECTS
          </a>

          <a
            href="#contact"
            className="
              text-white/80
              hover:text-cyan-400
              transition-colors duration-300
              relative
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-cyan-400
              after:transition-all
              hover:after:w-full
              cursor-pointer
            "
          >
            CONTACT
          </a>

        </div>

      </nav>
    </header>
  );
}