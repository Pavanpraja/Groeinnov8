"use client";

import { data } from "@/data/whyUsData";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <section className="text-white py-16 bg-[#1C1835] z-[-10]">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-12 w-[80%] mx-auto text-center">
        Why Us
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto w-[80%] relative">
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('/whyus/background.png')] bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-transparent px-6 py-10 rounded-xl border-[#c667e3] border-[.1rem] shadow-lg flex flex-col items-center text-center w-full sm:w-[48%] lg:w-[30%] z-[100]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl text-blue-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
