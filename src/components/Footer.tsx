import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-2 border-t border-slate-100">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/light-bg.png" 
                alt="Vernexify Technologies" 
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <p className="text-slate-500 mb-6 font-medium text-sm leading-relaxed">
              Building the next generation of AI-driven software solutions. We help businesses transform through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-vernexify-blue hover:bg-blue-50 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-vernexify-blue hover:bg-blue-50 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-vernexify-blue hover:bg-blue-50 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="text-slate-500 hover:text-vernexify-blue transition-colors">AI & ML Solutions</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-vernexify-blue transition-colors">Software Engineering</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-vernexify-blue transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-vernexify-blue transition-colors">Cloud & DevOps</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="text-slate-500 hover:text-vernexify-blue transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-slate-500 hover:text-vernexify-blue transition-colors">FAQs</a></li>
              <li><a href="#packages" className="text-slate-500 hover:text-vernexify-blue transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-vernexify-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3 text-slate-500">
                <Mail className="w-4 h-4 text-vernexify-blue shrink-0 mt-1" />
                <span>vernexify@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-500">
                <Phone className="w-4 h-4 text-vernexify-blue shrink-0 mt-1" />
                <span>+91 9413128045</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin className="w-4 h-4 text-vernexify-blue shrink-0 mt-1" />
                <span>Alwar, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} VERNEXIFY TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
