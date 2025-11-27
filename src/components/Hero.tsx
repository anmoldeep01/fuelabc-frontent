"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap, Leaf, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-white to-primary/5 pt-20"
            role="region"
            aria-label="Hero section"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-[10%] opacity-20 animate-float">
                    <Leaf className="w-24 h-24 text-primary" />
                </div>
                <div className="absolute bottom-40 left-[5%] opacity-10 animate-float-delayed">
                    <Zap className="w-32 h-32 text-accent" />
                </div>
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column: Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark text-sm font-bold tracking-wide border border-primary/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        India’s first app that calculates fuel costs for alternate routes
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold font-heading leading-[1.1] text-foreground tracking-tight"
                    >
                        SAVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">Fuel, Money</span> <br />
                        & Environment
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
                    >
                        FUELabc is an innovative solution to help you save{" "}
                        <span className="inline-flex items-center px-3 py-1 bg-accent/20 text-primary-dark font-bold rounded-full border border-accent/50 animate-pulse-scale">
                            up to 30%
                        </span>{" "}
                        fuel of your vehicle through smart analytics and route optimization.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
                    >
                        <Link href="/download">
                            <Button size="lg" className="w-full sm:w-auto rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-transform px-8 py-6 text-lg">
                                Download App <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-2 border-primary/30 hover:bg-primary/10 text-primary-dark hover:border-primary px-8 py-6 text-lg">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Realistic Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end perspective-1000"
                >
                    <div className="relative w-[320px] h-[650px] bg-black rounded-[3.5rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20"></div>

                        {/* Side Buttons */}
                        <div className="absolute top-24 -right-4 w-1 h-16 bg-gray-800 rounded-r-md"></div>
                        <div className="absolute top-24 -left-4 w-1 h-10 bg-gray-800 rounded-l-md"></div>
                        <div className="absolute top-40 -left-4 w-1 h-16 bg-gray-800 rounded-l-md"></div>

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-white flex flex-col pt-8">
                            {/* Mockup Header */}
                            <div className="h-14 flex items-center justify-between px-6 pb-2">
                                <span className="font-heading font-bold text-xl text-primary-dark">FUELabc</span>
                                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
                            </div>

                            {/* Mockup Body */}
                            <div className="flex-1 px-4 space-y-4 overflow-hidden relative">
                                {/* Main Card */}
                                <div className="bg-gradient-to-br from-primary to-green-700 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Leaf className="w-20 h-20" />
                                    </div>
                                    <div className="text-sm opacity-90 mb-1 font-medium">Efficiency Score</div>
                                    <div className="flex items-baseline gap-2">
                                        <div className="text-6xl font-mono font-bold tracking-tighter">94</div>
                                        <div className="text-xl opacity-75">/100</div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="font-medium">Excellent</span>
                                    </div>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2 text-blue-600">
                                            <DollarSign className="w-4 h-4" />
                                        </div>
                                        <div className="text-xs text-muted-foreground font-medium">Savings</div>
                                        <div className="text-2xl font-bold text-gray-900">₹1,240</div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-2 text-orange-600">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div className="text-xs text-muted-foreground font-medium">Distance</div>
                                        <div className="text-2xl font-bold text-gray-900">450 km</div>
                                    </div>
                                </div>

                                {/* Map Preview */}
                                <div className="bg-gray-100 h-40 rounded-3xl relative overflow-hidden border border-gray-200">
                                    <div className="absolute inset-0 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.2090,28.6139,12,0/300x200?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsIn0.example')] bg-cover bg-center"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            Live Tracking
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mockup Bottom Nav */}
                            <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 pb-4">
                                <div className="flex flex-col items-center gap-1 text-primary">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="w-6 h-6 text-gray-300"><MapPin /></div>
                                <div className="w-6 h-6 text-gray-300"><TrendingUp /></div>
                            </div>
                        </div>

                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-[3rem] z-10"></div>
                    </div>

                    {/* Floating Elements behind phone */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                </motion.div>
            </div>
        </section>
    );
}
