"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, Bell, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";

interface NavbarProps {
  onOpenDemoModal?: (course?: string) => void;
}

// Increased size sleek 2-Thin-Line Hamburger Icon for Mobile
const TwoLineHamburger = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="8" x2="21" y2="8" />
    <line x1="3" y1="16" x2="21" y2="16" />
  </svg>
);

export function Navbar({ onOpenDemoModal }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const WHATSAPP_URL =
    "https://wa.me/917736164363?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Free%20Demo%20Session%20at%20Page%20Learning";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courseItems = [
    { title: "Individual Tuition (1-on-1)", path: "/courses/individual-tuition", desc: "Class 1-12 | 100% Personal Focus" },
    { title: "Micro Batch (Max 7)", path: "/courses/micro-batch", desc: "Class 7-12 | Small Interactive Groups" },
    { title: "Entrance Exam Coaching", path: "/courses/entrance-coaching", desc: "JEE, NEET, KEAM, CUSAT, CLAT" },
    { title: "Scholarship Examinations", path: "/courses/scholarships", desc: "NMMS, USS, LSS, Olympiad" },
    { title: "Competitive & Career", path: "/courses/competitive-exams", desc: "PSC, UPSC, NET, SET, KTET" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full h-[10vh] min-h-[64px] bg-white flex flex-col justify-center shadow-xs transition-all duration-300">
      {/* Top Announcement Banner */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#153947] px-4 py-1.5 text-xs sm:text-sm font-bold shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="bg-[#153947] text-white text-[10px] sm:text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <Bell className="w-3 h-3 animate-bounce" /> Announcement
              </span>
              <span className="font-bold text-[#153947]">
                🎉 Admissions Open for 2026-27! Exclusive 1-on-1 Tuition & Micro Batch Seats Reserved in Thrissur.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 bg-[#153947] text-white hover:bg-slate-800 font-extrabold px-3.5 py-1 rounded-full text-xs transition-transform hover:scale-105 shadow-xs"
              >
                <span>Reserve Seat</span>
              </a>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="p-1 hover:bg-black/10 rounded-full transition-colors focus:outline-none text-[#153947]"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main WHITE Navigation Bar */}
      <nav className="w-full bg-white py-2.5 px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <BrandLogo showSubtitle={false} size="md" />
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 font-medium text-sm">
              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/about"
                    ? "text-sky-700 font-bold bg-sky-50"
                    : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                }`}
              >
                About
              </Link>

              {/* External Blog Link */}
              <a
                href="https://blog.pagelearning.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-all"
              >
                <span>Blog</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <Link
                  href="/courses"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                    pathname.startsWith("/courses")
                      ? "text-sky-700 font-bold bg-sky-50"
                      : "text-slate-700 hover:text-sky-700 hover:bg-slate-50"
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      coursesDropdownOpen ? "rotate-180 text-sky-700" : "text-slate-400"
                    }`}
                  />
                </Link>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 animate-fade-in-up">
                    <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xl space-y-1">
                      <Link
                        href="/courses"
                        className="block px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-extrabold uppercase tracking-wider transition-colors mb-1"
                      >
                        Explore All Programs →
                      </Link>
                      {courseItems.map((course) => (
                        <Link
                          key={course.path}
                          href={course.path}
                          className="block p-2.5 rounded-xl hover:bg-sky-50 text-slate-800 transition-colors group"
                        >
                          <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                            {course.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{course.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* External Mock Test Link */}
              <a
                href="https://test.pagelearning.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-all"
              >
                <span>Mock Test</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* BLUE Button with WHITE Text (matching font style text-sm font-medium) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-medium text-sm shadow-xs transition-all duration-300 hover:scale-105 active:scale-100"
              >
                Free Demo
              </a>
            </div>

            {/* Mobile Hamburger Toggle (Increased Size TwoLineHamburger Icon) */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Open mobile menu"
              >
                <TwoLineHamburger className="w-8 h-8 text-slate-800" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* COOL FRAMER MOTION ANIMATED SLIDE-IN MOBILE DRAWER MENU FROM RIGHT */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Overlay with Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />

            {/* Right Slide-In Drawer with Spring Animation */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 230 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div className="space-y-6">
                {/* Drawer Header with Close Button */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <BrandLogo showSubtitle={false} size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links inside Drawer */}
                <div className="space-y-2">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    About
                  </Link>

                  <a
                    href="https://blog.pagelearning.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    <span>Blog</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>

                  <Link
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    Courses Catalog
                  </Link>

                  {/* Sub-course links */}
                  <div className="pl-4 space-y-2 border-l-2 border-sky-500 my-2">
                    {courseItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-sm font-medium text-slate-600 hover:text-sky-700"
                      >
                        • {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Mock Test Link */}
                  <a
                    href="https://test.pagelearning.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
                  >
                    <span>Mock Test Platform</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>

                  {/* BOOK FREE DEMO BUTTON POSITIONED DIRECTLY BELOW MOCK TEST BUTTON */}
                  <div className="pt-2">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span>Book Free Demo</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="pt-6 border-t border-slate-100 text-center text-xs text-slate-400 font-medium">
                Page Learning • Thrissur, Kerala
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
