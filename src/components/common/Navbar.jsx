"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navbarData";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
        scrolling ? "bg-white box-shadow py-6" : "bg-white py-6"
      }`}
    >
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              width={200}
              height={46}
              src="/navbar/Groeinnov8_logo.png"
              alt="Groeinnov8_logo"
              className="transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-blue-600 font-medium text-lg transition-all duration-200 ${
                index === 0 && "text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-22 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
