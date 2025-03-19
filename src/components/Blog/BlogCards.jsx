"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { blogPosts } from "@/data/blogPostsData";
import Link from "next/link";

export default function BlogCards() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 pb-10 pt-[13rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-[1280px]:gap-6">
        {blogPosts?.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            data-aos="fade-up"
          >
            <Link href={`${post.href}`}>
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl hover:scale-[1.2] transition-all duration-500 ease-in-out"
                />
              </div>
            </Link>
            <div className="p-5">
              <p className="text-sm text-blue-500 font-semibold">
                {post.category}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mt-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {post.author} / {post.date}
              </p>
              <p className="text-gray-700 mt-3">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
