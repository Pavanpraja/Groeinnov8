"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const backgroundImage = "/whoweare/background.png";
const consultingImage = "/whoweare/consulting.png";

export default function WhoWeAre() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[80%] mx-auto flex items-center justify-between">
        {/* Background Motion Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full opacity-40 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between max-[1335px]:gap-[1rem] relative z-10">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600">
              Who we are
            </h2>
            <p className="text-sm md:text-md leading-relaxed mb-3">
              Groei Solutions Pvt. Ltd. is a digital transformation company
              founded from India, specialized in a variety of digital
              transformation and innovation using best-in-class Low Code Web/App
              Development or Business Process Automation Technologies (REACT,
              Appian, Mendix, Power Apps, Power Automate, UI Path, Automation
              Anywhere, etc.), Analytics platforms (MicroStrategy, Power BI,
              Tableau, etc.), and bringing Generative AI through market leaders
              like Azure Open AI, AWS Bedrock, Microsoft Co-Pilots, Google
              Vertex, etc.
            </p>
            <p className="text-sm md:text-md leading-relaxed mb-3">We empower businesses worldwide, including in North America, Europe, and Japan, by delivering advanced, tailored IT solutions. Our team of seasoned experts leverages the latest technologies to build, transform, and manage IT operations, ensuring transparency, honesty, and efficiency in everything we do</p>
            <Link href="/about-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white shadow-md px-6 py-3 rounded-lg transition cursor-pointer"
              >
                Read More ➤
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={600}
              height={600}
              src={consultingImage}
              alt="Consulting"
              className="rounded-3xl shadow-lg w-full max-w-sm md:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
