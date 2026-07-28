"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, Sparkles } from "lucide-react";
import { BrandLogo, LegacyBadge } from "@/components/brand-logo";

interface ContactProps {
  onOpenDemoModal?: (course?: string) => void;
}

export default function ContactPage({ onOpenDemoModal }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Page Learning! I have an enquiry.\n` +
      `👤 Name: ${formData.name || "N/A"}\n` +
      `📞 Phone: ${formData.phone || "N/A"}\n` +
      `📝 Note: ${formData.message || "Requesting course information."}`
    );
    window.open(`https://wa.me/917736164363?text=${msg}`, "_blank");
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-[#153947] text-white py-14 px-4 sm:px-6 lg:px-8 rounded-b-[2rem] shadow-lg">
        <div className="max-w-4xl mx-auto text-center space-y-3 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
            GET IN TOUCH WITH OUR ACADEMIC TEAM
          </span>
          <h1 className="text-4xl font-extrabold text-[#FFFDF7]">Contact Page Learning</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            We are here to answer all your questions regarding 1-on-1 individual tuition, micro batches, entrance prep, and demo bookings.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFDF7] p-8 rounded-3xl border border-[#E8E2D2] shadow-xl space-y-6">
              <div>
                <BrandLogo variant="light" />
                <div className="mt-3">
                  <LegacyBadge />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#153947] text-[#E5B44D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#153947]">Campus & Main Office Address</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                      1st Floor, Pakareswaran Building, Palliyara, Thrikkur, Thrissur 680306
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#153947] text-[#41AAF0] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#153947]">Direct Phone Numbers</h4>
                    <div className="text-xs text-gray-600 mt-0.5 flex flex-col space-y-1">
                      <a href="tel:+917736164363" className="hover:text-[#153947] font-semibold">
                        +91 77361 64363
                      </a>
                      <a href="tel:+917736464363" className="hover:text-[#153947] font-semibold">
                        +91 77364 64363
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#153947] text-[#6EB44D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#153947]">Email Support</h4>
                    <a href="mailto:Admin@pagelearning.in" className="text-xs text-gray-600 hover:text-[#153947] font-semibold">
                      Admin@pagelearning.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#153947] text-[#E55A45] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#153947]">Academic Support Hours</h4>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Monday to Saturday: 8:00 AM – 8:30 PM <br />
                      Sunday: 9:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Link Button */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Instant WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
                  EXPRESS ENQUIRY FORM
                </span>
                <h3 className="text-2xl font-bold text-[#153947] mt-1">
                  Send Us A Direct Message
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below and our counseling coordinator will respond promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#153947]">Enquiry Submitted Successfully!</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Thank you <span className="font-semibold">{formData.name}</span>. We have received your query and will call you back at <span className="font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947]"
                    >
                      <option value="General Enquiry">General Academic Enquiry</option>
                      <option value="Individual Tuition 1:1">Individual Tuition (Class 1-12)</option>
                      <option value="Micro Batch">Micro Batch (Max 7 Students)</option>
                      <option value="Entrance Coaching">Entrance Exam Coaching (JEE/NEET)</option>
                      <option value="Free Demo Session">Book Free Demo Session</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153947] uppercase tracking-wider mb-1">
                      Message / Student Class Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about student grade, syllabus, or specific subjects required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-xl bg-[#153947] hover:bg-[#1C4B5E] text-[#FFFDF7] font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenDemoModal && onOpenDemoModal()}
                      className="px-6 py-3.5 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-1"
                    >
                      <Sparkles className="w-4 h-4 fill-[#153947]" />
                      <span>Book Free Demo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
