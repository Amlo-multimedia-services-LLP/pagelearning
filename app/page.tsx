"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { BentoCoursesSection } from "@/components/bento-courses-section";
import { NewsBatchesSection } from "@/components/news-batches-section";
import { EventGallerySection } from "@/components/event-gallery-section";
import { StickyReelsSection } from "@/components/sticky-reels-section";
import { FAQSection } from "@/components/faq-section";
import { BlogsSection } from "@/components/blogs-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* 1. Hero Section with Viewport Image Slider & WhatsApp Buttons */}
      <HeroSection />

      {/* 2. Bento Grid Courses Section with Scroll Animations */}
      <BentoCoursesSection />

      {/* 3. Latest News, Open Batches & Events Section */}
      <NewsBatchesSection />

      {/* 4. Life at Page - Event Gallery with Scroll Animations */}
      <EventGallerySection />

      {/* 5. Sticky Left Heading & Right Scrollable Instagram Reels */}
      <StickyReelsSection />

      {/* 6. FAQ Section */}
      <FAQSection />

      {/* 7. Blogs Section */}
      <BlogsSection />

      {/* 8. Contact Us Section with Inquiry Form */}
      <ContactSection />
    </div>
  );
}