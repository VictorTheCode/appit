"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQItemProps } from "@/interface/Faq";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, go to the sign-up page and follow the instructions.",
    },
    {
      question: "Can I customize my profile?",
      answer: "Yes, you can customize your profile from the settings page.",
    },
    {
      question: "Is Appit available on all devices?",
      answer: "Appit is available on iOS, Android, and web platforms.",
    },
    {
      question: "What privacy controls are available?",
      answer:
        "We offer various privacy settings under your profile preferences.",
    },
    {
      question: "How does the smart matching work?",
      answer:
        "Our smart matching algorithm analyzes your interests and preferences to suggest meaningful connections.",
    },
  ];

  return (
    <div className="text-white rounded-lg shadow-lg max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center gap-5 ">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border gap-4 w-full border-gray-900 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-1 justify-between items-center w-full p-4 text-left text-white"
      >
        <span className=" text-[1.3rem] font-[satoshi-bold] flex-1">
          {question}
        </span>
        <div className="my-[-3px]text-3xl rounded-lg text-center px-2 border border-gray-800">
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-normal"
              >
                <span>&minus;</span>
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-normal"
              >
                +
              </motion.span>
            )}
          </motion.div>
        </div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.05 }}
          className="px-4 pb-4 text-lg text-gray-400"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default FAQ;
