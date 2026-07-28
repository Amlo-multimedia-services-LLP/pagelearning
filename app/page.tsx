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
  Calendar,
  Image as ImageIcon
} from "lucide-react";
import { GeometricBrandMotif } from "@/components/brand-logo";

// SVG Icons for Socials
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

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
      color: "bg-white",
      tagColor: "bg-gray-100 text-[#153947]",
      highlight: "ഒന്നും ഒന്നും ഇനി രണ്ടല്ല, 100 ആണ്",
      desc: "One teacher dedicated exclusively to one student. Custom pace, individual query resolution, and live interactive online classes.",
      path: "/courses/individual-tuition",
    },
    {
      id: "micro-batch",
      title: "Micro Batch",
      subtitle: "For Class 7 to Class 12 (All Syllabi)",
      badge: "Max 7 Students Cap",
      color: "bg-white",
      tagColor: "bg-blue-50 text-[#41AAF0]",
      highlight: "ഇനി 50 അല്ല, വെറും 7 പേർ മാത്രം",
      desc: "Small focused peer groups strictly limited to 7 students per batch for high peer interaction without getting lost in large crowds.",
      path: "/courses/micro-batch",
    },
    {
      id: "entrance-coaching",
      title: "Entrance Exam Coaching",
      subtitle: "Engineering, Medical, Law & University Entrances",
      badge: "Targeted Strategy",
      color: "bg-white",
      tagColor: "bg-red-50 text-[#E55A45]",
      highlight: "JEE, NEET, KEAM, CUSAT, CUET, CLAT",
      desc: "Rigorous problem solving, speed tricks, past paper mock tests, and systematic concept mastery under top entrance mentors.",
      path: "/courses/entrance-coaching",
    },
    {
      id: "scholarships",
      title: "Scholarship Examinations",
      subtitle: "School Level Prestige Scholarships",
      badge: "Scholar Track",
      color: "bg-white",
      tagColor: "bg-green-50 text-[#6EB44D]",
      highlight: "NMMS, USS, LSS, Olympiad",
      desc: "Focused coaching for school students to secure government scholarships, building analytical aptitude from early grades.",
      path: "/courses/scholarships",
    },
    {
      id: "competitive-exams",
      title: "Career & Competitive Exams",
      subtitle: "State & National Entrance Exams",
      badge: "Career Growth",
      color: "bg-white",
      tagColor: "bg-purple-50 text-[#775898]",
      highlight: "PSC, UPSC, NET, SET, KTET Coaching",
      desc: "Comprehensive syllabus coverage, mock tests, and subject-wise mentorship for competitive examination candidates.",
      path: "/courses/competitive-exams",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION - CLEAN & AIRY */}
      <section className="relative overflow-hidden bg-white text-gray-900 pt-16 pb-24">
        {/* Subtle Background Gradients */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-50 blur-3xl pointer-events-none opacity-50" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-yellow-50 blur-3xl pointer-events-none opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="space-y-8 text-left animate-fade-in-up">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#E5B44D]" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  15 Years of Educational Legacy (2011 - 2026)
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Develop Confidence Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#153947] to-[#41AAF0]">
                  Personalised Guidance.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-500 font-normal leading-relaxed max-w-xl">
                Providing individualised tuition to students from Class 1 to Class 12, plus focused entrance & scholarship exam coaching through expert mentoring.
              </p>

              {/* Malayalam Taglines Highlight Bar */}
              <div className="p-5 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm space-y-3 max-w-xl">
                <div className="flex items-center gap-2 text-[#153947] font-bold text-sm">
                  <Zap className="w-4 h-4 text-[#E5B44D] shrink-0" />
                  <span>The Page Learning Guarantee:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
                  <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-gray-700">
                    <UserCheck className="w-4 h-4 text-[#E5B44D]" />
                    <span>1-on-1 Attention</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-gray-700">
                    <Users className="w-4 h-4 text-[#41AAF0]" />
                    <span>Micro Batch (Max 7)</span>
                  </div>
                </div>
              </div>

              {/* Hero CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => triggerDemo()}
                  className="px-8 py-4 rounded-2xl bg-[#153947] hover:bg-[#112a35] text-white font-bold text-base shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-[#E5B44D]" />
                  <span>Book Free Demo Session</span>
                </button>

                <Link
                  href="/courses"
                  className="px-6 py-4 rounded-2xl bg-white hover:bg-gray-50 text-gray-700 font-bold text-base border border-gray-200 transition-colors text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Right Visual Card - Clean SaaS Style */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 animate-float relative z-10">
                <div className="absolute -top-4 -right-4 bg-[#E5B44D] text-[#153947] font-bold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                  Live Online
                </div>

                <div className="text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#153947]/5 text-[#153947] flex items-center justify-center mx-auto">
                    <Video className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Interactive Online Classes</h3>
                    <p className="text-sm text-gray-500">
                      Real-time two-way interaction & personalized progress evaluations.
                    </p>
                  </div>

                  <div className="space-y-3 text-left border-t border-b border-gray-100 py-6 text-sm font-medium text-gray-600">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Class 1 to Class 12 (CBSE, ICSE, State)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Entrance Exams: JEE, NEET, KEAM, CLAT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Scholarships: NMMS, USS, LSS, Olympiad</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>Flexible Evening & Weekend Timings</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerDemo()}
                    className="w-full py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm transition-transform hover:scale-[1.02] shadow-md"
                  >
                    Claim Free Demo Seat
                  </button>
                </div>
              </div>
              
              {/* Decorative background element behind card */}
              <div className="absolute top-8 -right-8 w-full h-full border-2 border-gray-100 rounded-[2rem] -z-10" />
            </div>

          </div>

          {/* Quick Stats Banner - Clean minimalist */}
          <div className="mt-24 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">15+</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Years Legacy</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">1:1</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Personal Attention</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">7</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Max Batch Size</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">100%</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Live Classes</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. COURSES & PROGRAMS SHOWCASE - SAAS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Academic Programs
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Tailored Courses.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Choose between 1-on-1 individual focus or micro batch interaction to achieve your highest academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseList.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8 pb-0">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${course.tagColor} mb-4`}>
                  {course.badge}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 font-medium mb-6">{course.subtitle}</p>

                {course.highlight && (
                  <div className="text-xs font-bold text-gray-700 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 mb-6 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#E5B44D] shrink-0" />
                    <span>{course.highlight}</span>
                  </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {course.desc}
                </p>
              </div>

              <div className="p-8 pt-0 space-y-3 mt-auto">
                <button
                  onClick={() => triggerDemo(course.title)}
                  className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Free Demo</span>
                </button>

                <Link
                  href={course.path}
                  className="w-full py-3.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm text-center flex items-center justify-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEW SECTION: UPCOMING EVENTS & GALLERY */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Events List */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  Mark Your Calendar
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Upcoming Events
                </h2>
                <p className="text-gray-500 text-base">
                  Stay updated with our latest seminars, scholarship tests, and orientation sessions.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "NEET 2026 Orientation Seminar", date: "Oct 15, 2026", type: "Online Seminar" },
                  { title: "State Level Scholarship Test", date: "Nov 02, 2026", type: "Examination" },
                  { title: "Parent-Teacher Interaction Day", date: "Nov 15, 2026", type: "Community" },
                ].map((event, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">{event.type}</div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#153947] transition-colors">{event.title}</h4>
                    </div>
                    <div className="text-right shrink-0 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <div className="text-sm font-bold text-[#153947]">{event.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Gallery */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Life at Page Learning
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Event Gallery
                </h2>
                <p className="text-gray-500 text-base">
                  Glimpses of our successful seminars, award ceremonies, and interactive sessions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-3xl h-48 animate-pulse flex items-center justify-center text-gray-400">
                  <ImageIcon className="w-8 h-8 opacity-50" />
                </div>
                <div className="bg-gray-200 rounded-3xl h-48 animate-pulse flex items-center justify-center text-gray-400">
                  <ImageIcon className="w-8 h-8 opacity-50" />
                </div>
                <div className="col-span-2 bg-gray-200 rounded-3xl h-56 animate-pulse flex items-center justify-center text-gray-400">
                  <span className="text-sm font-medium">Image Placeholder (Replace with actual event photos)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: SOCIAL MEDIA INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153947] rounded-[2.5rem] p-10 sm:p-16 flex flex-col items-center text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Join Our Community
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Follow <span className="text-[#E5B44D] font-bold">@pagelearning.in</span> for daily educational tips, student success stories, and live updates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <a
              href="https://instagram.com/pagelearning.in"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-base transition-colors flex items-center justify-center gap-3 shadow-lg"
            >
              <InstagramIcon className="w-5 h-5 text-pink-600" />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="https://youtube.com/@pagelearning.in"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors flex items-center justify-center gap-3"
            >
              <YoutubeIcon className="w-5 h-5 text-red-500" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER - CLEAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 sm:p-12 border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ready for Personalised Mentorship?
            </h2>
            <p className="text-base text-gray-500 max-w-xl">
              Book a 1-on-1 free live interactive demo session with our senior faculty today. Zero commitment required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => triggerDemo()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-bold text-base shadow-md transition-transform hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 fill-[#153947]" />
              <span>Book Free Demo</span>
            </button>

            <a
              href="https://wa.me/917736164363"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-green-50 hover:bg-green-100 text-green-700 font-bold text-base transition-colors flex items-center justify-center gap-2 border border-green-200"
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