"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Video, Sparkles, ExternalLink, Heart, MessageCircle } from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const instagramReels = [
  {
    id: "reel-1",
    title: "1-on-1 Tuition vs Mega Classroom Coaching: Why Individual Attention Wins!",
    views: "14.2K Views",
    likes: "1.2K Likes",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    reelUrl: "https://www.instagram.com/reel/C-pagelearning1/",
    duration: "0:45",
  },
  {
    id: "reel-2",
    title: "Top 5 NEET Physics Formula Hacks for KEAM & NEET 2026 Aspirants",
    views: "22.8K Views",
    likes: "2.4K Likes",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
    reelUrl: "https://www.instagram.com/reel/C-pagelearning2/",
    duration: "0:58",
  },
  {
    id: "reel-3",
    title: "Inside Page Learning Micro Batches: Max 7 Students Discussion",
    views: "18.9K Views",
    likes: "1.8K Likes",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
    reelUrl: "https://www.instagram.com/reel/C-pagelearning3/",
    duration: "1:12",
  },
  {
    id: "reel-4",
    title: "Student Testimonial: How Personalized Mentorship Transformed My Math Marks",
    views: "31.5K Views",
    likes: "3.1K Likes",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    reelUrl: "https://www.instagram.com/reel/C-pagelearning4/",
    duration: "0:50",
  },
];

export function StickyReelsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side Sticky Container */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 border border-pink-200 text-pink-900 text-xs font-bold"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>@pagelearning Official Feed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Watch Our Latest Instagram Reels & Tips
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Explore quick study tricks, mentor insights, entrance exam strategies, and student success stories straight from our official Instagram channel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Follow @pagelearning</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 leading-relaxed flex items-center gap-3">
            <Video className="w-6 h-6 text-sky-600 shrink-0" />
            <span>New educational reels published weekly by our senior faculty team!</span>
          </div>
        </div>

        {/* Right Side Scrollable Instagram Reels Column */}
        <div className="lg:col-span-7 space-y-6">
          {instagramReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-4 sm:p-5 border border-sky-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row gap-5 items-center"
            >
              {/* Reel Video Thumbnail Container */}
              <div className="relative w-full sm:w-48 h-64 sm:h-52 rounded-2xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Play Button Badge */}
                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-pink-600 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </a>

                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono">
                  {reel.duration}
                </span>
              </div>

              {/* Reel Info */}
              <div className="flex-1 space-y-3 w-full">
                <div className="flex items-center justify-between text-xs text-pink-600 font-bold">
                  <span className="flex items-center gap-1">
                    <InstagramIcon className="w-3.5 h-3.5" /> Instagram Reel
                  </span>
                  <span className="text-slate-400 font-medium">{reel.views}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {reel.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-rose-500">
                    <Heart className="w-3.5 h-3.5 fill-current" /> {reel.likes}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-slate-500">
                    <MessageCircle className="w-3.5 h-3.5" /> Comments Open
                  </span>
                </div>

                <a
                  href={reel.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 group-hover:translate-x-1 transition-all pt-1"
                >
                  <span>Watch Full Reel on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
