"use client";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-terminal-dim"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-neon-green/40">
        scroll
      </span>
      <motion.div
        className="w-px h-10 bg-gradient-to-b from-neon-green/50 to-transparent"
        animate={{ scaleY: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
