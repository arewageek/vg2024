"use client";

import { motion } from "framer-motion";
import { CommentCard } from "./comment-card";

interface IComments {
    name: string
    role: string,
    comment: string
}

const comments: IComments[] = [
    {
        name: "",
        role: "",
        comment: ""
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