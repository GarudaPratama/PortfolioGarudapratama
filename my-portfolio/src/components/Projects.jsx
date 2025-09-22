import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "Website pribadi dengan animasi interaktif", img: "https://via.placeholder.com/400x200" },
  { title: "E-commerce UI", desc: "Frontend e-commerce modern dengan React & Tailwind", img: "https://via.placeholder.com/400x200" },
  { title: "Dashboard App", desc: "Dashboard interaktif dengan chart dan data real-time", img: "https://via.placeholder.com/400x200" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer 
                hover:shadow-accent/40 hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
