"use client";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { projects } from "@/components/projects/projectsData";
import { workExperience } from "@/components/experience/timelineData";

/*
  Card colour palette (dark forest green):
  ─────────────────────────────────────────
  background : linear-gradient(160deg, #0f2d1a, #091a0f)
  heading    : #00ff88  (neon-green — pops on dark green)
  body text  : #c2e8cc  (light green-white)
  dim text   : #7abf8a  (medium-light green)
  border     : rgba(0,255,136,0.20)
*/

const CARD_BG   = "linear-gradient(160deg, #0f2d1a 0%, #091a0f 100%)";
const TEXT_BODY = "#c2e8cc";
const TEXT_DIM  = "#7abf8a";
const BORDER    = "rgba(0,255,136,0.20)";

const NAVBAR_H    = 64;   // px
const STACK_STEP  = 24;   // px — how much of the previous card peeks above the next

// ── Scroll indicator (adapted from uiverse — neon-green themed) ──────────────
function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-1.5 py-4 sm:py-6">
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
        className="scroll-pill"
        aria-label="Scroll down"
      >
        <div className="scroll-dot" />
      </button>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-[3px] font-mono" style={{ color: TEXT_DIM }}>
        scroll
      </span>

      {/* Scoped styles */}
      <style jsx>{`
        .scroll-pill {
          width: 26px;
          height: 44px;
          border-radius: 26px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 8px;
          background: transparent;
          border: none;
          outline: 2px solid var(--neon);
          box-shadow: 0 0 12px rgba(0, 255, 136, 0.35);
          cursor: pointer;
          transition: box-shadow 0.3s;
        }
        .scroll-pill:hover {
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.55);
        }
        .scroll-dot {
          width: 4px;
          height: 8px;
          border-radius: 8px;
          background-color: var(--neon);
          box-shadow: 0 0 8px rgba(0, 255, 136, 0.6);
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%   { transform: translateY(0); opacity: 1; }
          50%  { transform: translateY(16px); opacity: 0.4; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ── Terminal prompt bar ───────────────────────────────────────────────────────
function TerminalPrompt({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-2 mb-3 sm:mb-4 pb-2.5 sm:pb-3"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <span className="w-2 h-2 rounded-full bg-red-400/70 shrink-0" />
      <span className="w-2 h-2 rounded-full bg-yellow-400/70 shrink-0" />
      <span className="w-2 h-2 rounded-full bg-neon-green/70 shrink-0" />
      <span className="text-[10px] sm:text-[11px] font-mono ml-2 tracking-wide truncate" style={{ color: TEXT_DIM }}>
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
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neon-green mb-3 sm:mb-4 leading-tight font-mono">
        <span style={{ color: TEXT_DIM }}>{"// "}</span>
        Bridging <span className="text-gradient">Security</span> &amp;{" "}
        <span className="text-gradient">Development</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3" style={{ color: TEXT_BODY }}>
            From deploying secure PHP apps on Ubuntu to building multi-tenant IoT
            platforms with zero-trust access controls — I bring a security-first
            mindset to every project I touch.
          </p>
          <p
            className="text-xs sm:text-sm leading-relaxed italic pl-3"
            style={{ color: TEXT_DIM, borderLeft: `2px solid rgba(0,255,136,0.25)` }}
          >
            Every line of code is written with the attacker&apos;s perspective in mind.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          {[
            { label: "[SECURITY]",    tags: ["Nmap", "OWASP ZAP", "Zabbix", "Pen Testing", "Firewall"] },
            { label: "[DEVELOPMENT]", tags: ["Laravel", "Vue.js", "Docker", "PostgreSQL", "REST API"] },
          ].map(({ label, tags }) => (
            <div key={label}>
              <p className="text-[9px] sm:text-[10px] tracking-widest mb-1 sm:mb-1.5 font-mono" style={{ color: TEXT_DIM }}>
                {label}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded font-mono cursor-default transition-all duration-200 hover:text-neon-green hover:bg-neon-green/10"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_BODY }}
                  >
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
      <div className="mb-2 sm:mb-3">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-neon-green font-mono">
          Muhammad Seif Al Din Baichoo
        </h3>
        <p className="text-[11px] sm:text-xs mt-0.5 font-mono" style={{ color: TEXT_DIM }}>
          Cybersecurity Student &amp; IT Professional &nbsp;·&nbsp; 📍 Mauritius
        </p>
      </div>
      <p
        className="text-xs sm:text-sm leading-relaxed pl-3 mb-3 sm:mb-4"
        style={{ color: TEXT_BODY, borderLeft: `2px solid rgba(0,255,136,0.3)` }}
      >
        Versatile IT professional with hands-on experience in database
        administration, Linux system administration, and full-stack web
        development. Currently deepening expertise in cybersecurity through
        industry training at OceanDBA Ltd.
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
        {["Python", "Laravel", "Vue.js", "Linux", "PostgreSQL", "Docker", "Cybersecurity", "IoT"].map((skill) => (
          <span
            key={skill}
            className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded font-mono cursor-default transition-all duration-200 hover:text-neon-green hover:bg-neon-green/10"
            style={{ border: `1px solid ${BORDER}`, color: TEXT_BODY }}
          >
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
      <div className="flex flex-col gap-2 sm:gap-2.5 mb-3 sm:mb-4">
        {recent.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="group flex gap-2.5 sm:gap-3 rounded-lg p-2.5 sm:p-3 transition-all duration-300"
            style={{ border: `1px solid ${BORDER}` }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,255,136,0.05)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex flex-col items-center pt-1 sm:pt-1.5 shrink-0">
              <span
                className={`w-2 h-2 rounded-full border-2 transition-all duration-300 ${
                  entry.current
                    ? "bg-neon-green border-neon-green shadow-[0_0_8px_rgba(0,255,136,0.9)]"
                    : "border-neon-green/40 group-hover:border-neon-green/70"
                }`}
              />
              {i < recent.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ background: BORDER }} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-1.5 mb-0.5">
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold font-mono leading-snug text-neon-green">
                  {entry.role}
                </span>
                {entry.current && (
                  <span className="text-[9px] sm:text-[10px] text-neon-green bg-neon-green/15 px-1.5 sm:px-2 py-0.5 rounded border border-neon-green/40 font-mono animate-pulse shrink-0">
                    CURRENT
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono mb-1 sm:mb-1.5" style={{ color: TEXT_DIM }}>
                {entry.company}&nbsp;·&nbsp;{entry.period}
              </p>
              <div className="flex flex-wrap gap-1">
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-mono"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_DIM }}
                  >
                    {tag}
                  </span>
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

// ── Root ──────────────────────────────────────────────────────────────────────

const CARDS = 3;
const cardSections = [IntroBlurb, AboutBrief, ExperienceBrief];

export default function ParallaxScene() {
  return (
    <div className="w-full">

      {/* ── Hero — full viewport ── */}
      <div
        className="relative w-full flex items-start md:items-center justify-center overflow-hidden"
        style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}
      >
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-green/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div
          className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-[64px]"
        >
          <HeroSection />
        </div>

      </div>

      {/* Scroll indicator — in normal flow between hero and cards, never overlaps hero content */}
      <div className="flex justify-center -mt-16 sm:-mt-20 relative z-10">
        <ScrollIndicator />
      </div>

      {/*
        ── Stacked cards ──────────────────────────────────────────────────────
        • Sticky with increasing `top` for the stagger peek.
        • Width-constrained to max-w-6xl matching the hero / navbar.
        • Height is auto (content-driven) — no overflow, no scrollbar.
        • paddingBottom on <ul> gives scroll travel after the last card
          (reduced to keep projects section closer).
      */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          paddingBottom: "10vh",
        }}
      >
        {cardSections.map((SectionComponent, i) => (
          <li
            key={i}
            style={{
              position: "sticky",
              top: NAVBAR_H + i * STACK_STEP,
              zIndex: 10 + i,
            }}
          >
            <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
              <div
                style={{
                  background: CARD_BG,
                  borderRadius: "14px",
                  border: `1px solid ${BORDER}`,
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(0,255,136,0.08)",
                }}
              >
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-7">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45 }}
                  >
                    <SectionComponent />
                  </motion.div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* ── Projects — normal flow below the card stack ── */}
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TerminalPrompt label="$ ls ./projects/" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group rounded-xl p-3.5 sm:p-4 transition-all duration-300 hover:bg-neon-green/[0.04] hover:shadow-[0_0_20px_rgba(0,255,136,0.08)]"
                style={{ border: `1px solid ${BORDER}` }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-lg sm:text-xl leading-none">{project.icon}</span>
                  <span
                    className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded font-mono shrink-0 group-hover:text-neon-green transition-colors duration-200"
                    style={{ border: `1px solid ${BORDER}`, color: TEXT_DIM }}
                  >
                    {project.category}
                  </span>
                </div>
                <h4 className="text-neon-green text-xs sm:text-sm font-semibold font-mono mb-1 sm:mb-1.5 leading-snug">
                  {project.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] leading-relaxed line-clamp-2" style={{ color: TEXT_BODY }}>
                  {project.summary}
                </p>
              </motion.div>
            ))}
          </div>
          <GlowButton href="/projects" variant="ghost">ls -la ./projects →</GlowButton>
        </motion.div>
      </div>

      {/* ── CTA footer — normal flow ── */}
      <div
        className="w-full px-4 sm:px-6 py-14 sm:py-20 text-center border-t"
        style={{ borderColor: BORDER }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-3xl sm:text-4xl mb-4 sm:mb-5">🚀</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-green mb-3 font-mono">
            ./build_something_great
          </h2>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 max-w-md mx-auto" style={{ color: TEXT_BODY }}>
            Explore my projects, check out my experience, or download my CV to
            learn more about what I can bring to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <GlowButton href="/projects" variant="primary">./view_projects</GlowButton>
            <GlowButton href="/experience" variant="outline">cat experience.log</GlowButton>
            <GlowButton href="/Seif-Baichoo_cv.pdf" download variant="outline">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              download_cv
            </GlowButton>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
