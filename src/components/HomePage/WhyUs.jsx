"use client";

import { data } from "@/data/whyUsData";
import { motion } from "framer-motion";

const WhyUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <section className="text-slate-800 py-16 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-gray-50 to-white"
          initial={{ opacity: 0.8 }}
          animate={{
            background: [
              "linear-gradient(45deg, #ffffff 0%, #f8fafc 100%)",
              "linear-gradient(45deg, #f8fafc 0%, #ffffff 100%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Dots */}
        <motion.div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-200"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Why Us
            </span>
          </h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Flexbox Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative flex flex-col items-center text-center p-6"
            >
              <motion.div
                className="text-6xl text-blue-500"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-2xl font-bold mt-4 text-slate-800">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mt-2 max-w-sm">
                {item.description}
              </p>

              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
