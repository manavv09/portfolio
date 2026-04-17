import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ExternalLink } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skills = [
    "React", "Node.js", "MongoDB",
    "Tailwind", "REST APIs", "JavaScript", "UI/UX",
  ];

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-48 pb-16 md:pb-20 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="relative z-10">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-semibold text-accent-secondary mb-6 capitalize">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/60 font-medium mb-3">
            👋 Hello, I’m
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-[2.75rem] md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6">
            Manav <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] animate-gradient-flow">
              Bharti
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 font-medium mb-6">
            <span className="text-white">Frontend Developer</span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-white/60 leading-relaxed text-lg max-w-xl mb-10">
            {/* Crafting high-performance, visually stunning web applications with the latest technologies. Passionate about clean code and exceptional user experiences. */}
            I am a frontend developer with a strong foundation in web development and a passion for creating beautiful, user-friendly interfaces. I am a quick learner and am always looking to expand my skill set.
            Currently learning backend development and AI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-white/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={18} />
            </a>

            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/manavv09", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/manav-bharti-10a03323a", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass border-white/10 hover:border-white/30 hover:bg-white/10 transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
              <a
                href="/RESUME.pdf"
                target="_blank"
                download
                className="p-4 rounded-2xl glass border-white/10 hover:border-white/30 hover:bg-white/10 transition-all hover:-translate-y-1"
                title="Download Resume"
              >
                <FileText size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="relative lg:ml-auto w-full max-w-[500px]"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[100px] animate-pulse-slow" />
          
          <div className="relative glass-card p-6 md:p-10 rounded-3xl md:rounded-[3rem] border border-white/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <p className="text-sm font-bold text-accent-secondary uppercase tracking-widest mb-6">Expertise</p>
            <h3 className="text-3xl font-bold mb-8">
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.05) }}
                  className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/skill hover:bg-white/10 hover:border-accent-primary/30 transition-all cursor-default"
                >
                  <span className="text-sm font-medium text-white/80 group-hover/skill:text-white transition-colors">{skill}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary/40 group-hover/skill:bg-accent-primary transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm italic leading-relaxed">
                "Developing scalable architectures with clean, maintainable code."
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

