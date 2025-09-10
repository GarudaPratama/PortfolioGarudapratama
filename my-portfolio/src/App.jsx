import React from "react";
import { motion } from "framer-motion";

// Variants animasi
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Garuda</h1>
          <ul className="flex space-x-6 font-medium">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="hero"
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/garuda.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Hi, I’m Garuda 👋
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Frontend Developer | UI/UX Enthusiast
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </header>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl font-bold mb-8 text-blue-600 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Gue Garuda, seorang frontend developer yang suka bikin web modern,
          interaktif, dan responsif. Fokus gue ada di desain clean, performa
          kenceng, dan pengalaman pengguna yang maksimal. Passion gue ada di
          menciptakan UI yang elegan dengan UX yang intuitif.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12 text-blue-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["HTML5", "CSS3 / Tailwind", "JavaScript", "React.js"].map(
              (skill, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-lg font-semibold"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-600 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Thumbnail {p}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
                <p className="text-gray-600 mb-4">
                  Deskripsi singkat tentang project ini, apa teknologi yang
                  dipakai, dan apa hasilnya.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Lihat Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-blue-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="mb-8 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Punya project atau ide? Yuk ngobrol bareng gue 👇
          </motion.p>
          <motion.a
            href="mailto:garuda@example.com"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            garuda@example.com
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Garuda. All rights reserved.</p>
      </footer>
    </div>
  );
}
