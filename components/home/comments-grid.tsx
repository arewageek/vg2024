"use client";

import { motion } from "framer-motion";
import { CommentCard } from "./comment-card";
import { loremIpsum } from "lorem-ipsum"

const comments = [
    {
        name: "Sarah Johnson",
        role: "Chief Bridesmaid",
        comment: loremIpsum()
    },
    {
        name: "Capt. James Wilson",
        role: "Best Man",
        comment: loremIpsum()
    },
    {
        name: "Dr. Elizabeth Adebayo",
        role: "Bridesmaid",
        comment: loremIpsum()
    },
    {
        name: "Lt. Col. Michael Okonjo",
        role: "Groomsman",
        comment: loremIpsum()
    },
    {
        name: "Grace Okoro",
        role: "Bridesmaid",
        comment: loremIpsum()
    },
    {
        name: "Major David Ekong",
        role: "Groomsman",
        comment: loremIpsum()
    }
];

export function CommentsGrid() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-4"
        >
            {comments.map((comment, index) => (
                <CommentCard
                    key={index}
                    index={index}
                    name={comment.name}
                    role={comment.role}
                    comment={comment.comment}
                />
            ))}
        </motion.div>
    );
}