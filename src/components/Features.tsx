"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Droplets, Wallet, Leaf, Map, Navigation, Gauge, LineChart, IndianRupee, BellRing, ClipboardList, Languages } from "lucide-react";

const benefits = [
    {
        title: "Save Fuel",
        description: "FUEL abc is an innovative solution to help you save upto 30% fuel of your vehicle.",
        icon: Droplets,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Save Money",
        description: "By saving 30% of your fuel, an average 4 wheeler driver can save close to Rs. 2000 per month.",
        icon: Wallet,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "Save Environment",
        description: "If all of us can start saving 30% of our fuel, less pollution will be emitted into our atmosphere.",
        icon: Leaf,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
];

const detailedFeatures = [
    {
        title: "Fuel Price En route",
        description: "Check real-time fuel prices along your route to plan the most cost-effective stops.",
        icon: Map,
    },
    {
        title: "Fuel Efficient Route",
        description: "Find the most fuel-efficient path to your destination, saving both money and emissions.",
        icon: Navigation,
    },
    {
        title: "Trip Cost Analysis",
        description: "Calculate fuel cost at different cruise speeds to find your optimal driving pace.",
        icon: Gauge,
    },
    {
        title: "Cost/Km vs Speed",
        description: "Analyze how your speed affects your cost per kilometer with detailed visual graphs.",
        icon: LineChart,
    },
    {
        title: "Daily Fuel Prices",
        description: "Stay updated with daily fuel prices across different districts, states, and UTs.",
        icon: IndianRupee,
    },
    {
        title: "Smart Reminders",
        description: "Never miss a renewal with reminders for DL, RC, PUC, and Insurance expirations.",
        icon: BellRing,
    },
    {
        title: "Digital Logbook",
        description: "Maintain a comprehensive digital log of your trips, fuel expenses, and vehicle maintenance.",
        icon: ClipboardList,
    },
    {
        title: "Multi-Language Support",
        description: "Access the app in your preferred language for a comfortable and localized experience.",
        icon: Languages,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Core Benefits */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                        Why Use FUELabc?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Discover how we help you save fuel, money, and the environment with our comprehensive suite of tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {benefits.map((benefit, index) => (
                        <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                            <div className="p-8 md:p-6 lg:p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow bg-white h-full">
                                <div className={`w-14 h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6`}>
                                    <benefit.icon className="w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                                </div>
                                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold font-heading mb-4 text-primary-dark">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-base md:text-sm lg:text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Detailed Features Grid */}
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10"></div>

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                            Powerful Features
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything you need to optimize your driving experience in one app.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {detailedFeatures.map((feature, index) => (
                            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.05}>
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group h-full min-h-[180px] flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading mb-2 text-primary-dark flex-grow">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
