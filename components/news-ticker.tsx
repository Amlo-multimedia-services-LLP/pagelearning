"use client";

import React from "react";
import { Megaphone } from "lucide-react";

export function NewsTicker() {
  return (
    <div className="bg-[#153947] text-white py-2 px-4 overflow-hidden flex items-center relative z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center">
        <div className="flex items-center gap-2 pr-4 z-10 bg-[#153947] border-r border-white/20 shrink-0">
          <Megaphone className="w-4 h-4 text-[#E5B44D]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#E5B44D]">
            Announcements
          </span>
        </div>
        
        {/* Scrolling text container */}
        <div className="flex-1 overflow-hidden relative">
          <div className="whitespace-nowrap inline-block animate-[ticker_20s_linear_infinite] hover:[animation-play-state:paused] text-xs font-medium">
            <span className="mx-8">✨ Admissions open for 2026-2027 academic year. Book your free demo now!</span>
            <span className="mx-8">🏆 Congratulations to our NEET & JEE top rankers!</span>
            <span className="mx-8">📚 New Micro Batches starting next Monday for Class 10 and 12.</span>
            {/* Duplicate for seamless loop */}
            <span className="mx-8">✨ Admissions open for 2026-2027 academic year. Book your free demo now!</span>
            <span className="mx-8">🏆 Congratulations to our NEET & JEE top rankers!</span>
            <span className="mx-8">📚 New Micro Batches starting next Monday for Class 10 and 12.</span>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
