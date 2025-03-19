"use client";

import { tools } from "@/data/toolsSectionData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="py-18 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-16">
        Fuel your processes with market leading tools and cloud services
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-[80%] mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="px-1 pt-3 pb-5 bg-white shadow-lg rounded-xl flex flex-col items-center w-28 md:w-32"
          >
            <Image
              src={tool.img}
              alt={tool.name}
              width={100}
              height={100}
              className={`mb-3 w-[5rem] ${
                index !== 6 ? "p-3" : "mt-[-.5rem]"
              } ${(index === 14 || index === 15) && "w-[7rem] h-[5rem]"}`}
            />
            <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
