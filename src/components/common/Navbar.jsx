"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navbarData";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-[1.4rem] md:px-12 flex items-center justify-between relative">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center space-x-2">
            <Link href="/">
            <span className="text-blue-600 text-4xl">
              <Image
                width={200}
                height={46}
                src="/navbar/Groeinnov8_logo.png"
                alt="Groeinnov8_logo"
              />
            </span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-800">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-blue-600 font-medium text-lg ${index === 0 && "text-blue-600"}`}
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
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
