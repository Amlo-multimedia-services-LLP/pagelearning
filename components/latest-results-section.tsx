"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, Maximize2, MessageCircle } from "lucide-react";

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-3"
        >
          <Trophy className="w-4 h-4 text-amber-600" />
          <span>Hall of Fame</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Our Latest Results & Toppers Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Celebrating student achievements in Board Exams, KEAM, NEET, JEE, and State Scholarship Examinations. Click any result card to enlarge.
        </motion.p>
      </div>

      {/* Responsive Result Gallery Grid - Cards fit images' natural aspect ratios */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {resultImages.map((res, idx) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            onClick={() => setSelectedImage(res.src)}
            className="break-inside-avoid group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-sky-100/90 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Image fits natural dimensions without leaving internal whitespace */}
            <img
              src={res.src}
              alt={res.title}
              className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-102"
              loading="lazy"
            />

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 rounded-full bg-white/90 text-[#153947] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
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

      {/* CTA Box */}
      <div className="mt-14 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#153947]" />
          <span>Join Page Learning & Aim for Top Ranks</span>
        </a>
      </div>
    </section>
  );
}
