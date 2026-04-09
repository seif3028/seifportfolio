"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { TimelineEntry } from "./timelineData";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  side: "left" | "right";
}

const cardVariants: Variants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function TimelineItem({ entry, index, side }: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <motion.div
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
      custom={isLeft}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Dot on timeline (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10 flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            entry.current
              ? "bg-neon-green border-neon-green shadow-[0_0_10px_rgba(0,255,136,0.6)]"
              : "bg-hacker-card border-neon-green/40"
          }`}
        />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex-shrink-0 mt-1.5">
        <div
          className={`w-3 h-3 rounded-full border-2 ${
            entry.current
              ? "bg-neon-green border-neon-green shadow-[0_0_6px_rgba(0,255,136,0.6)]"
              : "bg-hacker-card border-neon-green/40"
          }`}
        />
      </div>

      {/* Card */}
      <div
        className={`flex-1 md:w-[calc(50%-2rem)] md:max-w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="bg-hacker-card border border-hacker-border rounded-lg p-5 hover:border-neon-green/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.05)]">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-bold text-neon-green text-base leading-tight font-mono">
                {entry.role}
              </h3>
              <p className="text-terminal-dim text-sm font-mono mt-0.5">
                {entry.company}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs text-terminal-muted font-mono whitespace-nowrap">
                {entry.period}
              </span>
              {entry.current && (
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse shadow-[0_0_6px_rgba(0,255,136,0.6)]" />
                  <span className="text-xs text-neon-green font-mono">Current</span>
                </div>
              )}
            </div>
          </div>

          {/* Bullets */}
          <ul className="space-y-1.5 mb-4">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-terminal-dim text-xs leading-relaxed flex gap-2 font-mono"
              >
                <span className="text-neon-green/60 mt-0.5 flex-shrink-0">{">"}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded border border-neon-green/20 bg-neon-green/5 text-neon-green/70 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Spacer for the other side (desktop) */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
