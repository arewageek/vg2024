"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface Credit {
    role: string;
    name: string;
    phone: string;
}

const credits: Credit[] = [
    { role: "Wedding Planner", name: "Joy Ameh", phone: "09061586388" },
    { role: "DJ", name: "DJ slimfit", phone: "07037879594" },
    { role: "MC", name: "MC Johnny", phone: "08135400315" },
    { role: "Website Developer", name: "Arewa Geek", phone: "0913355101" },
    { role: "Graphic Designer", name: "Abel Oodo", phone: "08121315694" },
];

export function CreditsSection() {
    return (
        <div className="grid gap-4">
            {credits.map((credit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-surface p-4 rounded-lg border border-primary/10"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-primary/60 mb-1">{credit.role}</p>
                            <p className="font-medium text-primary">{credit.name}</p>
                        </div>
                        <a
                            href={`tel:${credit.phone}`}
                            className="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">{credit.phone}</span>
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}