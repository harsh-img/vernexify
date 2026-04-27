
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="section-container">
        <div className="bg-gradient-to-r from-vernexify-blue to-vernexify-indigo rounded-2xl p-12 md:p-20 text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies that trust Vernexify for their digital transformation and AI integration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="bg-white text-vernexify-blue px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Start Your Project
            </a>
            <a href="#contact" className="bg-transparent text-white border border-white/30 px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
