"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Car, UserPlus, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const steps = [
    {
        icon: UserPlus,
        title: "01 Create Account",
        description: "Sign Up on FUELabc using your Name and Mobile Number",
    },
    {
        icon: Car,
        title: "02 Vehicle Details",
        description: "Add your vehicle details like Maker, Petrol/diesel, Model, Gear/manual, Registration Year of Vehicle.",
    },
    {
        icon: Smile,
        title: "03 Enjoy the app",
        description: "That's it. Start saving Fuel!",
    },
];

export function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Start saving on fuel in three simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: "100%" } : { width: "0%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <Card className="border-none shadow-none bg-transparent text-center relative group">
                                <CardContent className="pt-6">
                                    <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-gray-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300">
                                        <step.icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
