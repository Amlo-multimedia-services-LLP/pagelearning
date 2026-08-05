"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Award, Target, BookOpen, Users, UserCheck, ShieldCheck, Heart, Star, MessageCircle } from "lucide-react";
import { LegacyBadge } from "@/components/brand-logo";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20Page%20Learning%20legacy";

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header Banner */}
      <section className="pt-24 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-sky-600" />
            <span>15 Years of Educational Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            About Page Learning
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transforming academic potential into confidence and excellence through individualized guidance, micro batches, and continuous mentorship since 2011.
          </p>

          <div className="pt-2 flex justify-center">
            <LegacyBadge />
          </div>
        </div>
      </section>

      {/* Brand Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white/95 p-8 sm:p-10 rounded-3xl border border-sky-100 shadow-md space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl">
              <Target className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Brand Vision</h2>
              <p className="text-base text-slate-700 leading-relaxed font-semibold">
                “To develop confidence and excellence through <span className="text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">personalized guidance and mentorship</span>.”
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We believe every student possesses unique strengths. Our vision centers around nurturing that individual spark rather than pushing one-size-fits-all factory education.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white/95 p-8 sm:p-10 rounded-3xl border border-sky-100 shadow-md space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Brand Mission</h2>
              <p className="text-base text-slate-700 leading-relaxed font-semibold">
                “To provide <span className="text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded-md">individualized tuition to students from Class 1 to Class 12</span> across all syllabus, and focused coaching for entrance and scholarship examinations.”
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Delivering outcome-driven education backed by regular diagnostic testing, doubt clearance, and parent progress alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            Our Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Bold Excellence", icon: <Star className="w-6 h-6 text-amber-500" />, desc: "Uncompromising focus on student achievement and rigorous academic benchmarks.", bg: "bg-amber-50" },
            { title: "Friendly Support", icon: <Heart className="w-6 h-6 text-pink-500" />, desc: "Approachable mentors who build genuine rapport and ease student exam stress.", bg: "bg-pink-50" },
            { title: "Trustworthy", icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, desc: "15 years of transparent track record trusted by thousands of parents in Thrissur & beyond.", bg: "bg-emerald-50" },
            { title: "Interactive", icon: <Sparkles className="w-6 h-6 text-sky-500" />, desc: "Pedagogy that makes complex concepts intuitive and enjoyable for young minds.", bg: "bg-sky-50" }
          ].map((val, i) => (
            <div key={i} className="p-6 bg-white/90 rounded-2xl border border-sky-100 shadow-xs text-center space-y-3">
              <div className={`w-12 h-12 rounded-2xl ${val.bg} flex items-center justify-center mx-auto`}>
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-10 sm:p-14 rounded-3xl text-center space-y-5 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience The Page Learning Difference
          </h2>
          <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto">
            Book a complimentary 1-on-1 demo session to experience how our mentorship transforms learning outcomes.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
