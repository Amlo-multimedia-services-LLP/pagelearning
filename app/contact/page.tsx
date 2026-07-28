"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, Sparkles, Map } from "lucide-react";
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
    <div className="space-y-24 pb-24">
      {/* Page Header - Clean SaaS */}
      <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in-up relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">Contact Page Learning.</h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
            We are here to answer all your questions regarding 1-on-1 tuition, micro batches, and demo bookings.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm space-y-8">
              <div>
                <BrandLogo variant="light" className="!text-[#153947]" />
                <div className="mt-4">
                  <LegacyBadge className="!bg-gray-50 !border-gray-100" />
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-100">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-50 text-[#E5B44D] flex items-center justify-center shrink-0 border border-yellow-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Campus Location</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      1st Floor, Pakareswaran Building, Palliyara, Thrikkur, Thrissur 680306
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#41AAF0] flex items-center justify-center shrink-0 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Direct Contact</h4>
                    <div className="text-sm text-gray-500 mt-1 flex flex-col space-y-1">
                      <a href="tel:+917736164363" className="hover:text-[#153947] font-semibold transition-colors">
                        +91 77361 64363
                      </a>
                      <a href="tel:+917736464363" className="hover:text-[#153947] font-semibold transition-colors">
                        +91 77364 64363
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Email Support</h4>
                    <a href="mailto:admin@pagelearning.in" className="text-sm text-gray-500 hover:text-[#153947] font-semibold transition-colors mt-1 block">
                      admin@pagelearning.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-500 flex items-center justify-center shrink-0 border border-gray-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Academic Hours</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Mon - Sat: 8:00 AM – 8:30 PM <br />
                      Sun: 9:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Link Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-sm transition-colors flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Instant WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 sm:p-12 rounded-[2rem] border border-gray-200 shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Express Enquiry Form
                </span>
                <h3 className="text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
                  Send Us A Message.
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Fill in your details below and our coordinator will respond promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">Enquiry Submitted!</h4>
                    <p className="text-base text-gray-500 max-w-sm mx-auto">
                      Thank you <span className="font-semibold text-gray-900">{formData.name}</span>. We will call you back at <span className="font-semibold text-gray-900">{formData.phone}</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Enquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947] focus:bg-white transition-all"
                    >
                      <option value="General Enquiry">General Academic Enquiry</option>
                      <option value="Individual Tuition 1:1">Individual Tuition (Class 1-12)</option>
                      <option value="Micro Batch">Micro Batch (Max 7 Students)</option>
                      <option value="Entrance Coaching">Entrance Exam Coaching (JEE/NEET)</option>
                      <option value="Free Demo Session">Book Free Demo Session</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Message Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about student grade, syllabus, or specific subjects required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#153947] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      className="flex-1 py-4 px-6 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenDemoModal && onOpenDemoModal()}
                      className="px-8 py-4 rounded-xl bg-[#E5B44D] hover:bg-[#F2C564] text-[#153947] font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 fill-[#153947]" />
                      <span>Book Demo</span>
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
