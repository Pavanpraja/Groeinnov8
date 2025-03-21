'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 pt-[4rem]">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 z-0"></div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Your strategic partner for E2E digital, innovation & transformation journey
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Helping businesses leverage emerging technologies to stay ahead of the curve.
              </motion.p>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-us/about_us.png" 
                  alt="Digital transformation team meeting" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="w-[80%] mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">About us</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
          </div>
          
          <div className="flex items-center gap-12">
            
            <div className="space-y-5" data-aos="fade-left" data-aos-delay="200">
              <p className="text-gray-700 leading-relaxed">
                GreenNext Solutions Private Limited is a leading digital transformation company, dedicated to helping businesses leverage emerging technologies to stay ahead of the curve. We specialize in Microsoft Dynamics 365 and Power Platform, offering an extensive array of services to help our customers thrive on next-generation technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our expertise includes building, transforming, and managing IT operations to deliver advanced solutions tailored to your needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At GreenNext, we bring the expertise of top-tier companies at a more affordable rate. Our team of experts, with over a decade of experience, has been delivering high-quality IT solutions to clients worldwide, including North America, Europe, and Japan. We are committed to finding and working with the best talent to ensure excellent outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
          </div>
          
          <div data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white/10 border-blue-300 border backdrop-blur-md rounded-xl p-8 shadow-lg">
              <p className="text-xl text-center font-light">
                Fueling sustainable business growth and client success through innovative technology solutions, domain expertise, and cutting-edge actionable insights.
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
