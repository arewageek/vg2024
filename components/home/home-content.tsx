"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { StorySection } from "./story-section";
import { CommentsGrid } from "./comments-grid";
import { loremIpsum } from "lorem-ipsum";

const groomStory = [
    `${loremIpsum()}`, `${loremIpsum()}`, `${loremIpsum()}`,
];

const brideStory = [
    `${loremIpsum()}`, `${loremIpsum()}`, `${loremIpsum()}`,
];

export function HomeContent() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen px-4 py-8 max-w-md mx-auto space-y-16 relative"
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-center relative"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-block bg-primary/10 p-3 rounded-full mb-4 relative"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Heart className="w-6 h-6 text-primary" />
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-heading text-4xl text-primary font-bold mb-4"
                >
                    Our Love Story
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
                        alt="Military Love Story"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-4 left-4 right-4 text-white text-center"
                    >
                        <p className="text-lg font-medium mb-1">Lt G. O. Ameh & Dr. Veronica Onojah</p>
                        <p className="text-sm opacity-80">#VG2024</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/5 rounded-full blur-xl -z-10"
                />
            </motion.div>

            <div className="space-y-16 relative">
                <StorySection
                    title="How I Met Her"
                    author="Lt. G. O. Ameh"
                    paragraphs={groomStory}
                    image="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80"
                />

                <StorySection
                    title="How I Met Him"
                    author="Dr. Veronica Onojah"
                    paragraphs={brideStory}
                    align="right"
                    image="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=800&q=80"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8 relative"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-heading text-2xl text-primary text-center"
                >
                    Words from Our Wedding Party
                </motion.h2>

                <CommentsGrid />
            </motion.div>
        </motion.main>
    );
}