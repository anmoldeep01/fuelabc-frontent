"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section
            className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-background via-white to-primary/5 pt-28 pb-20 lg:pt-32"
            role="region"
            aria-label="Hero section"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-40 left-[5%] opacity-10 animate-float-delayed">
                    <Zap className="w-32 h-32 text-accent" />
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Content (Starts col 2, spans 6) */}
                <div className="col-span-12 lg:col-span-6 lg:col-start-2 flex flex-col justify-center text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-[8px] rounded-full bg-primary/10 text-primary-dark text-sm font-bold tracking-wide border border-primary/20 shadow-sm mb-8 self-center lg:self-start"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        India’s first app for fuel cost calculation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight tracking-tight mb-6"
                    >
                        <span className="text-[#0A0A0A]">SAVE</span> <br />
                        <span className="text-[#00A83E]">Fuel, Money</span> <br />
                        <span className="text-[#0A0A0A]">& Environment</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#555555] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                    >
                        FUELabc is an innovative solution to help you save{" "}
                        <span className="inline-flex items-center px-2 py-0.5 bg-accent/20 text-primary-dark font-bold rounded-md border border-accent/50 mx-1">
                            up to 30%
                        </span>{" "}
                        fuel of your vehicle through smart analytics and route optimization.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Link href="/download">
                            <Button size="lg" className="w-full sm:w-auto rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-transform px-8 py-7 text-lg font-bold gap-3">
                                Download App <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-primary-dark px-8 py-7 text-lg font-medium">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Realistic Mockup (Anchored to cols 8-12) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="col-span-12 lg:col-span-5 lg:col-start-8 relative flex justify-center lg:justify-center items-center"
                >
                    {/* Mockup Container - Reduced size by ~15% */}
                    <div className="relative w-full max-w-[260px] h-[500px] bg-black rounded-[2rem] border-[5px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/50">
                        <Image
                            src="/app-mockup.jpg"
                            alt="FUELabc App Screenshot"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        {/* Screen Reflection Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                </motion.div>
            </div >
        </section >
    );
}
