"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, Phone, ArrowRight } from "lucide-react";
import { BrandLogo, LegacyBadge } from "@/components/brand-logo";

interface NavbarProps {
  onOpenDemoModal: (course?: string) => void;
}

export function Navbar({ onOpenDemoModal }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses", hasDropdown: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`relative z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm py-3"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Mark */}
          <Link href="/" className="flex items-center gap-3">
            <BrandLogo variant="dark" className="hidden" /> {/* Hiding dark variant if it exists from previous state */}
            <BrandLogo variant="light" className="!text-[#153947]" />
            <div className="hidden lg:block border-l border-gray-300 pl-3">
              <LegacyBadge className="!bg-[#F3F4F6] !border-gray-200 !text-[#153947]" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        pathname.startsWith("/courses")
                          ? "text-[#153947] font-semibold bg-gray-100"
                          : "text-gray-600 hover:text-[#153947] hover:bg-gray-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesDropdownOpen ? "rotate-180 text-[#153947]" : ""}`} />
                    </Link>

                    {/* Glassmorphism Dropdown */}
                    {coursesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 pt-2 animate-fade-in-up">
                        <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-2.5 shadow-2xl space-y-1">
                          <Link
                            href="/courses"
                            className="block px-3 py-2 rounded-xl bg-gray-50 hover:bg-[#153947] hover:text-white text-[#153947] text-xs font-bold uppercase tracking-wider transition-colors mb-1"
                          >
                            Explore All Courses →
                          </Link>
                          {courseItems.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block p-2.5 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors group"
                            >
                              <div className="text-sm font-semibold text-[#153947] transition-colors flex items-center justify-between">
                                <span>{item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E5B44D]" />
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#153947] font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-[#153947] hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917736164363"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#153947] transition-colors border border-gray-200 hover:border-gray-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5B44D]" />
              <span>+91 77361 64363</span>
            </a>

            <button
              onClick={() => onOpenDemoModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#153947] hover:bg-[#112a35] text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-100"
            >
              <Sparkles className="w-4 h-4 text-[#E5B44D]" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenDemoModal()}
              className="px-3 py-1.5 rounded-lg bg-[#153947] text-white font-semibold text-xs"
            >
              Free Demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#153947] hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in-up shadow-xl absolute top-full left-0 right-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${
                pathname === link.href ? "bg-gray-100 text-[#153947]" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-bold text-[#E5B44D] uppercase tracking-wider px-4 mb-2">
              Our Courses
            </p>
            {courseItems.map((course) => (
              <Link
                key={course.path}
                href={course.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#153947]"
              >
                • {course.title}
              </Link>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-xl bg-[#153947] text-white font-bold text-center text-sm shadow-md"
            >
              Book Free Demo Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

