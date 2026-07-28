import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { AppLayoutClient } from "@/components/app-layout-client";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Learning | 15 Years of Educational Legacy | Personalised Mentorship",
  description:
    "Page Learning provides individualized 1-on-1 tuition (Class 1 to 12), Micro Batches (Max 7 students), Entrance Exam Coaching (JEE/NEET/KEAM), Scholarship Exam prep, and Competitive Exam coaching with live interactive classes.",
  keywords: [
    "Page Learning",
    "Individual Tuition",
    "Micro Batch",
    "Entrance Coaching Thrissur",
    "JEE Coaching",
    "NEET Coaching",
    "KEAM Coaching",
    "1-on-1 Tuition",
    "Class 1 to 12 Tuition",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFFFFF]">
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}


