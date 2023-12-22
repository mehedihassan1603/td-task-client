

import React, { useState } from 'react';

const FAQ = () => {
  const faqData = [
    { question: 'What is TO DO Task?', answer: 'TO DO Task is a feature that allows you to track and manage tasks that need to be done.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-6">
          <div
            className="cursor-pointer text-2xl font-semibold text-blue-500"
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </div>
          <div className={`mt-2 text-gray-700 ${activeIndex === index ? 'block' : 'hidden'}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
