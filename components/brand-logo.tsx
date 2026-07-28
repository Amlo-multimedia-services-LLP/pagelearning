import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showSubtitle?: boolean;
}

export function BrandLogo({ className = "", variant = "light", showSubtitle = false }: BrandLogoProps) {
  const textColor = variant === "dark" ? "text-white" : variant === "gold" ? "text-[#E5B44D]" : "text-[#153947]";
  const iconColor = variant === "dark" ? "#FFFFFF" : variant === "gold" ? "#E5B44D" : "#153947";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Open Book Logo Mark */}
      <svg
        width="42"
        height="32"
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Left Page */}
        <path
          d="M 12 75 C 28 72, 48 76, 57 82 L 57 22 C 48 16, 28 12, 12 16 Z"
          stroke={iconColor}
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right Page */}
        <path
          d="M 108 75 C 92 72, 72 76, 63 82 L 63 22 C 72 16, 92 12, 108 16 Z"
          stroke={iconColor}
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Book spine line */}
        <path d="M 60 22 L 60 82" stroke={iconColor} strokeWidth="5" strokeLinecap="round" />
        {/* Bottom Curved Base shadow line */}
        <path d="M 16 83 C 32 80, 48 83, 56 86" stroke={iconColor} strokeWidth="4" fill="none" />
        <path d="M 104 83 C 88 80, 72 83, 64 86" stroke={iconColor} strokeWidth="4" fill="none" />
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`font-extrabold tracking-tight text-xl ${textColor} font-sans`}>
          Page
        </span>
        <span className={`font-semibold tracking-wide text-lg ${textColor} font-sans`}>
          learning<span className="text-[#E5B44D]">.</span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider uppercase text-[#E5B44D] font-bold mt-0.5">
            15 Years of Legacy
          </span>
        )}
      </div>
    </div>
  );
}

export function LegacyBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#153947]/90 border border-[#E5B44D]/30 text-[#FFFDF7] shadow-sm backdrop-blur-sm ${className}`}>
      <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#E5B44D" fillOpacity="0.2" />
        <path d="M 30 75 C 35 50, 45 40, 50 25 M 50 75 C 52 55, 60 45, 70 35" stroke="#E5B44D" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="22" r="5" fill="#E5B44D" />
        <circle cx="70" cy="32" r="4" fill="#E5B44D" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-bold tracking-wider text-[#E5B44D] uppercase">15 Years</span>
        <span className="text-[10px] text-gray-300 font-medium">Of Educational Legacy</span>
      </div>
    </div>
  );
}

export function GeometricBrandMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 opacity-85 select-none ${className}`}>
      <div className="w-4 h-4 rounded-full bg-[#E5B44D]" />
      <div className="w-5 h-5 rounded-t-full bg-[#41AAF0]" />
      <div className="w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[16px] border-b-[#E55A45]" />
      <div className="w-4 h-4 rounded-tl-full rounded-br-full bg-[#6EB44D]" />
      <div className="w-4 h-4 bg-[#775898]" />
    </div>
  );
}
