"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Clock, ArrowRight, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Proven Time-Management Strategies for Class 10 & 12 Board Exams",
    category: "Exam Tips",
    readTime: "5 min read",
    desc: "Discover how top scoring students structure their daily study routines, prioritize weak topics, and balance revision with rest.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    link: "https://blog.pagelearning.in/time-management-board-exams",
  },
  {
    id: 2,
    title: "Why Micro Batches Boost Student Confidence & Exam Speed",
    category: "Pedagogy",
    readTime: "4 min read",
    desc: "An in-depth look into why maximum 7 student micro groups outperform traditional large classroom environments in retention.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    link: "https://blog.pagelearning.in/micro-batches-benefits",
  },
  {
    id: 3,
    title: "KEAM & NEET 2027: How to Start Early in Class 11 Physics & Chemistry",
    category: "Entrance Guide",
    readTime: "6 min read",
    desc: "Step-by-step roadmap for building strong numerical problem-solving skills from day one of higher secondary school.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    link: "https://blog.pagelearning.in/keam-neet-class11-guide",
  },
];

export function BlogsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold mb-3"
          >
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Latest Educational Insights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            From Our Learning Blog
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://blog.pagelearning.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-sky-200 text-sky-800 font-bold text-sm shadow-xs hover:bg-sky-50 transition-colors"
          >
            <span>Visit Full Blog (blog.pagelearning.in)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bento Grid layout similar to courses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-white/90 rounded-3xl p-5 border border-sky-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              {/* Image Header */}
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 border border-sky-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>{post.readTime}</span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                {post.desc}
              </p>
            </div>

            {/* Read Article Link */}
            <div className="pt-6 mt-4 border-t border-sky-100/60 flex items-center justify-between">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-900 group-hover:translate-x-1 transition-all"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
