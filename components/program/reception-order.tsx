"use client";

import { motion } from "framer-motion";

const receptionOrder = [
    "Arrival and Introduction of guests",
    "Arrival of the bride's family",
    "Arrival of the groom's family",
    "Arrival of the wedding party and couple",
    "Opening prayer and remark by the Chairman",
    "Presentation of swords",
    "Cutting of the cake",
    "Couple's first assignment",
    "Conduct of the band",
    "Nuptial dance",
    "Couple's dance with Friends and Family",
    "Toast by best man",
    "Throwing the bouquet(optional)/ games",
    "Presentation of gifts and souvenirs",
    "Bride's dance with her father",
    "Closing remark and prayer",
    "Dance Dance Dance"
];

export function ReceptionOrder() {
    return (
        <div className="space-y-4">
            {receptionOrder.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-secondary font-medium">{index + 1}</span>
                    </div>
                    <p className="text-text">{item}</p>
                </motion.div>
            ))}
        </div>
    );
}