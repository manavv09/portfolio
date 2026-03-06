const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        Skills <span className="text-violet-400">Stack</span>
      </h2>

      <p className="mt-4 text-white/70 max-w-2xl">
        Technologies I use to build responsive and modern web applications.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s}
            className="rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-violet-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            <p className="font-semibold">{s}</p>
            <p className="text-sm text-white/60 mt-1">
              {/* Comfortable in building real projects. */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
