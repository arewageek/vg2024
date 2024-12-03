"use client";

import { motion } from "framer-motion";

interface CategoryProps {
    active: string;
    onSelect: (category: string) => void;
}

const categories = [
    "All",
    "Pre Wedding",
    "Love Story",
    "Single",
];

export function PhotoCategories({ active, onSelect }: CategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide"
        >
            {categories.map((category) => (
                <motion.button
                    key={category}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            ${active === category
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                >
                    {category}
                </motion.button>
            ))}
        </motion.div>
    );
}