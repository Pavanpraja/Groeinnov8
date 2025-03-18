'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Power Apps', img: '/tools/power_apps.png' },
  { name: 'Databricks', img: '/tools/databricks.png' },
  { name: 'Power Automate', img: '/tools/powerautomate.png' },
  { name: 'Open AI', img: '/tools/openai.png' },
  { name: 'Power BI', img: '/tools/powerbi.png' },
  { name: 'Copilot', img: '/tools/copilot.png' },
  { name: 'Power Apps', img: '/tools/powerapps01.png' },
  { name: 'AWS', img: '/tools/aws.png' },
  { name: 'Microsoft AI', img: '/tools/microsoftai.png' },
  { name: 'Blueprism', img: '/tools/blueprism.png' },
  { name: 'Azure', img: '/tools/azure.png' },
  { name: 'Appian', img: '/tools/appian.png' },
  { name: 'Mendix', img: '/tools/mendix.png' },
  { name: 'Automation Anywhere', img: '/tools/automationanywhere.png' },
  { name: 'Tableau', img: '/tools/tableau.png' },
  { name: 'MicroStrategy', img: '/tools/microstrategy.png' },
];

export default function ToolsSection() {
  return (
    <section className="py-18 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-indigo-600 mb-16">
        Fuel your processes with market leading tools and cloud services
      </h2>
      <div className="flex flex-wrap justify-center gap-6 w-[80%] mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="px-1 pt-3 pb-5 bg-white shadow-lg rounded-xl flex flex-col items-center w-28 h-32 md:w-32 md:h-40"
          >
            <Image src={tool.img} alt={tool.name} width={100} height={100} className={`mb-3 w-[5rem] ${index !== 6 ? 'p-3' : 'mt-[-.5rem]'} ${(index === 14 || index === 15) && 'w-[7rem] h-[5rem]'}`} />
            <p className="text-sm font-semibold text-gray-700">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}