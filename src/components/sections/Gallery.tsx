import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: "https://i.ibb.co/chGCKTDN/istockphoto-1800033825-612x612.jpg", alt: "Glossy paint finish" },
    { src: "https://i.ibb.co/RGgqmrj9/istockphoto-2007315464-612x612.jpg", alt: "Detailing process" },
    { src: "https://i.ibb.co/JRpLn4JF/istockphoto-1220575763-612x612.jpg", alt: "Wheel cleaning" },
    { src: "https://i.ibb.co/JwtqVC19/pexels-khunkorn-laowisit-1359149-5233261.jpg", alt: "Shiny luxury car" }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Detailing <span className="text-gradient">Gallery</span></h2>
            <p className="text-slate-400 text-lg">
              A glimpse into the results we deliver every single day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group aspect-square overflow-hidden rounded-2xl glass-panel"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
