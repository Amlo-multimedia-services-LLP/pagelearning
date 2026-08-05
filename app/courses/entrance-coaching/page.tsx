"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Trophy, CheckCircle2, MessageCircle, ArrowLeft, Target } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20inquire%20about%20Entrance%20Exam%20Coaching%20(JEE%2FNEET%2FKEAM)";

export default function EntranceCoachingPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30 text-xs font-bold uppercase tracking-wider">
            JEE | NEET | KEAM | CUSAT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Entrance Exam Coaching
          </h1>
          <p className="text-base text-sky-100 max-w-2xl leading-relaxed">
            Targeted problem solving, time-saving tricks, and rank booster mock tests led by senior entrance faculties.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white/95 p-8 rounded-3xl border border-sky-100 shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Our Entrance Track Record & Strategy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Cracking competitive entrance exams like JEE and NEET requires speed, accuracy, and clear concept fundamentals. Our entrance program combines rigorous daily practice papers (DPPs), chapter-wise PYQ analysis, and simulated computer-based test (CBT) mock exams.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Target className="w-5 h-5 text-sky-600" />
                <span>Concept Worksheets & Speed Tricks</span>
              </div>
              <p className="text-xs text-slate-600">Shortcut formulas and quick calculation tactics for competitive speed.</p>
            </div>
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Mock Rank Predictors</span>
              </div>
              <p className="text-xs text-slate-600">Simulated all-Kerala rank benchmarking and error analysis.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Admissions Open for 2026-27 Entrance Batches</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Connect with our entrance head mentor on WhatsApp to evaluate study plan options.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Inquire Entrance Seat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
