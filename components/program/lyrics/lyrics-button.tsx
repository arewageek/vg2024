"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

interface LyricsButtonProps {
    onClick: () => void;
    songTitle: string;
}

export function LyricsButton({ onClick, songTitle }: LyricsButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/5 
                 hover:bg-primary/10 text-primary rounded-full transition-colors"
        >
            <Music2 className="w-4 h-4" />
            <span className="cursor-pointer">{songTitle}</span>
        </motion.button>
    );
}