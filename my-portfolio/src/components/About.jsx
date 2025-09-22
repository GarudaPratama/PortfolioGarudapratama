import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="./garuda.png"
            alt="Garuda"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-accent hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
              Gue Garuda — frontend developer fokus bikin UI yang rapi, cepat, dan enak dipakai.
              Suka eksplorasi animasi, micro-interaction, dan bikin kode yang gampang dirawat.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg shadow hover:shadow-accent/40"
              >
                3+ years building interfaces
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg shadow hover:shadow-accent/40"
              >
                React, Tailwind, Animation
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
