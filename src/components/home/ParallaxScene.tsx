"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { projects } from "@/components/projects/projectsData";
import { workExperience } from "@/components/experience/timelineData";

// Shared wrapper — full opaque card centred in its parallax page
function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center px-4 py-10" style={{ minHeight: "70vh" }}>
      <motion.div
        className="w-full max-w-4xl bg-hacker-bg border border-hacker-border rounded-xl p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] ring-1 ring-neon-green/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Reusable terminal prompt bar
function TerminalPrompt({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 pb-4 border-b border-hacker-border">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <span className="w-2.5 h-2.5 rounded-full bg-neon-green/50" />
      <span className="text-terminal-dim text-[11px] font-mono ml-2 tracking-wide">{children}</span>
    </div>
  );
}

// ─── Page 1 ── Bridging Security & Development ──────────────────────────────

function IntroBlurb() {
  return (
    <Section>
      <TerminalPrompt>~/philosophy.md</TerminalPrompt>

      <h2 className="text-xl md:text-3xl font-bold text-neon-green mb-6 leading-tight font-mono">
        <span className="text-terminal-dim">{"// "}</span>
        Bridging{" "}
        <span className="text-gradient">Security</span> &amp;{" "}
        <span className="text-gradient">Development</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — philosophy */}
        <div>
          <p className="text-terminal-dim text-sm leading-relaxed mb-4">
            From deploying secure PHP apps on Ubuntu to building multi-tenant IoT
            platforms with zero-trust access controls — I bring a security-first
            mindset to every project I touch.
          </p>
          <p className="text-neon-green/50 text-sm leading-relaxed italic border-l-2 border-neon-green/20 pl-4">
            Every line of code is written with the attacker&apos;s perspective in mind.
          </p>
        </div>

        {/* Right — skill groups */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-[10px] text-terminal-dim tracking-widest mb-2 block font-mono">
              [SECURITY]
            </span>
            <div className="flex flex-wrap gap-2">
              {["Nmap", "OWASP ZAP", "Zabbix", "Penetration Testing", "Firewall Config"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded border border-neon-green/20 text-neon-green/70 font-mono bg-neon-green/5 hover:border-neon-green/50 hover:text-neon-green transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] text-terminal-dim tracking-widest mb-2 block font-mono">
              [DEVELOPMENT]
            </span>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "Vue.js", "Docker", "PostgreSQL", "REST API"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/40 hover:text-neon-green/90 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Page 2 ── About Brief ───────────────────────────────────────────────────

function AboutBrief() {
  return (
    <Section>
      <TerminalPrompt>$ cat about.txt</TerminalPrompt>

      <div className="mb-5">
        <h3 className="text-xl md:text-2xl font-bold text-neon-green font-mono">
          Muhammad Seif Al Din Baichoo
        </h3>
        <p className="text-terminal-dim text-sm mt-1 font-mono">
          Cybersecurity Student &amp; IT Professional{" "}
          <span className="opacity-40">·</span>{" "}
          📍 Mauritius
        </p>
      </div>

      <p className="text-neon-green/70 text-sm leading-relaxed border-l-2 border-neon-green/30 pl-4 mb-6">
        Versatile IT professional with hands-on experience in database
        administration, Linux system administration, and full-stack web
        development. Currently deepening expertise in cybersecurity through
        industry training at OceanDBA Ltd.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {["Python", "Laravel", "Vue.js", "Linux", "PostgreSQL", "Docker", "Cybersecurity", "IoT"].map(
          (skill) => (
            <span
              key={skill}
              className="text-[11px] px-3 py-1 rounded border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/40 hover:text-neon-green hover:bg-neon-green/5 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          )
        )}
      </div>

      <GlowButton href="/about" variant="ghost">
        cat about.md →
      </GlowButton>
    </Section>
  );
}

// ─── Page 3 ── Experience Brief ──────────────────────────────────────────────

function ExperienceBrief() {
  const recent = workExperience.slice(0, 3);

  return (
    <Section>
      <TerminalPrompt>$ cat experience.log --recent</TerminalPrompt>

      <div className="flex flex-col gap-3 mb-5">
        {recent.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="border border-hacker-border rounded-lg p-4 flex gap-4 hover:border-neon-green/30 hover:bg-neon-green/[0.02] transition-all duration-300"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Timeline dot + connector */}
            <div className="flex flex-col items-center pt-1 shrink-0">
              <span
                className={`w-2.5 h-2.5 rounded-full border-2 ${
                  entry.current
                    ? "bg-neon-green border-neon-green shadow-[0_0_8px_rgba(0,255,136,0.8)]"
                    : "border-neon-green/40 bg-transparent"
                }`}
              />
              {i < recent.length - 1 && (
                <div className="w-px flex-1 mt-1.5 bg-neon-green/15" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1 mb-1">
                <span className="text-neon-green text-sm font-semibold font-mono leading-snug">
                  {entry.role}
                </span>
                {entry.current && (
                  <span className="text-[10px] text-neon-green bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/30 font-mono shrink-0 animate-pulse">
                    CURRENT
                  </span>
                )}
              </div>
              <p className="text-terminal-dim text-xs mb-2 font-mono">
                {entry.company} · {entry.period}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded border border-neon-green/15 text-neon-green/55 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <GlowButton href="/experience" variant="ghost">
        cat experience.log →
      </GlowButton>
    </Section>
  );
}

// ─── Page 4 ── Projects Preview ──────────────────────────────────────────────

function ProjectsPreview() {
  return (
    <Section>
      <TerminalPrompt>$ ls ./projects/</TerminalPrompt>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="border border-hacker-border rounded-lg p-4 hover:border-neon-green/40 hover:bg-neon-green/[0.03] hover:shadow-[0_0_16px_rgba(0,255,136,0.06)] transition-all duration-300 cursor-default group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-lg leading-none">{project.icon}</span>
              <span className="text-[10px] px-2 py-0.5 rounded border border-neon-green/20 text-neon-green/50 font-mono shrink-0 group-hover:border-neon-green/40 group-hover:text-neon-green/70 transition-colors duration-200">
                {project.category}
              </span>
            </div>
            <h4 className="text-neon-green text-sm font-semibold font-mono mb-1.5 leading-snug group-hover:text-neon-green transition-colors duration-200">
              {project.title}
            </h4>
            <p className="text-terminal-dim text-[11px] leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </motion.div>
        ))}
      </div>

      <GlowButton href="/projects" variant="ghost">
        ls -la ./projects →
      </GlowButton>
    </Section>
  );
}

// ─── Page 5 ── CTA Footer ────────────────────────────────────────────────────

function CTASection() {
  return (
    <Section>
      <div className="text-center">
        <div className="inline-block text-4xl mb-6">🚀</div>
        <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-4 font-mono">
          ./build_something_great
        </h2>
        <p className="text-terminal-dim text-sm mb-8 max-w-md mx-auto">
          Explore my projects, check out my experience, or download my CV to
          learn more about what I can bring to your team.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <GlowButton href="/projects" variant="primary">
            ./view_projects
          </GlowButton>
          <GlowButton href="/experience" variant="outline">
            cat experience.log
          </GlowButton>
          <GlowButton href="/Seif-Baichoo_cv.pdf" download variant="outline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            download_cv
          </GlowButton>
        </div>
      </div>
    </Section>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────

export default function ParallaxScene() {
  return (
    <div className="relative w-full" style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}>
      <Parallax pages={4.5} style={{ background: "transparent" }}>

        {/* Background grid */}
        <ParallaxLayer offset={0} speed={0.1} style={{ pointerEvents: "none" }}>
          <div className="w-full h-full bg-grid opacity-30" />
        </ParallaxLayer>

        {/* Radial glow orbs */}
        <ParallaxLayer offset={0} speed={0.15} style={{ pointerEvents: "none" }}>
          <div className="relative w-full h-full">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-green/[0.02] rounded-full blur-[100px]" />
          </div>
        </ParallaxLayer>

        {/* Hero */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "64px",
            paddingBottom: "60px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div className="pointer-events-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <HeroSection />
          </div>
        </ParallaxLayer>

        {/* Page 1 — Bridging Security & Development */}
        <ParallaxLayer offset={1} speed={0.3} style={{ zIndex: 10 }}>
          <IntroBlurb />
        </ParallaxLayer>

        {/* Page 2 — About brief */}
        <ParallaxLayer offset={1.7} speed={0.3} style={{ zIndex: 10 }}>
          <AboutBrief />
        </ParallaxLayer>

        {/* Page 3 — Experience brief */}
        <ParallaxLayer offset={2.4} speed={0.3} style={{ zIndex: 10 }}>
          <ExperienceBrief />
        </ParallaxLayer>

        {/* Page 4 — Projects preview */}
        <ParallaxLayer offset={3.1} speed={0.3} style={{ zIndex: 10 }}>
          <ProjectsPreview />
        </ParallaxLayer>

        {/* Page 5 — CTA footer */}
        <ParallaxLayer offset={3.8} speed={0.4} style={{ zIndex: 10 }}>
          <CTASection />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
