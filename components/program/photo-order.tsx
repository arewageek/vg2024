"use client";

import { motion } from "framer-motion";

const photoOrder = [
    "Couple with officiating priests",
    "Couple with little bride and groom",
    "Couple with bridal train",
    "Couple with chief bridesmaid and best man",
    "Groom alone with his parents",
    "Bride alone with her parents",
    "Couple with groom's parents",
    "Couple with bride's parents",
    "Couple with both parents",
    "Groom and his siblings",
    "Bride and her siblings",
    "Couple with sword party",
    "Couple with sword party and bridal train",
    "Bride with aseobi ladies",
    "Couple with Bride's friends and coursemates",
    "Couple with groom's friends and colleagues",
    "Couple with groom's family",
    "Couple with bride's family",
    "Couple with both families"
];

export function PhotoOrder() {
    return (
        <div className="space-y-4">
            {photoOrder.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-medium">{index + 1}</span>
                    </div>
                    <p className="text-text">{item}</p>
                </motion.div>
            ))}
        </div>
    );
}