"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProgramSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function ProgramSection({ title, children, defaultOpen = false }: ProgramSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-primary/10 rounded-xl overflow-hidden bg-surface"
        >
            <motion.button
                whileHover={{ backgroundColor: "rgba(46, 111, 64, 0.05)" }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
                <h2 className="text-xl font-heading text-primary font-medium">{title}</h2>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
            </motion.button>

            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}