"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowUp, ExternalLink } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20connect%20with%20Page%20Learning";

interface FooterProps {
  onOpenDemoModal?: (course?: string) => void;
}

export function Footer({ onOpenDemoModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 text-slate-900 border-t border-slate-200/90 relative overflow-hidden">
      {/* BEFORE FOOTER CTA BANNER */}
      <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-slate-50 border-b border-sky-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-200/60 border border-sky-300 text-sky-900 text-xs font-extrabold uppercase tracking-wider">
              <span>Start Your Learning Journey</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Experience 1-on-1 Personalized Mentorship?
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Book a free diagnostic demo session or talk to an admissions expert on WhatsApp now.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-md transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              <span>WhatsApp Admission Counselor</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Logo & Overview */}
          <div className="space-y-4">
            <div className="inline-block">
              <BrandLogo showSubtitle={false} size="lg" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Developing academic confidence through 1-on-1 tuition, micro batches (max 7), and entrance coaching in Thrissur since 2011.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-700">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-sky-700 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-700 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-sky-700 transition-colors">All Courses</Link>
              </li>
              <li>
                <a href="https://blog.pagelearning.in" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors inline-flex items-center gap-1">
                  <span>Blog (blog.pagelearning.in)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://test.pagelearning.in" target="_blank" rel="noopener noreferrer" className="hover:text-sky-700 transition-colors inline-flex items-center gap-1">
                  <span>Mock Test Platform</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses Catalog */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-700">
              Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/courses/individual-tuition" className="hover:text-sky-700 transition-colors">
                  • 1-on-1 Individual Tuition
                </Link>
              </li>
              <li>
                <Link href="/courses/micro-batch" className="hover:text-sky-700 transition-colors">
                  • Micro Batch (Max 7 Students)
                </Link>
              </li>
              <li>
                <Link href="/courses/entrance-coaching" className="hover:text-sky-700 transition-colors">
                  • JEE, NEET & KEAM Prep
                </Link>
              </li>
              <li>
                <Link href="/courses/scholarships" className="hover:text-sky-700 transition-colors">
                  • Scholarship Coaching (NMMS/USS)
                </Link>
              </li>
              <li>
                <Link href="/courses/competitive-exams" className="hover:text-sky-700 transition-colors">
                  • Competitive Exam Prep
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-700">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600" />
                <a href="tel:+917736164363" className="hover:text-sky-700 font-bold text-slate-900">+91 77361 64363</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Pakareswaran Building, Thrikkur, Thrissur, Kerala 680306</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/pagelearning.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-pink-600 text-slate-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-blue-600 text-slate-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-red-600 text-slate-700 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200/80 hover:bg-emerald-600 text-slate-700 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT & FOOTER BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} Page Learning. All rights reserved. 15 Years of Educational Excellence.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-200/80 hover:bg-sky-600 text-slate-700 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
