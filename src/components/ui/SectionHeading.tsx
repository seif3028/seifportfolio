"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-neon-green mb-3 font-mono">
        <span className="text-terminal-dim">{"// "}</span>
        {title}
      </h2>
      <div
        className={`h-px w-20 bg-gradient-to-r from-neon-green to-transparent ${
          centered ? "mx-auto" : ""
        } mb-4`}
      />
      {subtitle && (
        <p className="text-terminal-dim text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
