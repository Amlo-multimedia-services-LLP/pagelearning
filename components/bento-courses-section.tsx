"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

interface CourseCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  link: string;
  bentoSpan: string;
}

const coursesData: CourseCard[] = [
  {
    id: "individual-tuition",
    title: "1-on-1 Individual Tuition",
    subtitle: "Classes 1 to 12. Complete 100% personalized learning pace, custom study plans, and live doubt solving.",
    image: "/Courses/INDIVIDUAL TUTION.png",
    badge: "Personal Focus",
    link: "/courses/individual-tuition",
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "micro-batch",
    title: "Micro Batch Programs",
    subtitle: "Small interactive cohorts (strictly maximum 7 students) fostering healthy discussion and focus.",
    image: "/Courses/MICRO BATCH.png",
    badge: "Max 7 Seats",
    link: "/courses/micro-batch",
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "entrance-coaching",
    title: "JEE & NEET Entrance Prep",
    subtitle: "Rigorous problem solving, mock test series, and rank booster strategy by senior entrance faculties.",
    image: "/Courses/neet 2026.png",
    badge: "Top Rankers",
    link: "/courses/entrance-coaching",
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "scholarships",
    title: "Scholarship Examination Prep",
    subtitle: "Specialized coaching for NMMS, USS, LSS, NTSE, and Science Olympiad competitive examinations.",
    image: "/images/20231224005621_IMG_5903.JPG",
    badge: "Scholarships",
    link: "/courses/scholarships",
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "competitive-exams",
    title: "Competitive & Career Coaching",
    subtitle: "Foundational and advanced prep for PSC, UPSC, NET, SET, KTET, and professional entrance exams.",
    image: "/images/MAJO9011.JPG",
    badge: "Career Exams",
    link: "/courses/competitive-exams",
    bentoSpan: "col-span-1 md:col-span-3 lg:col-span-3",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {coursesData.map((course, index) => (
          <motion.div
            key={course.id}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: index * 0.1 }}
            className={`${course.bentoSpan} group relative bg-gradient-to-b from-sky-50/90 to-white/90 rounded-3xl p-5 sm:p-6 border border-sky-100/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
          >
            {/* Image Header Inside Card - Fitting image aspect ratio cleanly */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-sky-100/80 bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3">
                <span className="px-3.5 py-1 rounded-xl bg-[#E5B44D] text-[#153947] font-extrabold text-xs shadow-xs">
                  {course.badge}
                </span>
              </div>
            </div>

            {/* Bottom Content Area: Title & Subtitle on Left, Know More Yellow Button on Right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto pt-2">
              <div className="space-y-1.5 max-w-lg">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {course.subtitle}
                </p>
              </div>

              {/* Know More YELLOW Button WITHOUT Sparkle Icon */}
              <Link
                href={course.link}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 shrink-0"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-[#153947]" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
