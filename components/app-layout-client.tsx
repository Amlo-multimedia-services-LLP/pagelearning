"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoBookingModal } from "@/components/demo-booking-modal";
import { NewsTicker } from "@/components/news-ticker";

interface AppLayoutClientProps {
  children: React.ReactNode;
}

export function AppLayoutClient({ children }: AppLayoutClientProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (course?: string) => {
    setSelectedCourseForDemo(course);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NewsTicker />
        <Navbar onOpenDemoModal={handleOpenDemoModal} />
      </div>
      
      {/* Main Page Content - Margin top for sticky header + ticker */}
      <main className="flex-1 pt-[104px]">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ onOpenDemoModal?: (course?: string) => void }>, {
              onOpenDemoModal: handleOpenDemoModal,
            });
          }
          return child;
        })}
      </main>

      <Footer onOpenDemoModal={handleOpenDemoModal} />

      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        defaultCourse={selectedCourseForDemo}
      />
    </div>
  );
}
