"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const skillGroups = [
  {
    title: "technical_skills",
    prefix: "$ dpkg -l",
    skills: [
      "Python",
      "Java",
      "C",
      "PHP",
      "Vue.js",
      "Laravel",
      "Django",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "Linux Server Administration",
      "Apache",
      "Nginx",
      "Caddy",
      "Docker",
      "Git",
      "Web Development",
      "App Development",
      "REST API",
      "Knowledge of IoT",
    ],
  },
  {
    title: "cybersecurity",
    prefix: "$ nmap -sV",
    skills: [
      "Web Application Security",
      "Vulnerability Assessment",
      "Risk Management",
      "Firewall Configuration",
      "Security Audits",
      "Wireshark",
      "Nmap",
      "Packet Tracer",
      "Zabbix",
      "OWASP ZAP",
      "MQTT over TLS",
      "Zero-Trust Architecture",
    ],
  },
  {
    title: "soft_skills",
    prefix: "$ whoami --verbose",
    skills: [
      "Problem-Solving",
      "Critical Thinking",
      "Team Collaboration",
      "Time Management",
      "Adaptability",
      "Customer Service",
    ],
  },
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const tagVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.title}
          className="bg-hacker-card border border-hacker-border rounded-lg p-6 hover:border-neon-green/30 transition-colors duration-300"
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: gi * 0.12 }}
        >
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-hacker-border">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
            <span className="text-terminal-dim text-[10px] ml-2 tracking-wider">
              {group.title}
            </span>
          </div>

          <p className="text-terminal-dim text-[11px] mb-4">{group.prefix}</p>

          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={tagVariants}
                className="text-[11px] px-2.5 py-1 rounded border border-neon-green/15 bg-neon-green/5 text-neon-green/80 hover:bg-neon-green/10 hover:border-neon-green/40 hover:text-neon-green hover:shadow-[0_0_8px_rgba(0,255,136,0.15)] transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
