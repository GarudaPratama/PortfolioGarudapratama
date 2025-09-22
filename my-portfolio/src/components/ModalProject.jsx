import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const backdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modal = { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } } };

export default function ModalProject({ open, project, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop" initial="hidden" animate="visible" exit="hidden" variants={backdrop}>
          <motion.div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden" variants={modal} initial="hidden" animate="visible" exit="hidden">
            <div className="p-4 flex justify-between items-start border-b border-gray-100 dark:border-gray-800">
              <div>
                <h3 className="text-xl font-semibold">{project?.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{project?.subtitle}</p>
              </div>
              <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                <FaTimes />
              </button>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <img src={project?.image || `https://picsum.photos/seed/${project?.id || 1}/800/500`} alt={project?.title} className="w-full rounded-lg object-cover" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project?.description || "No description provided."}</p>

                <div className="mt-4">
                  <h5 className="font-semibold">Tech</h5>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {(project?.tech || ["React", "Tailwind", "API"]).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  {project?.demo && <a href={project.demo} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Demo</a>}
                  {project?.repo && <a href={project.repo} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">Repo</a>}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
