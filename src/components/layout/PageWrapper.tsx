"use client";
import { motion } from "framer-motion";
import { pageVariants } from "@/lib/motionVariants";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-16"
    >
      {children}
    </motion.main>
  );
}
