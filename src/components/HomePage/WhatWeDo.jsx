"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="mx-auto py-12">
        {/* Section Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 text-blue-600 mx-auto w-[80%]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What we do
        </motion.h2>

        {/* Main Content */}
        <motion.div
          className="flex w-[80%] mx-auto flex-col md:flex-row items-start justify-center gap-[5rem] bg-white rounded-lg mt-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/whatwedo/technical-service-a-consulting.png"
              alt="Technology"
              width={600}
              height={400}
              className="rounded-3xl object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Technical Services & Consulting
            </h3>
            <ul className="space-y-2">
              {[
                "Digitization & Automation",
                "Data Analytics",
                "Next Gen Reporting",
                "Business Applications including Low & Custom Apps",
                "Bots powered by GenAI",
                "Cloud Solutions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-orange-500">✔</span> {item}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="mt-6 px-5 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
            >
              Read More ➤
            </motion.button>
          </motion.div>
        </motion.div>
    </section>
  );
};

export default WhatWeDo;
