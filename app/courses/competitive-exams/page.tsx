"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

interface CourseDetailProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function CompetitiveExamsPage({ onOpenDemoModal }: CourseDetailProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal("Competitive Exam Coaching");
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#153947] via-[#3B2C4D] to-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1 text-xs text-[#E5B44D] hover:underline font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-[#775898] text-white text-xs font-bold uppercase tracking-wider">
            CAREER & TEACHING COMPETITIONS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#FFFDF7]">
            Career & Competitive Exams
          </h1>
          <p className="text-base text-gray-200">
            Coaching for PSC, UPSC, NET, SET & KTET Examinations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-4">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Professional & Teacher Recruitment Preparation
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Designed for job aspirants, graduate students, and teaching qualification candidates. Our expert faculty provides subject-oriented lectures, current affairs notes, and mock test papers for Kerala PSC, UPSC, UGC-NET, Kerala SET, and KTET Category 1 to 4.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">Kerala PSC & UPSC Foundation</h3>
            <p className="text-xs text-gray-600">General Knowledge, Constitution, Arithmetic, Mental Ability, Malayalam & English grammar modules.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">UGC-NET & CSIR-NET</h3>
            <p className="text-xs text-gray-600">Paper 1 General Teaching & Research Aptitude plus Paper 2 subject specialized coaching.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">Kerala SET (State Eligibility Test)</h3>
            <p className="text-xs text-gray-600">Targeted preparation for Higher Secondary School Teacher eligibility in Kerala.</p>
          </div>

          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-[#153947]">KTET (Category 1, 2, 3 & 4)</h3>
            <p className="text-xs text-gray-600">Child Development, Pedagogy, Language & subject pedagogy for teacher certification.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#153947] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-white/10">
          <h3 className="text-2xl font-bold text-[#FFFDF7]">Start Your Career Prep Journey</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Get sample study notes and attend a free demo class with our competitive exam mentors.
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
