"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Award, Target, MessageSquare, ArrowLeft } from "lucide-react";

interface CourseDetailProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function EntranceCoachingPage({ onOpenDemoModal }: CourseDetailProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal("Entrance Exam Coaching");
  };

  const entranceExams = [
    { name: "KEAM", desc: "Kerala Engineering Architecture Medical Entrance Exam preparation with state rank strategy." },
    { name: "JEE Main & Advanced", desc: "Rigorous Math, Physics & Chemistry conceptual grounding and speed problem solving." },
    { name: "NEET UG", desc: "Comprehensive Biology, Chemistry & Physics NCERT line-by-line mastery and mock tests." },
    { name: "CUSAT CAT", desc: "Cochin University of Science and Technology engineering exam pattern." },
    { name: "CUET UG", desc: "Central Universities Entrance Test domain subjects & general test coaching." },
    { name: "CLAT & KLEE", desc: "Common Law Admission Test & Kerala Law Entrance Exam logical & legal reasoning." },
    { name: "NCET", desc: "National Common Entrance Test for 4-Year Integrated Teacher Education Program." },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#153947] via-[#2D5A6E] to-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1 text-xs text-[#E5B44D] hover:underline font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3 py-1 rounded-full bg-[#E55A45] text-white text-xs font-bold uppercase tracking-wider">
            HIGH RANK STRATEGY
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#FFFDF7]">
            Entrance Exam Coaching
          </h1>
          <p className="text-base text-gray-200">
            Focused coaching for JEE, NEET, KEAM, CUSAT, CUET, CLAT, KLEE & NCET
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Overview */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-4">
          <h2 className="text-2xl font-extrabold text-[#153947]">
            Master Entrance Exams With Expert Mentorship
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Cracking competitive entrance exams requires not just knowing formulas, but mastering time management, negative marking avoidance strategies, and shortcut techniques. At Page Learning, our entrance mentors guide students through topic-wise problem sets and real-time exam simulations.
          </p>
        </div>

        {/* Exams Covered Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-[#153947]">Entrance Exam Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entranceExams.map((exam, idx) => (
              <div key={idx} className="p-5 bg-[#FFFDF7] rounded-2xl border border-gray-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#153947]">{exam.name}</span>
                  <span className="text-[10px] uppercase font-extrabold bg-[#E55A45]/20 text-[#E55A45] px-2.5 py-0.5 rounded-full">
                    Target Track
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{exam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#153947] text-white p-8 rounded-3xl text-center space-y-4 shadow-xl border border-white/10">
          <h3 className="text-2xl font-bold text-[#FFFDF7]">Book Your Entrance Demo Session</h3>
          <p className="text-xs text-gray-300 max-w-md mx-auto">
            Interact with our senior entrance mentors and get a personalized rank roadmap.
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
