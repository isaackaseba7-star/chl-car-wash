import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import BeforeAfter from '../components/sections/BeforeAfter';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // slightly delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Gallery />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
