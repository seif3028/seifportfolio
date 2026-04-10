"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import GlowButton from "@/components/ui/GlowButton";

const Model3D = dynamic(() => import("./Model3D"), { ssr: false });

const roles = [
  "cybersecurity_student",
  "full_stack_dev",
  "sys_admin",
  "iot_enthusiast",
];

// ── Error boundary ────────────────────────────────────────────────────────────
// React requires a class component for error boundaries. This catches any
// crash inside the 3D canvas (WebGL init failure, GL context loss, etc.) and
// swaps in the CSS fallback so the page never shows a white broken-image box.
class Model3DErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// ── CSS fallback shown when WebGL is unavailable or crashes ───────────────────
// Pure SVG/CSS — no WebGL needed. Matches the green hologram aesthetic so it
// looks intentional rather than broken.
function HologramFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="relative animate-pulse"
        style={{ filter: "drop-shadow(0 0 16px rgba(0,255,136,0.5))" }}
      >
        <svg
          viewBox="0 0 80 120"
          className="w-24 h-36 opacity-70"
          fill="none"
          stroke="#00ff88"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* head */}
          <circle cx="40" cy="16" r="10" />
          {/* body */}
          <path d="M25 38 Q40 28 55 38 L58 80 H22 Z" />
          {/* arms */}
          <path d="M25 42 L10 68 M55 42 L70 68" />
          {/* legs */}
          <path d="M30 80 L26 115 M50 80 L54 115" />
        </svg>
        <div className="absolute inset-0 bg-neon-green/5 blur-2xl rounded-full" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const { displayed } = useTypingEffect("Muhammad Seif Al Din Baichoo", 55, 400);

  // Track whether the model container is in the viewport.
  // When it scrolls out, we set frameloop="demand" on the Canvas (zero GPU use).
  // Default true so the model renders immediately on page load.
  const modelWrapperRef = useRef<HTMLDivElement>(null);
  const [modelInView, setModelInView] = useState(true);

  useEffect(() => {
    const el = modelWrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setModelInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    /**
     * Mobile  : single column — model on top, text below, everything centred
     * Desktop : two columns — text left, 3D model right (large)
     */
    <div className="relative flex flex-col md:flex-row md:items-center gap-0 md:gap-16 lg:gap-24 w-full">

      {/* ── Text column — z-10 keeps text above the 3D model canvas ── */}
      <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left flex-1 min-w-0">

        {/* Terminal status line */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-neon-green/20 bg-neon-green/5 text-neon-green text-xs font-mono mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse shadow-[0_0_6px_rgba(0,255,136,0.6)]" />
          status: available_for_hire
        </motion.div>

        {/* Name with typing effect */}
        <motion.h1
          className="font-bold text-neon-green mb-3 leading-tight font-mono"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
            textShadow: "0 0 30px rgba(0,255,136,0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {displayed}
          <span className="animate-pulse text-neon-green/50 ml-0.5">_</span>
        </motion.h1>

        {/* Role badges */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-1.5 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {roles.map((role) => (
            <span
              key={role}
              className="text-[11px] sm:text-xs px-2 sm:px-3 py-1 rounded border border-neon-green/15 bg-neon-green/5 text-neon-green/70 font-mono"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-terminal-dim max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 0.95rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          IT professional from Mauritius building secure systems, robust web apps,
          and IoT solutions. Currently deepening expertise in cybersecurity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <GlowButton href="/projects" variant="primary">
            ./view_projects
          </GlowButton>
          <GlowButton href="/Seif-Baichoo_cv.pdf" download variant="outline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            download_cv
          </GlowButton>
          <GlowButton href="/about" variant="ghost">
            cat about.md
          </GlowButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-sm mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          {[
            { label: "projects", value: "6+" },
            { label: "technologies", value: "20+" },
            { label: "experience", value: "1yr+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-base sm:text-lg font-bold text-neon-green font-mono">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-terminal-muted mt-0.5 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── 3D Model column ─────────────────────────────────────────── */}
      {/*
        HOW TO ADJUST THE MODEL SIZE:
        Change the clamp() values below — they control the layout space.
          clamp(MIN, PREFERRED, MAX)
          e.g. clamp(200px, 30vw, 380px) = min 200px, scales with viewport, max 380px
      */}
      <motion.div
        className="order-first md:order-last flex-shrink-0 relative z-0 mx-auto md:mx-0 mb-3 md:mb-0"
        style={{
          width:  "clamp(200px, 30vw, 380px)",
          height: "clamp(200px, 33vw, 420px)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/*
          ErrorBoundary catches any WebGL crash and shows HologramFallback
          instead of the white broken-image box.

          Canvas overflows left/right (-40%) so rotating parts never clip,
          but does NOT overflow upward (top: 0) — prevents bleeding into navbar.
        */}
        <Model3DErrorBoundary fallback={<HologramFallback />}>
          <div
            ref={modelWrapperRef}
            className="absolute pointer-events-auto"
            style={{ top: 0, bottom: 0, left: "-40%", right: "-40%" }}
          >
            {/* paused=true when scrolled off-screen → frameloop="demand" → zero GPU */}
            <Model3D paused={!modelInView} />
          </div>
        </Model3DErrorBoundary>
      </motion.div>

    </div>
  );
}
