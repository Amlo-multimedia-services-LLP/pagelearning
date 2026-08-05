"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, Bell, ExternalLink } from "lucide-react";
import { BrandLogo, LegacyBadge } from "@/components/brand-logo";

interface NavbarProps {
  onOpenDemoModal?: (course?: string) => void;
}

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
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Banner (Pop-up on page load) */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 text-white px-4 py-2 text-xs sm:text-sm font-medium shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="bg-white/20 text-white text-[10px] sm:text-xs uppercase font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <Bell className="w-3 h-3 animate-bounce" /> Announcement
              </span>
              <span className="font-semibold text-sky-50">
                🎉 Admissions Open for 2026-27! Exclusive 1-on-1 Tuition & Micro Batch Seats Reserved in Thrissur.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 bg-white text-sky-700 hover:bg-sky-50 font-bold px-3 py-1 rounded-full text-xs transition-transform hover:scale-105 shadow-xs"
              >
                <span>Reserve Seat</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </a>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
                aria-label="Close notification"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Transparent / Glass Sticky Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-sky-100 shadow-sm py-3"
            : "bg-white/50 backdrop-blur-md border-b border-sky-100/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & 15 Years Legacy Emblem */}
            <Link href="/" className="flex items-center gap-3 group">
              <BrandLogo showSubtitle={false} size="md" />
              <div className="hidden lg:block border-l border-sky-200/80 pl-3">
                <LegacyBadge />
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 font-medium text-sm">
              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/about"
                    ? "text-sky-900 font-bold bg-sky-100/80"
                    : "text-slate-700 hover:text-sky-900 hover:bg-sky-50"
                }`}
              >
                About
              </Link>

              {/* External Blog Link */}
              <a
                href="https://blog.pagelearning.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-slate-700 hover:text-sky-900 hover:bg-sky-50 transition-all"
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
                      ? "text-sky-900 font-bold bg-sky-100/80"
                      : "text-slate-700 hover:text-sky-900 hover:bg-sky-50"
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
                    <div className="bg-white/95 backdrop-blur-xl border border-sky-100 rounded-2xl p-3 shadow-xl space-y-1">
                      <Link
                        href="/courses"
                        className="block px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider transition-colors mb-1"
                      >
                        Explore All Programs →
                      </Link>
                      {courseItems.map((course) => (
                        <Link
                          key={course.path}
                          href={course.path}
                          className="block p-2.5 rounded-xl hover:bg-sky-50/80 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
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
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-slate-700 hover:text-sky-900 hover:bg-sky-50 transition-all"
              >
                <span>Mock Test</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Free Demo WhatsApp Redirect Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-100"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Free Demo</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-xs"
              >
                Free Demo
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-sky-100 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-in-up">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-sky-50"
            >
              About
            </Link>

            <a
              href="https://blog.pagelearning.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-sky-50"
            >
              <span>Blog</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-sky-50"
            >
              Courses Catalog
            </Link>

            <div className="pl-4 space-y-1 border-l-2 border-sky-200 my-1">
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

            <a
              href="https://test.pagelearning.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-sky-50"
            >
              <span>Mock Test Platform</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>

            <div className="pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book Free Demo via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
