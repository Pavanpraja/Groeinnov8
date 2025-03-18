"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#3F2EFF] flex items-center">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('/herosection/background.png')] bg-cover bg-center opacity-40 backdrop-blur-[2rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center max-[1335px]:gap-[1rem] w-full mx-auto">
          {/* Left Content */}
          <motion.div
            className="text-white text-center md:text-left md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold leading-tight max-[1335px]:text-[2.4rem] min-[1335px]:text-[2.5rem] max-[1135px]:text-[2rem] bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              Your strategic partner for end 2 end digital and innovation
              transformation journey
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Fueling sustainable business growth and client success through
              innovative technology solutions, domain expertise, and
              cutting-edge actionable insights.
            </p>
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg font-medium shadow-md cursor-pointer"
              >
                Let’s Get in Touch ➤
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/herosection/groeinnvo8banner1.png"
              alt="AI Robot"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
