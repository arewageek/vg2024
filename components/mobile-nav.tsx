"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Calendar, Camera, Image } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/program", label: "Program", icon: Calendar },
  { href: "/uploads", label: "Uploads", icon: Camera },
  { href: "/gallery", label: "Gallery", icon: Image },
];

const navVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

export function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark to-primary-dark/95 
                 backdrop-blur-lg supports-[backdrop-filter]:bg-primary-dark/80 
                 border-t border-primary-light/20 px-4 pb-safe shadow-lg"
    >
      <motion.div
        className="flex justify-around items-center h-16 max-w-md mx-auto"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href} className="w-full">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center space-y-1 relative"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? "#f39c12" : "#f8f9f3"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="relative"
                >
                  <Icon size={20} />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -inset-2 bg-primary-light/20 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </motion.div>
                <motion.span
                  animate={{
                    color: isActive ? "#f39c12" : "#f8f9f3",
                    opacity: isActive ? 1 : 0.8
                  }}
                  className="text-xs font-medium"
                >
                  {item.label}
                </motion.span>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}