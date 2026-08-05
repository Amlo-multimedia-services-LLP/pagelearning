"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20reserve%20a%20seat%20in%20the%20upcoming%20batches%20at%20Page%20Learning";

const openBatches = [
  {
    id: 1,
    courseName: "Class 10 CBSE Math & Science Micro Batch",
    startDate: "Starts Aug 12, 2026",
    seatsLeft: "2 Seats Left",
    batchTime: "5:00 PM - 6:30 PM",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: 2,
    courseName: "JEE Main & Advanced Two-Year Foundation",
    startDate: "Starts Aug 18, 2026",
    seatsLeft: "3 Seats Left",
    batchTime: "6:30 PM - 8:00 PM",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
  },
  {
    id: 3,
    courseName: "Class 1 to 8 Individual 1-on-1 Custom Tuition",
    startDate: "Immediate Joining",
    seatsLeft: "4 Mentors Available",
    batchTime: "Flexible Schedule",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: 4,
    courseName: "Class 12 Physics & Chemistry Speed Batch",
    startDate: "Starts Aug 22, 2026",
    seatsLeft: "1 Seat Left",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    batchTime: "7:00 PM - 8:30 PM",
  },
];

export function OpenBatchesSection() {
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
          <Users className="w-4 h-4 text-sky-600" />
          <span>Seat Reservations</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Upcoming & Open Batches Now
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Explore active enrollment options for 1-on-1 tuitions and micro batches capped at 7 students per cohort.
        </motion.p>
      </div>

      {/* Grid of Batches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {openBatches.map((batch, idx) => (
          <motion.div
            key={batch.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-sky-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${batch.badgeColor}`}>
                  {batch.seatsLeft}
                </span>
                <span className="text-xs text-sky-700 font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {batch.startDate}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                {batch.courseName}
              </h3>

              <div className="text-xs text-slate-500 font-medium">
                Timing: {batch.batchTime}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-xs shadow-xs transition-transform hover:scale-[1.02]"
            >
              <span>Reserve Seat</span>
              <ArrowUpRight className="w-4 h-4 text-[#153947]" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
