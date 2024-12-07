"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PhotoModal } from "./photo-modal";
import { PhotoCategories } from "./photo-categories";

const photos = [
    {
        url: "assets/IMG_3524.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },
    {
        url: "assets/IMG_3333.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/IMG_3505.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/IMG_3451.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/IMG_3421.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/IMG_3412.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/IMG_3403.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

    {
        url: "assets/0d584a15-c1cb-4b8e-9049-5b0b58e2e78c",
        description: "On a lunch date",
        year: "2021",
        category: "Love Story"
    },

    {
        url: "assets/1681970e-e52e-4886-9916-46af428f03dc",
        description: "",
        year: "2021",
        category: "Love Story"
    },

    {
        url: "assets/33674ff3-d952-41b4-9385-6ba0dcd934d3",
        description: "",
        year: "2021",
        category: "Love Story"
    },

    {
        url: "assets/85fd3192-faa5-4a9c-9b64-d6a848459387",
        description: "Introduction",
        year: "2024",
        category: "Love Story"
    },

    {
        url: "assets/d65182e7-8aa4-495b-b36d-2e5df2c6f9c4",
        description: "",
        year: "2024",
        category: "Love Story"
    },

    {
        url: "assets/ea95fcd0-a626-439c-94bf-9511d805d41b",
        description: "Marriage Proposal",
        year: "2024",
        category: "Love Story"
    },

    {
        url: "assets/ef139d0a-6769-4690-8942-8a4c0ec05d76",
        description: "",
        year: "2024",
        category: "Love Story"
    },

    {
        url: "assets/IMG_3287.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },


    {
        url: "assets/IMG_3288.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },


    {
        url: "assets/IMG_3296.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },


    {
        url: "assets/IMG_3298.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },
    {
        url: "assets/IMG_3304.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },
    {
        url: "assets/IMG_3324.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },
    {
        url: "assets/IMG_3326.jpg",
        description: "Pre wedding photos",
        year: "2024",
        category: "Pre Wedding"
    },

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
                                    className="relative aspect-[16/16] rounded-xl overflow-hidden cursor-pointer"
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