import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-center text-gray-300">
      <p>© {new Date().getFullYear()} Garuda. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
