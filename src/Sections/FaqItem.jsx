import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who is Kumaresan?",
      answer: "Kumaresan is a skilled developer with expertise in Python, React, Flask, and more.",
    },
    {
      question: "What services does Kumaresan offer?",
      answer: "Kumaresan offers web development, IoT projects, digital marketing, and WordPress development.",
    },
    {
      question: "How can I contact Kumaresan?",
      answer: "You can reach out to Kumaresan via email or connect through his portfolio website.",
    },
    {
      question: "Does Kumaresan take freelance projects?",
      answer: "Yes, Kumaresan is open to working on exciting projects that align with his skills.",
    },
    {
      question: "What technologies does Kumaresan specialize in?",
      answer: "Kumaresan specializes in Python, JavaScript, React, Flask, Tailwind CSS, and more.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-s1 py-16 px-6 md:px-12 lg:px-20 mt-960 md:mt-0">
      <h2 className="text-4xl font-bold text-center mb-6 text-p4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-6 bg-gradient-to-r from-s3 to-s2"
          >
            <div
              className="flex justify-between items-center cursor-pointer text-p4"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span
                className={`transform ${
                  activeIndex === index ? "rotate-180" : ""
                } transition-transform`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-p1">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
