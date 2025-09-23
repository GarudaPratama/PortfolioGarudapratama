import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // pas pertama kali load, cek localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
       {/* Logo */}
<motion.a
  href="#hero"
  className="flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
>
  <motion.img
    src="logo-garuda.jpg.jpg" // pastikan ada di folder public/
    alt="Garuda Logo"
    className="h-12 w-auto object-contain" // tinggi fix, lebar otomatis
    whileHover={{ rotate: -2, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  />
</motion.a>


        {/* Menu */}
        <div className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>

        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow"
        >
          {darkMode ? (
            <Sun className="text-yellow-400 w-5 h-5" />
          ) : (
            <Moon className="text-gray-900 dark:text-gray-100 w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
