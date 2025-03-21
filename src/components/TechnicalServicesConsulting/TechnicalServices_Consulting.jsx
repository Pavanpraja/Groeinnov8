"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaRobot,
    FaCloud,
    FaDatabase,
    FaChartBar,
    FaLaptopCode,
    FaCogs,
    FaServer,
  } from "react-icons/fa";
  import { AiOutlineAppstore, AiOutlineCluster } from "react-icons/ai";
  import { MdWeb, MdSupportAgent, MdLayers } from "react-icons/md";

const services = [
  {
    title: "Gen AI Powered Layer",
    icon: <FaRobot className="text-blue-500 text-3xl" />,
  },
  {
    title: "Form Recogniser",
    icon: <MdWeb className="text-green-500 text-3xl" />,
  },
  {
    title: "Azure Playground",
    icon: <AiOutlineAppstore className="text-indigo-500 text-3xl" />,
  },
  {
    title: "Azure Open AI",
    icon: <FaCloud className="text-cyan-500 text-3xl" />,
  },
  {
    title: "Azure Function",
    icon: <FaLaptopCode className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Azure AI Studio / Services (AI Powered Copilot)",
    icon: <MdLayers className="text-blue-600 text-3xl" />,
  },
  {
    title: "AI Powered Chatbots to help resolve a range of requests",
    icon: <MdSupportAgent className="text-purple-500 text-3xl" />,
  },
  {
    title: "Custom Web Application Layer",
    icon: <MdWeb className="text-red-500 text-3xl" />,
  },
  {
    title: "Dynamics CRM",
    icon: <FaCogs className="text-orange-500 text-3xl" />,
  },
  {
    title: "Web Application / User Interaction Layer",
    icon: <AiOutlineCluster className="text-teal-500 text-3xl" />,
  },
  {
    title: "Augmented Analytics / Reporting Layer",
    icon: <FaChartBar className="text-pink-500 text-3xl" />,
  },
  {
    title: "Data Transformation Layer",
    icon: <FaDatabase className="text-orange-500 text-3xl" />,
  },
  {
    title: "Azure / AWS Cloud Services | Data Engine",
    icon: <FaServer className="text-gray-700 text-3xl" />,
  },
  {
    title: "Microsoft Fabric",
    icon: <AiOutlineCluster className="text-blue-700 text-3xl" />,
  },
];

export default function TechnicalServicesConsulting() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-[7rem]">
      <div className="w-[80%] mx-auto">
        <motion.h2
          className="text-center text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Services & Consulting
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              className="p-6 bg-white shadow-lg border border-blue-300 rounded-lg flex items-center space-x-4 hover:shadow-2xl transition duration-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-700">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
