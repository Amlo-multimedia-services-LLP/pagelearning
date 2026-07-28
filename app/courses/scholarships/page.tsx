"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

interface CourseDetailProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function ScholarshipsPage({ onOpenDemoModal }: CourseDetailProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal("Scholarship Examinations");
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#153947] via-[#364954] to-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1 text-xs text-[#E5B44D] hover:underline font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-[#6EB44D] text-white text-xs font-bold uppercase tracking-wider">
            EARLY SCHOLAR DEVELOPMENT
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#FFFDF7]">
            Scholarship Examinations
          </h1>
          <p className="text-base text-gray-200">
            NMMS, USS, LSS & National Olympiad Coaching
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-4">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Building Early Aptitude & Competitive Confidence
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Securing government scholarships like NMMS, USS, and LSS not only provides financial awards to young students but instills early analytical confidence. Our scholarship training programs focus on Mental Ability Tests (MAT), Scholastic Aptitude Tests (SAT), and Olympiad problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">LSS (Lower Secondary Scholarship)</h3>
            <p className="text-xs text-gray-600">For Class 4 students. Mental arithmetic, language comprehension & basic science reasoning.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">USS (Upper Secondary Scholarship)</h3>
            <p className="text-xs text-gray-600">For Class 7 students. Advanced problem solving, general awareness & analytical logic.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">NMMS (National Means-cum-Merit)</h3>
            <p className="text-xs text-gray-600">For Class 8 students. State-level merit exam training with MAT & SAT question banks.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">Science & Math Olympiads</h3>
            <p className="text-xs text-gray-600">National and international STEM Olympiad preparatory drills for Class 5 to 10.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#153947] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-white/10">
          <h3 className="text-2xl font-bold text-[#FFFDF7]">Prepare Your Child For Scholarships</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Book a free trial session to assess your child's current aptitude level.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={triggerDemo}
              className="px-8 py-3.5 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-extrabold text-sm shadow-md transition-transform hover:scale-105"
            >
              Book Free Demo Class
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
