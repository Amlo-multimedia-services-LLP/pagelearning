"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Page%20Learning%20results%20and%20toppers";

const resultImages = [
  { id: "cbse-10th", src: "/Results/CBSE 10TH.png", title: "CBSE 10th Victory 98%" },
  { id: "res-1", src: "/Results/1.png", title: "Topper Result 1" },
  { id: "res-2", src: "/Results/2.png", title: "Topper Result 2" },
  { id: "res-3", src: "/Results/3.png", title: "Topper Result 3" },
  { id: "res-4", src: "/Results/4.png", title: "Topper Result 4" },
  { id: "res-5", src: "/Results/5.png", title: "Topper Result 5" },
  { id: "res-6", src: "/Results/6.png", title: "Topper Result 6" },
  { id: "res-7", src: "/Results/7.png", title: "Topper Result 7" },
  { id: "res-8", src: "/Results/8.png", title: "Topper Result 8" },
  { id: "res-9", src: "/Results/9.png", title: "Topper Result 9" },
  { id: "res-10", src: "/Results/10.png", title: "Topper Result 10" },
  { id: "res-11", src: "/Results/11.png", title: "Topper Result 11" },
  { id: "res-12", src: "/Results/12.png", title: "Topper Result 12" },
  { id: "res-13", src: "/Results/13.png", title: "Topper Result 13" },
  { id: "res-14", src: "/Results/14.png", title: "Topper Result 14" },
  { id: "res-25", src: "/Results/25.png", title: "Topper Result 25" },
  { id: "res-26", src: "/Results/26.png", title: "Topper Result 26" },
  { id: "res-27", src: "/Results/27.png", title: "Topper Result 27" },
  { id: "res-29", src: "/Results/29.png", title: "Topper Result 29" },
  { id: "res-30", src: "/Results/30.png", title: "Topper Result 30" },
  { id: "res-31", src: "/Results/31.png", title: "Topper Result 31" },
];

export function LatestResultsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [mobileStackIndex, setMobileStackIndex] = useState(0);

  const displayedImages = showAll ? resultImages : resultImages.slice(0, 6);

  const handleMobileNext = () => {
    setMobileStackIndex((prev) => (prev + 1) % resultImages.length);
  };

  const handleMobilePrev = () => {
    setMobileStackIndex((prev) => (prev - 1 + resultImages.length) % resultImages.length);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Container Box */}
      <div className="bg-[#F0F6FE] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 border border-sky-100/90 shadow-sm space-y-8">
        
        {/* MOBILE VIEW: SWIPEABLE IMAGE STACK CAROUSEL */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-600" />
              <span>Results Gallery ({mobileStackIndex + 1} of {resultImages.length})</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleMobilePrev}
                className="p-2 rounded-full bg-white text-slate-800 shadow-xs hover:bg-sky-100 active:scale-95 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleMobileNext}
                className="p-2 rounded-full bg-white text-slate-800 shadow-xs hover:bg-sky-100 active:scale-95 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Swipeable Cards Deck Container */}
          <div className="relative w-full h-[380px] flex items-center justify-center overflow-hidden touch-pan-x">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={mobileStackIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -40) handleMobileNext();
                  if (offset.x > 40) handleMobilePrev();
                }}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setSelectedImage(resultImages[mobileStackIndex].src)}
                className="w-full h-full bg-white rounded-3xl p-2.5 border border-sky-100 shadow-xl flex items-center justify-center cursor-pointer select-none"
              >
                <img
                  src={resultImages[mobileStackIndex].src}
                  alt={resultImages[mobileStackIndex].title}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-4">
            {resultImages.slice(0, 8).map((_, i) => (
              <div
                key={i}
                onClick={() => setMobileStackIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === (mobileStackIndex % 8) ? "w-6 bg-[#153947]" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW: 6-IMAGE GRID WITH "VIEW MORE" EXPANSION */}
        <div className="hidden sm:block">
          <div className="columns-2 lg:columns-3 gap-6 space-y-6">
            {displayedImages.map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedImage(res.src)}
                className="break-inside-avoid group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-sky-100/90 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={res.src}
                  alt={res.title}
                  className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-[#153947] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More / Show Less Toggle Button */}
          <div className="pt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#153947] hover:bg-[#E5B44D] text-white hover:text-[#153947] font-extrabold text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{showAll ? "Show Less Results" : `View More Results (${resultImages.length - 6}+)`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged Result View"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
