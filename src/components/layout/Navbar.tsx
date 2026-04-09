"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
  { href: "/experience", label: "~/exp" },
  { href: "/projects", label: "~/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-neon-green/10 shadow-[0_1px_20px_rgba(0,255,136,0.05)]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono font-bold text-base group">
          <span className="text-neon-green/60 group-hover:text-neon-green transition-colors">
            {">"}
          </span>
          <span className="text-neon-green group-hover:text-neon-lime transition-colors">
            seif
          </span>
          <span className="text-neon-green/40 animate-pulse">_</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-mono tracking-wider transition-all duration-300 py-1 ${
                  isActive
                    ? "text-neon-green"
                    : "text-terminal-dim hover:text-neon-green/80"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-neon-green shadow-[0_0_8px_rgba(0,255,136,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CV Download button (desktop) */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="/Seif-Baichoo_cv.pdf"
            download="Seif-Baichoo_CV.pdf"
            className="flex items-center gap-2 px-4 py-1.5 rounded border border-neon-green/30 text-neon-green text-xs font-mono hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            download_cv
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-neon-green/70 hover:text-neon-green p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-t border-neon-green/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-mono py-2.5 px-3 rounded transition-all duration-200 ${
                      isActive
                        ? "text-neon-green bg-neon-green/5 border-l-2 border-neon-green"
                        : "text-terminal-dim hover:text-neon-green hover:bg-neon-green/5 border-l-2 border-transparent"
                    }`}
                  >
                    <span className="text-neon-green/40 mr-1">$</span>
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="/Seif-Baichoo_cv.pdf"
                download="Seif-Baichoo_CV.pdf"
                className="flex items-center gap-2 py-2.5 px-3 text-neon-green font-mono text-sm border-l-2 border-neon-green/40"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                download_cv
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
