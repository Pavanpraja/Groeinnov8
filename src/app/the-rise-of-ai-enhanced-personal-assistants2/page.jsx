"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import CommentSection from "../the-rise-of-ai-enhanced-personal-assistants/CommentSection";

const contentData = [
  {
    title: "The Rise of AI-Enhanced Personal Assistants2",
    date: "By groeinov8 / August 30, 2024",
    description:
      "In the ever-evolving world of technology, artificial intelligence (AI) continues to push boundaries and redefine the way we interact with the digital world. One of the most exciting developments is the advent of AI-enhanced personal assistants, which are transforming from simple task managers into sophisticated, proactive partners in our daily lives. In this blog, we’ll explore how these advanced personal assistants are reshaping productivity, privacy, and user experience.",
  },
  {
    title: "1. Beyond the Basics: AI-Enhanced Capabilities",
    description:
      "Gone are the days when personal assistants could only handle basic tasks like setting reminders or sending messages. Modern AI-powered assistants now offer a range of advanced features, including:",
    list: [
      {
        heading: "Contextual Understanding:",
        text: "Advanced assistants can understand the context of your requests, allowing them to provide more relevant responses. For example, if you ask about the weather, they might also suggest activities based on the forecast.",
      },
      {
        heading: "Predictive Capabilities:",
        text: "These assistants can predict your needs based on your habits and preferences. If you often schedule meetings on Mondays, your assistant might proactively offer to set up a recurring meeting or suggest time management tips.",
      },
      {
        heading: "Natural Language Processing (NLP):",
        text: "Enhanced NLP capabilities mean that these assistants can comprehend and respond to complex queries in a more conversational manner, making interactions feel more intuitive and less robotic.",
      },
    ],
  },
];

const TheRiseOfAiEnhancedPersonalAssistants2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center p-4 pt-[8rem]">
        <motion.div
          className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-9"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mapping Through Content Data */}
          {contentData.map((section, index) => (
            <div key={index} data-aos="fade-up">
              <h2
                className={`text-${
                  index === 0 ? "3xl" : "xl"
                } font-bold text-gray-900 mt-6`}
              >
                {section.title}
              </h2>
              {index === 0 && (
                <p className="text-sm text-blue-600 mt-2">{section.date}</p>
              )}
              <p className="text-gray-700 mt-4 leading-relaxed">
                {section.description}
              </p>

              {/* If the section contains a list, render it */}
              {section.list && (
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700"
                      data-aos="fade-left"
                      data-aos-delay={i * 100}
                    >
                      <strong>{item.heading}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Previous Article Link */}
          <motion.a
            href="/the-rise-of-ai-enhanced-personal-assistants"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            ← Previous: The Rise of AI-Enhanced Personal Assistants
          </motion.a>
          <br />
          <motion.a
            href="/the-rise-of-ai-enhanced-personal-assistants3"
            className="mt-6 text-blue-600 font-semibold hover:underline text-center"
            whileHover={{ scale: 1.05 }}
          >
            The Rise of AI-Enhanced Personal Assistants 3 : Next →
          </motion.a>
        </motion.div>
      </div>
      <CommentSection />
    </>
  );
};

export default TheRiseOfAiEnhancedPersonalAssistants2;
