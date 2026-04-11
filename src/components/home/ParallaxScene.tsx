"use client";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { projects } from "@/components/projects/projectsData";
import { workExperience } from "@/components/experience/timelineData";

/*
  Stacking card pattern — matches the reference CSS:

  ┌─────────────────────────────────────────────────────────┐
  │  ul grid: rows = repeat(N, 87vh), gap = 4vw             │
  │  each li:  position:sticky; top:64px (below navbar)     │
  │            padding-top: index × 1.5em  ← peeking offset │
  │  each .card-body: height:87vh; border-radius:24px       │
  └─────────────────────────────────────────────────────────┘

  As the user scrolls, later cards slide over earlier ones.
  The incremental padding-top lets each card peek behind the one on top.
*/

// ── Terminal prompt bar ───────────────────────────────────────────────────────
function TerminalPrompt({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-hacker-border">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <span className="w-2.5 h-2.5 rounded-full bg-neon-green/50" />
      <span className="text-terminal-dim text-[11px] font-mono ml-2 tracking-wide">
        {label}
      </span>
    </div>
  );
}

// ── Card 1 ── Bridging Security & Development ────────────────────────────────
function IntroBlurb() {
  return (
    <>
      <TerminalPrompt label="~/philosophy.md" />
      <h2 className="text-2xl md:text-4xl font-bold text-neon-green mb-6 leading-tight font-mono">
        <span className="text-terminal-dim">{"// "}</span>
        Bridging{" "}
        <span className="text-gradient">Security</span> &amp;{" "}
        <span className="text-gradient">Development</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-terminal-dim text-sm md:text-base leading-relaxed mb-4">
            From deploying secure PHP apps on Ubuntu to building multi-tenant IoT
            platforms with zero-trust access controls — I bring a security-first
            mindset to every project I touch.
          </p>
          <p className="text-neon-green/50 text-sm leading-relaxed italic border-l-2 border-neon-green/20 pl-4">
            Every line of code is written with the attacker&apos;s perspective in mind.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {[
            { label: "[SECURITY]", tags: ["Nmap", "OWASP ZAP", "Zabbix", "Pen Testing", "Firewall"] },
            { label: "[DEVELOPMENT]", tags: ["Laravel", "Vue.js", "Docker", "PostgreSQL", "REST API"] },
          ].map(({ label, tags }) => (
            <div key={label}>
              <p className="text-[10px] text-neon-green/40 tracking-widest mb-2 font-mono">{label}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1 rounded border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/50 hover:text-neon-green hover:bg-neon-green/5 transition-all duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Card 2 ── About Brief ────────────────────────────────────────────────────
function AboutBrief() {
  return (
    <>
      <TerminalPrompt label="$ cat about.txt" />
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-neon-green font-mono">
          Muhammad Seif Al Din Baichoo
        </h3>
        <p className="text-terminal-dim text-sm mt-1 font-mono">
          Cybersecurity Student &amp; IT Professional &nbsp;·&nbsp; 📍 Mauritius
        </p>
      </div>
      <p className="text-neon-green/70 text-sm leading-relaxed border-l-2 border-neon-green/30 pl-4 mb-5">
        Versatile IT professional with hands-on experience in database
        administration, Linux system administration, and full-stack web
        development. Currently deepening expertise in cybersecurity through
        industry training at OceanDBA Ltd.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["Python", "Laravel", "Vue.js", "Linux", "PostgreSQL", "Docker", "Cybersecurity", "IoT"].map((skill) => (
          <span key={skill} className="text-[11px] px-3 py-1 rounded border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/40 hover:text-neon-green hover:bg-neon-green/5 transition-all duration-200 cursor-default">
            {skill}
          </span>
        ))}
      </div>
      <GlowButton href="/about" variant="ghost">cat about.md →</GlowButton>
    </>
  );
}

// ── Card 3 ── Experience Brief ───────────────────────────────────────────────
function ExperienceBrief() {
  const recent = workExperience.slice(0, 3);
  return (
    <>
      <TerminalPrompt label="$ cat experience.log --recent" />
      <div className="flex flex-col gap-3 mb-5">
        {recent.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="group border border-hacker-border rounded-lg p-4 flex gap-4 hover:border-neon-green/30 hover:bg-neon-green/[0.02] transition-all duration-300"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="flex flex-col items-center pt-1.5 shrink-0">
              <span className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${entry.current ? "bg-neon-green border-neon-green shadow-[0_0_10px_rgba(0,255,136,0.9)]" : "border-neon-green/30 group-hover:border-neon-green/60"}`} />
              {i < recent.length - 1 && <div className="w-px flex-1 mt-1.5 bg-neon-green/10" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                <span className="text-neon-green text-sm font-semibold font-mono leading-snug">{entry.role}</span>
                {entry.current && (
                  <span className="text-[10px] text-neon-green bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/30 font-mono animate-pulse">CURRENT</span>
                )}
              </div>
              <p className="text-terminal-dim text-xs font-mono mb-2">{entry.company}&nbsp;·&nbsp;{entry.period}</p>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags?.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-neon-green/10 text-neon-green/50 font-mono group-hover:border-neon-green/25 transition-colors duration-200">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <GlowButton href="/experience" variant="ghost">cat experience.log →</GlowButton>
    </>
  );
}

// ── Card 4 ── Projects Preview ───────────────────────────────────────────────
function ProjectsPreview() {
  return (
    <>
      <TerminalPrompt label="$ ls ./projects/" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group border border-hacker-border rounded-lg p-4 hover:border-neon-green/40 hover:bg-neon-green/[0.03] hover:shadow-[0_0_16px_rgba(0,255,136,0.06)] transition-all duration-300"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-lg leading-none">{project.icon}</span>
              <span className="text-[10px] px-2 py-0.5 rounded border border-neon-green/20 text-neon-green/50 font-mono shrink-0 group-hover:border-neon-green/40 group-hover:text-neon-green/70 transition-colors duration-200">{project.category}</span>
            </div>
            <h4 className="text-neon-green text-sm font-semibold font-mono mb-1.5 leading-snug">{project.title}</h4>
            <p className="text-terminal-dim text-[11px] leading-relaxed line-clamp-2">{project.summary}</p>
          </motion.div>
        ))}
      </div>
      <GlowButton href="/projects" variant="ghost">ls -la ./projects →</GlowButton>
    </>
  );
}

// ── Card 5 ── CTA Footer ─────────────────────────────────────────────────────
function CTASection() {
  return (
    <div className="text-center">
      <div className="text-4xl mb-6">🚀</div>
      <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-4 font-mono">./build_something_great</h2>
      <p className="text-terminal-dim text-sm mb-8 max-w-md mx-auto">
        Explore my projects, check out my experience, or download my CV to learn more about what I can bring to your team.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <GlowButton href="/projects" variant="primary">./view_projects</GlowButton>
        <GlowButton href="/experience" variant="outline">cat experience.log</GlowButton>
        <GlowButton href="/Seif-Baichoo_cv.pdf" download variant="outline">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          download_cv
        </GlowButton>
      </div>
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────

const CARDS = 5;
const cardSections = [IntroBlurb, AboutBrief, ExperienceBrief, ProjectsPreview, CTASection];

export default function ParallaxScene() {
  return (
    <div className="w-full">

      {/* ── Hero ── full viewport, unchanged ── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}
      >
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-green/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingTop: "64px" }}>
          <HeroSection />
        </div>
      </div>

      {/* ── Stacked cards ── faithful port of the reference CSS pattern ── */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: `repeat(${CARDS}, 87vh)`,
          gap: "4vw",
          paddingBottom: `calc(${CARDS} * 1.5em)`,
          marginBottom: "4vw",
        }}
      >
        {cardSections.map((SectionComponent, i) => (
          <li
            key={i}
            style={{
              position: "sticky",
              top: 64,                               // clears the fixed navbar
              paddingTop: `calc(${i + 1} * 1.5em)`, // peeking offset per card
            }}
          >
            {/* card-body */}
            <div
              className="bg-hacker-bg border border-neon-green/10 overflow-y-auto"
              style={{
                height: "87vh",
                borderRadius: "24px",
                boxShadow: "0 0 30px 0 rgba(0, 0, 0, 0.6)",
              }}
            >
              {/* centred content */}
              <div className="flex items-center justify-center min-h-full px-6 sm:px-10 lg:px-16 py-10">
                <motion.div
                  className="w-full max-w-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionComponent />
                </motion.div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}
