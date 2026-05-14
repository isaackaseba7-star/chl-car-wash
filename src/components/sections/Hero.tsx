import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/C5sSbQ2X/pexels-khunkorn-laowisit-1359149-5233271.jpg" 
          alt="Luxury black car detailing" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">Premium Car Care in Lusaka</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Bring Back the Shine.<br />
            <span className="text-gradient">Drive Spotless.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Lusaka's top-rated auto detailing service. We combine expert craftmanship with premium products to give your vehicle that showroom finish.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/book"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark bg-brand-cyan hover:bg-cyan-300 rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-1"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:0978033078"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-sm hover:-translate-y-1"
            >
              <Phone className="ml-0 mr-2 w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
         <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
         <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
