"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dummyPhotos = [
  "https://utfs.io/f/tB6jPcUp7EHXz05iQx8rMW3Ud45wIRT18nftceYmyVXSFZg2",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export function PhotoGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-4"
    >
      {dummyPhotos.map((photo, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
          }}
          className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={photo}
            alt={`Wedding photo ${index + 1}`}
            fill
            className="object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}