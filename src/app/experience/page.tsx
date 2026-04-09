"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Timeline from "@/components/experience/Timeline";
import { workExperience, education } from "@/components/experience/timelineData";
import SectionHeading from "@/components/ui/SectionHeading";

const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ExperiencePage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-hacker-bg pt-24 pb-20 font-mono"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Work Experience */}
        <section className="mb-20">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey — from web development to system administration and cybersecurity."
          />
          <Timeline entries={workExperience} />
        </section>

        {/* Education */}
        <section>
          <SectionHeading
            title="Education"
            subtitle="Building a strong academic foundation in IT and cybersecurity."
          />
          <Timeline entries={education} />
        </section>
      </div>
    </motion.main>
  );
}
