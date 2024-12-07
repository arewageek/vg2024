"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PhotoModalProps {
    isOpen: boolean;
    onClose: () => void;
    photo: {
        url: string;
        description: string;
        year: string;
    } | null;
}

export function PhotoModal({ isOpen, onClose, photo }: PhotoModalProps) {
    if (!photo) return null;

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
                        transition={{ type: "spring", damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-lg w-full bg-surface rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                            <X size={20} />
                        </motion.button>

                        <div className="aspect-[4/4] relative">
                            <motion.img
                                layoutId={`gallery-image-${photo.url}`}
                                src={photo.url}
                                alt={photo.description}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-6"
                        >
                            <p className="text-sm text-primary-light font-semibold mb-2">
                                {photo.year}
                            </p>
                            <p className="text-text leading-relaxed">
                                {photo.description}
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}