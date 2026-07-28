"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  UserCheck,
  BookOpen,
  Award,
  Clock,
  Video,
  ChevronRight,
  MessageSquare,
  Zap,
} from "lucide-react";
import { GeometricBrandMotif } from "@/components/brand-logo";

interface PageProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function Home({ onOpenDemoModal }: PageProps) {
  const triggerDemo = (course?: string) => {
    if (onOpenDemoModal) {
      onOpenDemoModal(course);
    }
  };

  const courseList = [
    {
      id: "individual-tuition",
      title: "Individual Tuition",
      subtitle: "For Class 1 to Class 12 (All Syllabi)",
      badge: "100% Personal Focus",
      color: "from-[#153947] to-[#1C4B5E]",
      tagColor: "bg-[#E5B44D] text-[#153947]",
      highlight: "ഒന്നും ഒന്നും ഇനി രണ്ടല്ല, 100 ആണ്",
      desc: "One teacher dedicated exclusively to one student. Custom pace, individual query resolution, and live interactive online classes.",
      path: "/courses/individual-tuition",
    },
    {
      id: "micro-batch",
      title: "Micro Batch",
      subtitle: "For Class 7 to Class 12 (All Syllabi)",
      badge: "Max 7 Students Cap",
      color: "from-[#153947] to-[#254653]",
      tagColor: "bg-[#41AAF0] text-white",
      highlight: "ഇനി 50 അല്ല, വെറും 7 പേർ മാത്രം",
      desc: "Small focused peer groups strictly limited to 7 students per batch for high peer interaction without getting lost in large crowds.",
      path: "/courses/micro-batch",
    },
    {
      id: "entrance-coaching",
      title: "Entrance Exam Coaching",
      subtitle: "Engineering, Medical, Law & University Entrances",
      badge: "Targeted Strategy",
      color: "from-[#153947] to-[#2D5A6E]",
      tagColor: "bg-[#E55A45] text-white",
      highlight: "JEE, NEET, KEAM, CUSAT, CUET, CLAT",
      desc: "Rigorous problem solving, speed tricks, past paper mock tests, and systematic concept mastery under top entrance mentors.",
      path: "/courses/entrance-coaching",
    },
    {
      id: "scholarships",
      title: "Scholarship Examinations",
      subtitle: "School Level Prestige Scholarships",
      badge: "Scholar Track",
      color: "from-[#153947] to-[#364954]",
      tagColor: "bg-[#6EB44D] text-white",
      highlight: "NMMS, USS, LSS, Olympiad",
      desc: "Focused coaching for school students to secure government scholarships, building analytical aptitude from early grades.",
      path: "/courses/scholarships",
    },
    {
      id: "competitive-exams",
      title: "Career & Competitive Exams",
      subtitle: "State & National Entrance Exams",
      badge: "Career Growth",
      color: "from-[#153947] to-[#3B2C4D]",
      tagColor: "bg-[#775898] text-white",
      highlight: "PSC, UPSC, NET, SET, KTET Coaching",
      desc: "Comprehensive syllabus coverage, mock tests, and subject-wise mentorship for competitive examination candidates.",
      path: "/courses/competitive-exams",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#153947] via-[#1A4556] to-[#153947] text-[#FFFDF7] pt-8 pb-20 rounded-b-[2.5rem] shadow-2xl border-b border-[#E5B44D]/20">
        {/* Geometric Background Shapes */}
        <div className="absolute top-10 left-5 w-72 h-72 rounded-full bg-[#E5B44D]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-5 w-96 h-96 rounded-full bg-[#41AAF0]/10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#E5B44D]/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#E5B44D]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
                  15 Years of Educational Legacy (2011 - 2026)
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                To Develop Confidence & Excellence Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5B44D] via-[#FFFDF7] to-[#41AAF0]">
                  Personalised Guidance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl">
                Providing individualised tuition to students from Class 1 to Class 12 across all syllabi, plus focused entrance & scholarship exam coaching through expert mentoring.
              </p>

              {/* Malayalam Taglines Highlight Bar */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2">
                <div className="flex items-center gap-2 text-[#E5B44D] font-bold text-sm">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span>The Page Learning Guarantee:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
                  <div className="flex items-center gap-2 bg-[#153947]/60 p-2.5 rounded-xl border border-white/10">
                    <UserCheck className="w-4 h-4 text-[#E5B44D]" />
                    <span>1-on-1 Individual Attention (ഒന്നും ഒന്നും 100 ആണ്)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#153947]/60 p-2.5 rounded-xl border border-white/10">
                    <Users className="w-4 h-4 text-[#41AAF0]" />
                    <span>Micro Batch: Max 7 Students (ഇനി 50 അല്ല വെറും 7)</span>
                  </div>
                </div>
              </div>

              {/* Hero CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => triggerDemo()}
                  className="px-8 py-4 rounded-2xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-100 flex items-center justify-center gap-3 animate-pulse-glow"
                >
                  <Sparkles className="w-5 h-5 fill-[#153947]" />
                  <span>Book Your Free Demo Session</span>
                </button>

                <Link
                  href="/courses"
                  className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-[#FFFDF7] font-bold text-base border border-white/20 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-[#FFFDF7] text-[#153947] p-8 rounded-3xl shadow-2xl border-4 border-[#E5B44D] animate-float">
                <div className="absolute -top-5 -right-5 bg-[#E55A45] text-white font-extrabold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                  Live Online
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#153947] text-[#E5B44D] flex items-center justify-center mx-auto shadow-md">
                    <Video className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold">Interactive Online Classes</h3>
                  <p className="text-xs text-gray-600">
                    Real-time two-way interaction, step-by-step doubt clearing & personalized progress evaluations.
                  </p>

                  <div className="space-y-2.5 text-left border-t border-b border-gray-200 py-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Class 1 to Class 12 (CBSE, ICSE, State)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Entrance Exams: JEE, NEET, KEAM, CLAT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Scholarships: NMMS, USS, LSS, Olympiad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Flexible Evening & Weekend Timings</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerDemo()}
                    className="w-full py-3.5 rounded-xl bg-[#153947] hover:bg-[#1C4B5E] text-[#FFFDF7] font-bold text-sm transition-transform hover:scale-[1.02]"
                  >
                    Claim Free Demo Seat
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stats Banner */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#E5B44D]">15+ Years</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Educational Excellence</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#41AAF0]">1:1 Attention</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Dedicated Personal Tutor</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#6EB44D]">Max 7</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Students Per Micro Batch</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#E55A45]">100%</div>
              <div className="text-xs text-gray-300 font-medium uppercase tracking-wider">Live Interactive Classes</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BRAND VISION & MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFDF7] rounded-3xl p-8 sm:p-12 border border-[#E8E2D2] shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
                OUR FOUNDATIONAL PHILOSOPHY
              </span>
              <h2 className="text-3xl font-extrabold text-[#153947] mt-1">
                Brand Vision & Mission
              </h2>
            </div>
            <GeometricBrandMotif className="hidden sm:flex" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-[#153947] text-white p-8 rounded-2xl relative shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#E5B44D] text-[#153947] flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-[#E5B44D] mb-3">Brand Vision</h3>
              <p className="text-base leading-relaxed text-gray-200 font-medium">
                “To develop confidence and excellence through <span className="text-[#E5B44D] font-bold underline">personalised guidance and mentorship</span>.”
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#F5F1E6] text-[#153947] p-8 rounded-2xl relative shadow-md border border-[#E8E2D2]">
              <div className="w-12 h-12 rounded-xl bg-[#153947] text-white flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-[#153947] mb-3">Brand Mission</h3>
              <p className="text-sm leading-relaxed text-gray-700 font-medium">
                “To provide <span className="bg-[#E5B44D]/30 px-1 font-bold">individualised tuition to students from Class 2 to Class 12</span> across all syllabi, and focused coaching for entrance and scholarship examinations through expert mentoring, structured learning, and continuous assessment.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES & PROGRAMS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#153947]/10 text-[#153947] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#E5B44D]" />
            ACADEMIC PROGRAMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#153947]">
            Tailored Courses for Every Student
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Choose between 1-on-1 individual focus or micro batch interaction to achieve your highest academic goals.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header pattern */}
                <div className={`p-6 bg-gradient-to-r ${course.color} text-white relative`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${course.tagColor} mb-3 shadow-sm`}>
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{course.subtitle}</p>
                </div>

                <div className="p-6 space-y-4">
                  {course.highlight && (
                    <div className="text-xs font-bold text-[#E55A45] bg-[#E55A45]/10 px-3 py-1.5 rounded-lg border border-[#E55A45]/20 inline-block">
                      ★ {course.highlight}
                    </div>
                  )}

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {course.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => triggerDemo(course.title)}
                  className="w-full py-3 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-[#153947]" />
                  <span>Book Free Demo</span>
                </button>

                <Link
                  href={course.path}
                  className="w-full py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-[#153947] font-semibold text-xs text-center flex items-center justify-center gap-1 group-hover:border-[#153947] transition-colors"
                >
                  <span>View Full Details & Syllabus</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY PAGE LEARNING METHODOLOGY */}
      <section className="bg-[#153947] text-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#E5B44D] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            THE PAGE LEARNING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why Students Excel With Us
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Combining 15 years of offline legacy with cutting-edge online live interactive mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E5B44D] text-[#153947] flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#FFFDF7]">1-on-1 Mentorship</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Every student gets absolute individual focus without peer pressure or class distractions.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#41AAF0] text-white flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#FFFDF7]">Micro Batches (Max 7)</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Strictly capped small batches ensure balanced peer learning while retaining direct teacher interaction.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#6EB44D] text-white flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#FFFDF7]">Continuous Assessment</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Weekly progress evaluation, personalized assignments, and regular parent-teacher feedback loops.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E55A45] text-white flex items-center justify-center font-bold">
              <Video className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#FFFDF7]">Live Interactive Tech</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              HD live online classroom platform with digital whiteboards, instant screen sharing & recorded archives.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#E5B44D] via-[#F2C564] to-[#E5B44D] text-[#153947] rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-[#153947] text-white text-xs font-bold uppercase tracking-wider">
              LIMITED DEMO SLOTS AVAILABLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ready to Experience Personalised Mentorship?
            </h2>
            <p className="text-sm font-semibold max-w-xl text-[#153947]/80">
              Book a 1-on-1 free live interactive demo session with our senior faculty today. Zero commitment required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => triggerDemo()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#153947] hover:bg-[#1C4B5E] text-[#FFFDF7] font-extrabold text-base shadow-xl transition-transform hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#E5B44D]" />
              <span>Book Free Demo Now</span>
            </button>

            <a
              href="https://wa.me/917736164363"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}