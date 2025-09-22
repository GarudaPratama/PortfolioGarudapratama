import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaFigma } from "react-icons/fa";

const skills = [
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <FaJs size={40} />, name: "JavaScript" },
  { icon: <FaHtml5 size={40} />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} />, name: "CSS3" },
  { icon: <FaFigma size={40} />, name: "Figma" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-accent/30 transition"
            >
              <div className="text-accent flex justify-center">{skill.icon}</div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
