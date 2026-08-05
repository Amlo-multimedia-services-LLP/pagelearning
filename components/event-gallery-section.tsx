"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, Heart } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Annual Merit Felicitation",
    subtitle: "Celebrating top rankers in Board & Entrance examinations",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    aspect: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    title: "Interactive Mentorship Workshops",
    subtitle: "1-on-1 focus sessions with senior faculties",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Micro Batch Group Discussions",
    subtitle: "Peer learning in focused small groups of 7",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    aspect: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Parent-Teacher Interactive Meets",
    subtitle: "Personalized progress tracking and diagnostic reviews",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop",
    aspect: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "Rank Certificate & Trophy Distribution",
    subtitle: "Empowering young achievers to reach higher peaks",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    aspect: "col-span-1 md:col-span-3 row-span-1",
  },
];

export function EventGallerySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold mb-3"
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
          Our Event & Achievement Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Take a glimpse into our vibrant learning atmosphere, student celebrations, interactive seminars, and annual merit felicitation events.
        </motion.p>
      </div>

      {/* Grid with Scroll Motion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className={`${img.aspect} group relative rounded-3xl overflow-hidden shadow-lg border border-sky-100 min-h-[260px] sm:min-h-[320px] bg-slate-900`}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-300" /> Event Highlight
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{img.title}</h3>
              <p className="text-xs sm:text-sm text-sky-100/90 font-normal">{img.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
