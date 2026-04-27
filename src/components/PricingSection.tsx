import React from 'react';
import { Check, Shield, Zap, Target, Users, BarChart } from 'lucide-react';

const reasons = [
  {
    icon: <Zap className="h-8 w-8 text-vernexify-orange" />,
    title: 'Speed & Efficiency',
    description: 'We deliver high-quality solutions with rapid turnaround times, ensuring you stay ahead of the curve.'
  },
  {
    icon: <Shield className="h-8 w-8 text-vernexify-orange" />,
    title: 'Reliable & Secure',
    description: 'Security is at the heart of everything we build. We ensure your data and systems are protected.'
  },
  {
    icon: <Target className="h-8 w-8 text-vernexify-orange" />,
    title: 'Result Oriented',
    description: 'Our solutions are designed to solve real business problems and deliver measurable ROI.'
  },
  {
    icon: <Users className="h-8 w-8 text-vernexify-orange" />,
    title: 'Expert Team',
    description: 'Work with seasoned AI engineers, software architects, and designers who are masters of their craft.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-vernexify-orange" />,
    title: 'Scalable Growth',
    description: 'We build systems that grow with your business, from MVP to enterprise-scale applications.'
  },
  {
    icon: <Zap className="h-8 w-8 text-vernexify-orange" />,
    title: 'Cutting-Edge AI',
    description: 'Stay at the forefront of innovation with our deep expertise in LLMs, Neural Networks, and more.'
  }
];

const plans = [
  {
    name: 'Essential',
    price: '11,000 - 15,000',
    description: 'Perfect for startups and simple digital products.',
    features: [
      'Custom Responsive Design',
      '5 Core Pages',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '1 Month Support'
    ],
    isPopular: false,
    ctaText: 'Start Building'
  },
  {
    name: 'Professional',
    price: '24,999 - 30,000',
    description: 'Advanced solutions for scaling businesses.',
    features: [
      'Everything in Essential',
      'AI Chatbot Integration',
      'Advanced User Dashboard',
      'E-commerce Capabilities',
      '3 Months Priority Support',
      'Performance Optimization'
    ],
    isPopular: true,
    ctaText: 'Go Pro'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke AI and large-scale digital transformation.',
    features: [
      'Custom AI/ML Model Training',
      'Full-Scale SaaS Architecture',
      '24/7 Dedicated Support',
      'Security Audit & Hardening',
      'Continuous Innovation',
      'Dedicated Account Manager'
    ],
    isPopular: false,
    ctaText: 'Contact for Quote'
  }
];

const PackagesSection = () => {
  return (
    <div id="packages" className="bg-white py-8 border-t border-slate-100">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
            <span className="text-vernexify-blue">Flexible</span> Packages
          </h2>
          <p className="text-lg text-slate-600">
            Choose the perfect plan for your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-10 transition-all duration-500 border group hover:-translate-y-2 hover:scale-[1.03] ${
                plan.isPopular 
                  ? 'border-vernexify-blue bg-white shadow-2xl shadow-blue-100 z-10' 
                  : 'border-slate-100 bg-white hover:border-vernexify-blue/30 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vernexify-blue text-white text-[11px] font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/20">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
              <p className="text-slate-500 mb-6 font-medium">{plan.description}</p>
              
              <div className="mb-8">
                <div className="text-3xl font-black text-slate-900 leading-tight">
                  {plan.price === 'Custom' ? 'Custom' : `₹${plan.price}`}
                </div>
                {plan.price !== 'Custom' && <div className="text-slate-400 text-xs font-bold mt-1">per project</div>}
              </div>
              
              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-vernexify-blue mr-4 shrink-0" />
                    <span className="text-slate-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-sm text-center block transition-all duration-500 ${
                  plan.isPopular 
                    ? 'bg-vernexify-blue text-white hover:bg-vernexify-indigo shadow-xl shadow-blue-200' 
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
