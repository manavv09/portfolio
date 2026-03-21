const projects = [
  {
    title: "Currency Converter",
    desc: "A modern currency converter with clean UI and real-time conversion experience.",
    live: "https://manavv09.github.io/Currency-Exchange-Rate/",
    github: "https://github.com/manavv09/Currency-Exchange-Rate",
    tech: ["React", "API", "Tailwind"],
  },
  {
    title: "Todo List App",
    desc: "A responsive todo list app with smooth UI, task management and clean layout.",
    live: "https://manavv09.github.io/TODO-List/",
    github: "https://github.com/manavv09/TODO-List",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Canvas Project",
    desc: "A creative interactive canvas project built with modern frontend styling.",
    live: "https://manavv09.github.io/Canvas/",
    github: "https://github.com/manavv09/Canvas",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    desc: "Weather app using API with clean UI.",
    live: "weather-app-eta-peach-27.vercel.app",
    github: "https://github.com/manavv09/Weather-App",
    tech: ["React", "API", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        My <span className="text-violet-400">Projects</span>
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl">
        Here are some projects I built to improve my skills and create real
        portfolio work.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-[2rem] p-7 bg-white/5 border border-white/10 hover:border-violet-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>

            <p className="mt-3 text-white/70 leading-relaxed">{p.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-black/30 border border-white/10 text-white/75 group-hover:border-violet-400/30 transition"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
            {p.live && (
  <a
    href={p.live}
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-600 transition font-semibold hover:scale-[1.03] active:scale-[0.98]"
  >
    Live
  </a>
)}


              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold hover:scale-[1.03] active:scale-[0.98]"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
