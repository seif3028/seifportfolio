"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export default function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
}: GlowButtonProps) {
  // min-h-[44px] ensures the touch target meets the 44×44px WCAG minimum on mobile
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded font-mono text-xs tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-neon-green/10 text-neon-green border border-neon-green/40 hover:bg-neon-green/20 hover:border-neon-green active:bg-neon-green/30 shadow-[0_0_15px_rgba(0,255,136,0.15)] hover:shadow-[0_0_25px_rgba(0,255,136,0.35)]",
    outline:
      "border border-neon-green/20 text-neon-green/80 hover:border-neon-green/50 hover:text-neon-green hover:bg-neon-green/5 active:bg-neon-green/10 hover:shadow-[0_0_15px_rgba(0,255,136,0.1)]",
    ghost:
      "text-terminal-dim hover:text-neon-green hover:bg-neon-green/5 active:bg-neon-green/10 border border-transparent hover:border-neon-green/20",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href && !onClick) {
    if (download || target) {
      return (
        <motion.a
          href={href}
          download={download}
          target={target}
          rel={rel}
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
