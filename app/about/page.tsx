"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, Heart, Target, Users, UserCheck, BookOpen, ArrowRight } from "lucide-react";
import { GeometricBrandMotif, LegacyBadge } from "@/components/brand-logo";

interface AboutProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function AboutPage({ onOpenDemoModal }: AboutProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal();
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#153947] via-[#1C4B5E] to-[#153947] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-5xl mx-auto text-center space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E5B44D] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            15 YEARS OF EDUCATIONAL EXCELLENCE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#FFFDF7]">
            About Page Learning
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Transforming academic potential into confidence and excellence through individualised guidance, micro batches, and continuous mentorship since 2011.
          </p>
          <div className="pt-2 flex justify-center">
            <LegacyBadge />
          </div>
        </div>
      </section>

      {/* Brand Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-[#FFFDF7] p-8 sm:p-10 rounded-3xl border border-[#E8E2D2] shadow-xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#153947] text-[#E5B44D] flex items-center justify-center font-bold text-2xl shadow-md">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#153947]">Brand Vision</h2>
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              “To develop confidence and excellence through <span className="text-[#153947] font-bold bg-[#E5B44D]/30 px-1">personalised guidance and mentorship</span>.”
            </p>
            <p className="text-xs text-gray-500">
              We believe every student possesses unique strengths. Our vision centers around nurturing that individual spark rather than pushing one-size-fits-all factory education.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#153947] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4 border border-white/10">
            <div className="w-14 h-14 rounded-2xl bg-[#E5B44D] text-[#153947] flex items-center justify-center font-bold text-2xl shadow-md">
              <BookOpen className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#E5B44D]">Brand Mission</h2>
            <p className="text-base text-gray-200 leading-relaxed font-medium">
              “To provide <span className="text-[#E5B44D] font-bold">individualised tuition to students from Class 2 to Class 12</span> across all syllabus, and focused coaching for entrance and scholarship examinations through expert mentoring, structured learning, and continuous assessment.”
            </p>
            <p className="text-xs text-gray-300">
              Delivering outcome-driven education backed by regular testing, doubt clearance, and parent progress alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
            VOICE & TONE GUIDELINES
          </span>
          <h2 className="text-3xl font-extrabold text-[#153947]">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#153947] text-[#E5B44D] flex items-center justify-center mx-auto font-bold text-lg">
              ★
            </div>
            <h3 className="text-lg font-bold text-[#153947]">Bold</h3>
            <p className="text-xs text-gray-600">
              Uncompromising focus on student achievement and rigorous academic benchmarks.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#41AAF0] text-white flex items-center justify-center mx-auto font-bold text-lg">
              ♥
            </div>
            <h3 className="text-lg font-bold text-[#153947]">Friendly</h3>
            <p className="text-xs text-gray-600">
              Approachable mentors who build genuine rapport and ease student exam stress.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#6EB44D] text-white flex items-center justify-center mx-auto font-bold text-lg">
              🛡
            </div>
            <h3 className="text-lg font-bold text-[#153947]">Trustworthy</h3>
            <p className="text-xs text-gray-600">
              15 years of transparent track record trusted by thousands of parents in Thrissur & beyond.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-md text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#E55A45] text-white flex items-center justify-center mx-auto font-bold text-lg">
              ✦
            </div>
            <h3 className="text-lg font-bold text-[#153947]">Playful & Engaging</h3>
            <p className="text-xs text-gray-600">
              Interactive pedagogy that makes complex concepts intuitive and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-[#153947] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 border border-[#E5B44D]/30 shadow-2xl">
          <GeometricBrandMotif className="justify-center" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFDF7]">
            Experience The Page Learning Difference Today
          </h2>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Book a complimentary 1-on-1 demo session to experience how our mentorship transforms learning outcomes.
          </p>
          <div className="pt-2">
            <button
              onClick={triggerDemo}
              className="px-8 py-3.5 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-extrabold text-sm shadow-lg transition-transform hover:scale-105"
            >
              Book Your Free Demo Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
