"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

interface StoryProps {
    title: string;
    author: string;
    paragraphs: string[];
    align?: "left" | "right";
    image?: string;
}

export function StorySection({ title, author, paragraphs, align = "left", image }: StoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`relative ${align === "right" ? "text-right" : "text-left"}`}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`absolute top-0 ${align === "right" ? "-left-2" : "-right-2"} h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent`}
            />

            <motion.div
                initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className={`absolute ${align === "right" ? "-left-6" : "-right-6"} top-3 bg-primary/10 p-2 rounded-full`}
                >
                    <Heart className="w-4 h-4 text-primary" />
                </motion.div>

                <h2 className="font-heading text-2xl text-primary mb-1">{title}</h2>
                <p className="text-sm text-primary/60 font-medium">{author}</p>
            </motion.div>

            {image && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    />
                </motion.div>
            )}

            <div className="mt-6 space-y-6 text-justify">
                {paragraphs.map((paragraph, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="relative group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className={`bg-surface p-4 rounded-xl shadow-sm border border-primary/10 
                         ${align === "right" ? "pr-6" : "pl-6"}`}
                        >
                            <p className="text-text leading-relaxed">{paragraph}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}