"use client";

import useScrollToTop from "@/hooks/useScrollToTop";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { showScroll, scrollToTop } = useScrollToTop();
  return (
    <>
      {showScroll && (
        <button
          className="fixed bottom-6 cursor-pointer right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 z-[10000]"
          onClick={scrollToTop}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
