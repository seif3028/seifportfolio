"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const languages = [
  { name: "English", level: "Fluent", percent: 95 },
  { name: "French", level: "Intermediate", percent: 55 },
  { name: "Mauritian Creole", level: "Native", percent: 100 },
];

const interests = [
  { label: "Web App Development & Design", icon: ">" },
  { label: "IoT Projects & Experimentation", icon: ">" },
  { label: "FPV Drone Flying", icon: ">" },
  { label: "Football", icon: ">" },
  { label: "Badminton", icon: ">" },
];

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const interestItemVariants: Variants = {
  initial: { opacity: 0, x: 15 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const interestContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export default function LanguagesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
      {/* Languages */}
      <motion.div
        className="bg-hacker-card border border-hacker-border rounded-lg p-6 hover:border-neon-green/30 transition-colors duration-300"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hacker-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
          <span className="text-terminal-dim text-[10px] ml-2 tracking-wider">
            locale_config
          </span>
        </div>

        <p className="text-terminal-dim text-[11px] mb-5">$ locale -a</p>

        <div className="flex flex-col gap-5">
          {languages.map((lang, i) => (
            <div key={lang.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-neon-green text-xs">
                  {lang.name}
                </span>
                <span className="text-terminal-dim text-[10px] tracking-wider">
                  [{lang.level}]
                </span>
              </div>
              <div className="h-1.5 bg-neon-green/5 rounded-full overflow-hidden border border-neon-green/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-green/60 to-neon-green rounded-full shadow-[0_0_8px_rgba(0,255,136,0.4)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        className="bg-hacker-card border border-hacker-border rounded-lg p-6 hover:border-neon-green/30 transition-colors duration-300"
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hacker-border">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
          <span className="text-terminal-dim text-[10px] ml-2 tracking-wider">
            interests.log
          </span>
        </div>

        <p className="text-terminal-dim text-[11px] mb-5">
          $ cat ~/interests.log
        </p>

        <motion.div
          className="flex flex-col gap-3"
          variants={interestContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {interests.map((item) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 text-xs group"
              variants={interestItemVariants}
            >
              <span className="text-neon-green/40 group-hover:text-neon-green transition-colors duration-200">
                {item.icon}
              </span>
              <span className="text-neon-green/70 group-hover:text-neon-green transition-colors duration-200">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
