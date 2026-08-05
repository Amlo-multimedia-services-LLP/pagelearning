"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, BookOpen, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Page%20Learning%20courses";

export default function CoursesPage() {
  const programs = [
    {
      slug: "individual-tuition",
      title: "Individual Tuition (1-on-1)",
      subtitle: "For Class 1 to Class 12 (State, CBSE & ICSE)",
      badge: "1:1 Dedicated Mentor",
      highlight: "100% Personal Study Pace",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      desc: "Comprehensive personalized tuition tailored to the exact learning pace, syllabus, and doubt clearance needs of each student.",
      features: [
        "100% individual teacher focus per session",
        "CBSE, ICSE, State & International syllabi covered",
        "Custom flexible timing & live doubt resolution",
        "Continuous diagnostic assessments & monthly report cards",
      ],
      path: "/courses/individual-tuition",
    },
    {
      slug: "micro-batch",
      title: "Micro Batch (Max 7)",
      subtitle: "For Class 7 to Class 12",
      badge: "Strictly 7 Students Cap",
      highlight: "Small Cohort Peer Focus",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      desc: "Peer learning environment strictly capped at 7 students per batch for maximum interactive discussion.",
      features: [
        "Maximum 7 students per batch for active participation",
        "Collaborative problem solving & group discussions",
        "Full syllabus coverage with weekly test series",
        "Affordable fee structure with high teacher attention",
      ],
      path: "/courses/micro-batch",
    },
    {
      slug: "entrance-coaching",
      title: "Entrance Exam Coaching",
      subtitle: "JEE Main & Advanced, NEET, KEAM, CUSAT",
      badge: "High Rank Focus",
      highlight: "Proven Entrance Record",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      desc: "Targeted entrance prep with speed tricks, mock test series, daily practice sheets, and past year paper analysis.",
      features: [
        "Top entrance specialist faculty and mentors",
        "Topic-wise concept sheets & formula revision",
        "Time management & exam strategy workshops",
        "National level mock rank predictors",
      ],
      path: "/courses/entrance-coaching",
    },
    {
      slug: "scholarships",
      title: "Scholarship Examination Prep",
      subtitle: "NMMS, USS, LSS, Olympiads",
      badge: "Early Scholar Track",
      highlight: "Primary & Middle School Prep",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      desc: "Specialized coaching for students in lower and upper primary to secure prestigious state scholarships.",
      features: [
        "Mental Ability & Scholastic Aptitude Test (MAT/SAT) drills",
        "Interactive math & science puzzle solving",
        "Mock exams modeled on official state scholarship papers",
        "Confidence & speed building exercises",
      ],
      path: "/courses/scholarships",
    },
    {
      slug: "competitive-exams",
      title: "Career & Competitive Exams",
      subtitle: "PSC, UPSC, NET, SET, KTET",
      badge: "Career Growth",
      highlight: "Professional Exam Prep",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
      desc: "Structured coaching for adult learners and teaching job aspirants.",
      features: [
        "Subject-specific paper preparation (NET / SET / KTET)",
        "General studies & current affairs modules for PSC / UPSC",
        "Recorded class archives for flexible working hours",
        "Practice question banks with answer key explanations",
      ],
      path: "/courses/competitive-exams",
    },
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Academic Programs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Explore All Programs
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From 1-on-1 foundational tuition to micro batches, entrance coaching, and competitive exams, find the exact learning track tailored for your success.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/95 rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row justify-between gap-8"
            >
              <div className="space-y-5 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    {prog.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {prog.highlight}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {prog.title}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-1">{prog.subtitle}</p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center gap-4 shrink-0 lg:w-72 border-t lg:border-t-0 lg:border-l border-sky-100 pt-6 lg:pt-0 lg:pl-8">
                <a
                  href={`${WHATSAPP_URL}&text=Hi%2C%20I%20want%20to%20book%20a%20demo%20for%20${encodeURIComponent(prog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enroll via WhatsApp</span>
                </a>

                <Link
                  href={prog.path}
                  className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Read Full Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
