import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-blue relative">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-cyan font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Premium Detailing Solutions</h3>
          <p className="text-slate-400 text-lg">
            We offer comprehensive auto care packages tailored to keep your vehicle looking its absolute best, inside and out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-panel p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="w-14 h-14 bg-brand-cyan/10 text-brand-cyan rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-brand-dark transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10 mb-6">
                <span className="text-sm font-medium text-brand-cyan flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {service.benefit}
                </span>
              </div>
              <Link 
                to={`/service/${service.id}`}
                className="inline-flex items-center text-sm font-bold text-white group-hover:text-brand-cyan transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
