"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Trophy, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Page%20Learning%20latest%20news%20and%20updates";

export function LatestNewsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs sm:text-sm font-bold mb-3"
        >
          <Newspaper className="w-4 h-4 text-sky-600" />
          <span>Official Announcements</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Latest News at Page Learning
        </motion.h2>
      </div>

      {/* Main Featured Banner: 98% victory in CBSE 10th exams */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-sky-800 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B44D] text-[#153947] text-xs font-extrabold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-[#153947]" /> Top Result Milestone
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            We achieved 98% victory in CBSE 10th exams!
          </h3>

          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
            Our students delivered outstanding performance across Mathematics, Science, and English with over 98% achieving distinction marks in the official CBSE 10th Board Examinations through Page Learning 1-on-1 mentorship.
          </p>

          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-sm shadow-md transition-transform hover:scale-105"
            >
              <span>Read Full Result Breakdown</span>
              <ArrowUpRight className="w-4 h-4 text-[#153947]" />
            </a>
          </div>
        </motion.div>

        {/* Secondary News Items */}
        <div className="lg:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-2 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between text-xs text-sky-700 font-bold">
              <span>ADMISSIONS 2026-27</span>
              <span>AUG 2026</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              New Evening 1-on-1 Mentorship Slots Capped for Class 8 to 12
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flexible evening timings tailored for high school students needing dedicated subject guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-white border border-sky-100 shadow-sm space-y-2 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between text-xs text-sky-700 font-bold">
              <span>ENTRANCE SUCCESS</span>
              <span>JULY 2026</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">
              State Rank Predictor Mock Test Series Announced for KEAM & NEET
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive full-length mock exams with automated all-Kerala rank generation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
