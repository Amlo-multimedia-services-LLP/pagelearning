"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Page%20Learning%20courses";

const slides = [
  {
    id: 1,
    title: "1-on-1 Personalized Tuition",
    tagline: "Class 1 to 12 • Custom study pace & 100% mentor attention.",
    image: "/images/098A3995.JPG",
  },
  {
    id: 2,
    title: "Micro Batch Programs",
    subtitle: "Capped strictly at 7 students per batch for active peer learning.",
    image: "/images/098A4001.JPG",
  },
  {
    id: 3,
    title: "JEE, NEET & KEAM Entrance Coaching",
    subtitle: "Proven exam strategies & 15+ years top rank track record in Thrissur.",
    image: "/images/098A4010.JPG",
  },
  {
    id: 4,
    title: "Scholarship & Competitive Prep",
    subtitle: "Comprehensive training for NMMS, USS, LSS & Olympiads.",
    image: "/images/MAJO9010.JPG",
  },
  {
    id: 5,
    title: "Annual Merit Felicitation",
    subtitle: "Celebrating high achievers and rank holders across Kerala.",
    image: "/images/20231224005621_IMG_5903.JPG",
  },
  {
    id: 6,
    title: "Student Academic Excellence",
    subtitle: "Dedicated mentorship fostering total subject confidence.",
    image: "/images/MAJO9011.JPG",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = slides[(currentSlide + 1) % slides.length];

  return (
    <section className="relative w-full h-[80vh] min-h-[480px] p-0 m-0 overflow-hidden bg-slate-950 text-white flex flex-col justify-between">
      {/* Edge-to-Edge Background Image Carousel (80vh of Viewport) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full p-0 m-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover opacity-85 brightness-90 p-0 m-0"
          />
          {/* Subtle Contrast Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container aligned 100% width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-between p-6 sm:p-12 md:p-16">
        
        {/* LEFT-BOTTOM ALIGNED TEXT CONTENT (Inter Thin/Light font with reduced kerning) */}
        <div className="max-w-3xl space-y-4 mb-4 sm:mb-6 mt-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ letterSpacing: "-0.035em" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tighter drop-shadow-md"
          >
            Prime academy for General education.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ letterSpacing: "-0.025em" }}
            className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-xl"
          >
            {slides[currentSlide].title} — {slides[currentSlide].tagline || slides[currentSlide].subtitle}
          </motion.p>

          {/* Text Link Redirecting to WhatsApp (No button boxes, No sparkles) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-2"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ letterSpacing: "-0.025em" }}
              className="inline-flex items-center gap-2 text-white font-light text-base sm:text-lg hover:text-[#E5B44D] transition-colors group cursor-pointer"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:text-[#E5B44D] group-hover:translate-x-1.5 transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar: Left Arrow Controls + Right Next Slide Preview Card */}
        <div className="flex items-end justify-between gap-4 pb-2 border-t border-white/15 pt-4">
          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-md transition-all focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Webandcrafts Style "Next" Slide Preview Card */}
          <div
            onClick={handleNext}
            className="group cursor-pointer flex items-center gap-4 p-3 pr-5 rounded-2xl bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border border-white/20">
              <img
                src={nextSlide.image}
                alt={nextSlide.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#E5B44D] flex items-center gap-1">
                <span>Next Program</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-light text-white max-w-[160px] truncate">
                {nextSlide.title}
              </div>

              {/* Progress Step Bar Lines */}
              <div className="flex items-center gap-1.5 pt-1">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "w-5 bg-[#E5B44D]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
