"use client";

import React from "react";
import { ContactSection } from "@/components/contact-section";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Admissions & Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Contact Page Learning
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are here to help you select the ideal tuition plan, schedule a free diagnostic demo, or visit our academic campus in Thrissur.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}
