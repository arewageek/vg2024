"use client";

import { motion } from "framer-motion";
import { PhotoGrid } from "@/components/gallery/photo-grid";
import { Heart } from "lucide-react";

export default function Gallery() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-4 py-8 max-w-md mx-auto space-y-8"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-block bg-primary/10 p-3 rounded-full mb-4"
        >
          <Heart className="w-6 h-6 text-primary" />
        </motion.div>

        <h1 className="font-heading text-3xl text-primary font-bold mb-2">
          Our Journey
        </h1>
        <p className="text-primary/80 font-medium">
          Lt GO Ameh & Miss. Veronica Onoja
        </p>
        <p className="text-primary/60 text-sm">#VG2024</p>
      </motion.div>
      <PhotoGrid />
    </motion.main>
  );
}