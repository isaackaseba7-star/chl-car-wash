import { motion } from 'motion/react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Witness the <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See the difference professional detailing makes. From dull and dirty to showroom shine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10"
          >
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider z-10">
              Before
            </div>
            <div className="aspect-[4/3] sm:aspect-video md:aspect-square">
               <img 
                 src="https://i.ibb.co/chyPVTwH/pexels-bulat843-1243575272-28995189.jpg" 
                 alt="Dirty car before washing"
                 className="w-full h-full object-cover grayscale-[30%] brightness-75 group-hover:scale-105 transition-transform duration-700" 
               />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-brand-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          >
             <div className="absolute top-4 left-4 bg-brand-cyan text-brand-dark text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider z-10">
              After Spotlight
            </div>
            <div className="aspect-[4/3] sm:aspect-video md:aspect-square">
               <img 
                 src="https://i.ibb.co/dwryrxnm/pexels-bulat843-1243575272-29809127.jpg" 
                 alt="Clean spotless car after washing"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
