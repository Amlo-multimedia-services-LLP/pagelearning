import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", showSubtitle = false, size = "md" }: BrandLogoProps) {
  const height = size === "sm" ? 36 : size === "lg" ? 56 : 44;

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Page Learning Logo"
        style={{ height: `${height}px` }}
        className="w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
      {showSubtitle && (
        <span className="text-[10px] tracking-wider uppercase text-sky-700 font-bold ml-1">
          15 Years Legacy
        </span>
      )}
    </div>
  );
}

export function LegacyBadge({ className = "" }: { className?: string }) {
  return (
    <img
      src="/15 years emblem.png"
      alt="15 Years Emblem"
      className={`h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 ${className}`}
    />
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

