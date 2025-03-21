"use client";

// pages/index.js
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AOS from "aos";
import { motion } from "framer-motion";

export default function GKC() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const serviceCategories = [
    {
      title: "Content and Creative Design Services",
      image: "/our_services/content_and_creative_design_services.png",
      services: [
        "Content Services",
        "POVs (Point of Views) and Thought Leadership (Whitepaper/Blogs)",
        "Capability Presentation",
        "SWOT Analysis",
        "Presentation/Slide Design",
        "Customer Theme Creation",
        "PPT based design",
        "Animation Services",
      ],
    },
    {
      title: "Logo Design and Brand Guidelines",
      image: "/our_services/logo_design.png",
      services: [],
    },
    {
      title: "Video Creation & Editing",
      image: "/our_services/video_creation.png",
      services: [],
    },
    {
      title: "Business Insights & Advisory",
      image: "/our_services/business_insights.png",
      services: [
        "Strategic Planning",
        "GTM (Go-to-Market) Strategy & Roadmap Development",
      ],
    },
    {
      title: "Market & Competitive Intelligence",
      image: "/our_services/market_and_competitive.png",
      services: [
        "Trends and Analysis",
        "Market, Business, and Technology Trends",
        "Market Sizing/Assessment",
        "Competitive Benchmarking",
        "Offerings/Product Portfolio Analysis",
        "Technology Portfolio Analysis",
        "Customer/Account Insights",
        "Customer Insights",
        "Client Portfolio Analysis",
        "Value Proposition Analysis",
        "Value chain analysis",
        "Executive Insights and Briefing",
        "Account Relationship Mappings",
      ],
    },
  ];

  return (
    <div className="">
      <div className="w-[80%] mx-auto relative">
        <header className="sticky top-0 z-50">
          <div className="mx-auto py-2 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
                GKC
              </h1>
            </motion.div>
          </div>
        </header>

        <div>
          {/* Hero Section */}
          {/* <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Driving Business Decisions Through Knowledge & Research
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl mb-8"
              >
                At GKC, we leverage data-driven analytics and insights to
                empower our clients and internal stakeholders, enabling them to
                achieve a sustainable competitive advantage with our
                cutting-edge, actionable intelligence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <a
                  href="#services"
                  className="inline-block bg-white text-blue-800 px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  Explore Our Services
                </a>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </section> */}

          {/* About Section */}
          <section id="about" className="py-2">
            <div className="">
              <div className="mb-5">
                <p
                  className="text-lg text-gray-600"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Green Knowledge Services (GKC) is a key offering of
                  GreenInnovaBiz, dedicated to driving and shaping business
                  decisions through the strategic use of knowledge, research,
                  and technology across various industry verticals.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-in">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Comprehensive Approach
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our comprehensive suite of business research and insights is
                    designed to add value at every stage of our clients'
                    strategic decision-making process.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Data-driven analytics",
                      "Strategic advisory",
                      "Competitive intelligence",
                      "Market research",
                      "Technology assessment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div data-aos="fade-right" className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform -rotate-3"></div>
                  <div className="absolute -inset-4 bg-indigo-100 rounded-2xl transform rotate-3 z-0"></div>
                  <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                      <h3 className="text-xl font-semibold mb-4">
                        Our Mission
                      </h3>
                      <p>
                        To empower organizations with actionable intelligence
                        that drives sustainable competitive advantage and
                        strategic growth in an ever-evolving business landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 md:py-24">
            <div className="mx-auto">
              <div className="space-y-24">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="service-category">
                    <div className="flex flex-col md:flex-row items-center gap-14 md:gap-18 mb-12">
                      <div
                        className=""
                        data-aos="fade-right"
                        data-aos-delay={categoryIndex * 100}
                      >
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
                          {/* <div className="absolute inset-0 opacity-30"></div> */}
                          <div className="relative h-full w-full">
                            <Image
                              src={category?.image}
                              alt={category?.title}
                              width={700}
                              height={700}
                              className="rounded-3xl shadow-xl h-90 max-md:h-64 aspect-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-full md:w-1/2"
                        data-aos="fade-right"
                        data-aos-delay={categoryIndex * 100 + 100}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                          {category.title}
                        </h3>
                        {category.services.length > 0 ? (
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.services
                              .slice(0, 6)
                              .map((service, index) => (
                                <li key={index} className="flex items-start">
                                  <svg
                                    className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-gray-700">
                                    {service}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600">
                            Comprehensive {category.title.toLowerCase()}{" "}
                            services tailored to meet your specific business
                            needs and objectives.
                          </p>
                        )}
                       
                      </div>
                    </div>

                    {category.services.length > 6 && (
                      <div
                        className=""
                        data-aos="fade-up"
                        data-aos-delay={categoryIndex * 100 + 200}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {category.services.slice(6).map((service, index) => (
                            <div
                              key={index}
                              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                              <div className="flex items-start">
                                <svg
                                  className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span className="text-gray-700">{service}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          {/* <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                data-aos="fade-up"
              >
                Ready to Transform Your Business?
              </h2>
              <p
                className="text-lg mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let us help you make data-driven decisions that drive
                sustainable competitive advantage.
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <a
                  href="#contact"
                  className="inline-block bg-white text-blue-800 px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section> */}

          {/* Contact Section */}
          {/* <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Have questions about our services? Ready to start a project?
                    Contact us today and let's discuss how we can help you
                    achieve your business goals.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">info@gkc-services.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                        <svg
                          className="h-6 w-6 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Location</h3>
                        <p className="text-gray-600">
                          123 Business Avenue, Suite 100
                          <br />
                          Innovation City, IN 10001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left">
                  <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Send us a Message
                    </h3>
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:-translate-y-1"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        </div>
      </div>
    </div>
  );
}
