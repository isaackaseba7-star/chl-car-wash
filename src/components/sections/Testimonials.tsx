import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Karen Mweemba",
      role: "Local Customer",
      content: "Excellent service, my car looks brand new! The interior smells amazing and all the tiny scratches on the door are completely gone.",
      rating: 5
    },
    {
      name: "David Chilufya",
      role: "Regular Client",
      content: "I've tried many car washes in Lusaka, but CHL Spotless is by far the best. They take their time and never rush the job. Highly recommended.",
      rating: 5
    },
    {
      name: "Sarah Phiri",
      role: "Business Owner",
      content: "Brought in my SUV after a long road trip and it was covered in mud. They brought back the showroom shine. Very professional team!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-blue relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Local Drivers</h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about our detailing services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <div className="flex text-brand-cyan mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
