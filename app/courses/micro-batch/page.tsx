"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Users, CheckCircle2, MessageSquare, ArrowLeft, Zap } from "lucide-react";

interface CourseDetailProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function MicroBatchPage({ onOpenDemoModal }: CourseDetailProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal("Micro Batch (Max 7 Students)");
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#153947] via-[#254653] to-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1 text-xs text-[#E5B44D] hover:underline font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-[#41AAF0] text-white text-xs font-bold uppercase tracking-wider">
            STRICT 7 STUDENTS BATCH LIMIT
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#FFFDF7]">
            Micro Batch Program
          </h1>
          <p className="text-base text-gray-200">
            For Class 7 to Class 12 (+2) • All Syllabi
          </p>
          <div className="p-3 rounded-xl bg-white/10 border border-white/20 inline-block text-sm font-bold text-[#41AAF0]">
            ★ Malayalam Brand Philosophy: "ഇനി 50 അല്ല, വെറും 7 പേർ മാത്രം"
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Overview */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Small Batch Peer Learning Dynamic
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            In standard coaching centers with 50 to 100 students in one room, students rarely get a chance to ask questions. Page Learning Micro Batches strictly limit attendance to <strong>7 students per batch</strong>. This provides an ideal blend of collaborative peer discussion and individual mentor feedback.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-gray-200 text-center space-y-1">
              <div className="text-2xl font-black text-[#153947]">7 Students</div>
              <div className="text-xs text-gray-500 font-medium">Strict Upper Cap</div>
            </div>
            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-gray-200 text-center space-y-1">
              <div className="text-2xl font-black text-[#41AAF0]">100% Live</div>
              <div className="text-xs text-gray-500 font-medium">Interactive Class</div>
            </div>
            <div className="p-4 bg-[#FFFDF7] rounded-2xl border border-gray-200 text-center space-y-1">
              <div className="text-2xl font-black text-[#6EB44D]">Weekly Tests</div>
              <div className="text-xs text-gray-500 font-medium">Performance Track</div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[#153947]">Key Program Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#153947]">High Active Participation</h4>
                <p className="text-xs text-gray-600">With only 7 peers, every student answers questions and stays fully engaged.</p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#153947]">Affordable Tuition Fee</h4>
                <p className="text-xs text-gray-600">Get near-individual attention at a fraction of 1-on-1 tuition costs.</p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#153947]">Structured Study Planner</h4>
                <p className="text-xs text-gray-600">Batch schedules align directly with school term exams and board patterns.</p>
              </div>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#153947]">Doubt Clearing Slots</h4>
                <p className="text-xs text-gray-600">Specialized end-of-class Q&A windows to resolve unresolved concepts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#153947] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-white/10">
          <h3 className="text-2xl font-bold text-[#FFFDF7]">Join A 7-Student Micro Batch</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Slots fill quickly due to strict batch limits. Reserve your free trial class today.
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
