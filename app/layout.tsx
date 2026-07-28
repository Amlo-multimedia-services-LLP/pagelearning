import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppLayoutClient } from "@/components/app-layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFFDF7]">
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}


