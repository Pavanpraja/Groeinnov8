"use client";

import { links } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 relative">
      <div className="container flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto">
        <p className="text-gray-600 text-sm">
          © 2025 | All Rights Reserved |{" "}
          <span className="font-semibold">Groeinnov8</span>
        </p>
        <nav className="flex gap-5 mt-4 md:mt-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-blue-500 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
