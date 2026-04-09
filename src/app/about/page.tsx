"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { pageVariants } from "@/lib/motionVariants";
import ProfileCard from "@/components/about/ProfileCard";
import SkillsGrid from "@/components/about/SkillsGrid";
import LanguagesSection from "@/components/about/LanguagesSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";

const ctaVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-hacker-bg pt-24 pb-20 font-mono"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Profile */}
        <section className="mb-20">
          <ProfileCard />
        </section>

        {/* Skills */}
        <section className="mb-16">
          <SectionHeading
            title="skills_&_expertise"
            subtitle="$ cat /etc/skills — A range of technical and soft skills built through academic study and professional experience."
          />
          <SkillsGrid />
        </section>

        {/* Languages & Interests */}
        <section className="mb-16">
          <SectionHeading
            title="languages_&_interests"
            subtitle="$ locale -a — Beyond the terminal: languages I speak and things I'm passionate about."
          />
          <LanguagesSection />
        </section>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 border border-hacker-border bg-hacker-card rounded-lg p-8"
          variants={ctaVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-terminal-dim mb-2 text-xs tracking-widest uppercase">
            {/* connection request */}
            $ ssh connect@seifbaichoo
          </p>
          <p className="text-neon-green/70 mb-6 text-sm">
            Want to collaborate? Let&apos;s establish a connection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GlowButton
              href="/Seif-Baichoo_cv.pdf"
              download
              variant="primary"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              download_cv
            </GlowButton>
            <GlowButton href="/projects" variant="outline">
              view_projects
            </GlowButton>
            <GlowButton
              href="mailto:baichooseif@gmail.com"
              variant="ghost"
            >
              send_mail
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
