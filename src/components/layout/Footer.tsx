import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="font-heading text-3xl font-bold tracking-tight inline-flex flex-col leading-none">
              <span>CHL <span className="text-brand-cyan">Spotless</span></span>
              <span className="text-xs text-slate-400 font-sans tracking-[0.2em] uppercase mt-1">Car Wash</span>
            </Link>
            <p className="text-slate-400">
              Premium car wash and detailing services in Lusaka, Zambia. We bring the showroom shine to your driveway.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Services', href: '/#services' },
                { name: 'About Us', href: '/#about' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'Testimonials', href: '/#testimonials' },
                { name: 'Gallery', href: '/#gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-brand-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-400">Plot 875, Chaisa Complex, Bimbe, Lusaka 10100, Zambia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-cyan shrink-0" />
                <a href="tel:0978033078" className="text-slate-400 hover:text-white transition-colors">097 8033078</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-cyan shrink-0" />
                <span className="text-slate-400">info@chlspotless.co.zm</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4">
               <li className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-slate-400">Monday - Friday</span>
                 <span className="text-white font-medium">6:00 AM - 6:00 PM</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-slate-400">Saturday</span>
                 <span className="text-white font-medium">6:00 AM - 6:00 PM</span>
               </li>
               <li className="flex justify-between items-center border-b border-white/5 pb-2">
                 <span className="text-slate-400">Sunday</span>
                 <span className="text-white font-medium">6:00 AM - 6:00 PM</span>
               </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CHL Chile Spotless Car Wash. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
