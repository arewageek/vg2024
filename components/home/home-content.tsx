"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { StorySection } from "./story-section";
import { CommentsGrid } from "./comments-grid";
import { loremIpsum } from "lorem-ipsum";

const groomStory = [
    "In 2019, during our cadet training at the Nigeria Defence Academy (NDA), Kaduna, I visited a friend at the Air Force Base, Kaduna. As cadets, we were occasionally granted a 3-4 hour liberty pass to leave the Academy and visit Kaduna town. It was on one of those Sundays that I decided to check on my close friend, AY, at the NAF Base.",
    "While catching up, I asked AY to recommend a good spot where I could find some delicious Afang soup. Normally, my problem no pass food😂 AY didn’t disappoint. He took me to Maami Market at the Base, assuring me I’d get the best meal there.",
    "When we arrived, I was met with more than just good food—I met her. Vera. She was the prettiest woman I had ever seen, and as fate would have it, her mum owned the restaurant. Vera happened to be helping out that afternoon, and from the moment I saw her, I couldn’t take my eyes off her.",
    "After the meal, I mustered the courage to approach her, ask her name, and strike up a conversation. She smiled warmly, and we exchanged a few words. Little did I know, that brief moment would spark a journey that has brought us here today.",
    "Now, we stand together, taking this bold step of faith as we begin a new chapter of our lives. We pray for God’s abundant love and blessings upon this union. I can confidently say that I have found my gee for life—the woman who completes me."
];

const brideStory = [
    "I first met Godwin in 2019 on a Sunday evening when he visited my mom’s restaurant to eat. He couldn’t hide how captivated he was by my beauty😂 (his words, not mine!) and of course, had no choice but to ask for my number. We started talking shortly after, but life got in the way, and we lost touch for a while.",
    "In 2020, we reconnected after I came across one of his status updates. This time, our conversations flowed effortlessly and we built a strong friendship that soon blossomed into a relationship. From countless bowls of ice cream to sharing kilishi and fura yogurt 😍😂our bond grew stronger with each passing day.",
    "And here we are now, embarking on this beautiful journey together!"
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
                    className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden mb-8"
                >
                    <Image
                        src="assets/IMG_3288.jpg"
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
                        <p className="text-lg font-medium mb-1">Lt G. O. Ameh & Miss Veronica Onojah</p>
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
                    author="Lt GO Ameh"
                    paragraphs={groomStory}
                    image="assets/ef139d0a-6769-4690-8942-8a4c0ec05d76"
                />

                <StorySection
                    title="How I Met Him"
                    author="Veronica Onoja "
                    paragraphs={brideStory}
                    align="right"
                    image="assets/ea95fcd0-a626-439c-94bf-9511d805d41b"
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