import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white flex items-center space-x-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hi, I’m Garuda</span>
        <span className="animate-bounce">👋</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        className="mt-4 text-2xl text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <TypeAnimation
          sequence={["Creative Coder", 2000, "Frontend Developer", 2000, "UI/UX Enthusiast", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default HeroSection;
