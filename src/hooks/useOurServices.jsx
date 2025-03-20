'use client';

import { cards } from "@/data/ourServicesData";
import { useState, useEffect, useCallback, useRef } from "react";

const useOurServices = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const [direction, setDirection] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [isImageLoaded, setIsImageLoaded] = useState(false);
const intervalRef = useRef(null);

const autoScroll = useCallback(() => {
  setDirection(1);
  setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  setIsImageLoaded(false); // Reset image loaded state on slide change
}, []);

// Set up auto-scrolling
useEffect(() => {
  if (!isPaused) {
    intervalRef.current = setInterval(autoScroll, 5000); // Change slide every 5 seconds
  }

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [autoScroll, isPaused]);

const pauseAutoScroll = () => {
  setIsPaused(true);
};

const resumeAutoScroll = () => {
  setIsPaused(false);
};

const handleImageLoad = () => {
  setIsImageLoaded(true);
};

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const nextCard = () => {
  pauseAutoScroll(); // Pause auto-scroll when manually navigating
  setDirection(1);
  setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  setIsImageLoaded(false); // Reset image loaded state on slide change

  // Resume auto-scroll after user interaction
  setTimeout(resumeAutoScroll, 8000);
};

const prevCard = () => {
  pauseAutoScroll(); // Pause auto-scroll when manually navigating
  setDirection(-1);
  setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  setIsImageLoaded(false); // Reset image loaded state on slide change

  // Resume auto-scroll after user interaction
  setTimeout(resumeAutoScroll, 8000);
};

const goToSlide = (index) => {
  pauseAutoScroll(); // Pause auto-scroll when manually navigating
  setDirection(index > currentIndex ? 1 : -1);
  setCurrentIndex(index);
  setIsImageLoaded(false); // Reset image loaded state on slide change

  // Resume auto-scroll after user interaction
  setTimeout(resumeAutoScroll, 8000);
};

  return {direction, isImageLoaded, currentIndex, cardVariants, nextCard, prevCard, goToSlide, handleImageLoad, pauseAutoScroll, resumeAutoScroll};
}

export default useOurServices
