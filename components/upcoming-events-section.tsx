"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20register%20for%20the%20upcoming%20Page%20Learning%20event";

const upcomingEvents = [
  {
    id: 1,
    title: "Sarga Team Meet Up",
    location: "Delhi University",
    date: "Upcoming Meetup",
    badge: "Official Team Meet",
    desc: "Interactive academic convergence and student mentorship networking session at Delhi University.",
  },
  {
    id: 2,
    title: "Aaroham 2026",
    location: "Kerala Sahithya Academy, Thrissur",
    date: "Annual Cultural & Merit Event",
    badge: "Flagship Event",
    desc: "Celebration of academic rankers, student talents, and merit felicitations at Kerala Sahithya Academy.",
  },
];

export function UpcomingEventsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-900 text-xs sm:text-sm font-bold mb-3"
        >
          <Calendar className="w-4 h-4 text-sky-600" />
          <span>Academic Calendar</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Upcoming Events & Conventions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Join us at our major educational conventions, alumni meetups, and merit felicitation ceremonies.
        </motion.p>
      </div>

      {/* Grid of 2 major events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcomingEvents.map((evt, idx) => (
          <motion.div
            key={evt.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white/95 rounded-3xl p-8 border border-sky-100 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-xl bg-sky-100 text-sky-900 font-extrabold text-xs">
                  {evt.badge}
                </span>
                <span className="text-xs font-bold text-sky-700 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {evt.date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {evt.title}
              </h3>

              <div className="flex items-center gap-2 text-sm font-bold text-sky-800 bg-sky-50 px-4 py-2 rounded-2xl border border-sky-100">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{evt.location}</span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {evt.desc}
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-sm shadow-md transition-transform hover:scale-[1.02]"
            >
              <span>Register / Inquire Event</span>
              <ArrowUpRight className="w-4 h-4 text-[#153947]" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
