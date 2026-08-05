import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayoutClient } from "@/components/app-layout-client";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page Learning | 15 Years Educational Legacy | 1-on-1 Tuition & Micro Batches",
  description:
    "Page Learning provides individualized 1-on-1 tuition (Class 1 to 12), Micro Batches (Max 7 students), Entrance Exam Coaching (JEE/NEET/KEAM), and Scholarship Exam prep with live interactive classes in Thrissur, Kerala.",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F4F8FE] text-slate-900 selection:bg-sky-200">
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
