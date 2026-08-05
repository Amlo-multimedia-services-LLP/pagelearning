"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Bell, ExternalLink } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-md transition-all duration-300">
      {/* Top Announcement Banner (Pop-up on page load) */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#153947] px-4 py-2 text-xs sm:text-sm font-bold shadow-xs">
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

      {/* Main Dark Blue Navigation Bar */}
      <nav className="w-full bg-[#0F172A] border-b border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                    ? "text-[#E5B44D] font-bold bg-white/10"
                    : "text-white hover:text-[#E5B44D] hover:bg-white/5"
                }`}
              >
                About
              </Link>

              {/* External Blog Link */}
              <a
                href="https://blog.pagelearning.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-white hover:text-[#E5B44D] hover:bg-white/5 transition-all"
              >
                <span>Blog</span>
                <ExternalLink className="w-3 h-3 text-sky-300" />
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
                      ? "text-[#E5B44D] font-bold bg-white/10"
                      : "text-white hover:text-[#E5B44D] hover:bg-white/5"
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      coursesDropdownOpen ? "rotate-180 text-[#E5B44D]" : "text-sky-300"
                    }`}
                  />
                </Link>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 animate-fade-in-up">
                    <div className="bg-[#153947] border border-sky-800 rounded-2xl p-3 shadow-2xl space-y-1">
                      <Link
                        href="/courses"
                        className="block px-3 py-2 rounded-xl bg-[#E5B44D] text-[#153947] text-xs font-extrabold uppercase tracking-wider transition-colors mb-1"
                      >
                        Explore All Programs →
                      </Link>
                      {courseItems.map((course) => (
                        <Link
                          key={course.path}
                          href={course.path}
                          className="block p-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
                        >
                          <div className="text-sm font-bold text-white group-hover:text-[#E5B44D] transition-colors">
                            {course.title}
                          </div>
                          <div className="text-[11px] text-sky-200/80 mt-0.5">{course.desc}</div>
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
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-white hover:text-[#E5B44D] hover:bg-white/5 transition-all"
              >
                <span>Mock Test</span>
                <ExternalLink className="w-3 h-3 text-sky-300" />
              </a>
            </div>

            {/* Free Demo Yellow Button WITHOUT Sparkle Icon */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-100"
              >
                Free Demo
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#E5B44D] text-[#153947] font-extrabold text-xs shadow-xs"
              >
                Free Demo
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-in-up mt-3 rounded-b-2xl">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-white hover:bg-white/10"
            >
              About
            </Link>

            <a
              href="https://blog.pagelearning.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-white hover:bg-white/10"
            >
              <span>Blog</span>
              <ExternalLink className="w-4 h-4 text-sky-300" />
            </a>

            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-semibold text-white hover:bg-white/10"
            >
              Courses Catalog
            </Link>

            <div className="pl-4 space-y-1 border-l-2 border-[#E5B44D] my-1">
              {courseItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-sm font-medium text-sky-200 hover:text-[#E5B44D]"
                >
                  • {item.title}
                </Link>
              ))}
            </div>

            <a
              href="https://test.pagelearning.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-white hover:bg-white/10"
            >
              <span>Mock Test Platform</span>
              <ExternalLink className="w-4 h-4 text-sky-300" />
            </a>

            <div className="pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 rounded-2xl bg-[#E5B44D] text-[#153947] font-extrabold text-sm shadow-md"
              >
                Free Demo via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
