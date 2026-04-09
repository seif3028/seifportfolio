"use client";
import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import GlowButton from "@/components/ui/GlowButton";

const roles = [
  "cybersecurity_student",
  "full_stack_dev",
  "sys_admin",
  "iot_enthusiast",
];

export default function HeroSection() {
  const { displayed } = useTypingEffect("Muhammad Seif Al Din Baichoo", 55, 400);

  return (
    <div className="relative flex flex-col items-center text-center">
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

      {/* Name with typing effect — fluid font size */}
      <motion.h1
        className="font-bold text-neon-green mb-3 leading-tight font-mono"
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3.75rem)",
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
        className="flex flex-wrap justify-center gap-1.5 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {roles.map((role) => (
          <span
            key={role}
            className="text-[10px] sm:text-[11px] px-2 sm:px-3 py-1 rounded border border-neon-green/15 bg-neon-green/5 text-neon-green/70 font-mono"
          >
            {role}
          </span>
        ))}
      </motion.div>

      {/* Description — fluid text */}
      <motion.p
        className="text-terminal-dim max-w-xl mx-auto mb-6 leading-relaxed"
        style={{ fontSize: "clamp(0.75rem, 1.5vw, 1rem)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        IT professional from Mauritius building secure systems, robust web apps,
        and IoT solutions. Currently deepening expertise in cybersecurity.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6"
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
        className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-sm mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.1 }}
      >
        {[
          { label: "projects", value: "6+" },
          { label: "technologies", value: "20+" },
          { label: "experience", value: "1yr+" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-base sm:text-lg font-bold text-neon-green font-mono">
              {stat.value}
            </div>
            <div className="text-[9px] sm:text-[10px] text-terminal-muted mt-0.5 font-mono">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
