"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Project } from "./projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const categoryColor: Record<string, string> = {
  Web: "text-neon-green bg-neon-green/10 border-neon-green/30",
  IoT: "text-[#00ffd5] bg-[#00ffd5]/10 border-[#00ffd5]/30",
  Systems: "text-[#39ff14] bg-[#39ff14]/10 border-[#39ff14]/30",
  Mobile: "text-neon-green/70 bg-neon-green/5 border-neon-green/20",
  Security: "text-[#b400ff] bg-[#b400ff]/10 border-[#b400ff]/30",
};

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto
                bg-hacker-card border border-neon-green/20 rounded-xl
                shadow-[0_0_40px_rgba(0,255,136,0.06)] font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-hacker-card/95 backdrop-blur-md border-b border-hacker-border px-6 py-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full border font-mono uppercase tracking-wider ${
                      categoryColor[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="text-terminal-dim hover:text-neon-green transition-colors p-1 rounded-lg hover:bg-neon-green/5"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-6">
                <h2 className="text-lg md:text-xl font-bold text-neon-green mb-4 leading-snug font-mono">
                  {project.title}
                </h2>

                <p className="text-terminal-dim leading-relaxed text-sm mb-6">
                  {project.description}
                </p>

                {/* All tags */}
                <div className="mb-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-terminal-dim mb-3 font-mono">
                    <span className="text-neon-green/40">{"// "}</span>Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neon-green/15 bg-neon-green/5 text-terminal-dim rounded font-mono text-[10px] px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured callout */}
                {project.featured && (
                  <div className="bg-neon-green/5 border border-neon-green/20 rounded-lg px-4 py-3 text-neon-green text-xs flex items-center gap-2 font-mono">
                    <span className="text-neon-green/60">[*]</span>
                    <span>Featured project</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
