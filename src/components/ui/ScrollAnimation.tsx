"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft";
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; margin?: string; amount?: number | "some" | "all" };
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px" },
    animateOnLoad = false,
}: ScrollAnimationProps & { animateOnLoad?: boolean }) {

    const variants = {
        hidden: {
            opacity: 0,
            y: animation === "fadeUp" ? 40 : 0,
            x: animation === "slideRight" ? -40 : animation === "slideLeft" ? 40 : 0,
            scale: animation === "scaleIn" ? 0.9 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView={animateOnLoad ? undefined : "visible"}
            animate={animateOnLoad ? "visible" : undefined}
            viewport={animateOnLoad ? undefined : viewport}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
