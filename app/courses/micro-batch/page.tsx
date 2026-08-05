"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Users, CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20enroll%20in%20Micro%20Batch%20(Max%207)%20at%20Page%20Learning";

export default function MicroBatchPage() {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="inline-block px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 text-xs font-bold uppercase tracking-wider">
            Strictly Max 7 Students / Batch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Micro Batch Programs
          </h1>
          <p className="text-base text-sky-100 max-w-2xl leading-relaxed">
            For Class 7 to Class 12 • Focused peer learning with maximum individual participation.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white/95 p-8 rounded-3xl border border-sky-100 shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Why Micro Batches Outperform Mega Coaching Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In standard coaching centers with 50+ students per batch, teacher interaction is limited to lecturing. Our Micro Batches cap every single group at strictly 7 students. This creates an energetic environment where every student gets called on, doubts are answered instantly, and peer learning thrives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <Users className="w-5 h-5 text-sky-600" />
                <span>Max 7 Students Cap</span>
              </div>
              <p className="text-xs text-slate-600">Zero back-benchers; every student gets equal attention.</p>
            </div>
            <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-100 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sm text-sky-900">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Interactive Peer Learning</span>
              </div>
              <p className="text-xs text-slate-600">Healthy discussion, problem solving sessions, and weekly tests.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-blue-800 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold text-white">Seats Are Strictly Capped at 7 Per Batch!</h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Reserve your seat early for the upcoming batch start date.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reserve Seat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
