"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

interface CoursesProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function CoursesPage({ onOpenDemoModal }: CoursesProps) {
  const triggerDemo = (course?: string) => {
    if (onOpenDemoModal) onOpenDemoModal(course);
  };

  const programs = [
    {
      slug: "individual-tuition",
      title: "Individual Tuition (1-on-1)",
      subtitle: "For Class 1 to Class 12 (All Syllabi)",
      badge: "1:1 Dedicated Mentor",
      highlight: "ഒന്നും ഒന്നും ഇനി രണ്ടല്ല, 100 ആണ്",
      color: "border-gray-200 hover:border-gray-300",
      tagBg: "bg-gray-100 text-[#153947]",
      desc: "Comprehensive personalized tuition tailored to the exact learning pace of each individual student.",
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
      highlight: "ഇനി 50 അല്ല, വെറും 7 പേർ മാത്രം",
      color: "border-blue-100 hover:border-blue-200",
      tagBg: "bg-blue-50 text-[#41AAF0]",
      desc: "Peer learning environment strictly capped at 7 students per batch for interactive discussions.",
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
      subtitle: "Engineering, Medical, Law & Central Universities",
      badge: "High Rank Focus",
      highlight: "JEE, NEET, KEAM, CUSAT, CUET, CLAT",
      color: "border-red-100 hover:border-red-200",
      tagBg: "bg-red-50 text-[#E55A45]",
      desc: "Targeted entrance prep with speed tricks, mock test series, and past year question analysis.",
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
      title: "Scholarship Examinations",
      subtitle: "Prestige School-Level Exams",
      badge: "Early Scholar Track",
      highlight: "NMMS, USS, LSS, Olympiad",
      color: "border-green-100 hover:border-green-200",
      tagBg: "bg-green-50 text-[#6EB44D]",
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
      subtitle: "Teacher & Civil Service Competitions",
      badge: "Career Growth",
      highlight: "PSC, UPSC, NET, SET, KTET Coaching",
      color: "border-purple-100 hover:border-purple-200",
      tagBg: "bg-purple-50 text-[#775898]",
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
    <div className="space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 -translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in-up relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            <BookOpen className="w-4 h-4" />
            Academic Programs
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">Explore Our Programs.</h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
            From 1-on-1 foundational tuition to entrance coaching and career exams, find the exact learning track tailored for your success.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.slug}
              className={`bg-white rounded-[2rem] p-8 sm:p-10 border ${prog.color} shadow-sm flex flex-col lg:flex-row justify-between gap-8 hover:shadow-lg transition-all`}
            >
              <div className="space-y-5 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${prog.tagBg}`}>
                    {prog.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-700 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5B44D]" />
                    {prog.highlight}
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    {prog.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium mt-1">{prog.subtitle}</p>
                </div>

                <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm font-medium text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col justify-center gap-4 shrink-0 lg:w-72 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10">
                <button
                  onClick={() => triggerDemo(prog.title)}
                  className="w-full py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#E5B44D]" />
                  <span>Book Free Demo</span>
                </button>

                <Link
                  href={prog.path}
                  className="w-full py-4 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
