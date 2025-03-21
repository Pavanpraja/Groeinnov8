"use client";

import { sections } from "@/data/interactiveInfoBlocksData";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InteractiveInfoBlocks() {
  return (
    <div className="mx-auto py-12">
      <div className="w-[80%] mx-auto flex flex-col gap-[2rem]">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center max-md:items-start gap-[2rem] my-10 space-y-6 md:space-y-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="">
              <motion.h2 className="text-2xl font-bold mb-4 text-gray-900">
                {section.title}
              </motion.h2>
              <motion.p className="text-gray-600 mb-4">
                {section.description}
              </motion.p>
              <Link href={section?.link}>
                <motion.button
                  className="mt-3 px-5 py-3 cursor-pointer bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More ➤
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
