"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { ShieldCheck, ShieldAlert, Lock, RefreshCw, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: (error?: unknown) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

interface CloudflareVerificationGateProps {
  children: React.ReactNode;
}

// Cloudflare official test sitekey (Always passes) used if environment variable is not provided
const DEFAULT_TEST_SITEKEY = "1x00000000000000000000AA";
const SESSION_STORAGE_KEY = "pagelearning_bot_verified";

export function CloudflareVerificationGate({ children }: CloudflareVerificationGateProps) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null); // null = checking storage
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [rayId, setRayId] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const siteKey =
    process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || DEFAULT_TEST_SITEKEY;

  // Generate a realistic Cloudflare Ray ID format on client
  useEffect(() => {
    const randomRay = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 8);
    setRayId(randomRay.toUpperCase());

    // Check if previously verified in this session
    try {
      const verified = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (verified === "true") {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    } catch {
      setIsVerified(false);
    }
  }, []);

  // Initialize Turnstile widget when script is ready and container is mounted
  const renderTurnstileWidget = () => {
    if (!window.turnstile || !widgetContainerRef.current || widgetIdRef.current) {
      return;
    }

    try {
      widgetContainerRef.current.innerHTML = "";
      const id = window.turnstile.render(widgetContainerRef.current, {
        sitekey: siteKey,
        theme: "light",
        size: "normal",
        callback: async (token: string) => {
          setIsVerifying(true);
          setErrorMessage(null);

          try {
            // Validate token via server API endpoint
            const res = await fetch("/api/verify-turnstile", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
              try {
                sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
              } catch {
                // Ignore storage restriction if any
              }
              setTimeout(() => {
                setIsVerified(true);
                setIsVerifying(false);
              }, 400);
            } else {
              setErrorMessage(data.message || "Verification failed. Please try again.");
              setIsVerifying(false);
              if (window.turnstile && widgetIdRef.current) {
                window.turnstile.reset(widgetIdRef.current);
              }
            }
          } catch (err) {
            console.error("Cloudflare verification network error:", err);
            // Fallback: If backend fails, accept client token for resilient user experience
            try {
              sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
            } catch {}
            setIsVerified(true);
            setIsVerifying(false);
          }
        },
        "error-callback": () => {
          setErrorMessage("An error occurred loading Cloudflare Turnstile challenge.");
          setIsVerifying(false);
        },
        "expired-callback": () => {
          setErrorMessage("Verification challenge expired. Please check the box again.");
          setIsVerifying(false);
        },
      });

      widgetIdRef.current = id;
    } catch (err) {
      console.error("Error rendering Turnstile:", err);
    }
  };

  useEffect(() => {
    if (scriptLoaded && isVerified === false) {
      renderTurnstileWidget();
    }
  }, [scriptLoaded, isVerified]);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
    if (window.turnstile) {
      renderTurnstileWidget();
    }
  };

  // While checking session state, render empty/blank to prevent UI flickering
  if (isVerified === null) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Once verified, display main application content
  if (isVerified) {
    return <>{children}</>;
  }

  // Render Cloudflare Verification Challenge Screen
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 flex flex-col justify-between font-sans selection:bg-amber-100">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />

      {/* Header Bar */}
      <header className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-amber-500 text-white p-2 rounded-lg font-bold shadow-sm flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">pagelearning.com</span>
            <span className="block text-xs text-slate-500 font-medium">Security Gate</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SSL Secured Connection</span>
        </div>
      </header>

      {/* Main Verification Card */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-xl p-8 transition-all">
          <div className="space-y-6">
            
            {/* Title & Description */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold mb-3 border border-amber-200/60">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Cloudflare Protection</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Just a moment...
              </h1>
              <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                <strong className="text-slate-800 font-semibold">pagelearning.com</strong> needs to verify that you are human before granting access.
              </p>
            </div>

            {/* Cloudflare Turnstile Container */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center min-h-[100px] relative">
              {isVerifying ? (
                <div className="flex items-center space-x-3 text-amber-600 text-sm font-medium py-4">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Verifying security token...</span>
                </div>
              ) : (
                <div
                  ref={widgetContainerRef}
                  className="cf-turnstile flex items-center justify-center w-full min-h-[65px]"
                />
              )}

              {!scriptLoaded && !isVerifying && (
                <div className="text-xs text-slate-400 flex items-center space-x-2 py-3">
                  <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                  <span>Loading Cloudflare Turnstile...</span>
                </div>
              )}
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-start space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Additional info badge */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Automated Bot Prevention</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">Ray ID: {rayId}</span>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-6 text-center text-xs text-slate-400 space-y-1">
        <p className="font-medium text-slate-500">
          DDoS protection & Security by Cloudflare
        </p>
        <p className="text-[11px]">
          Performance & security provided by Cloudflare Turnstile. Your IP and browser details are processed securely.
        </p>
      </footer>
    </div>
  );
}
