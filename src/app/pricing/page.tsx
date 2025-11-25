"use client";

import { Button } from "@/components/ui/Button";
import { Check, Play, ArrowRight, Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "@/components/ui/Tooltip";
import { useState } from "react";

const features = [
    { name: "Fuel Price — en route", description: "Real-time fuel prices along your planned route.", basic: false, premium: true },
    { name: "Trip Fuel Cost — alternate routes", description: "Compare fuel costs for different route options.", basic: false, premium: true },
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
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    return (
        <div className="min-h-screen bg-background pt-24 pb-40 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
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
                        className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary-dark"
                    >
                        Simple, Transparent Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground mb-8"
                    >
                        Choose the plan that fits your journey.
                    </motion.p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="w-14 h-8 bg-primary rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                            aria-label="Toggle billing cycle"
                        >
                            <motion.div
                                animate={{ x: billingCycle === 'yearly' ? 24 : 0 }}
                                className="w-6 h-6 bg-white rounded-full shadow-sm"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                            Yearly <span className="text-xs text-accent font-bold ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-3 gap-0 max-w-5xl mx-auto mb-20">
                    {/* Column 1: Features List */}
                    <div className="pt-32"> {/* Spacer for alignment with plan headers */}
                        {features.map((feature, i) => (
                            <div key={i} className="h-16 flex items-center px-6 border-b border-gray-100 group">
                                <span className="text-gray-700 font-medium mr-2">{feature.name}</span>
                                <Tooltip content={feature.description}>
                                    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-primary cursor-help transition-colors" />
                                </Tooltip>
                            </div>
                        ))}
                    </div>

                    {/* Column 2: Basic Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-t-[30px] rounded-b-[30px] shadow-lg shadow-gray-100/50 border border-gray-200 overflow-hidden flex flex-col relative z-0 mx-2"
                    >
                        <div className="p-8 text-center bg-gray-50/50 h-32 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-gray-700">Basic</h3>
                            <div className="text-3xl font-bold text-gray-900 mt-2">
                                {billingCycle === 'yearly' ? '₹49' : '₹5'}
                                <span className="text-sm font-normal text-muted-foreground">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-white">
                            {features.map((feature, i) => (
                                <div key={i} className="h-16 flex items-center justify-center border-b border-gray-50">
                                    {feature.basic ? <Check className="w-5 h-5 text-primary" /> : <div className="w-4 h-1 bg-gray-200 rounded-full" />}
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-gray-50/50">
                            <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl transition-all">Choose Basic</Button>
                        </div>
                    </motion.div>

                    {/* Column 3: Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-b from-white to-primary/5 rounded-t-[30px] rounded-b-[30px] shadow-2xl border border-primary/20 overflow-hidden flex flex-col relative z-10 -mt-4 ring-4 ring-primary/10"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                            Best Value
                        </div>
                        <div className="p-8 text-center h-36 flex flex-col justify-center relative mt-4">
                            <div className="absolute top-4 right-4">
                                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-dark">Premium</h3>
                            <div className="text-4xl font-bold text-primary-dark mt-2">
                                {billingCycle === 'yearly' ? '₹120' : '₹15'}
                                <span className="text-sm font-normal text-muted-foreground">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            {features.map((feature, i) => (
                                <div key={i} className="h-16 flex items-center justify-center border-b border-primary/5 bg-white/50">
                                    <div className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        {!feature.basic && (
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                className="p-1 rounded-full bg-accent/20 text-primary-dark hover:bg-accent hover:text-white transition-colors"
                                                title="Watch Demo"
                                            >
                                                <Play className="w-3 h-3 fill-current" />
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-primary/5">
                            <Button className="w-full bg-primary text-white hover:bg-primary-dark rounded-xl shadow-lg py-6 text-lg transition-all transform hover:scale-105">Choose Premium</Button>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Layout (Stacked) */}
                <div className="md:hidden space-y-8 mt-8 mb-20">
                    {/* Basic Plan Mobile */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-700">Basic</h3>
                            <div className="text-3xl font-bold text-gray-900 my-2">
                                {billingCycle === 'yearly' ? '₹49' : '₹5'}
                                <span className="text-sm font-normal text-muted-foreground">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                            </div>
                            <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl">Select</Button>
                        </div>
                        <div className="space-y-3">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted-foreground">{f.name}</span>
                                        <Tooltip content={f.description}>
                                            <HelpCircle className="w-3 h-3 text-gray-400" />
                                        </Tooltip>
                                    </div>
                                    {f.basic ? <Check className="w-4 h-4 text-primary" /> : <div className="w-3 h-1 bg-gray-200 rounded-full" />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium Plan Mobile */}
                    <div className="bg-gradient-to-b from-white to-primary/5 rounded-3xl p-6 shadow-xl border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent text-primary-dark text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm uppercase tracking-wider">
                            Best Value
                        </div>
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-primary-dark">Premium</h3>
                            <div className="text-3xl font-bold text-primary-dark my-2">
                                {billingCycle === 'yearly' ? '₹120' : '₹15'}
                                <span className="text-sm font-normal text-muted-foreground">/{billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                            </div>
                            <Button className="w-full bg-primary text-white hover:bg-primary-dark rounded-xl shadow-lg">Select Premium</Button>
                        </div>
                        <div className="space-y-3">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium text-gray-700">{f.name}</span>
                                        <Tooltip content={f.description}>
                                            <HelpCircle className="w-3 h-3 text-gray-400" />
                                        </Tooltip>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {!f.basic && <Play className="w-3 h-3 text-accent fill-current" />}
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={false}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-700">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Offer Section */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            >
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-dark to-green-800 rounded-2xl shadow-2xl p-4 md:p-6 flex items-center justify-between text-white overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="flex items-center gap-4 md:gap-8 relative z-10">
                        <div className="hidden md:block">
                            <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Limited Time Offer</div>
                            <h3 className="text-2xl font-bold">Get Premium</h3>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-lg text-white/60 line-through decoration-white/60">
                                {billingCycle === 'yearly' ? '₹120/Yr' : '₹15/Mo'}
                            </span>
                            <motion.span
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-3xl md:text-4xl font-bold text-accent"
                            >
                                {billingCycle === 'yearly' ? '₹89/Yr' : '₹12/Mo'}
                            </motion.span>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary-dark px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 relative z-10"
                    >
                        Select <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
