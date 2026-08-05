"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Maximize2 } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/MAJO9010.JPG", title: "Merit Felicitation Ceremony", category: "Events" },
  { id: 2, src: "/images/MAJO9011.JPG", title: "Annual Student Award Distribution", category: "Celebrations" },
  { id: 3, src: "/images/MAJO9013.JPG", title: "Interactive Workshop Session", category: "Campus" },
  { id: 4, src: "/images/098A3995.JPG", title: "1-on-1 Dedicated Tutoring", category: "Mentorship" },
  { id: 5, src: "/images/098A4001.JPG", title: "Micro Batch Focus Session", category: "Classroom" },
  { id: 6, src: "/images/098A4002.JPG", title: "Group Problem Solving Session", category: "Classroom" },
  { id: 7, src: "/images/098A4010.JPG", title: "Entrance Prep Discussion", category: "Coaching" },
  { id: 8, src: "/images/20231224005621_IMG_5903.JPG", title: "Student Felicitation & Trophy Presentation", category: "Events" },
  { id: 9, src: "/images/20231224005621_IMG_5904.JPG", title: "Annual Academic Gathering", category: "Events" },
  { id: 10, src: "/images/IMG20241231095658.jpg.jpeg", title: "Parent Teacher Interactive Session", category: "Community" },
  { id: 11, src: "/images/IMG20241231114822.jpg.jpeg", title: "Student Activities & Celebrations", category: "Campus" },
  { id: 12, src: "/images/IMG_20241223_130803.jpg.jpeg", title: "Academic Award Presentation", category: "Celebrations" },
];

export function EventGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs sm:text-sm font-bold mb-3"
        >
          <Camera className="w-4 h-4 text-sky-600" />
          <span>Life at Page Learning</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Photo Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Take a look at real moments from our classrooms, annual celebrations, student felicitations, and interactive learning sessions.
        </motion.p>
      </div>

      {/* Responsive Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => setSelectedImage(img.src)}
            className="group relative rounded-3xl overflow-hidden shadow-md border border-sky-100 bg-slate-900 h-64 sm:h-72 cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E5B44D] text-[#153947] text-[10px] font-extrabold uppercase">
                {img.category}
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">{img.title}</h3>
            </div>

            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
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
              alt="Enlarged view"
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
