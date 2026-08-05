"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, GraduationCap } from "lucide-react";

interface CourseCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  link: string;
  bgStyle: string;
  textStyle: string;
  buttonBg: string;
}

const coursesData: CourseCard[] = [
  {
    id: "individual-tuition",
    title: "1-on-1 Individual Tuition",
    subtitle: "Classes 1 to 12. Complete 100% personalized learning pace, custom study plans, and live doubt solving.",
    badge: "100% Personal Focus",
    link: "/courses/individual-tuition",
    bgStyle: "bg-[#CBE4F9]", // Soft Brand Sky Blue
    textStyle: "text-[#153947]",
    buttonBg: "bg-[#153947] text-white hover:bg-[#E5B44D] hover:text-[#153947]",
  },
  {
    id: "micro-batch",
    title: "Micro Batch Programs",
    subtitle: "Small interactive cohorts (strictly maximum 7 students) fostering healthy discussion and focus.",
    badge: "Max 7 Seats / Group",
    link: "/courses/micro-batch",
    bgStyle: "bg-[#D4EAD2]", // Soft Brand Sage Green
    textStyle: "text-[#1B4332]",
    buttonBg: "bg-[#1B4332] text-white hover:bg-[#E5B44D] hover:text-[#153947]",
  },
  {
    id: "entrance-coaching",
    title: "JEE & NEET Entrance Prep",
    subtitle: "Rigorous problem solving, mock test series, and rank booster strategy by senior entrance faculties.",
    badge: "Top Rank Coaching",
    link: "/courses/entrance-coaching",
    bgStyle: "bg-[#F9ECC9]", // Soft Brand Gold / Yellow
    textStyle: "text-[#5C4010]",
    buttonBg: "bg-[#5C4010] text-white hover:bg-[#153947] hover:text-white",
  },
  {
    id: "scholarships",
    title: "Scholarship Coaching",
    subtitle: "Specialized coaching for NMMS, USS, LSS, NTSE, and Science Olympiad competitive examinations.",
    badge: "NMMS / USS / LSS",
    link: "/courses/scholarships",
    bgStyle: "bg-[#F8D4CF]", // Soft Brand Coral / Red
    textStyle: "text-[#6B1D1D]",
    buttonBg: "bg-[#6B1D1D] text-white hover:bg-[#153947] hover:text-white",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function BentoCoursesSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-bold mb-3"
        >
          <GraduationCap className="w-4 h-4 text-sky-600" />
          <span>Curated Academic Programs</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Explore Our Specialized Courses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          From individual 1-on-1 tuitions to focused micro batches and entrance preparation, we offer tailored educational pathways designed for guaranteed student progress.
        </motion.p>
      </div>

      {/* Grid of Solid Color Cards matching reference design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {coursesData.map((course, index) => (
          <motion.div
            key={course.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative ${course.bgStyle} rounded-[2.2rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[300px] border border-black/5`}
          >
            {/* Top Row: Course Title & Circular Arrow Button */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 max-w-md">
                <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider">
                  {course.badge}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${course.textStyle}`}>
                  {course.title}
                </h3>
              </div>

              {/* Top-Right Circular Arrow Button */}
              <Link
                href={course.link}
                className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform"
                aria-label={`View ${course.title}`}
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </Link>
            </div>

            {/* Middle Subtitle */}
            <p className={`text-sm sm:text-base ${course.textStyle} opacity-90 leading-relaxed max-w-lg mt-6 mb-8`}>
              {course.subtitle}
            </p>

            {/* Bottom Row: Pill Action Button */}
            <div className="flex items-center justify-between pt-4 border-t border-black/10 mt-auto">
              <span className={`text-xs font-bold uppercase tracking-wider ${course.textStyle} opacity-75`}>
                Page Learning Thrissur
              </span>

              <Link
                href={course.link}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${course.buttonBg} font-extrabold text-xs sm:text-sm shadow-sm transition-all duration-300 hover:scale-105`}
              >
                <span>Explore Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
