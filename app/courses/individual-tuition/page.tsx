"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, UserCheck, Clock, BookOpen, MessageCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20enroll%20in%201-on-1%20Individual%20Tuition%20at%20Page%20Learning";

export default function IndividualTuitionPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>

          <div className="inline-block px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 text-xs font-bold uppercase tracking-wider">
            100% Personal Focus
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            1-on-1 Individual Tuition
          </h1>

          <p className="text-base text-sky-100 max-w-2xl leading-relaxed">
            For Class 1 to Class 12 • All Syllabi (CBSE, ICSE, State & International Boards)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Overview Card */}
        <div className="bg-white/95 p-8 rounded-3xl border border-sky-100 shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Why Choose 1-on-1 Individual Tuition?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In standard crowded classrooms, quiet or struggling students often hesitate to speak up. Our 1-on-1 Individual Tuition pairs one experienced subject mentor exclusively with one student. This guarantees 100% teacher attention, customized explanation depth, and instant doubt resolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <UserCheck className="w-5 h-5 text-sky-600" />
                <span>Dedicated Personal Mentor</span>
              </div>
              <p className="text-xs text-slate-600">Teacher adapts teaching speed directly to your child's pace.</p>
            </div>

            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Clock className="w-5 h-5 text-sky-600" />
                <span>Flexible Evening Schedules</span>
              </div>
              <p className="text-xs text-slate-600">Choose convenient time slots after school hours without travel hassle.</p>
            </div>
          </div>
        </div>

        {/* Grade Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Grade-Wise Syllabus Coverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/90 p-6 rounded-2xl border border-sky-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Primary (Class 1 to 5)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Foundational Math, English, Science & Vernacular assistance. Focus on instilling study discipline and curiosity.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-sky-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Middle School (Class 6 to 8)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mathematics, Physics, Chemistry, Biology & Languages. Building strong fundamentals for board preparation.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-sky-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900">High School (Class 9 & 10)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Targeted Board Exam preparation (CBSE 10th / ICSE 10th / SSLC). Intensive problem solving and specimen test series.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-sky-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900">Higher Secondary (Class 11 & 12 / +2)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physics, Chemistry, Mathematics, Biology, Accountancy & Computer Science under senior subject specialists.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Ready for 1-on-1 Personal Mentorship?</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Schedule a free live demo session to meet our faculty and evaluate your child's personalized learning path.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Enroll on WhatsApp Now</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
