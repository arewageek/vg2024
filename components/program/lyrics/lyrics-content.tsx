"use client";

import { motion } from "framer-motion";

interface LyricsContentProps {
    lyrics: string[];
}

export function LyricsContent({ lyrics }: LyricsContentProps) {
    return (
        <div className="p-6 overflow-y-auto max-h-[60vh] lyrics-scroll">
            <div className="space-y-6 mt-5">
                {lyrics.length > 0 ? lyrics.map((verse, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="lyrics-verse"
                    >
                        {verse.split('\n').map((line, lineIndex) => (
                            <p
                                key={lineIndex}
                                className={`mb-2 leading-relaxed ${index % 2
                                    ? "text-primary font-medium"
                                    : "text-text"
                                    }`}
                            >
                                {line}
                            </p>
                        ))}
                    </motion.div>
                )) : <h3 className="text-xl font-medium flex items-center justify-center mb-5">
                    No lyrics available for this song!</h3>}
            </div>
        </div>
    );
}