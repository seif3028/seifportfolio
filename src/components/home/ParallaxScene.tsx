"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const Model3D = dynamic(() => import("./Model3D"), { ssr: false });

function IntroBlurb() {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-neon-green mb-6 leading-tight font-mono">
          <span className="text-terminal-dim">{"// "}</span>
          Bridging{" "}
          <span className="text-gradient">Security</span> &{" "}
          <span className="text-gradient">Development</span>
        </h2>
        <p className="text-terminal-dim text-sm md:text-base leading-relaxed mb-8">
          From deploying secure PHP apps on Ubuntu to building multi-tenant IoT platforms
          with zero-trust access controls — I bring a security-first mindset to every
          project I touch.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Laravel", "Vue.js", "PostgreSQL", "Linux", "Docker", "MQTT", "Cybersecurity"].map(
            (tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded border border-neon-green/15 text-neon-green/60 font-mono"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

function CTASection() {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <motion.div
        className="max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block text-4xl mb-6">🚀</div>
        <h2 className="text-2xl md:text-3xl font-bold text-neon-green mb-4 font-mono">
          ./build_something_great
        </h2>
        <p className="text-terminal-dim text-sm mb-8">
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
      </motion.div>
    </div>
  );
}

export default function ParallaxScene() {
  return (
    {/* 100dvh uses the dynamic viewport height that accounts for mobile browser chrome (address bar) */}
    <div className="relative w-full" style={{ height: "100dvh", minHeight: "-webkit-fill-available" }}>
      <Parallax pages={3} style={{ background: "transparent" }}>
        {/* Background grid — slowest */}
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

        {/* 3D Model — sits in its own area, no overlap with text */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            pointerEvents: "auto",
            zIndex: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* Fluid container: grows with viewport, max-capped */}
          <div
            style={{
              width: "clamp(250px, 50vw, 700px)",
              height: "clamp(200px, 40vh, 500px)",
            }}
          >
            <Model3D />
          </div>
        </ParallaxLayer>

        {/* Hero text — top portion, never overlapping the model */}
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "clamp(80px, 10vh, 140px)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <div className="pointer-events-auto w-full max-w-3xl px-4">
            <HeroSection />
          </div>
        </ParallaxLayer>

        {/* Scroll indicator */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "20px",
            zIndex: 15,
            pointerEvents: "none",
          }}
        >
          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <ScrollIndicator />
          </motion.div>
        </ParallaxLayer>

        {/* Intro blurb — page 1 */}
        <ParallaxLayer offset={1} speed={0.3}>
          <IntroBlurb />
        </ParallaxLayer>

        {/* CTA — page 2 */}
        <ParallaxLayer offset={2} speed={0.4}>
          <CTASection />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
