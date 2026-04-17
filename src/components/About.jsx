import { motion } from "framer-motion";
import { User, Code2, Rocket, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { icon: User, label: "Role", value: "MERN Stack Developer" },
    { icon: Code2, label: "Focus", value: "React + Full Stack" },
    { icon: Rocket, label: "Experience", value: "Fresher / Passionate" },
    { icon: Heart, label: "Passions", value: "Clean Code & UI/UX" },
  ];

  return (
    <section id="about" className="px-6 py-16 md:py-24 max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] md:text-5xl font-black mb-8 leading-tight">
            The Journey <span className="text-accent-primary">of Craft</span>
          </h2>

          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              I’m a dedicated <span className="text-white font-semibold">Frontend Developer</span> with a relentless focus on creating high-performance, visually stunning web applications. I believe that great software is the intersection of clean architecture and exceptional user experience.
            </p>

            <p>
              My toolkit includes the latest modern frontend and backend technologies. I thrive on solving complex problems and turning ideas into functional, beautiful realities using <span className="text-accent-secondary font-medium">React, Node.js, and MongoDB.</span>
            </p>

            <p>
              Currently, I'm pushing the boundaries of what's possible in the full-stack ecosystem, constantly learning and building projects that push my skills to the next level.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:scale-105 transition-all"
            >
              Start a Project
            </a>
            <div className="hidden sm:flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-accent-muted flex items-center justify-center text-[10px] font-bold">
                  {i}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background glass flex items-center justify-center text-[10px] font-bold">
                +
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-[2.5rem] blur opacity-20" />
          <div className="relative glass-card p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                <User size={18} />
              </span>
              Quick Snapshot
            </h3>

            <div className="grid gap-6">
              {stats.map((stat, i) => (stat.label !== "Role" || stat.value !== "MERN Stack Developer") && (
                <div key={stat.label} className="group">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 group-hover:text-accent-secondary transition-colors">{stat.label}</p>
                  <p className="text-lg font-semibold text-white/90">{stat.value}</p>
                </div>
              ))}
              {/* Special rendering for Role to avoid duplicate keys logic or just map correctly */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 group-hover:text-accent-primary transition-colors">Role</p>
                <p className="text-xl font-bold text-white tracking-tight">Frontend Developer</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1 group-hover:text-accent-secondary transition-colors">Experience</p>
                <p className="text-xl font-bold text-white tracking-tight">Fresher / Open to roles</p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-sm text-white/40 leading-relaxed italic">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

