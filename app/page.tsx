"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { BentoCoursesSection } from "@/components/bento-courses-section";
import { LatestResultsSection } from "@/components/latest-results-section";
import { LatestNewsSection } from "@/components/latest-news-section";
import { OpenBatchesSection } from "@/components/open-batches-section";
import { UpcomingEventsSection } from "@/components/upcoming-events-section";
import { EventGallerySection } from "@/components/event-gallery-section";
import { StickyReelsSection } from "@/components/sticky-reels-section";
import { FAQSection } from "@/components/faq-section";
import { BlogsSection } from "@/components/blogs-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* 1. Hero Section with Viewport Image Slider & 'Prime academy for General education.' heading */}
      <HeroSection />

      {/* 2. Bento Grid Courses Section with Course Posters & Yellow Know More Buttons */}
      <BentoCoursesSection />

      {/* 3. Latest Results Section (Image Slider / Gallery from Results Folder) */}
      <LatestResultsSection />

      {/* 4. Latest News Section (98% Victory in CBSE 10th Exams) */}
      <LatestNewsSection />

      {/* 5. Open & Upcoming Batches Section */}
      <OpenBatchesSection />

      {/* 6. Upcoming Events Section (Delhi University Sarga Meetup & Aaroham 2026 at Kerala Sahithya Academy) */}
      <UpcomingEventsSection />

      {/* 7. Life at Page - Image Gallery (using images folder photos) */}
      <EventGallerySection />

      {/* 8. Sticky Video Section with Embedded Instagram Reels */}
      <StickyReelsSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Blogs Section */}
      <BlogsSection />

      {/* 11. Contact Us Section with Inquiry Form */}
      <ContactSection />
    </div>
  );
}