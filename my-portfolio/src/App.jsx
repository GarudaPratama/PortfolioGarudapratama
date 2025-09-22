import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem("theme");
    if (s) return s === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [active, setActive] = useState("hero");
  const [showTop, setShowTop] = useState(false);

  // persist theme
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const onScroll = () => {
      let current = "hero";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = sec.getAttribute("id") || current;
        }
      });
      setActive(current);
      setShowTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keyboard toggle Shift+D
  const onKey = useCallback((e) => {
    if (e.shiftKey && (e.key === "D" || e.key === "d")) setDark((v) => !v);
  }, []);
  useEffect(() => { window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [onKey]);

  return (
    <div className={`${dark ? "dark bg-[#05060a] text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
      <Navbar dark={dark} setDark={setDark} active={active} />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 bg-accent text-black rounded-full shadow-lg"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
