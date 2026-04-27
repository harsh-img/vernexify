import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <div id="contact" className="bg-slate-50 py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vernexify-blue/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="inline-block bg-vernexify-blue/10 text-vernexify-blue px-4 py-2 rounded-full text-sm font-bold mb-6 border border-vernexify-blue/20">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight">
              Ready to start your <span className="gradient-text">Next Version</span>?
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Our team of experts is ready to help you navigate the future of technology.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 group-hover:border-vernexify-blue transition-colors">
                  <Mail className="h-6 w-6 text-vernexify-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold text-slate-900">vernexify@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 group-hover:border-vernexify-blue transition-colors">
                  <Phone className="h-6 w-6 text-vernexify-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-slate-900">+91 9413128045</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 group-hover:border-vernexify-blue transition-colors">
                  <MapPin className="h-6 w-6 text-vernexify-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-slate-900">Alwar, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-vernexify-blue/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-vernexify-blue/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</label>
                <select 
                  id="subject"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-vernexify-blue/50 transition-all appearance-none"
                >
                  <option>Website Development</option>
                  <option>AI Integration</option>
                  <option>Mobile Application</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-vernexify-blue/50 transition-all"
                ></textarea>
              </div>
              
              <Button className="w-full btn-primary py-7 text-lg group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
