import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const packages = [
    {
      name: "Basic Wash",
      price: "K150",
      description: "Quick and efficient clean for daily drivers.",
      features: [
        "Exterior foam wash",
        "Wheel and tire cleaning",
        "Tire dressing",
        "Quick interior vacuum",
        "Window wiping (exterior)"
      ],
      popular: false
    },
    {
      name: "Standard Detail",
      price: "K350",
      description: "Comprehensive care for a spotless finish.",
      features: [
        "Everything in Basic Wash",
        "Interior deep vacuum",
        "Dashboard wiping & dressing",
        "Door jambs cleaning",
        "Spray wax application",
        "Interior window cleaning"
      ],
      popular: true
    },
    {
      name: "Premium Detail",
      price: "K800",
      description: "Showroom-ready restoration package.",
      features: [
        "Everything in Standard Detail",
        "Machine polish & premium wax",
        "Minor scratch removal",
        "Engine bay cleaning",
        "Upholstery/Leather conditioning",
        "Odor removal treatment"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg">
            Choose the perfect package for your vehicle's needs. Quality service at affordable rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-panel rounded-3xl p-8 relative flex flex-col ${
                pkg.popular 
                  ? 'border-brand-cyan shadow-[0_0_30px_rgba(0,229,255,0.15)] md:-translate-y-4' 
                  : 'border-white/10 pt-10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-cyan text-brand-dark px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide border-4 border-brand-dark">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-sm h-10">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{pkg.price}</span>
                <span className="text-slate-400">/car</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-cyan shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={`/book?package=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  pkg.popular
                    ? 'bg-brand-cyan text-brand-dark hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Book Package
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
