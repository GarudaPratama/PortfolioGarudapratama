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
          {/* Foto */}
          <motion.img
            src="/profile.jpg"
            alt="Garuda"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100">
              Gue Garuda — frontend developer fokus bikin UI yang rapi, cepat,
              dan enak dipakai. Gue suka eksplorasi animasi, micro-interaction,
              dan bikin kode yang gampang dirawat. Kalau lu cari frontend dev
              yang peka sama UX, kita bisa kerja bareng.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg shadow">
                3+ years building interfaces
              </div>
              <div className="px-4 py-2 bg-gray-800 text-blue-400 rounded-lg shadow">
                React, Tailwind, Animation
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
