import { motion } from "framer-motion";
import { Github, ExternalLink, Globe, Layout, Code } from "lucide-react";

const projects = [
  {
    title: "Ai-Chat-App",
    desc: "An AI-powered chatbot application that can answer your questions and provide helpful information.",
    live: "https://ai-chat-app-two-henna.vercel.app/",
    github: "https://github.com/manavv09/Ai-Chat-App",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Gemini API"],
    category: "Web App",
  },
  {
    title: "Currency Converter",
    desc: "A high-performance currency conversion engine with real-time exchange rates and a precision-focused UI.",
    live: "https://manavv09.github.io/Currency-Exchange-Rate/",
    github: "https://github.com/manavv09/Currency-Exchange-Rate",
    tech: ["React", "Rest API", "Tailwind"],
    category: "Web App",
  },
  {
    title: "Todo List",
    desc: "Advanced task management system with persistent storage, filtering, and seamless user interaction design.",
    live: "https://manavv09.github.io/TODO-List/",
    github: "https://github.com/manavv09/TODO-List",
    tech: ["React", "JavaScript", "LocalStorage"],
    category: "Tooling",
  },
  {
    title: "Creative Canvas",
    desc: "Interactive visual environment built on low-level canvas APIs for smooth, high-frame-rate rendering.",
    live: "https://manavv09.github.io/Canvas/",
    github: "https://github.com/manavv09/Canvas",
    tech: ["HTML5 Canvas", "Modern CSS", "JS"],
    category: "Graphics",
  },
  {
    title: "Dynamic Weather",
    desc: "Real-time hyper-local weather forecasting application with beautifully animated climatic conditions.",
    live: null,
    github: "https://github.com/manavv09/Weather-App",
    tech: ["React", "OpenWeather API", "Vite"],
    category: "Web App",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[2.5rem] md:text-5xl font-black leading-tight">
            Featured <span className="text-accent-secondary">Creations</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl text-lg">
            A selection of my recent works where architecture meets creativity.
            Each project solves a unique challenge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/manavv09"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:bg-white/10 transition-all font-semibold"
          >
            Check GitHub
            <Github
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            className="group relative glass-card rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/5"
          >
            {/* Project Card Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] -mr-32 -mt-32" />

            <div className="relative p-6 md:p-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent-secondary group-hover:border-accent-secondary/30 transition-colors">
                  {p.category}
                </span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-primary/30" />
                  <div className="w-2 h-2 rounded-full bg-accent-secondary/30" />
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-4 group-hover:text-accent-primary transition-colors duration-300">
                {p.title}
              </h3>

              <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-[11px] font-semibold text-white/80"
                  >
                    <div className="w-1 h-1 rounded-full bg-accent-primary" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                {p.live && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-bold text-sm shadow-xl shadow-white/5"
                  >
                    <Globe size={18} />
                    Live Demo
                  </motion.a>
                )}

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl glass border-white/10 hover:border-white/30 text-white font-bold text-sm"
                >
                  <Github size={18} />
                  Codebase
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
