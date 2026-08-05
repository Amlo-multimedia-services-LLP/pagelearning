"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Briefcase, CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20inquire%20about%20Career%20%26%20Competitive%20Exam%20Coaching%20(PSC%2FNET%2FKTET)";

export default function CompetitiveExamsPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3.5 py-1 rounded-full bg-purple-400/20 text-purple-200 border border-purple-300/30 text-xs font-bold uppercase tracking-wider">
            PSC | NET | SET | KTET | UPSC
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Career & Competitive Exams
          </h1>
          <p className="text-base text-sky-100 max-w-2xl leading-relaxed">
            Structured coaching for teaching job aspirants and competitive civil service candidates.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Official Course Poster (Actual Aspect Ratio) */}
        <div className="w-full flex justify-center">
          <img
            src="/Courses/neet 2026.png"
            alt="Competitive Exam Coaching Poster"
            className="w-full max-w-4xl h-auto object-contain rounded-3xl shadow-xl border border-sky-100 bg-slate-900"
          />
        </div>

        <div className="bg-white/95 p-8 rounded-3xl border border-sky-100 shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Tailored Coaching for Career Aspirants
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are preparing for Kerala PSC, UGC NET, SET, KTET, or foundational UPSC papers, our structured modules provide comprehensive syllabus coverage, subject-wise revision notes, and exam paper strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Briefcase className="w-5 h-5 text-purple-500" />
                <span>Subject Specific Paper Prep</span>
              </div>
              <p className="text-xs text-slate-600">Deep domain coverage for NET / SET / KTET paper I and paper II.</p>
            </div>
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <CheckCircle2 className="w-5 h-5 text-sky-600" />
                <span>Flexible Evening & Online Batches</span>
              </div>
              <p className="text-xs text-slate-600">Designed for working professionals and post-graduate students.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Start Your Career Exam Preparation</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Connect with our career coaching coordinator on WhatsApp.
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
