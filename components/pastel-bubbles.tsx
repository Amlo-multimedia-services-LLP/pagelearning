"use client";

import React from "react";

export function PastelBubbles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Pastel Blue Bubble Top Right */}
      <div
        className="absolute -top-16 -right-16 w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full blur-3xl opacity-70 animate-float-bubble"
        style={{
          background: "radial-gradient(circle, rgba(186,230,253,0.7) 0%, rgba(224,242,254,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Pastel Gold Bubble Top Left */}
      <div
        className="absolute top-1/4 -left-20 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-60 animate-float-bubble-rev"
        style={{
          background: "radial-gradient(circle, rgba(254,240,138,0.6) 0%, rgba(254,249,195,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Pastel Red/Pink Bubble Middle Right */}
      <div
        className="absolute top-1/2 -right-24 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full blur-3xl opacity-50 animate-float-bubble"
        style={{
          background: "radial-gradient(circle, rgba(254,205,211,0.6) 0%, rgba(255,228,230,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Pastel Green Bubble Bottom Left */}
      <div
        className="absolute top-[72%] -left-16 w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full blur-3xl opacity-55 animate-float-bubble-rev"
        style={{
          background: "radial-gradient(circle, rgba(187,247,208,0.6) 0%, rgba(220,252,231,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Pastel Purple Bubble Middle Left */}
      <div
        className="absolute top-[40%] left-1/3 w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full blur-3xl opacity-45 animate-float-bubble"
        style={{
          background: "radial-gradient(circle, rgba(233,213,255,0.55) 0%, rgba(243,232,255,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Pastel Navy Soft Bubble Bottom Right */}
      <div
        className="absolute top-[85%] right-10 w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-40 animate-float-bubble-rev"
        style={{
          background: "radial-gradient(circle, rgba(203,213,225,0.6) 0%, rgba(241,245,249,0.2) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
