export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 max-w-6xl mx-auto">
      <div className="rounded-[2rem] p-8 md:p-12 bg-gradient-to-tr from-violet-500/20 to-cyan-400/10 border border-white/10">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Contact <span className="text-violet-300">Me</span>
        </h2>

        <p className="mt-4 text-white/70 max-w-2xl">
          If you want to work with me or have any opportunity, feel free to
          contact me.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:yourmail@gmail.com"
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Email Me
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
        </div>
      </div>
    </section>
  );
}
