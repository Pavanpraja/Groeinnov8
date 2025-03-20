import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-xl border border-indigo-100 relative overflow-hidden"
      whileHover={{ boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500" />
      
      <div className="flex justify-center mb-8">
        <motion.img 
          src="/contact-us/contactinfo.png" 
          alt="Contact Support" 
          className="w-full h-auto rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <motion.h3 
        className="text-2xl font-bold text-indigo-600 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        You can mail us:
      </motion.h3>
      
      <motion.div
        className="flex items-center mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <EnvelopeIcon className="h-5 w-5 text-indigo-500 mr-2" />
        <p className="text-gray-700">
          Mail to : <a href="mailto:support@groeinnov8.com" className="text-blue-600 hover:underline">support@groeinnov8.com</a>
        </p>
      </motion.div>
      
    </motion.div>
  );
}