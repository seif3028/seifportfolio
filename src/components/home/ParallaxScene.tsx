"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { projects } from "@/components/projects/projectsData";
import { workExperience } from "@/components/experience/timelineData";

// ── Shared layout shell ───────────────────────────────────────────────────────
// Full-viewport section with a large faded section number watermark.
function Section({
  children,
  num,
}: {
  children: React.ReactNode;
  num: string;
}) {
  return (
    <div className="relative h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Large faded number watermark — same trick as the reference */}
      <span
        aria-hidden
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 font-mono font-bold text-neon-green/[0.04] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(7rem, 20vw, 16rem)" }}
      >
        {num}
      </span>

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Section label — "// 01 — title"
function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <p className="text-xs font-mono text-terminal-dim tracking-widest mb-4 flex items-center gap-2">
      <span className="text-neon-green/40">//</span>
      <span className="text-neon-green/60">{num}</span>
      <span className="w-6 h-px bg-neon-green/20" />
      <span>{title}</span>
    </p>
  );
}

// ─── Page 1 ── Bridging Security & Development ──────────────────────────────

function IntroBlurb() {
  return (
    <Section num="01">
      <SectionLabel num="01" title="philosophy" />

      <h2 className="text-3xl md:text-5xl font-bold text-neon-green mb-8 leading-tight font-mono">
        Bridging{" "}
        <span className="text-gradient">Security</span>
        <br />
        <span className="text-neon-green/50">&amp;</span>{" "}
        <span className="text-gradient">Development</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left — philosophy */}
        <div>
          <p className="text-terminal-dim text-sm md:text-base leading-relaxed mb-5">
            From deploying secure PHP apps on Ubuntu to building multi-tenant IoT
            platforms with zero-trust access controls — I bring a security-first
            mindset to every project I touch.
          </p>
          <p className="text-neon-green/50 text-sm leading-relaxed border-l-2 border-neon-green/20 pl-4">
            Every line of code is written with the attacker&apos;s perspective in mind.
          </p>
        </div>

        {/* Right — skill groups */}
        <div className="flex flex-col gap-6">
          {[
            {
              label: "[SECURITY]",
              tags: ["Nmap", "OWASP ZAP", "Zabbix", "Pen Testing", "Firewall"],
            },
            {
              label: "[DEVELOPMENT]",
              tags: ["Laravel", "Vue.js", "Docker", "PostgreSQL", "REST API"],
            },
          ].map(({ label, tags }) => (
            <div key={label}>
              <p className="text-[10px] text-neon-green/40 tracking-widest mb-2.5 font-mono">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 rounded-sm border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/50 hover:text-neon-green hover:bg-neon-green/5 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Page 2 ── About Brief ───────────────────────────────────────────────────

function AboutBrief() {
  return (
    <Section num="02">
      <SectionLabel num="02" title="about.txt" />

      {/* Big editorial name */}
      <h3
        className="font-bold text-neon-green font-mono leading-tight mb-2"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.8rem)" }}
      >
        Muhammad Seif Al Din Baichoo
      </h3>
      <p className="text-terminal-dim text-sm font-mono mb-6">
        Cybersecurity Student &amp; IT Professional &nbsp;·&nbsp; 📍 Mauritius
      </p>

      {/* Code-block bio */}
      <div className="bg-hacker-card border border-hacker-border rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-neon-green/30 text-xs mb-3">// profile.json</p>
        <p className="text-terminal-dim leading-relaxed">
          <span className="text-neon-green/50">&#123;</span>
          <br />
          &nbsp;&nbsp;<span className="text-neon-green/70">&quot;role&quot;</span>
          <span className="text-terminal-dim">: </span>
          <span className="text-neon-green/90">&quot;Versatile IT professional&quot;</span>
          <span className="text-terminal-dim">,</span>
          <br />
          &nbsp;&nbsp;<span className="text-neon-green/70">&quot;focus&quot;</span>
          <span className="text-terminal-dim">: </span>
          <span className="text-neon-green/90">&quot;Cybersecurity + Full-Stack Dev&quot;</span>
          <span className="text-terminal-dim">,</span>
          <br />
          &nbsp;&nbsp;<span className="text-neon-green/70">&quot;company&quot;</span>
          <span className="text-terminal-dim">: </span>
          <span className="text-neon-green/90">&quot;OceanDBA Ltd&quot;</span>
          <span className="text-terminal-dim">,</span>
          <br />
          &nbsp;&nbsp;<span className="text-neon-green/70">&quot;status&quot;</span>
          <span className="text-terminal-dim">: </span>
          <span className="text-neon-green animate-pulse">&quot;available_for_hire&quot;</span>
          <br />
          <span className="text-neon-green/50">&#125;</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["Python", "Laravel", "Vue.js", "Linux", "PostgreSQL", "Docker", "Cybersecurity", "IoT"].map(
          (skill) => (
            <span
              key={skill}
              className="text-[11px] px-3 py-1 rounded-sm border border-neon-green/15 text-neon-green/60 font-mono hover:border-neon-green/40 hover:text-neon-green hover:bg-neon-green/5 transition-all duration-200 cursor-default"
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
    <Section num="03">
      <SectionLabel num="03" title="experience.log" />

      <h2
        className="font-bold text-neon-green font-mono mb-6 leading-tight"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
      >
        Where I&apos;ve worked
      </h2>

      <div className="flex flex-col gap-3 mb-6">
        {recent.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="group border border-hacker-border rounded-lg p-4 md:p-5 flex gap-4 hover:border-neon-green/30 hover:bg-neon-green/[0.02] transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-1.5 shrink-0">
              <span
                className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                  entry.current
                    ? "bg-neon-green border-neon-green shadow-[0_0_10px_rgba(0,255,136,0.9)]"
                    : "border-neon-green/30 group-hover:border-neon-green/60"
                }`}
              />
              {i < recent.length - 1 && (
                <div className="w-px flex-1 mt-1.5 bg-neon-green/10" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                <span className="text-neon-green text-sm font-semibold font-mono leading-snug">
                  {entry.role}
                </span>
                {entry.current && (
                  <span className="text-[10px] text-neon-green bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/30 font-mono animate-pulse">
                    CURRENT
                  </span>
                )}
              </div>
              <p className="text-terminal-dim text-xs font-mono mb-2">
                {entry.company}&nbsp;·&nbsp;{entry.period}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-sm border border-neon-green/10 text-neon-green/50 font-mono group-hover:border-neon-green/25 transition-colors duration-200"
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
// Cards styled as JS object notation — key design idea from the reference site.

function ProjectsPreview() {
  return (
    <Section num="04">
      <SectionLabel num="04" title="projects/" />

      <h2
        className="font-bold text-neon-green font-mono mb-6 leading-tight"
        style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
      >
        Things I&apos;ve built
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="group border border-hacker-border rounded-lg p-4 hover:border-neon-green/40 hover:shadow-[0_0_20px_rgba(0,255,136,0.06)] transition-all duration-300 font-mono text-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            {/* JS object notation */}
            <p className="text-neon-green/30 mb-2 text-[11px]">
              const {project.title.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")} = &#123;
            </p>
            <div className="pl-3 border-l border-neon-green/10 mb-2">
              <p className="text-terminal-dim mb-0.5">
                <span className="text-neon-green/60">icon</span>
                <span className="text-terminal-dim/60">: </span>
                <span className="text-neon-green/80">&quot;{project.icon}&quot;</span>
                <span className="text-terminal-dim/40">,</span>
              </p>
              <p className="text-terminal-dim mb-0.5">
                <span className="text-neon-green/60">type</span>
                <span className="text-terminal-dim/60">: </span>
                <span className="text-neon-green/80">&quot;{project.category}&quot;</span>
                <span className="text-terminal-dim/40">,</span>
              </p>
              <p className="text-terminal-dim mb-0.5 line-clamp-1">
                <span className="text-neon-green/60">desc</span>
                <span className="text-terminal-dim/60">: </span>
                <span className="text-neon-green/60 text-[10px]">&quot;{project.summary.slice(0, 42)}…&quot;</span>
                <span className="text-terminal-dim/40">,</span>
              </p>
              <p className="text-terminal-dim">
                <span className="text-neon-green/60">status</span>
                <span className="text-terminal-dim/60">: </span>
                <span className="text-neon-green group-hover:text-neon-green">&quot;complete&quot;</span>
              </p>
            </div>
            <p className="text-neon-green/30 text-[11px]">&#125;</p>
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
    <Section num="05">
      <SectionLabel num="05" title="contact" />

      <h2
        className="font-bold text-neon-green font-mono mb-4 leading-tight"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        🚀 ./build_something
        <br />
        <span className="text-neon-green/60">_great</span>
      </h2>

      <p className="text-terminal-dim text-sm md:text-base mb-8 max-w-md leading-relaxed">
        Explore my projects, check out my experience, or download my CV — let&apos;s
        build something great together.
      </p>

      <div className="flex flex-wrap gap-3">
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
    </Section>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────

export default function ParallaxScene() {
  return (
    <div className="relative w-full" style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}>
      <Parallax pages={6} style={{ background: "transparent" }}>

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
        <ParallaxLayer offset={2} speed={0.3} style={{ zIndex: 10 }}>
          <AboutBrief />
        </ParallaxLayer>

        {/* Page 3 — Experience brief */}
        <ParallaxLayer offset={3} speed={0.3} style={{ zIndex: 10 }}>
          <ExperienceBrief />
        </ParallaxLayer>

        {/* Page 4 — Projects preview */}
        <ParallaxLayer offset={4} speed={0.3} style={{ zIndex: 10 }}>
          <ProjectsPreview />
        </ParallaxLayer>

        {/* Page 5 — CTA footer */}
        <ParallaxLayer offset={5} speed={0.4} style={{ zIndex: 10 }}>
          <CTASection />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
