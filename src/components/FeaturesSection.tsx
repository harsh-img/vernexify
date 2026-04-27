import React from 'react';
import { Brain, Code, Cpu, Globe, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8 text-vernexify-orange" />,
    title: 'AI & Machine Learning',
    description: 'Leverage custom-trained models and LLMs to automate processes and gain predictive insights for your business.'
  },
  {
    icon: <Code className="h-8 w-8 text-vernexify-orange" />,
    title: 'Custom Software Engineering',
    description: 'Scalable, robust, and high-performance software solutions tailored specifically to your unique requirements.'
  },
  {
    icon: <Globe className="h-8 w-8 text-vernexify-orange" />,
    title: 'Premium Web Development',
    description: 'We build fast, secure, and visually stunning web applications using modern frameworks like React and Next.js.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-vernexify-orange" />,
    title: 'Cloud & DevOps',
    description: 'Optimizing your infrastructure for maximum uptime, security, and scalability with modern cloud practices.'
  },
  {
    icon: <Shield className="h-8 w-8 text-vernexify-orange" />,
    title: 'Cybersecurity Solutions',
    description: 'Protecting your digital assets with enterprise-grade security implementations and rigorous assessments.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-vernexify-orange" />,
    title: 'Digital Transformation',
    description: 'Modernizing legacy systems and workflows to help your business thrive in the rapidly evolving landscape.'
  }
];

const FeaturesSection = () => {
  return (
    <div id="services" className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">
            Our <span className="text-vernexify-blue">Specialized</span> Services
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Advanced AI and software solutions tailored for modern enterprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl border border-slate-100 hover:border-vernexify-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 group hover:-translate-y-2 hover:scale-[1.05]"
            >
              <div className="bg-vernexify-blue/5 w-16 h-16 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
