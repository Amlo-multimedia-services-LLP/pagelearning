"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20inquire%20about%20Scholarship%20Exam%20Prep%20(NMMS%2FUSS%2FLSS)";

export default function ScholarshipsPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 text-xs font-bold uppercase tracking-wider">
            NMMS | USS | LSS | Olympiads
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Scholarship Examination Prep
          </h1>
          <p className="text-base text-sky-100 max-w-2xl leading-relaxed">
            Early competitive track coaching for primary & middle school students aiming for official state scholarship honors.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Official Course Poster (Actual Aspect Ratio) */}
        <div className="w-full flex justify-center">
          <img
            src="/Courses/MICRO BATCH.png"
            alt="Scholarships Coaching Poster"
            className="w-full max-w-4xl h-auto object-contain rounded-3xl shadow-xl border border-sky-100 bg-slate-900"
          />
        </div>

        <div className="bg-white/95 p-8 rounded-3xl border border-sky-100 shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Building Early Competitive Aptitude
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Securing a state scholarship (LSS, USS, NMMS) instills early confidence and analytical problem-solving skills in young learners. Our program trains students in Mental Ability Tests (MAT), Scholastic Aptitude Tests (SAT), and rapid math puzzles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Award className="w-5 h-5 text-emerald-500" />
                <span>MAT & SAT Aptitude Drills</span>
              </div>
              <p className="text-xs text-slate-600">Logical reasoning, pattern recognition, and speed math techniques.</p>
            </div>
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
                <span>Model Scholarship Papers</span>
              </div>
              <p className="text-xs text-slate-600">Simulated test papers modeled directly on official state examination patterns.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Enroll Your Child in the Next Scholarship Cohort</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Contact our scholarship program coordinator on WhatsApp for schedule details.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
