"use client";

import { motion } from "framer-motion";

export default function Program() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-8 max-w-md mx-auto"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="font-heading text-3xl text-primary text-center mb-6"
      >
        Wedding Program
      </motion.h1>
    </motion.main>
  );
}