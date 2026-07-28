"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Sparkles } from "lucide-react";
import { BrandLogo, LegacyBadge, GeometricBrandMotif } from "@/components/brand-logo";

interface FooterProps {
  onOpenDemoModal: (course?: string) => void;
}

export function Footer({ onOpenDemoModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#153947] text-[#FFFDF7] border-t border-white/10 relative overflow-hidden">
      {/* Decorative Wave & Top Border Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#E5B44D] via-[#41AAF0] to-[#E55A45]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Developing confidence and excellence through personalized 1-on-1 guidance, micro batches, and expert mentorship since 2011.
            </p>
            <LegacyBadge />
            <div className="pt-2">
              <GeometricBrandMotif />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5B44D]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E5B44D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5B44D] transition-colors">
                  About Our Legacy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#E5B44D] transition-colors">
                  All Courses Overview
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5B44D] transition-colors">
                  Contact Us & Campus Location
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="text-[#E5B44D] hover:underline font-semibold flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Demo Session</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5B44D]">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/courses/individual-tuition" className="hover:text-white transition-colors">
                  • Individual Tuition (Class 1 - 12)
                </Link>
              </li>
              <li>
                <Link href="/courses/micro-batch" className="hover:text-white transition-colors">
                  • Micro Batch (Max 7 Students)
                </Link>
              </li>
              <li>
                <Link href="/courses/entrance-coaching" className="hover:text-white transition-colors">
                  • Entrance Exam Coaching (JEE/NEET)
                </Link>
              </li>
              <li>
                <Link href="/courses/scholarships" className="hover:text-white transition-colors">
                  • Scholarship Exams (NMMS/USS/LSS)
                </Link>
              </li>
              <li>
                <Link href="/courses/competitive-exams" className="hover:text-white transition-colors">
                  • Career Exams (PSC/UPSC/NET)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E5B44D]">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#E5B44D] shrink-0 mt-0.5" />
                <span>
                  1st Floor, Pakareswaran Building, Palliyara, Thrikkur, Thrissur 680306
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5B44D] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917736164363" className="hover:text-white">
                    +91 77361 64363
                  </a>
                  <a href="tel:+917736464363" className="hover:text-white">
                    +91 77364 64363
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5B44D] shrink-0" />
                <a href="mailto:Admin@pagelearning.in" className="hover:text-white">
                  Admin@pagelearning.in
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://wa.me/917736164363"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => onOpenDemoModal()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#E5B44D] text-[#153947] font-bold text-xs shadow-md hover:bg-[#F2C564] transition-all"
              >
                <span>Free Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Page Learning. All rights reserved. 15 Years of Educational Legacy.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
