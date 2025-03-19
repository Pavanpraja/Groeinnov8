"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TSC() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50 text-gray-900 pt-[7rem]">
      <div className="w-[80%] mx-auto relative">
        <div className="absolute inset-0 bottom-0">
          <Image
            src="/our_services/divider.png" // Change to your image path
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-[.3]" // Adjust transparency for better readability
          />
        </div>

        {/* content */}
        <div className="container mx-auto px-6 text-center mt-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Services
          </motion.h2>
          <p className="text-lg text-gray-600 mt-4" data-aos="fade-up">
            Technical Services & Consulting
          </p>
        </div>

        <div className="container mx-auto mt-16 px-6 flex flex-col lg:flex-row items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="/our_services/tsc.png"
              alt="Technical Services"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-aos="zoom-in"
            />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="p-6 bg-white shadow-lg rounded-lg"
                data-aos="fade-left"
              >
                <p
                  className="text-md text-gray-700 max-w-3xl mx-auto mt-2"
                  data-aos="fade-up"
                >
                  Groeinnov8 team has deep industry experts delivering multiple
                  technical solutions for different domains & clients globally
                  across different regions/markets. The team believes in
                  delivering not only traditional solutions but adds innovative
                  thinking to make deliverables user friendly and reduce
                  maintenance/operations effort post delivering the solution.
                </p>
                <p>
                  Apart from building the technical solutioning, Groei team does
                  provide technical architecture consulting and design reviews
                  for clients who needs third eye to their solution development.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
