"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/917736164363?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Page%20Learning%20tuitions%20and%20courses";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Animated Greeting Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-sky-200 text-slate-900 px-4 py-3 rounded-2xl shadow-2xl max-w-xs relative flex items-start gap-2.5"
          >
            <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="text-xs space-y-0.5">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Admissions Online</span>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-slate-400 hover:text-slate-600 ml-2"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-slate-600 leading-snug">
                Need help choosing a course? Chat live with a Page Learning counselor!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pulsing WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
