"use client";

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export function BackgroundMusic() {
    const [mounted, setMounted] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            const audio = new Audio(MUSIC_URL);
            audio.volume = 1;
            audio.loop = true;
            audioRef.current = audio;
        }
    }, []);

    // useEffect(() => {
    //     // setTimeout(() => toggleMute(), 2000)
    //     // console.log({ audioRef })
    //     setTimeout(() => {
    //         buttonRef.current?.click()
    //         console.log("Clicked")
    //     }, 2000)
    // }, [audioRef.current])

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(error => {
                    console.log('Autoplay prevented by browser', { error });
                });
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    if (!mounted) return null;

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
                scale: 1.1,
                backgroundColor: 'var(--primary-light)',
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            ref={buttonRef}
            className="fixed top-4 right-4 z-50 bg-primary/90 p-3 rounded-full shadow-lg backdrop-blur-sm
                 border border-primary-light/20 transition-colors duration-200"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isMuted ? 'muted' : 'unmuted'}
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
}   