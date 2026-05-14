import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import { servicesData } from '../data/services';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-brand-cyan hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-cyan/10 text-brand-cyan rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl text-brand-cyan font-medium mb-6">
                Benefit: {service.benefit}
              </p>

              <div className="prose prose-invert max-w-none mb-10 text-slate-300 leading-relaxed">
                <p>{service.details}</p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">What's Included:</h3>
              <ul className="space-y-4 mb-10">
                {service.longDescription.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={`/book?package=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark bg-brand-cyan hover:bg-cyan-300 rounded-full transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-1"
                >
                  Book Now
                </Link>
                <a 
                  href="tel:0978033078"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all backdrop-blur-sm hover:-translate-y-1"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <div className="glass-panel p-2 rounded-3xl overflow-hidden border-white/20">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
