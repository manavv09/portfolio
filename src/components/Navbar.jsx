export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070A12]/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-wide">
          Manav Bharti<span className="text-violet-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a className="hover:text-white transition" href="#about">
            About
          </a>
          <a className="hover:text-white transition" href="#skills">
            Skills
          </a>
          <a className="hover:text-white transition" href="#projects">
            Projects
          </a>

          <a href="/RESUME.pdf"
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold"
>
  Resume
</a>


          <a className="hover:text-white transition" href="#contact">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
