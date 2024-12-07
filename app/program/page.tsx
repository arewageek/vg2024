"use client";

import { motion } from "framer-motion";
import { ProgramSection } from "@/components/program/program-section";
import { MassOrder } from "@/components/program/mass-order";
import { ScrollText } from "lucide-react";

export default function Program() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-8 max-w-md mx-auto space-y-8"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
          <ScrollText className="w-6 h-6 text-primary" />
        </div>
        <h1 className="font-heading text-3xl text-primary font-bold mb-2">
          Wedding Program
        </h1>
        <p className="text-primary/60">
          Join us in celebrating our special day
        </p>
      </motion.div>

      <div className="space-y-4">
        <ProgramSection title="Order of Mass" defaultOpen={true}>
          <MassOrder />
        </ProgramSection>

        <ProgramSection title="Order of Reception">
          <p className="text-text/60 italic text-center">Content coming soon...</p>
        </ProgramSection>

        <ProgramSection title="Order of Photograph">
          <p className="text-text/60 italic text-center">Content coming soon...</p>
        </ProgramSection>
      </div>
    </motion.main>
  );
}