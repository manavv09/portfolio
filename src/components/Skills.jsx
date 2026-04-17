import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  Globe 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="text-accent-primary" />,
    skills: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    icon: <Server className="text-accent-secondary" />,
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Data & Storage",
    icon: <Database className="text-accent-primary" />,
    skills: ["MongoDB", "Firebase", "State Management"],
  },
  {
    title: "Dev & Tools",
    icon: <Cpu className="text-accent-secondary" />,
    skills: ["Git & GitHub", "Vite", "Postman", "NPM/Yarn"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[2.5rem] md:text-5xl font-black leading-tight">
            Technical <span className="text-accent-primary">Arsenal</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl text-lg">
            A comprehensive overview of the technologies I use to build scalable, high-performance web applications.
            I want to learn more about AI. I make a project of AI chat App using Gemini API.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 glass px-6 py-3 rounded-2xl border-white/5"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-accent-muted border border-background" />
            ))}
          </div>
          <p className="text-sm font-semibold text-white/80">Continuous Learning</p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={itemVariants}
            className="group glass-card p-6 rounded-3xl md:p-8 md:rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-accent-primary/10 transition-colors" />
            
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              {cat.icon}
            </div>

            <h3 className="text-xl font-bold mb-6 group-hover:text-accent-primary transition-colors">{cat.title}</h3>

            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-accent-secondary" />
                  <span className="text-sm font-medium text-white/70">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

