"use client";

import { publications } from "@/data/publicationsData";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Publications() {
  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-8">
        Our Publications
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-[80%] mx-auto">
        {publications.map((pub, index) => (
          <Link href={pub.link} key={pub.id}>
          <motion.div
            className="w-full sm:w-60 xl:w-70 2xl:w-80 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={pub.image}
              alt={pub.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm">{pub.date}</p>
              <a
                href={pub.link}
                className="text-green-500 font-medium mt-2 block"
              >
                Read More ➤
              </a>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
