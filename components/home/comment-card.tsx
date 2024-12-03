"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface CommentProps {
    name: string;
    role: string;
    comment: string;
    index: number;
}

export function CommentCard({ name, role, comment, index }: CommentProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-surface p-6 rounded-xl shadow-md border border-primary/10 relative"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                    className="absolute -top-3 -left-3 bg-primary/10 p-2 rounded-full"
                >
                    <Quote className="w-4 h-4 text-primary" />
                </motion.div>

                <div className="space-y-3">
                    <div>
                        <h3 className="font-heading text-lg text-primary">{name}</h3>
                        <p className="text-sm text-primary/60">{role}</p>
                    </div>
                    <p className="text-text leading-relaxed">{comment}</p>
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.4 + index * 0.1 }}
                    className="absolute -bottom-2 -right-2 h-8 w-8 bg-primary/5 rounded-full"
                />
            </motion.div>
        </motion.div>
    );
}