"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, Award, Users, BookOpen, ShieldCheck } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Page%20Learning%20courses";

const slides = [
  {
    id: 1,
    title: "1-on-1 Personalized Tuition (Class 1 to 12)",
    subtitle: "Customized learning pace, dedicated mentor focus, and zero peer pressure for total subject mastery.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
    badge: "100% Mentorship Focus",
  },
  {
    id: 2,
    title: "Micro Batches with Maximum 7 Students",
    subtitle: "Ideal group dynamics ensuring active participation, individual attention, and doubt resolution.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    badge: "Max 7 Seats / Batch",
  },
  {
    id: 3,
    title: "JEE, NEET & KEAM Entrance Coaching",
    subtitle: "Proven exam strategies, daily practice papers, and 15+ years of top rank track record in Thrissur.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop",
    badge: "15 Years Rank Record",
  },
  {
    id: 4,
    title: "Scholarship & Competitive Exam Mentorship",
    subtitle: "Comprehensive training for NMMS, USS, LSS, Olympiads, and competitive career foundations.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop",
    badge: "Scholarship Experts",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex flex-col justify-between pt-6 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between space-y-6">
        
        {/* Single Line Heading above the slider as requested */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full pt-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold mb-3 shadow-2xs">
            <Award className="w-4 h-4 text-sky-600" />
            <span>15 Years of Educational Legacy in Thrissur, Kerala</span>
          </div>
          
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-5xl mx-auto whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis">
            Personalised 1-on-1 Tuition & Micro Batches for Academic Excellence
          </h1>
        </motion.div>

        {/* Viewport Filling Hero Image Slider Frame */}
        <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-sky-100 bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Background Image */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover opacity-85"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Slide Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-14 text-white space-y-4 max-w-4xl">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3.5 py-1 rounded-lg bg-sky-500/90 text-white text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  {slides[currentSlide].badge}
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
                >
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm sm:text-base md:text-lg text-sky-100/90 max-w-2xl font-normal leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* WhatsApp Redirect Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Connect on WhatsApp</span>
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-sm border border-white/30 transition-all hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Book Free Demo Session</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all focus:outline-none z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-10 flex items-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-sky-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-2xs backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">1-on-1 Focus</div>
              <div className="text-xs text-slate-500">Class 1 to 12 Tuitions</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-2xs backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Micro Batches</div>
              <div className="text-xs text-slate-500">Max 7 Students / Group</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-2xs backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Entrance Coaching</div>
              <div className="text-xs text-slate-500">JEE | NEET | KEAM</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-2xs backdrop-blur-sm">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">15+ Years Legacy</div>
              <div className="text-xs text-slate-500">Trusted Academic Center</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
