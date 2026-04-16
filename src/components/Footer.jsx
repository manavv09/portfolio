export default function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-black tracking-tight">
            Manav<span className="text-accent-primary">Bharti</span>
          </div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
            Crafting Digital Excellence
          </p>
        </div>

        <div className="flex items-center gap-10 text-sm font-bold text-white/40 uppercase tracking-widest">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
        </div>

        <div className="text-right">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Modern Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}

