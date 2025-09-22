import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

// Animasi reusable
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function App() {
  const [active, setActive] = useState("hero");

  // Scroll spy buat highlight navbar
  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const handleScroll = () => {
      let current = "hero";
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Garuda</h1>
          <ul className="flex space-x-6 font-medium">
            {["hero", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transition ${
                    active === item
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <motion.div
          className="relative z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Hi, I’m Garuda 👋
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-blue-200">
            Frontend Developer | UI/UX Enthusiast | Creative Coder
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
          >
            Let’s Connect
          </a>
        </motion.div>
      </header>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-blue-600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <img
            src="/garuda.png"
            alt="Garuda"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-500"
          />
          <p className="text-lg leading-relaxed text-gray-700 max-w-xl text-left">
            Gue Garuda, seorang frontend developer yang suka bikin web modern,
            interaktif, dan responsif. Fokus gue ada di desain clean, performa
            kenceng, dan pengalaman pengguna yang maksimal. Passion gue ada di
            menciptakan UI yang elegan dengan UX yang intuitif.
          </p>
        </motion.div>
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: <FaHtml5 className="text-orange-600 text-5xl" />, name: "HTML" },
              { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, name: "CSS" },
              { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
              { icon: <FaPython className="text-blue-400 text-5xl" />, name: "Python" },
              { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React.js" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="mt-4 text-lg font-semibold">{skill.name}</span>
              </motion.div>
            ))}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={`https://picsum.photos/500/300?random=${p}`}
                  alt={`Project ${p}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
                <p className="text-gray-600 mb-4">
                  Deskripsi singkat tentang project ini, apa teknologi yang
                  dipakai, dan apa hasilnya.
                </p>
                <a href="#" className="text-blue-600 hover:underline font-medium">
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
            className="mb-8 text-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Punya project atau ide? Yuk ngobrol bareng gue 👇
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a href="mailto:garuda@example.com" className="text-red-500 hover:scale-110 transition">
              <FaEnvelope />
            </a>
            <a href="https://linkedin.com/in/garuda" className="text-blue-700 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/garuda" className="text-gray-800 hover:scale-110 transition">
              <FaGithub />
            </a>
            <a href="https://instagram.com/garuda" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Garuda. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
