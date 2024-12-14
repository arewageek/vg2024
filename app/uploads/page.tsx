"use client";

import { motion } from "framer-motion";
import { UploadSection } from "@/components/upload/upload-section";
import { PhotoGrid } from "@/components/upload/photo-grid";

export default function Uploads() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen px-4 py-8 max-w-md mx-auto space-y-8"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-heading text-3xl text-primary font-bold mb-2">
          Wedding Gallery
        </h1>
        <p className="text-primary/80 font-medium">
          Lt G. O. Ameh & Miss. Veronica Onojah
        </p>
        <p className="text-primary/60 text-sm">#VG2024</p>
      </motion.div>

      <UploadSection />
      {/* <PhotoGrid /> */}
    </motion.main>
  );
}