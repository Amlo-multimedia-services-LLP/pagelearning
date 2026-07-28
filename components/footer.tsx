"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Sparkles } from "lucide-react";
import { BrandLogo, LegacyBadge, GeometricBrandMotif } from "@/components/brand-logo";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

interface FooterProps {
  onOpenDemoModal: (course?: string) => void;
}

export function Footer({ onOpenDemoModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 relative overflow-hidden">
      {/* Decorative Wave & Top Border Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#E5B44D] via-[#41AAF0] to-[#E55A45]" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <BrandLogo variant="light" className="!text-[#153947]" />
            <p className="text-sm text-gray-500 leading-relaxed">
              Developing confidence and excellence through personalized 1-on-1 guidance, micro batches, and expert mentorship since 2011.
            </p>
            <LegacyBadge className="!bg-gray-50 !border-gray-200 !text-[#153947]" />
            <div className="pt-2">
              <GeometricBrandMotif className="opacity-20 mix-blend-multiply" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#153947]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#E5B44D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-[#E5B44D] transition-colors">
                  About Our Legacy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-500 hover:text-[#E5B44D] transition-colors">
                  All Courses Overview
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-[#E5B44D] transition-colors">
                  Contact Us & Campus Location
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenDemoModal()}
                  className="text-[#E5B44D] hover:underline font-semibold flex items-center gap-1.5 mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Demo Session</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#153947]">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>
                <Link href="/courses/individual-tuition" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Individual Tuition
                </Link>
              </li>
              <li>
                <Link href="/courses/micro-batch" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Micro Batch (Max 7)
                </Link>
              </li>
              <li>
                <Link href="/courses/entrance-coaching" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Entrance Coaching
                </Link>
              </li>
              <li>
                <Link href="/courses/scholarships" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Scholarship Exams
                </Link>
              </li>
              <li>
                <Link href="/courses/competitive-exams" className="hover:text-gray-900 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Career & Competitive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#153947]">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#E5B44D] shrink-0 mt-0.5" />
                <span>
                  1st Floor, Pakareswaran Building, Palliyara, Thrikkur, Thrissur 680306
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5B44D] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917736164363" className="hover:text-gray-900">
                    +91 77361 64363
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5B44D] shrink-0" />
                <a href="mailto:admin@pagelearning.in" className="hover:text-gray-900 font-medium">
                  admin@pagelearning.in
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/pagelearning.in"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/pagelearning.in"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917736164363"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Page Learning. All rights reserved. 15 Years of Educational Legacy.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
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
