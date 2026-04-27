import React from 'react';
import { Cpu, Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id="about" className="bg-white py-6 md:py-8 relative overflow-hidden">
      {/* Decorative AI-style 3D element (pure CSS/Tailwind) */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-vernexify-blue/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image/Visual side with 3D feel */}
          <div className="relative group perspective-1000">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                alt="Our Team" 
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-vernexify-blue/40 to-transparent"></div>
            </div>
            
            {/* Floating 3D stats card */}
            <div className="absolute -bottom-10 -right-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 z-20 animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="bg-vernexify-blue p-3 rounded-2xl text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">99%</p>
                  <p className="text-sm font-bold text-slate-500 uppercase">Success Rate</p>
                </div>
              </div>
            </div>
            
            {/* Background 3D square */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-vernexify-blue/10 rounded-3xl -z-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000"></div>
          </div>

          {/* Content side */}
          <div className="animate-fade-in">
            <span className="inline-block bg-vernexify-blue/10 text-vernexify-blue px-5 py-2 rounded-full text-xs font-bold mb-6 border border-vernexify-blue/20 uppercase tracking-[0.2em]">
              The Core Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-[1.1] tracking-tight">
              Engineering the <span className="text-vernexify-blue italic">Next Version</span> of Your Enterprise.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              At Vernexify Technologies, we don't just build software; we architect the digital engines that power future industries. Our mission is to bridge the gap between complex AI capabilities and real-world business impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-slate-50 p-3 rounded-2xl text-vernexify-blue group-hover:bg-vernexify-blue group-hover:text-white transition-all duration-300">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">AI-First Architecture</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Built from the ground up to support neural networks and LLMs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="bg-slate-50 p-3 rounded-2xl text-vernexify-blue group-hover:bg-vernexify-blue group-hover:text-white transition-all duration-300">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Precision Delivery</h4>
                  <h4 className="font-bold text-slate-900 mb-2">Precision Delivery</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Focusing on ROI and measurable business transformation outcomes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
