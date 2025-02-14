"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-transparent p-4 z-50 shadow-md backdrop-blur-lg">
      <nav className="flex justify-between items-center mx-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-bold text-3xl md:text-4xl text-white">
            Jaya
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <ul className="flex gap-6 text-lg text-white">
            {["Home", "Certifications", "Experience", "Gallery", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item}`} className="hover:text-gray-300 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <Link href="https://github.com" target="_blank" className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Resume
            </Link>
            <Link href="https://github.com" target="_blank" className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Github
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-3xl sm:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-80 text-white text-2xl space-y-6 z-40">
          <button className="absolute top-4 right-6 text-3xl" onClick={() => setIsOpen(false)}>
            ✖
          </button>
          {["Home", "Certifications", "Experience", "Gallery", "Blog", "Contact"].map((item) => (
            <Link key={item} href={`/${item}`} className="hover:text-gray-400 transition duration-300" onClick={() => setIsOpen(false)}>
              {item}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 mt-6">
            <Link href="https://github.com" target="_blank" className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Resume
            </Link>
            <Link href="https://github.com" target="_blank" className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Github
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
