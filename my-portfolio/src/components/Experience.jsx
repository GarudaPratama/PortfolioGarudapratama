import React from "react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Senior Visual Designer", org: "Studio X" },
  { year: "2022", title: "UI Designer", org: "Agency Y" },
  { year: "2020", title: "Junior Designer", org: "Freelance" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience</motion.h3>

        <div className="relative">
          <div className="border-l border-gray-200 dark:border-gray-800 absolute inset-y-0 left-6"></div>
          <div className="pl-12 space-y-8">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.12 }} className="bg-white/60 dark:bg-[#071018] p-6 rounded-xl shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t.org}</p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
