"use client";

import React, { useState } from "react";
import { X, CheckCircle2, MessageSquare, Calendar, User, Phone, BookOpen, Clock } from "lucide-react";

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export function DemoBookingModal({ isOpen, onClose, defaultCourse = "Individual Tuition (1-on-1)" }: DemoBookingModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    phone: "",
    grade: "Class 10",
    course: defaultCourse,
    preferredTime: "Evening (5 PM - 8 PM)",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello Page Learning! I would like to book a Free Demo Session.\n` +
      `👤 Student Name: ${formData.studentName || "N/A"}\n` +
      `📞 Phone: ${formData.phone || "N/A"}\n` +
      `📚 Grade/Class: ${formData.grade}\n` +
      `🎯 Preferred Program: ${formData.course}\n` +
      `⏰ Preferred Time: ${formData.preferredTime}`
    );
    window.open(`https://wa.me/917736164363?text=${message}`, "_blank");
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-up">
      {/* Overlay click to dismiss */}
      <div className="absolute inset-0" onClick={resetAndClose} />

      <div className="relative w-full max-w-xl bg-[#FFFDF7] rounded-2xl shadow-2xl border border-[#E5B44D]/30 overflow-hidden z-10">
        {/* Modal Header */}
        <div className="bg-[#153947] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E5B44D]/20 border border-[#E5B44D]/40 text-[#E5B44D] text-xs font-semibold uppercase tracking-wider mb-1">
              FREE 1-ON-1 DEMO SESSION
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[#FFFDF7]">
              Book Your Free Demo
            </h3>
            <p className="text-xs text-gray-300">
              Experience Page Learning's personalized mentorship firsthand.
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#153947] mb-2">
                Demo Booking Request Sent!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mb-6">
                Thank you <span className="font-semibold text-[#153947]">{formData.studentName}</span>! Our academic counselor will call you shortly at <span className="font-semibold">{formData.phone}</span> to schedule your live interactive session.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  Connect on WhatsApp Instant
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                  Student Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter student's full name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-[#153947] focus:outline-none focus:ring-2 focus:ring-[#153947]"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-[#153947] focus:outline-none focus:ring-2 focus:ring-[#153947]"
                  />
                </div>
              </div>

              {/* Grid: Grade & Course Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                    Student Class / Grade
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-[#153947] focus:outline-none focus:ring-2 focus:ring-[#153947] appearance-none"
                    >
                      <option value="Class 1 - 5">Class 1 to Class 5</option>
                      <option value="Class 6 - 8">Class 6 to Class 8</option>
                      <option value="Class 9 - 10">Class 9 to Class 10</option>
                      <option value="Class 11 - 12">Class 11 to Class 12 (+2)</option>
                      <option value="Entrance Aspirant">Entrance Aspirant (JEE/NEET/KEAM/CLAT)</option>
                      <option value="Competitive Exam">Competitive Aspirant (PSC/UPSC/NET)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                    Program Interested
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-[#153947] focus:outline-none focus:ring-2 focus:ring-[#153947] appearance-none"
                    >
                      <option value="Individual Tuition (1-on-1)">Individual Tuition (1-on-1)</option>
                      <option value="Micro Batch (Max 7 Students)">Micro Batch (Max 7 Students)</option>
                      <option value="Entrance Exam Coaching">Entrance Exam Coaching</option>
                      <option value="Scholarship Examinations">Scholarship Examinations</option>
                      <option value="Competitive Exam Coaching">PSC / UPSC / NET Coaching</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                  Preferred Demo Time Slot
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm text-[#153947] focus:outline-none focus:ring-2 focus:ring-[#153947] appearance-none"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="Weekend Special">Weekend Special Slot</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#153947] hover:bg-[#1C4B5E] text-[#FFFDF7] font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <span>Confirm & Book Free Session</span>
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="text-xs text-[#153947]/70 hover:text-[#153947] underline font-medium"
                >
                  Or chat directly with us on WhatsApp (+91 77361 64363)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
