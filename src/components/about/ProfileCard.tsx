"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProfileCard() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-hacker-card border border-hacker-border rounded-lg p-6 md:p-10 font-mono"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Profile image */}
      <motion.div className="relative shrink-0" variants={itemVariants}>
        <div className="group w-36 h-48 md:w-44 md:h-56 rounded-lg border-2 border-neon-green/30 overflow-hidden shadow-[0_0_30px_rgba(0,255,136,0.15)] bg-neon-green/5 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/api/profile"
            alt="Seif Baichoo"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
          />
          {/* Invisible capture layer — sits above the image, blocks right-click / drag / long-press save */}
          <div
            className="absolute inset-0 z-10"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ WebkitTouchCallout: "none", userSelect: "none" }}
          />
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-neon-green rounded-full border-2 border-hacker-bg shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
        {/* Scanline overlay */}
        <div className="absolute inset-0 rounded-lg pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.03)_2px,rgba(0,255,136,0.03)_4px)]" />
      </motion.div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <motion.p
          className="text-terminal-dim text-xs mb-2 tracking-wider"
          variants={itemVariants}
        >
          $ cat profile.txt
        </motion.p>

        <motion.h1
          className="text-2xl md:text-3xl font-bold text-neon-green mb-1"
          variants={itemVariants}
        >
          Muhammad Seif Al Din Baichoo
        </motion.h1>

        <motion.p
          className="text-neon-green/60 text-sm mb-5 flex items-center justify-center md:justify-start gap-2"
          variants={itemVariants}
        >
          <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          Cybersecurity Student &amp; IT Professional
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-terminal-dim mb-5"
          variants={itemVariants}
        >
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-neon-green/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Mauritius
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-neon-green/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            baichooseif@gmail.com
          </span>
        </motion.div>

        <motion.div
          className="border-l-2 border-neon-green/30 pl-4 mb-6"
          variants={itemVariants}
        >
          <p className="text-neon-green/70 text-sm leading-relaxed">
            Versatile IT professional with practical experience across database
            administration, Linux system administration, and web application
            development. Currently building a strong foundation in cybersecurity
            through academic study and hands-on industry experience at OceanDBA
            Ltd.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/seif3028"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-hacker-border text-terminal-dim hover:text-neon-green hover:border-neon-green/50 hover:shadow-[0_0_12px_rgba(0,255,136,0.15)] transition-all duration-300 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            ./github
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/seifbai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-hacker-border text-terminal-dim hover:text-neon-green hover:border-neon-green/50 hover:shadow-[0_0_12px_rgba(0,255,136,0.15)] transition-all duration-300 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            ./linkedin
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
