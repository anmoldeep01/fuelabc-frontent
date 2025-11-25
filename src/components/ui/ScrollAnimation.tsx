"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft";
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px" },
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

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
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
