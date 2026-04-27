
const testimonials = [
  {
    text: "Working with Vernexify was a pivotal moment for our startup. They didn't just build an app; they engineered a scalable AI engine that has become our core competitive advantage. Their attention to detail and technical prowess is simply world-class.",
    author: "Alex Rivera",
    position: "CEO, DataStream AI",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    text: "The 'Next Version' philosophy isn't just a tagline—it's evident in every line of code they write. Vernexify delivered a premium enterprise platform that exceeded our expectations in both design and performance. Truly the best in the business.",
    author: "Elena Petrova",
    position: "VP of Engineering, LuxeSystems",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    text: "From initial consultation to final deployment, the team at Vernexify demonstrated incredible insight into our complex requirements. Their AI integration has optimized our workflow by 40%. They are our go-to partners for all things digital.",
    author: "James Wilson",
    position: "Founder, CloudFront Solutions",
    image: "https://i.pravatar.cc/150?u=james"
  }
];

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="bg-[#0c0c0e] py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-vernexify-blue/10 blur-[100px] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Trusted by <span className="text-vernexify-blue">Innovative</span> Companies
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it. Here's what our customers have to say about Vernexify.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-vernexify-blue/50 transition-all duration-500 group hover:scale-[1.03] hover:bg-white/[0.08]"
            >
              {/* Stars at top like screenshot */}
              <div className="flex mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-10 font-medium italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-vernexify-blue/20"
                />
                <div>
                  <p className="font-bold text-white text-base">{testimonial.author}</p>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
