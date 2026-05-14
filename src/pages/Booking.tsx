import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Car, Phone, Mail, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

const AVAILABLE_TIMES = [
  "06:00 AM", "08:00 AM", "10:00 AM", "12:00 PM",
  "02:00 PM", "04:00 PM", "05:00 PM"
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const initialPackage = searchParams.get('package') || 'Standard Detail';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: initialPackage,
    date: '',
    time: ''
  });

  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch booked slots whenever the date changes
  useEffect(() => {
    async function fetchBookedSlots() {
      if (!formData.date) {
        setBookedSlots([]);
        return;
      }
      try {
        const response = await fetch(`/api/bookings?date=${formData.date}`);
        const data = await response.json();
        if (data.bookedSlots) {
          setBookedSlots(data.bookedSlots);
          // If the currently selected time is now booked, reset it
          if (data.bookedSlots.includes(formData.time)) {
             setFormData(prev => ({ ...prev, time: '' }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch booked slots:", error);
      }
    }
    fetchBookedSlots();
  }, [formData.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setErrorMessage(data.error || "Failed to book your appointment.");
        // Refresh booked slots in case someone else booked it
        if (formData.date) {
          const checkRes = await fetch(`/api/bookings?date=${formData.date}`);
          const checkData = await checkRes.json();
          if (checkData.bookedSlots) setBookedSlots(checkData.bookedSlots);
        }
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Fill out the form below to schedule your premium car detailing service.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-brand-cyan" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                  Thank you, {formData.name}. We have received your booking request for a {formData.service} on {formData.date} at {formData.time}. We will contact you shortly to confirm.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-4 font-bold text-brand-dark bg-brand-cyan hover:bg-cyan-300 rounded-full transition-all"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-500" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                        placeholder="097 000 0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address (Optional)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-500" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Vehicle Make & Model</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Car className="h-5 w-5 text-slate-500" />
                      </div>
                      <input
                        type="text"
                        name="vehicle"
                        required
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                        placeholder="Toyota Hilux"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Select Service Package</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a101f] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors appearance-none"
                  >
                    <option value="Basic Wash">Basic Wash (K150)</option>
                    <option value="Standard Detail">Standard Detail (K350)</option>
                    <option value="Premium Detail">Premium Detail (K800)</option>
                    <option value="Exterior Wash">Exterior Wash Only</option>
                    <option value="Interior Cleaning">Interior Cleaning Only</option>
                    <option value="Custom Service">Other / Custom Service</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Preferred Date</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-500" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a101f] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors appearance-none [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Preferred Time</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-slate-500" />
                      </div>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a101f] border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors appearance-none"
                      >
                        <option value="" disabled>Select a time</option>
                        {AVAILABLE_TIMES.map((time) => {
                          const isBooked = bookedSlots.includes(time);
                          return (
                            <option key={time} value={time} disabled={isBooked}>
                              {time} {isBooked ? "(Booked)" : ""}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-bold text-brand-dark bg-brand-cyan hover:bg-cyan-300 rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Confirm Booking
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
