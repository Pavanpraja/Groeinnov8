"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";

const processSteps = [
  {
    id: 1,
    title: "Step 1: Requirement Requisition from Clients",
    description:
      "Receive detailed requirements from clients outlining the specific skills, experience, and attributes needed for the talent acquisition.",
  },
  {
    id: 2,
    title: "Step 2: Initial Talent Sourcing Decision",
    description:
      "Assess whether the required talent is available within the internal talent pool.",
  },
];

const decisionOptions = [
  {
    id: "yes",
    title: "Yes",
    description: "Internal Talent Available (Proceed to Step 3A)",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    id: "no",
    title: "No",
    description: "Internal Talent Not Available (Proceed to Step 3B)",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
];

const step3B = {
  title: "Step 3B: External Talent Acquisition Process",
  actions: [
    "Begin the external recruitment process by defining the job description and required qualifications based on the client’s requisition.",
    "Source candidates through various channels, including job portals, recruitment agencies, social media, and professional networks.",
    "Review resumes to shortlist candidates who meet the required qualifications and experience.",
    "Greenbona conduct preliminary assessment rounds, which include technical and aptitude tests tailored to the job requirements.",
    "Expert Interviews: Interviews conducted by subject matter experts to evaluate candidates’ skills, experience, and cultural fit.",
    "Shortlist the top-performing candidates based on the preliminary assessments.",
    "Prepare and present detailed profiles of the shortlisted candidates to the client for final selection.",
  ],
};

const step4 = {
  title: "Step 4: Final Selection & Onboarding",
  actions: [
    "Assist the client in the final selection process, which may include additional interviews or assessments.",
    "Facilitate the onboarding process for the selected candidates, ensuring a smooth transition into the client’s organization.",
    "Provide ongoing support and training as needed to help new hires integrate and succeed in their roles.",
  ],
};

const techTraining = {
  title: "Tech Training",
  description:
    "Tech Training is designed to equip individuals and organizations with the skills needed to thrive in today’s rapidly evolving IT landscape. We provide specialized training in the latest high-demand technologies, including Low Code Business Applications, Generative AI (GenAI) tools, and Business Process Automation, ensuring that our clients are at the forefront of innovation.",
};

const TalentProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-[80%] mx-auto py-8">
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Talent Contracting Process
      </motion.h1>

      {processSteps?.map((step) => (
        <motion.div
          key={step.id}
          className="bg-white p-6 rounded-lg shadow-lg mt-6"
          whileHover={{ scale: 1.02 }}
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
          <p className="text-gray-600">{step.description}</p>
          <FaArrowDown className="text-xl mt-4 text-blue-600 animate-bounce mx-auto" />
        </motion.div>
      ))}

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {decisionOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`${option.bgColor} p-6 rounded-lg shadow-lg`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={`text-xl font-semibold ${option.textColor}`}>
              {option.title}
            </h3>
            <p className="text-gray-600">{option.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mt-6"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-3">{step3B.title}</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {step3B.actions.map((action, index) => (
            <li key={index}>
              <span className="font-bold">Action {index + 1}:</span> {action}
            </li>
          ))}
        </ul>
        <FaArrowDown className="text-xl mt-4 text-blue-600 animate-bounce mx-auto" />
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mt-6"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-3">{step4.title}</h2>
        <ul className="list-disc pl-6 text-gray-600">
          {step4.actions.map((action, index) => (
            <li key={index}>
              <span className="font-bold">Action {index + 1}:</span> {action}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg mt-6"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-3">{techTraining.title}</h2>
        <p className="text-gray-600">{techTraining.description}</p>
      </motion.div>
    </div>
  );
};

export default TalentProcess;
