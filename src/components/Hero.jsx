export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 pb-16 px-4 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-white/70 text-sm mb-3">
            👋 Hello, I’m
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Manav <span className="text-violet-400">Bharti</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80">
            MERN StackDeveloper
          </p>

          <p className="mt-5 text-white/70 leading-relaxed">
            I’m a fresher MERN stack developer who loves building clean,
            responsive and modern web applications. I enjoy working on frontend
            UI, APIs.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-2xl bg-violet-500 hover:bg-violet-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="https://github.com/manavv09"
              target="_blank"
              className="px-5 py-3 rounded-2xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/manav-bharti-10a03323a"
              target="_blank"
              className="px-5 py-3 rounded-2xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition font-semibold"
            >
              LinkedIn
            </a>

            <a
  href="/RESUME.pdf"
  target="_blank"
  download
  className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.03] active:scale-[0.98] transition"
>
  Download Resume
</a>

          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500/20 to-cyan-400/10 blur-2xl rounded-[2rem]" />
          <div className="relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
            <p className="text-sm text-white/60">Currently learning</p>
            <h3 className="mt-2 text-2xl font-bold">
                Learning about Backend
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
                "GitHub",
                "REST APIs",
                "UI/UX",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 text-white/80"
                >
                  {skill}
                </div>
              ))}
            </div>

            <p className="mt-6 text-white/60 text-sm leading-relaxed">
              I build projects that look modern and work smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
