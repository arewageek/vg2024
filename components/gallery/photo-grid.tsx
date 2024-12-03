"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PhotoModal } from "./photo-modal";
import { PhotoCategories } from "./photo-categories";

const photos = [
    {
        url: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80",
        description: "Our first meeting at the Military Ball. The stars aligned that night, and the rest is history.",
        year: "2019",
        category: "Military Life"
    },
    {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
        description: "Lieutenant's commissioning ceremony. A proud moment shared together.",
        year: "2020",
        category: "Pre Wedding"
    },
    {
        url: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80",
        description: "Weekend getaway to Lagos. Making memories by the beach.",
        year: "2021",
        category: "Love Story"
    },
    {
        url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Family dinner where we announced our engagement. Joy all around!",
        year: "2022",
        category: "Single"
    },
    {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        description: "Traditional engagement ceremony. Two families becoming one.",
        year: "2023",
        category: "Single"
    },
    {
        url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        description: "Pre-wedding photoshoot. Counting down to the big day!",
        year: "2024",
        category: "Love Story"
    }
];

export function PhotoGrid() {
    const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPhotos = photos.filter(photo =>
        activeCategory === "All" || photo.category === activeCategory
    );

    const timelineVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const photoVariants = {
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

    return (
        <>
            <PhotoCategories active={activeCategory} onSelect={setActiveCategory} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    variants={timelineVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="space-y-8"
                >
                    {filteredPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.url}
                            variants={photoVariants}
                            className="relative"
                        >
                            <div className="absolute left-0 top-4 w-1 h-full bg-primary/20 -z-10" />
                            <div className="absolute left-0 top-4 w-3 h-3 rounded-full bg-primary -translate-x-1" />

                            <div className="pl-6">
                                <span className="text-sm font-semibold text-primary-light mb-2 block">
                                    {photo.year}
                                </span>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        setSelectedPhoto(photo);
                                        setIsModalOpen(true);
                                    }}
                                    className="relative aspect-[16/9] rounded-xl overflow-hidden cursor-pointer"
                                >
                                    <motion.img
                                        layoutId={`gallery-image-${photo.url}`}
                                        src={photo.url}
                                        alt={`Memory ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <PhotoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                photo={selectedPhoto}
            />
        </>
    );
}