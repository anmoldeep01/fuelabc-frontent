"use client";

import { Button } from "@/components/ui/Button";
import { Check, Play, HelpCircle, Smartphone, MonitorSmartphone, X } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/Tooltip";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import Link from "next/link";

const features = [
    { name: "Fuel Price — en route", description: "Real-time fuel prices along your planned route.", basic: false, premium: true, hasVideo: true, videoUrl: "https://www.youtube.com/embed/Z_YXZyb6vjo?autoplay=1" },
    { name: "Trip Fuel Cost — alternate routes", description: "Compare fuel costs for different route options.", basic: false, premium: true, hasVideo: true, videoUrl: "https://www.youtube.com/embed/R4husJ8p5jI?autoplay=1" },
    { name: "Fuel Price — All Districts", description: "Access fuel prices for all districts nationwide.", basic: true, premium: true },
    { name: "Mileage — vs Speed", description: "Analyze how speed affects your vehicle's mileage.", basic: true, premium: true },
    { name: "Cost/Km — vs Speed", description: "Understand the cost per kilometer at different speeds.", basic: true, premium: true },
    { name: "Logbook", description: "Digital logbook to track all your trips and expenses.", basic: true, premium: true },
    { name: "Trip Summary", description: "Detailed summary of each trip including distance and cost.", basic: true, premium: true },
    { name: "Reminders", description: "Set reminders for maintenance, insurance, and more.", basic: true, premium: true },
    { name: "Vehicle — Cost Analytics", description: "Comprehensive analytics on your vehicle's running costs.", basic: true, premium: true },
    { name: "Fuel Cost — All Vehicles", description: "Track fuel costs across multiple vehicles.", basic: true, premium: true },
];

const faqs = [
    { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your Premium subscription at any time. Your benefits will continue until the end of the billing period." },
    { question: "How accurate is the fuel price data?", answer: "We update our fuel price data daily from official sources to ensure the highest accuracy for your trip planning." },
    { question: "Can I use the app for multiple vehicles?", answer: "Absolutely! You can add and manage multiple vehicles under a single account to track costs effectively." },
];

export default function PricingPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handleOpenVideo = (url: string) => {
        setVideoUrl(url);
        setIsVideoOpen(true);
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-40 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-sm"
                    >
                        PRICING PLANS
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary-dark"
                    >
                        Simple, Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        Choose the plan that fits your journey. Save more with our yearly plans.
                    </motion.p>

                    {/* Marketing Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 shadow-sm">
                            <span className="text-lg font-medium text-primary-dark">
                                Start saving thousands on fuel for less than a cup of tea ☕
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
                    {/* Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col relative overflow-hidden"
                    >
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Smartphone className="w-6 h-6 text-gray-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Basic</h3>
                            </div>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-bold text-gray-900">FREE</span>
                            </div>
                            <p className="text-muted-foreground font-medium">For Android Users</p>
                            <p className="text-sm text-gray-500 mt-2">Essential features to get you started with fuel tracking.</p>
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            {features.map((feature, i) => {
                                const isHighlighted = !feature.basic && (feature.name.includes("en route") || feature.name.includes("alternate routes"));
                                return (
                                    <div key={i} className="flex items-start gap-3">
                                        {feature.basic ? (
                                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        ) : (
                                            <X className={`w-5 h-5 shrink-0 mt-0.5 ${isHighlighted ? 'text-red-500' : 'text-gray-300'}`} />
                                        )}
                                        <span className={`text-sm ${feature.basic || isHighlighted ? 'text-gray-600' : 'text-gray-400'}`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <Link href="/download" className="block">
                            <Button variant="outline" className="w-full rounded-xl py-6 text-lg border-2 hover:bg-gray-50 hover:text-primary-dark transition-all">
                                Download for Android
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-b from-primary-dark to-[#0f3519] rounded-[2rem] p-8 text-white shadow-2xl shadow-primary/20 flex flex-col relative overflow-hidden ring-4 ring-primary/20"
                    >
                        {/* Best Value Badge */}
                        <div className="absolute top-0 right-0 bg-accent text-primary-dark text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                            Best Value
                        </div>

                        <div className="mb-8 relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <MonitorSmartphone className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Premium</h3>
                            </div>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-5xl font-bold text-white">
                                    ₹120
                                </span>
                                <span className="text-white/60">/yr</span>
                            </div>
                            <p className="text-accent font-medium">7-Day Free Trial • iOS & Android</p>
                            <p className="text-sm text-white/70 mt-2">Advanced tools for serious savings and route optimization.</p>
                        </div>

                        <div className="flex-1 space-y-4 mb-8 relative z-10">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start justify-between gap-3 group">
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${feature.premium ? 'bg-accent' : 'bg-white/20'}`}>
                                            <Check className={`w-3 h-3 ${feature.premium ? 'text-primary-dark' : 'text-transparent'}`} />
                                        </div>
                                        <span className={`text-sm ${feature.premium ? 'text-white' : 'text-white/40'}`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                    {feature.hasVideo && (
                                        <button
                                            onClick={() => handleOpenVideo(feature.videoUrl!)}
                                            className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-all text-xs font-medium group/btn"
                                            title="Watch Feature Demo"
                                        >
                                            <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
                                            <span>Demo</span>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 space-y-3">
                            <Link href="/download" className="block">
                                <Button className="w-full bg-accent text-primary-dark hover:bg-white hover:scale-[1.02] active:scale-[0.98] rounded-xl py-6 text-lg font-bold shadow-lg transition-all">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <button
                                onClick={() => handleOpenVideo("https://www.youtube.com/embed/Z_YXZyb6vjo?autoplay=1")}
                                className="w-full flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors py-2"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                Watch Demo Video
                            </button>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 text-primary-dark">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} title="Feature Demo">
                <div className="relative aspect-video w-full bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoUrl}
                        title="Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
}
