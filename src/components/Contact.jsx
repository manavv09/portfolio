import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-bold text-accent-primary uppercase tracking-widest mb-8">
          <MessageSquare size={14} />
          Get In Touch
        </div>

        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Let’s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Extraordinary</span>
        </h2>

        <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Currently open to new opportunities and collaborations. If you have an idea or just want to chat, my inbox is always open.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:yourmail@gmail.com"
            className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-black text-lg shadow-2xl shadow-white/10"
          >
            <Mail size={22} />
            Email Me
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/manavv09"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass border-white/10 hover:border-white/30 text-white"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/manav-bharti-10a03323a"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass border-white/10 hover:border-white/30 text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/30 font-medium">
            © 2024 Manav Bharti. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-white/30 font-bold uppercase tracking-widest">
            <span className="hover:text-accent-primary transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-accent-secondary transition-colors cursor-pointer">Terms</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

