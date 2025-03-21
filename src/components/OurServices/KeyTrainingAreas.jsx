
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cards } from '@/data/ourServicesData';
import useOurServices from '@/hooks/useOurServices';
import { useEffect } from 'react';

export default function KeyTrainingAreas() {
  const { direction, isImageLoaded, currentIndex, cardVariants, nextCard, prevCard, goToSlide, handleImageLoad, pauseAutoScroll, resumeAutoScroll } = useOurServices();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="py-6 bg-gray-100">

      <main className="w-[80%] mx-auto py-12">
        <h1 className="text-3xl font-bold mb-12 text-blue-600">Key Training Areas</h1>

        <div 
          className="relative overflow-hidden h-[428px] max-[500px]:h-[462px] max-[414px]:h-[485px]"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 bg-white rounded-lg shadow-lg">
                <div className="md:w-1/2 p-6" data-aos="fade-right">
                  <h2 className="text-2xl font-bold mb-4">{cards[currentIndex].title}</h2>
                  
                  {cards[currentIndex].technologies && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Technologies Covered:</p>
                      <p className="text-gray-700">{cards[currentIndex].technologies}</p>
                    </div>
                  )}
                  
                  {cards[currentIndex].objective && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Objective:</p>
                      <p className="text-gray-700">{cards[currentIndex].objective}</p>
                    </div>
                  )}
                  
                  {cards[currentIndex].description && (
                    <p className="text-gray-700 mb-4">{cards[currentIndex].description}</p>
                  )}
                  
                  {cards[currentIndex].cta && (
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                      {cards[currentIndex].cta}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  )}
                </div>
                
                <div className="md:w-1/2 relative h-64 md:h-96" data-aos="fade-left">
                  <div className="w-full h-full relative overflow-hidden rounded-lg shadow-md">
                    {!isImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={cards[currentIndex].image}
                      alt={cards[currentIndex].title}
                      layout="fill"
                      quality={80}
                      priority={true}
                      objectFit="cover"
                      onLoadingComplete={handleImageLoad}
                      className={`transform aspect-auto transition-all duration-500 hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`h-1 w-8 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 w-10' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevCard}
            className="absolute left-4 cursor-pointer bottom-1 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white focus:outline-none transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button
            onClick={nextCard}
            className="absolute left-28 cursor-pointer bottom-1 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:bg-white focus:outline-none transition-colors duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </main>
    </div>
  );
}