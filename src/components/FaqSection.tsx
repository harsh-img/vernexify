import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What AI services do you provide?",
    answer: "We offer a wide range of AI services including custom machine learning model development, LLM integration (like GPT-4), AI-powered automation, and predictive analytics tailored for business growth."
  },
  {
    question: "How long does a typical software project take?",
    answer: "Project timelines vary based on complexity. A standard MVP typically takes 4-8 weeks, while more complex enterprise solutions can take 3-6 months. We always provide a detailed roadmap during the consultation."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide continuous support and maintenance packages to ensure your software stays updated, secure, and performs optimally as your business scales."
  },
  {
    question: "Can you integrate AI into my existing systems?",
    answer: "Absolutely. We specialize in modernizing legacy systems by integrating cutting-edge AI capabilities without disrupting your current workflows."
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we are industry-agnostic, we have extensive experience in Fintech, Healthcare, E-commerce, and Logistics, providing bespoke solutions that solve sector-specific challenges."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="bg-white py-16 border-t border-slate-100">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
            Frequently Asked <span className="text-vernexify-blue">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-vernexify-blue/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-vernexify-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed font-medium bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
