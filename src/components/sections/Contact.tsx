import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-blue relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Visit Our <br/><span className="text-gradient">Spotless Center</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Ready to give your car the treatment it deserves? Drop by our location or call us to book an appointment.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Plot Number 875, Chaisa Complex, <br />
                    Bimbe, Lusaka 10100, Zambia
                  </p>
                  <a 
                    href="https://maps.google.com/?q=J79J+W5+Lusaka" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-cyan hover:underline mt-2 text-sm font-medium"
                  >
                     Get Directions (J79J+W5 Lusaka)
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
                  <p className="text-slate-400 mb-2">Give us a call to schedule your detail.</p>
                  <a href="tel:0978033078" className="text-2xl font-bold text-white hover:text-brand-cyan transition-colors">
                    097 8033078
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                  <p className="text-slate-400">
                    Monday - Sunday: <span className="text-white font-medium">6:00 AM - 6:00 PM</span><br/>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark rounded-3xl p-2 border border-white/10">
            {/* Embedded Google Map Placeholder - styled beautifully */}
            <div className="w-full h-[400px] lg:h-full bg-slate-900 rounded-2xl overflow-hidden relative group">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.159800635105!2d28.283333!3d-15.416667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI1JzAwLjAiUyAyOMKwMTcnMDAuMCJF!5e0!3m2!1sen!2szm!4v1620000000000!5m2!1sen!2szm" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(80%)' }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-70 cursor-pointer"
                ></iframe>
                
                {/* Fallback/Overlay for styling map area */}
                <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none"></div>
                
                <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                  <a href="https://maps.google.com/?q=J79J+W5+Lusaka" target="_blank" rel="noopener noreferrer" className="pointer-events-auto w-full py-4 bg-brand-cyan text-brand-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors shadow-lg shadow-black/50">
                    <Send className="w-5 h-5" />
                    Open in Google Maps
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
