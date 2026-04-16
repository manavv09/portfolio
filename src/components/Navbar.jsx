import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 px-4" : "py-5 px-4"
      }`}
    >
      <nav 
        className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-500 rounded-2xl ${
          scrolled ? "glass shadow-2xl shadow-accent-primary/5 border-white/10" : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <motion.a 
          href="#home" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight text-white group"
        >
          Manav<span className="text-accent-primary group-hover:text-accent-secondary transition-colors duration-300">Bharti</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-white/70">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-semibold"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg glass text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mt-2"
          >
            <div className="flex flex-col items-center gap-5 py-8 rounded-2xl glass mx-auto max-w-[95%]">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  onClick={() => setOpen(false)} 
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col w-full px-10 gap-3 mt-2">
                <a
                  href="/RESUME.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl border border-white/10 glass text-center font-semibold"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-center font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}