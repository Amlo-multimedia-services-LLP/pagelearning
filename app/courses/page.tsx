"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, UserCheck, Users, Target, BookOpen, Award } from "lucide-react";

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
      color: "border-[#E5B44D]",
      tagBg: "bg-[#E5B44D] text-[#153947]",
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
      title: "Micro Batch (Max 7 Students)",
      subtitle: "For Class 7 to Class 12",
      badge: "Strictly 7 Students Cap",
      highlight: "ഇനി 50 അല്ല, വെറും 7 പേർ മാത്രം",
      color: "border-[#41AAF0]",
      tagBg: "bg-[#41AAF0] text-white",
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
      color: "border-[#E55A45]",
      tagBg: "bg-[#E55A45] text-white",
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
      color: "border-[#6EB44D]",
      tagBg: "bg-[#6EB44D] text-white",
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
      color: "border-[#775898]",
      tagBg: "bg-[#775898] text-white",
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
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
            ACADEMIC PROGRAMS & COURSES CATALOG
          </span>
          <h1 className="text-4xl font-extrabold text-[#FFFDF7]">Explore Our Programs</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            From 1-on-1 foundational tuition to entrance coaching and career exams, find the exact learning track tailored for your success.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 gap-8">
          {programs.map((prog) => (
            <div
              key={prog.slug}
              className={`bg-white rounded-3xl p-6 sm:p-8 border-2 ${prog.color} shadow-xl flex flex-col lg:flex-row justify-between gap-8 hover:shadow-2xl transition-all`}
            >
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${prog.tagBg}`}>
                    {prog.badge}
                  </span>
                  <span className="text-xs font-bold text-[#E55A45] bg-[#E55A45]/10 px-3 py-1 rounded-full border border-[#E55A45]/20">
                    {prog.highlight}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#153947]">
                    {prog.title}
                  </h2>
                  <p className="text-xs text-gray-500 font-semibold mt-0.5">{prog.subtitle}</p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {prog.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col justify-center gap-3 shrink-0 lg:w-64 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-8">
                <button
                  onClick={() => triggerDemo(prog.title)}
                  className="w-full py-3.5 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-[#153947]" />
                  <span>Book Free Demo</span>
                </button>

                <Link
                  href={prog.path}
                  className="w-full py-3 rounded-xl bg-[#153947] hover:bg-[#1C4B5E] text-[#FFFDF7] font-semibold text-xs text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5B44D]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
