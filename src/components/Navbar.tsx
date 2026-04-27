import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'packages', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animation for the navbar entrance
    gsap.from('.navbar-container', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out'
    });
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Pricing', href: '#packages', id: 'packages' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/light-bg.png" 
                alt="Vernexify Logo" 
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
            </Link>
          </div>

          {/* Desktop menu - Centered structure */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-all duration-300 relative py-2 group ${
                    activeSection === link.id || (activeSection === 'packages' && link.id === 'packages')
                      ? "text-vernexify-blue"
                      : "text-slate-500 hover:text-vernexify-blue"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-vernexify-blue transition-transform duration-300 origin-left ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-vernexify-blue text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-vernexify-indigo transition-all duration-300 shadow-xl shadow-blue-50 hover:-translate-y-0.5 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`block px-4 py-3 text-base font-bold transition-colors ${
                  activeSection === link.id ? 'text-vernexify-blue bg-blue-50/50 rounded-xl' : 'text-slate-600 hover:text-vernexify-blue'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 text-base font-bold text-slate-600 hover:text-vernexify-blue"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
Navbar;
