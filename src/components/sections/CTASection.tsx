import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-24 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-brand-cyan/10"></div>
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/C5sSbQ2X/pexels-khunkorn-laowisit-1359149-5233271.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Car Deserves the <span className="text-gradient">Best Shine</span>
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Book your detailing appointment today and experience the CHL Spotless difference.
        </p>
        <Link 
          to="/book"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-dark bg-brand-cyan hover:bg-cyan-300 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,229,255,0.3)]"
        >
          Book Your Appointment Now
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
