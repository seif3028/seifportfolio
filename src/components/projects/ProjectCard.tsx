"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const categoryColor: Record<string, string> = {
  Web: "text-neon-green bg-neon-green/10 border-neon-green/30",
  IoT: "text-[#00ffd5] bg-[#00ffd5]/10 border-[#00ffd5]/30",
  Systems: "text-[#39ff14] bg-[#39ff14]/10 border-[#39ff14]/30",
  Mobile: "text-neon-green/70 bg-neon-green/5 border-neon-green/20",
  Security: "text-[#b400ff] bg-[#b400ff]/10 border-[#b400ff]/30",
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
      className="relative bg-hacker-card border border-hacker-border rounded-xl p-6 cursor-pointer group
        hover:border-neon-green/50 transition-all duration-300
        hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] font-mono flex flex-col h-full"
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30 font-mono uppercase tracking-wider">
          Featured
        </span>
      )}

      {/* Icon & category */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{project.icon}</span>
        <span
          className={`text-[10px] px-2.5 py-1 rounded-full border font-mono uppercase tracking-wider ${
            categoryColor[project.category]
          }`}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-neon-green font-bold text-sm leading-snug mb-3 group-hover:text-white transition-colors duration-200 font-mono">
        {project.title}
      </h3>

      {/* Summary */}
      <p className="text-terminal-dim text-xs leading-relaxed mb-4 flex-1">
        {project.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="border border-neon-green/15 bg-neon-green/5 text-terminal-dim rounded font-mono text-[10px] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="border border-neon-green/15 bg-neon-green/5 text-terminal-dim rounded font-mono text-[10px] px-2 py-0.5">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Read more hint */}
      <div className="flex items-center gap-1 text-neon-green/60 text-xs font-mono group-hover:text-neon-green transition-colors duration-200">
        <span className="text-terminal-dim">$</span>
        <span>view --details</span>
        <motion.span
          className="inline-block"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          _
        </motion.span>
      </div>
    </motion.div>
  );
}
