import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent-primary/30 selection:text-accent-secondary">
      {/* Dynamic Background */}
      <div className="mesh-bg" />
      
      <AnimatePresence>
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </AnimatePresence>
    </div>
  );
}
