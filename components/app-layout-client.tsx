"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PastelBubbles } from "@/components/pastel-bubbles";
import { LenisProvider } from "@/components/lenis-provider";
import { CloudflareVerificationGate } from "@/components/cloudflare-verification-gate";

interface AppLayoutClientProps {
  children: React.ReactNode;
}

export function AppLayoutClient({ children }: AppLayoutClientProps) {
  return (
    <CloudflareVerificationGate>
      <LenisProvider>
        <div className="min-h-screen flex flex-col relative text-slate-900 bg-[#F4F8FE] font-sans overflow-x-hidden selection:bg-sky-200 selection:text-slate-900">
          {/* Ambient Pastel Bubbles Background */}
          <PastelBubbles />

          {/* Sticky Transparent Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-1 relative z-10 w-full pt-[70px] sm:pt-[80px]">
            {children}
          </main>

          {/* Before Footer & Main Footer */}
          <Footer />

          {/* Floating WhatsApp Redirection CTA */}
          <FloatingWhatsApp />
        </div>
      </LenisProvider>
    </CloudflareVerificationGate>
  );
}
