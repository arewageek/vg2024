"use client";

import { motion } from "framer-motion";
import { HomeContent } from "@/components/home/home-content";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeContent />
    </motion.div>
  );
}