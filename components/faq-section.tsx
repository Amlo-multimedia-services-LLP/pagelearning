"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20have%20a%20question%20regarding%20Page%20Learning%20courses";

const faqs = [
  {
    id: 1,
    question: "What makes Page Learning 1-on-1 Tuition different from regular tuition centers?",
    answer:
      "Unlike crowded coaching centers where students adapt to a single teacher's speed, Page Learning 1-on-1 Tuition assigns a dedicated mentor who adapts completely to the student's learning style, strengths, and weaknesses. This guarantees 100% focused attention and customized lesson plans.",
  },
  {
    id: 2,
    question: "How are Micro Batches structured and what is the maximum student limit?",
    answer:
      "Our Micro Batches strictly accommodate a maximum of 7 students per group. This optimal cohort size ensures interactive discussions, zero distraction, equal opportunity to clear doubts, and active peer learning.",
  },
  {
    id: 3,
    question: "Which classes and syllabi are covered at Page Learning?",
    answer:
      "We cater to Class 1 to Class 12 students across State Board, CBSE, and ICSE curricula. We offer subject-specific tuitions (Physics, Chemistry, Mathematics, Biology, English) as well as integrated entrance exam preparation.",
  },
  {
    id: 4,
    question: "How can parents track their child's academic progress?",
    answer:
      "We conduct regular chapter-wise diagnostic tests and provide detailed progress reports. Parents receive weekly feedback calls from course coordinators and dedicated parent-teacher interactive sessions.",
  },
  {
    id: 5,
    question: "How do I schedule a Free Demo Session for my child?",
    answer:
      "You can click on the 'Free Demo' button anywhere on our website or directly message our admissions team on WhatsApp (+91 77361 64363). We will arrange a free diagnostic session and counselor consultation at your convenience.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs sm:text-sm font-semibold mb-3"
        >
          <HelpCircle className="w-4 h-4 text-sky-600" />
          <span>Got Questions? We Have Answers</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
        >
          Find clear information about our teaching methodology, batch timings, entrance programs, and fee structures.
        </motion.p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-sky-50/90 border-sky-300 shadow-md"
                  : "bg-white/80 border-sky-100 hover:border-sky-200 shadow-2xs"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isOpen ? "bg-sky-600 text-white rotate-180" : "bg-sky-100 text-sky-700"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-sky-200/50 pt-4"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Help Callout */}
      <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center space-y-3 shadow-lg">
        <h3 className="text-xl font-bold">Have a specific question not answered here?</h3>
        <p className="text-xs sm:text-sm text-sky-100 max-w-xl mx-auto">
          Our admissions team is available on WhatsApp to guide you with batch schedules, mentor availability, and custom tuition plans.
        </p>
        <div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-sky-700 font-bold text-xs sm:text-sm shadow-md hover:bg-sky-50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current text-emerald-500" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
