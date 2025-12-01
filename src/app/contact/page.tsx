"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { motion } from "motion/react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fadeUp">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-sm"
                        >
                            GET IN TOUCH
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-primary-dark">
                            We&apos;d love to hear from you
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have questions about FUELabc? Our team is here to help you get the most out of your journey.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <ScrollAnimation animation="slideRight" delay={0.2}>
                            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10 shadow-lg overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <CardContent className="p-8 space-y-8 relative z-10">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-1">Email Us</h3>
                                            <p className="text-muted-foreground text-sm mb-1">info@ssrinnovationlab.com</p>
                                            <p className="text-muted-foreground text-sm">support@fuelabc.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-1">Call Us</h3>
                                            <p className="text-muted-foreground text-sm mb-1">+91 95309-66789</p>
                                            <p className="text-muted-foreground text-sm">+91 99881-84513</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-1">Visit Us</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                Saint Sita Ram Innovation Lab Pvt Ltd,<br />
                                                #Z2-10097, Sita Ram House,<br />
                                                St No. 3, Bibi Wala Road,<br />
                                                Bathinda – 151001 (Punjab) INDIA
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-2">
                        <ScrollAnimation animation="slideLeft" delay={0.4}>
                            <Card className="shadow-xl border-gray-100 overflow-hidden">
                                <CardHeader className="bg-gray-50/50 border-b border-gray-100 p-8">
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                        Send us a message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Name</label>
                                                <Input placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Email</label>
                                                <Input placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Subject</label>
                                            <Input placeholder="How can we help?" className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Message</label>
                                            <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[150px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" />
                                        </div>
                                        <Button className="w-full md:w-auto h-12 px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                            Send Message <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
