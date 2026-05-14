import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, ThumbsUp, Wallet } from 'lucide-react';

export default function TrustBar() {
  const trustFeatures = [
    { icon: <ThumbsUp className="w-6 h-6 text-brand-cyan" />, title: "5-Star Service" },
    { icon: <ShieldCheck className="w-6 h-6 text-brand-cyan" />, title: "Professional Detailing" },
    { icon: <Wallet className="w-6 h-6 text-brand-cyan" />, title: "Affordable Packages" },
    { icon: <Sparkles className="w-6 h-6 text-brand-cyan" />, title: "Customer Satisfaction" },
  ];

  return (
    <div className="bg-brand-blue py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-3 bg-white/5 rounded-full ring-1 ring-white/10">
                {feature.icon}
              </div>
              <p className="font-heading font-medium text-sm sm:text-base text-slate-200">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
