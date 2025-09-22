import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  // cursor blob
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["repulse", "bubble"] },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              bubble: { distance: 200, size: 10, duration: 2 },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 900 } },
            color: { value: ["#06b6d4", "#7c3aed", "#d946ef", "#22d3ee"] },
            links: { enable: true, distance: 150, color: "#06b6d4", opacity: 0.2 },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: { default: "bounce" },
            },
            size: { value: { min: 2, max: 6 }, random: true },
            opacity: { value: 0.7, random: { enable: true, minimumValue: 0.2 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* cursor-following blob */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-20 blur-3xl pointer-events-none"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 relative z-10"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 drop-shadow-lg">
          Garuda
        </h1>

        <div className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Brand & Visual Designer",
              2000,
              "Creative Direction",
              2000,
              "Motion & UI Experiments",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="ripple inline-block px-6 py-3 bg-accent text-black rounded-full font-semibold shadow-lg hover:shadow-accent/40 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 py-3 border border-white/10 text-white rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}
