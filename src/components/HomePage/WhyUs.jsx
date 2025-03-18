"use client";

import { motion } from "framer-motion";
import { AiOutlineTeam, AiOutlineBulb } from "react-icons/ai";
import { BsGraphUpArrow, BsRocketTakeoff } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";

const data = [
  {
    title: "SHARE YOUR VISION AND CHALLENGES",
    description:
      "At Groeinnov8, we begin by understanding your unique challenges and aspirations. We invite you to share your technology hurdles, business objectives, and growth ambitions. Our mission is to fully grasp the intricacies of your needs, ensuring that we align our expertise with your vision from the outset.",
    icon: <AiOutlineTeam />,
  },
  {
    title: "INNOVATIVE SOLUTIONS TAILORED FOR YOU",
    description:
      "Once we've comprehended your needs, our team of experts at Groeinnov8 springs into action. Leveraging cutting-edge technology and actionable intelligence, we engineer customized solutions designed to address your specific challenges. Our goal is to deliver a solution that integrates seamlessly into your operations and drives sustained growth.",
    icon: <AiOutlineBulb />,
  },
  {
    title: "DEMONSTRATED IMPACT",
    description:
      "Words alone won't suffice – we let our results speak for themselves. At Groeinnov8, we are committed to showcasing the tangible impact of our solutions. By developing and testing our strategies in real-world scenarios, we provide you with clear evidence of how our innovations can transform your business.",
    icon: <BsGraphUpArrow />,
  },
  {
    title: "YOUR STRATEGIC GROWTH PARTNER",
    description:
      "We see ourselves as more than just a service provider; we are your strategic growth partner. From the initial consultation to the final implementation and beyond, Groeinnov8 is dedicated to supporting you every step of the way. We offer guidance, expertise, and a collaborative approach to ensure your success and celebrate your milestones together.",
    icon: <FaHandshake />,
  },
  {
    title: "EXPERIENCE PIONEERING GROWTH",
    description:
      "With Groeinnov8 Solutions, you will witness a transformative journey where challenges turn into opportunities. Embrace a future of enhanced efficiency, streamlined processes, and a competitive edge that propels your business forward. Our commitment to pioneering growth through innovation ensures that your business not only meets its goals but exceeds them.",
    icon: <BsRocketTakeoff />,
  },
];

const WhyUs = () => {
  return (
    <section className="text-white py-16 bg-[#1C1835] z-[-10]">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-12 w-[80%] mx-auto text-center">
        Why Us
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mx-auto w-[80%] relative">
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('/whyus/background.png')] bg-cover bg-center"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-transparent px-6 py-10 rounded-xl border-[#c667e3] border-[.1rem] shadow-lg flex flex-col items-center text-center w-full sm:w-[48%] lg:w-[30%] z-[100]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-6xl text-blue-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
