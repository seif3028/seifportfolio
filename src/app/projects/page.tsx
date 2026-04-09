"use client";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/motionVariants";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-hacker-bg pt-24 pb-20 font-mono"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A collection of projects spanning web development, IoT, systems administration, and cybersecurity."
        />
        <ProjectsGrid />
      </div>
    </motion.main>
  );
}
