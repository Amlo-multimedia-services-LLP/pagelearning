"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DemoBookingModal } from "@/components/demo-booking-modal";

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
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#153947]">
      <Navbar onOpenDemoModal={handleOpenDemoModal} />
      
      {/* Main Page Content - Margin top for sticky header */}
      <main className="flex-1 pt-20">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // Pass modal trigger prop if child accepts it
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
