"use client";
import dynamic from "next/dynamic";

const ParallaxScene = dynamic(() => import("@/components/home/ParallaxScene"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-hacker-bg">
      <div className="text-neon-green font-mono text-sm animate-pulse">
        <span className="text-terminal-dim">$</span> initializing
        <span className="animate-pulse">_</span>
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="bg-hacker-bg">
      <ParallaxScene />
    </div>
  );
}
