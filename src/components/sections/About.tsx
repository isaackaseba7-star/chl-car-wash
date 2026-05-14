import { motion } from 'motion/react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                More Than Just a Wash. <br className="hidden lg:block" />
                <span className="text-gradient">It's a Transformation.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                At CHL Chile Spotless Car Wash, we believe your vehicle is an extension of your personality. 
                Located conveniently in the heart of Lusaka, our expert team uses premium products, 
                advanced techniques, and unparalleled attention to detail to restore that showroom shine.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Meticulous attention to every detail inside and out",
                "Premium, paint-safe washing products",
                "Skilled technicians who care about your car",
                "Fast, efficient, and comfortable experience"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <MapPin className="text-brand-cyan w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-medium">Located in Lusaka</p>
                <p className="text-slate-400 text-sm">Plot 875, Chaisa Complex, Bimbe</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden glass-panel border-white/20 p-2">
              <img 
                src="https://i.ibb.co/BH3qz0Zz/pexels-karola-g-4870672.jpg" 
                alt="Professional detailing" 
                className="w-full h-full object-cover rounded-xl"
              />
              
              {/* Floating overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:-left-8 sm:right-auto bg-brand-dark/95 backdrop-blur shadow-2xl p-6 rounded-2xl border border-white/10 max-w-sm">
                <div className="flex gap-4 items-center">
                  <div className="text-4xl font-bold text-brand-cyan">5.0</div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">
                      {'★★★★★'}
                    </div>
                    <p className="text-sm text-slate-300 font-medium">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
