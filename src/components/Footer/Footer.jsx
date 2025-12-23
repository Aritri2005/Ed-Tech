import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020617] text-gray-400 py-6 sm:py-8 text-center text-sm sm:text-base border-t border-gray-700">
      <p className="mb-2 sm:mb-3">
        © {new Date().getFullYear()} Created by Aritri Saha. All rights
        reserved.
      </p>
      <p>Powered by EdTech</p>
    </footer>
  );
};

export default Footer;
