"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, UserCheck, Clock, BookOpen, MessageSquare, ArrowLeft } from "lucide-react";

interface CourseDetailProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function IndividualTuitionPage({ onOpenDemoModal }: CourseDetailProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal("Individual Tuition (1-on-1)");
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#153947] via-[#1C4B5E] to-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1 text-xs text-[#E5B44D] hover:underline font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-[#E5B44D] text-[#153947] text-xs font-bold uppercase tracking-wider">
            100% PERSONALIZED FOCUS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#FFFDF7]">
            Individual Tuition (1-on-1)
          </h1>
          <p className="text-base text-gray-200">
            For Class 1 to Class 12 • All Syllabi (CBSE, ICSE, State Board)
          </p>
          <div className="p-3 rounded-xl bg-white/10 border border-white/20 inline-block text-sm font-bold text-[#E5B44D]">
            ★ Malayalam Brand Philosophy: "ഒന്നും ഒന്നും ഇനി രണ്ടല്ല, 100 ആണ്"
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Overview Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Why Choose 1-on-1 Individual Tuition?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            In standard crowded classrooms, quiet or slow-learning students often hesitate to speak up. Our 1-on-1 Individual Tuition pairs one experienced subject mentor exclusively with one student. This guarantees 100% teacher attention, customized explanation depth, and instant doubt resolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E8E2D2] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#153947]">
                <UserCheck className="w-5 h-5 text-[#E5B44D]" />
                <span>Dedicated Personal Mentor</span>
              </div>
              <p className="text-xs text-gray-600">Teacher adapts teaching speed directly to your child's pace.</p>
            </div>

            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-[#E8E2D2] space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-[#153947]">
                <Clock className="w-5 h-5 text-[#41AAF0]" />
                <span>Flexible Evening Schedules</span>
              </div>
              <p className="text-xs text-gray-600">Choose convenient time slots after school hours without travel hassle.</p>
            </div>
          </div>
        </div>

        {/* Grade Breakdown */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Grade-Wise Syllabus Coverage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-md space-y-2">
              <h3 className="text-lg font-bold text-[#153947]">Primary (Class 1 to 5)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Foundational Math, English, Environmental Studies & Vernacular language assistance. Focus on instilling study discipline and curiosity.
              </p>
            </div>

            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-md space-y-2">
              <h3 className="text-lg font-bold text-[#153947]">Middle School (Class 6 to 8)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mathematics, Physics, Chemistry, Biology, Social Science & Languages. Building strong fundamentals for board preparation.
              </p>
            </div>

            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-md space-y-2">
              <h3 className="text-lg font-bold text-[#153947]">High School (Class 9 & 10)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Targeted Board Exam preparation (CBSE 10th / ICSE 10th / SSLC). Intensive problem solving and specimen test series.
              </p>
            </div>

            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-md space-y-2">
              <h3 className="text-lg font-bold text-[#153947]">Higher Secondary (Class 11 & 12 / +2)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Physics, Chemistry, Mathematics, Biology, Accountancy, Economics & Computer Science under senior subject specialists.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#153947] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-[#E5B44D]/30">
          <h3 className="text-2xl font-bold text-[#FFFDF7]">Ready for 1-on-1 Mentorship?</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Schedule a free live demo session to meet our faculty and evaluate your child's personalized learning path.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={triggerDemo}
              className="px-8 py-3.5 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-extrabold text-sm shadow-md transition-transform hover:scale-105"
            >
              Book Free Demo Session
            </button>
            <a
              href="https://wa.me/917736164363"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
