import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070A12]/70 backdrop-blur border-b border-white/10">
      
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="font-bold text-lg tracking-wide text-white">
          Manav Bharti<span className="text-violet-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#skills">Skills</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>

          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold"
          >
            Resume
          </a>

          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>

        {/* Hire Me (Desktop only) */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 rounded-xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-[#070A12] text-white/80">

          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>

          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl border border-white/20"
          >
            Resume
          </a>

          <a onClick={() => setOpen(false)} href="#contact">Contact</a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-xl bg-white text-black font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}