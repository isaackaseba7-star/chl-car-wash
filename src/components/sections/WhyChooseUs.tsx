import { motion } from 'motion/react';
import { Target, Users, Zap, ThumbsUp, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "High-Quality Products",
      desc: "We only use premium, trusted automotive detailing brands."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Team",
      desc: "Our detailers are experienced, trained, and passionate about cars."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      desc: "We respect your time. Quality service delivered promptly."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable Pricing",
      desc: "Top-tier results without the luxury price tag."
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Trusted Locally",
      desc: "A 5-star reputation built on consistent quality in Lusaka."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Abstract background element */}
             <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-3xl -z-10" />
             
             <div className="grid grid-cols-1 gap-4">
                <img 
                  src="https://i.ibb.co/DDHLMc6t/istockphoto-2238895794-612x612.jpg" 
                  alt="Clean car interior"
                  className="rounded-2xl border border-white/10 shadow-2xl h-80 object-cover w-full"
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Lusaka Prefers <span className="text-gradient">CHL Spotless</span></h2>
            <p className="text-slate-400 text-lg mb-10">
              We don't just wash cars; we protect your investment. Here is why car owners across the city trust us with their rides.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-brand-cyan">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{reason.title}</h4>
                    <p className="text-slate-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
