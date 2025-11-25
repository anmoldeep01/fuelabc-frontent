"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Download, Users, Droplets, Star } from "lucide-react";

const stats = [
    { label: "Downloads", value: 700000, suffix: "+", prefix: "", icon: Download },
    { label: "Paid Users", value: 20000, suffix: "+", prefix: "", icon: Users },
    { label: "Fuel Saved", value: 1.2, suffix: "M L", prefix: "", icon: Droplets },
    { label: "App Rating", value: 4.1, suffix: "/5", prefix: "", icon: Star },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: 2000, bounce: 0 });
    const displayValue = useTransform(springValue, (current) => {
        if (value % 1 !== 0) {
            return current.toFixed(1); // Handle decimals
        }
        return Math.round(current).toLocaleString(); // Handle integers
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className="font-bold text-4xl md:text-5xl text-primary-dark block mt-2">
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export function Stats() {
    return (
        <section className="py-16 bg-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                            <div className="flex flex-col items-center space-y-2 group">
                                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
