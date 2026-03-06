export default function About() {
  return (
    <section id="about" className="px-4 py-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            About <span className="text-violet-400">Me</span>
          </h2>

          <p className="mt-5 text-white/70 leading-relaxed">
            I’m a fresher MERN Stack Developer focused on building modern web
            apps with clean UI, responsive design and smooth user experience.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            I enjoy creating real-world projects using React, Tailwind, Node.js,
            Express and MongoDB. I’m currently improving my full-stack skills
            and building more portfolio-ready apps.
          </p>
        </div>

        <div className="rounded-[2rem] p-8 bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold">Quick Info</h3>

          <div className="mt-6 space-y-3 text-white/75">
            <p>
              <span className="text-white/50">Name:</span> Manav Bharti
            </p>
            <p>
              <span className="text-white/50">Role:</span> MERN Stack Developer
            </p>
            <p>
              <span className="text-white/50">Experience:</span> Fresher
            </p>
            <p>
              <span className="text-white/50">Focus:</span> React + Full Stack
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block mt-7 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
