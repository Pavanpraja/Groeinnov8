"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const CommentSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-8 shadow-lg bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-lg" data-aos="fade-up">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Leave a Comment
        </motion.h2>

        <p className="text-gray-600 mb-4 text-sm" data-aos="fade-left">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-500">*</span>
        </p>

        {/* Comment Box */}
        <motion.textarea
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          placeholder="Type here..."
          className="w-full h-28 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none shadow-sm"
          data-aos="fade-up"
        />

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            type="text"
            placeholder="Name*"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none shadow-sm"
            data-aos="fade-right"
          />

          <motion.input
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            type="email"
            placeholder="Email*"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none shadow-sm"
            data-aos="fade-right"
          />

          <motion.input
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="text"
            placeholder="Website"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none shadow-sm"
            data-aos="fade-right"
          />
        </div>

        {/* Save Info Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 mt-4"
          data-aos="fade-up"
        >
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
          />
          <label className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-500 cursor-pointer text-white font-medium py-3 rounded-lg transition-all shadow-lg"
          data-aos="fade-up"
        >
          Post Comment
        </motion.button>
      </div>
      {/* Title */}
    </div>
  );
};

export default CommentSection;
