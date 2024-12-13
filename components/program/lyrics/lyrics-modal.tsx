"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Music } from "lucide-react";
import { LyricsContent } from "./lyrics-content";

interface LyricsModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: {
        title: string;
        artist: string;
        lyrics: string[];
    } | null | any;
}

export function LyricsModal({ isOpen, onClose, song }: LyricsModalProps) {
    if (!song) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-lg w-full max-h-[80vh] bg-surface rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-primary/10 p-6 border-b border-primary/10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Music className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="font-heading text-xl text-primary">{song.title}</h2>
                            </div>
                            <p className="text-sm text-primary/60">By {song.artist}</p>
                        </div>

                        {/* Close Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white 
                         hover:bg-black/70 transition-colors"
                        >
                            <X size={20} />
                        </motion.button>

                        {/* Lyrics Content */}
                        <LyricsContent lyrics={song.lyrics} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}