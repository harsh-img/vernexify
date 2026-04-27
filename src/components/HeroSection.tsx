import React, { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power4.out' }, '-=0.3')
        .from('.hero-text', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .from('.hero-btns', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-floating', { opacity: 0, scale: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.7)' }, '-=0.5');

      gsap.to('.hero-floating', {
        y: 'random(-20, 20)',
        x: 'random(-10, 10)',
        rotation: 'random(-10, 10)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center pt-8 pb-4 bg-white overflow-hidden mesh-gradient">
      {/* AI Look Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-vernexify-blue/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Floating 3D Icons Shorthand */}
      <div className="absolute top-[20%] right-[15%] hidden lg:block hero-floating opacity-20">
        <Cpu className="h-16 w-16 text-vernexify-blue" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] hidden lg:block hero-floating opacity-20">
        <Zap className="h-20 w-20 text-indigo-500" />
      </div>

      <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
        {/* Top Badge */}
        <div className="hero-badge inline-flex items-center px-5 py-1.5 rounded-full border border-vernexify-blue/20 bg-vernexify-blue/5 mb-8 shadow-sm">
          <span className="text-xs font-bold text-vernexify-blue tracking-wide uppercase">Introducing Vernexify 2.0</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="hero-title text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-[1.1] tracking-tighter">
          Transform Your Business <br />
          With Our <span className="text-vernexify-blue">AI Solution</span>
        </h1>
        
        {/* Subheadline - Centered */}
        <p className="hero-text text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Streamline your operations, boost productivity, and enhance customer satisfaction with our cutting-edge AI platform. Experience seamless integration and unparalleled support.
        </p>
        
        {/* Buttons */}
        <div className="hero-btns flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#contact" className="bg-vernexify-blue text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-vernexify-indigo transition-all duration-300 flex items-center shadow-2xl shadow-blue-500/20 hover:-translate-y-1">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#contact" className="bg-white text-vernexify-blue border border-vernexify-blue/20 px-10 py-4 rounded-2xl font-bold text-sm hover:bg-blue-50 transition-all duration-300 hover:border-vernexify-blue/40">
            Book Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
