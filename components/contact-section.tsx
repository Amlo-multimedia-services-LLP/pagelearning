"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "Class 10",
    course: "1-on-1 Individual Tuition",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = encodeURIComponent(
      `*New Inquiry from Page Learning Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🎓 *Grade:* ${formData.grade}\n` +
      `📚 *Course:* ${formData.course}\n` +
      `💬 *Message:* ${formData.message || "I want to schedule a diagnostic session."}`
    );

    window.open(`https://wa.me/917736164363?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-bold"
          >
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Book Your Free Counseling Session
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Have questions about 1-on-1 tuition slots, micro batch availability, or entrance coaching? Fill out the form or reach out directly to our counselor team.
          </motion.p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs">
              <div className="p-3 rounded-xl bg-sky-100 text-sky-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone / WhatsApp</div>
                <a href="tel:+917736164363" className="text-base font-bold text-slate-900 hover:text-sky-700 transition-colors">
                  +91 77361 64363
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sky-100 shadow-2xs">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Main Academic Center</div>
                <div className="text-sm font-bold text-slate-900">Thrissur, Kerala, India</div>
                <div className="text-xs text-slate-500">Live Interactive Classes & Offline Counseling</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl"
        >
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out. We have opened WhatsApp with your details. Our admissions team will respond shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#E5B44D] text-[#153947] font-extrabold text-xs hover:bg-[#d4a33c] transition-colors"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pb-2 border-b border-sky-100">
                Request Free Demo & Callback
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter student / parent name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Student Grade / Class
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                  >
                    <option value="Class 1 to 5">Class 1 to 5</option>
                    <option value="Class 6 to 8">Class 6 to 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Repeater / Entrance Aspirant">Repeater / Entrance Aspirant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Program
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                  >
                    <option value="1-on-1 Individual Tuition">1-on-1 Individual Tuition</option>
                    <option value="Micro Batch (Max 7)">Micro Batch (Max 7)</option>
                    <option value="JEE / NEET / KEAM Coaching">JEE / NEET / KEAM Coaching</option>
                    <option value="Scholarship Preparation">Scholarship Preparation</option>
                    <option value="Competitive Exam Coaching">Competitive Exam Coaching</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your target goals or specific subjects needing help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-sky-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-base shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#153947]" />
                <span>Submit & Chat via WhatsApp</span>
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
