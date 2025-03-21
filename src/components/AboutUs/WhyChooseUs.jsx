import React from "react";

const reasons = [
  {
    id: 1,
    title: "Share Your Vision and Challenges",
    description:
      "We take the time to understand your unique business requirements, challenges, and goals. Our collaborative approach ensures that our solutions are perfectly aligned with your vision.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Innovative Solutions Tailored for You",
    description:
      "We don't believe in one-size-fits-all approaches. Each solution we deliver is custom-designed to address your specific needs, leveraging cutting-edge technologies and best practices.",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Demonstrated Impact",
    description:
      "Our track record speaks for itself. We've helped numerous businesses achieve significant improvements in efficiency, productivity, and revenue through our digital transformation solutions.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with us for your digital transformation journey and
              experience the difference
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={reason.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="p-6 sm:w-1/6 flex justify-center">
                    <div
                      className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center ${reason.textColor}`}
                    >
                      {reason.icon}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 sm:w-5/6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 text-center sm:text-left">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
