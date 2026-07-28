"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, Target, BookOpen, Users, UserCheck } from "lucide-react";
import { GeometricBrandMotif, LegacyBadge } from "@/components/brand-logo";

interface AboutProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function AboutPage({ onOpenDemoModal }: AboutProps) {
  const triggerDemo = () => {
    if (onOpenDemoModal) onOpenDemoModal();
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Header Banner - Light & Clean */}
      <section className="bg-white text-gray-900 pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in-up relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4" />
            15 Years of Educational Excellence
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            About Page Learning.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Transforming academic potential into confidence and excellence through individualised guidance, micro batches, and continuous mentorship since 2011.
          </p>
          <div className="pt-4 flex justify-center">
            <LegacyBadge className="!bg-white shadow-sm border border-gray-200" />
          </div>
        </div>
      </section>

      {/* Brand Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 text-[#153947] flex items-center justify-center font-bold text-2xl shadow-sm">
              <Target className="w-7 h-7 text-[#E5B44D]" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Brand Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                “To develop confidence and excellence through <span className="text-[#153947] font-bold bg-yellow-50 px-1 border-b-2 border-[#E5B44D]/30">personalised guidance and mentorship</span>.”
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We believe every student possesses unique strengths. Our vision centers around nurturing that individual spark rather than pushing one-size-fits-all factory education.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 text-[#153947] flex items-center justify-center font-bold text-2xl shadow-sm">
              <BookOpen className="w-7 h-7 text-[#41AAF0]" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Brand Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                “To provide <span className="text-[#153947] font-bold border-b-2 border-[#153947]/20">individualised tuition to students from Class 2 to Class 12</span> across all syllabus, and focused coaching for entrance and scholarship examinations.”
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Delivering outcome-driven education backed by regular testing, doubt clearance, and parent progress alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Values - SaaS Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
            Voice & Tone Guidelines
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Bold", icon: "★", desc: "Uncompromising focus on student achievement and rigorous academic benchmarks.", color: "text-[#E5B44D]", bg: "bg-yellow-50" },
            { title: "Friendly", icon: "♥", desc: "Approachable mentors who build genuine rapport and ease student exam stress.", color: "text-[#41AAF0]", bg: "bg-blue-50" },
            { title: "Trustworthy", icon: "🛡", desc: "15 years of transparent track record trusted by thousands of parents in Thrissur & beyond.", color: "text-emerald-500", bg: "bg-emerald-50" },
            { title: "Playful", icon: "✦", desc: "Interactive pedagogy that makes complex concepts intuitive and enjoyable.", color: "text-[#E55A45]", bg: "bg-red-50" }
          ].map((value, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center space-y-4">
              <div className={`w-14 h-14 rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mx-auto font-bold text-2xl`}>
                {value.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box - Light Mode */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gray-50 text-gray-900 p-12 sm:p-16 rounded-[2.5rem] border border-gray-200 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none scale-150 -translate-y-1/4 translate-x-1/4">
             <GeometricBrandMotif />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Experience The Page Learning Difference.
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Book a complimentary 1-on-1 demo session to experience how our mentorship transforms learning outcomes.
            </p>
            <div className="pt-4">
              <button
                onClick={triggerDemo}
                className="px-8 py-4 rounded-2xl bg-[#153947] hover:bg-[#112a35] text-white font-bold text-base shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles className="w-5 h-5 text-[#E5B44D]" />
                Book Your Free Demo Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
