import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Helper to handle smooth scroll if on same page
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname === '/' && href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg shadow-brand-cyan/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight flex flex-col leading-none">
              <span>CHL <span className="text-brand-cyan">Spotless</span></span>
              <span className="text-[0.65rem] text-slate-400 font-sans tracking-[0.2em] uppercase mt-1">Car Wash</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-cyan hover:bg-cyan-400 text-brand-dark font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              Book Now
            </Link>
            <a
              href="tel:0978033078"
              className="inline-flex items-center justify-center px-4 py-2 text-white hover:text-brand-cyan transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 space-y-3">
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 bg-brand-cyan text-brand-dark font-semibold rounded-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:0978033078"
                className="flex items-center justify-center w-full px-6 py-3 bg-white/10 text-white font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                097 8033078
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
