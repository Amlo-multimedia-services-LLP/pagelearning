"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, Flame, Users, ArrowUpRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20the%20upcoming%20batches%20at%20Page%20Learning";

const latestNews = [
  {
    id: 1,
    title: "Class 10 & 12 Board Exam Intensive Revision Batches Announced",
    date: "Aug 2026",
    tag: "Academic Update",
    desc: "Targeted problem solving, model exam practice, and paper presentation workshops for top marks.",
  },
  {
    id: 2,
    title: "Page Learning Achieves 98% Success Rate in KEAM & NEET 2026",
    date: "Jul 2026",
    tag: "Achievement",
    desc: "Over 85 students secured top 1000 state ranks through our personalized micro batch methodology.",
  },
  {
    id: 3,
    title: "New Evening 1-on-1 Mentorship Slots Open for High School Students",
    date: "Aug 2026",
    tag: "Admissions",
    desc: "Flexible evening timings tailored for Class 8-12 students needing dedicated subject guidance.",
  },
];

const openBatches = [
  {
    id: 1,
    courseName: "Class 10 CBSE Math & Science Micro Batch",
    startDate: "Starts Aug 12, 2026",
    seatsLeft: "2 Seats Left",
    batchTime: "5:00 PM - 6:30 PM",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: 2,
    courseName: "JEE Main & Advanced 2027 Two-Year Foundation",
    startDate: "Starts Aug 18, 2026",
    seatsLeft: "3 Seats Left",
    batchTime: "6:30 PM - 8:00 PM",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
  },
  {
    id: 3,
    courseName: "Class 1 to 8 Individual 1-on-1 Custom Tuition",
    startDate: "Immediate Joining",
    seatsLeft: "4 Mentors Available",
    batchTime: "Flexible Schedule",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Free Career Guidance & Board Exam Strategy Webinar",
    date: "Aug 15, 2026",
    time: "10:00 AM IST",
    location: "Online / Thrissur Center",
  },
  {
    id: 2,
    title: "NEET & JEE Mock Test Series & Live Answer Key Review",
    date: "Aug 24, 2026",
    time: "2:00 PM IST",
    location: "Page Learning Campus",
  },
];

export function NewsBatchesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold mb-3"
        >
          <Flame className="w-4 h-4 text-sky-600 animate-bounce" />
          <span>Updates & Enrollment</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Latest News, Batches & Academic Events
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Stay informed about ongoing admissions, upcoming batch schedules, and educational seminars at Page Learning.
        </motion.p>
      </div>

      {/* Grid Layout: News (Col 1), Open Batches (Col 2), Events (Col 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Latest News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 rounded-3xl p-6 border border-sky-100 shadow-md hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-sky-100">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-lg">
                <Newspaper className="w-5 h-5 text-sky-600" />
                <span>Latest News</span>
              </div>
              <span className="text-xs text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full font-semibold border border-sky-100">
                Live Feed
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {latestNews.map((news) => (
                <div
                  key={news.id}
                  className="p-4 rounded-2xl bg-sky-50/50 hover:bg-sky-50 border border-sky-100/60 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span className="font-bold text-sky-700">{news.tag}</span>
                    <span>{news.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {news.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{news.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs transition-colors"
          >
            <span>Inquire News & Notices</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Card 2: Upcoming & Open Batches */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gradient-to-b from-sky-900 to-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-6 flex flex-col justify-between border border-sky-800"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-sky-800">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Users className="w-5 h-5 text-sky-400" />
                <span>Open Batches Now</span>
              </div>
              <span className="text-xs text-amber-300 bg-amber-400/20 px-2.5 py-1 rounded-full font-bold border border-amber-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Booking Fast
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {openBatches.map((batch) => (
                <div
                  key={batch.id}
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${batch.badgeColor}`}>
                      {batch.seatsLeft}
                    </span>
                    <span className="text-xs text-sky-200 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {batch.startDate}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{batch.courseName}</h4>
                  <div className="text-xs text-sky-200/80">Timing: {batch.batchTime}</div>
                </div>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-[1.02]"
          >
            <span>Reserve Batch Seat via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Card 3: Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/90 rounded-3xl p-6 border border-sky-100 shadow-md hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-sky-100">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-lg">
                <Calendar className="w-5 h-5 text-sky-600" />
                <span>Upcoming Events</span>
              </div>
              <span className="text-xs text-sky-700 bg-sky-100 px-2.5 py-1 rounded-full font-semibold">
                Calendar
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {upcomingEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-4 rounded-2xl bg-sky-50/50 hover:bg-sky-50 border border-sky-100/60 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-sky-700 font-bold">
                    <span>📅 {evt.date}</span>
                    <span>⏰ {evt.time}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{evt.title}</h4>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> {evt.location}
                  </div>
                </div>
              ))}

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Free Academic Counseling Session
                </div>
                <p>Parents can visit our Thrissur center for 1-on-1 learning diagnosis with senior faculty.</p>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <span>Register for Next Event</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
