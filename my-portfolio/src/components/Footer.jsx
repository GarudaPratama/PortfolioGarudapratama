import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // fungsi smooth scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // bikin animasi scroll
    });
  };

  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Garuda. All rights reserved.
        </p>

        {/* Tombol back to top */}
        <motion.button
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="mt-3 inline-block text-accent font-medium hover:underline"
        >
          Back to Top ↑
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
