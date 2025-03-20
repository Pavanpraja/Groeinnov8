import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { featuresData } from '@/data/ourServicesData';

export default function WhoToTrain() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="w-[80%] mx-auto py-12">
        <section className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl font-bold text-blue-600 mb-5"
          >
            Why Train with Groeinnovate?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto text-md text-gray-600"
          >
            We provide cutting-edge training programs designed to help professionals excel in today's competitive IT landscape.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id}
              data-aos={feature.animation}
              data-aos-delay={feature.delay}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105"
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  {feature.icon}
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}