"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart3, Map, Calculator, Activity, FileText, Zap, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
    {
        icon: BarChart3,
        title: "Fuel Price Comparison",
        description: "Real-time fuel prices from nearby stations to help you find the best deals.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Zap,
        title: "Mileage Prediction",
        description: "AI-driven prediction engine to estimate your vehicle's mileage based on driving habits.",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        icon: Calculator,
        title: "Trip Cost Calculator",
        description: "Calculate the exact cost of your trip before you start, including fuel and tolls.",
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        icon: Activity,
        title: "Vehicle Health",
        description: "Monitor your vehicle's health with maintenance alerts and performance tracking.",
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        icon: FileText,
        title: "Expense Reports",
        description: "Detailed logs and reports of your fuel expenses and trip history.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: Map,
        title: "Route Optimization",
        description: "Find the most fuel-efficient routes to your destination.",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <ScrollAnimation animation="fadeUp">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-sm"
                            >
                                POWERFUL TOOLS
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground leading-tight">
                                Everything you need to <span className="text-primary">save fuel</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Comprehensive tools and analytics designed to optimize your driving experience and reduce costs.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Features Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <ScrollAnimation
                                key={index}
                                animation="fadeUp"
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="h-full"
                                >
                                    <Card className="h-full bg-white/50 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                                        <CardHeader>
                                            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollAnimation animation="scaleIn">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to start saving?</h2>
                        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                            Join thousands of smart drivers who are already saving money and fuel with FUELabc.
                        </p>
                        <Link href="/download">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                                Download Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
