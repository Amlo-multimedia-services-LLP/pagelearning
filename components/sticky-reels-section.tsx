"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Video } from "lucide-react";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function StickyReelsSection() {
  useEffect(() => {
    // Process Instagram embeds script
    const loadInstagramScript = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      } else {
        const existingScript = document.getElementById("instagram-embed-script");
        if (!existingScript) {
          const script = document.createElement("script");
          script.id = "instagram-embed-script";
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          script.onload = () => {
            if ((window as any).instgrm) {
              (window as any).instgrm.Embeds.process();
            }
          };
          document.body.appendChild(script);
        }
      }
    };

    loadInstagramScript();
    const timer = setTimeout(loadInstagramScript, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side Sticky Container */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 border border-pink-200 text-pink-900 text-xs font-bold"
          >
            <InstagramIcon className="w-4 h-4 text-pink-600" />
            <span>@pagelearning.in Official Feed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Watch Our Videos & Instagram Reels
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Explore mentor insights, exam tips, student achievement videos, and campus highlights directly embedded from our official Instagram account.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2"
          >
            <a
              href="https://www.instagram.com/pagelearning.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#E5B44D] hover:bg-[#d4a33c] text-[#153947] font-extrabold text-sm shadow-md transition-all duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-5 h-5 text-[#153947]" />
              <span>Follow @pagelearning.in</span>
              <ExternalLink className="w-4 h-4 text-[#153947]" />
            </a>
          </motion.div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 leading-relaxed flex items-center gap-3">
            <Video className="w-6 h-6 text-sky-600 shrink-0" />
            <span>New interactive reels & study videos published regularly!</span>
          </div>
        </div>

        {/* Right Side Scrollable Embedded Instagram Feed */}
        <div className="lg:col-span-7 space-y-8 flex flex-col items-center">
          
          {/* Reel 1 */}
          <div className="w-full flex justify-center bg-white p-4 rounded-3xl border border-sky-100 shadow-md">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DbppipLSGrw/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "300px",
                padding: 0,
                width: "99%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/reel/DbppipLSGrw/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View post on Instagram
                </a>
              </div>
            </blockquote>
          </div>

          {/* Image Post */}
          <div className="w-full flex justify-center bg-white p-4 rounded-3xl border border-sky-100 shadow-md">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DbmkaSNyk6C/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "300px",
                padding: 0,
                width: "99%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/p/DbmkaSNyk6C/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View post on Instagram
                </a>
              </div>
            </blockquote>
          </div>

          {/* Reel 2 */}
          <div className="w-full flex justify-center bg-white p-4 rounded-3xl border border-sky-100 shadow-md">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DbcYwpYyxRi/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "16px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "300px",
                padding: 0,
                width: "99%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/reel/DbcYwpYyxRi/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: 0,
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View post on Instagram
                </a>
              </div>
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  );
}
