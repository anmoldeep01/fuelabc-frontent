"use client";

import { Button } from "@/components/ui/Button";
import { Smartphone, Apple, Download, QrCode, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { motion } from "framer-motion";

export default function DownloadPage() {
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN";
    const appStoreUrl = "https://apps.apple.com/in/app/fuel-abc/id1444744807";

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-white to-primary/5 pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="inline-flex items-center text-primary-dark hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-8">
                        <ScrollAnimation animation="fadeUp" delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark text-sm font-medium">
                                <Download className="w-4 h-4" />
                                Download Now
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.2}>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-dark">
                                Start Saving Fuel Today
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.3}>
                            <p className="text-xl text-muted-foreground">
                                Join thousands of smart drivers who are saving up to 30% on fuel costs with FUELabc.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Download FUELabc from Google Play">
                                    <Button size="lg" className="h-16 px-8 rounded-2xl gap-3 text-lg shadow-xl shadow-primary/20 bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                                        <Smartphone className="w-6 h-6" />
                                        <div className="text-left">
                                            <div className="text-xs font-normal opacity-80">Get it on</div>
                                            <div className="font-bold">Google Play</div>
                                        </div>
                                    </Button>
                                </a>

                                <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Download FUELabc from App Store">
                                    <Button size="lg" variant="default" className="h-16 px-8 rounded-2xl gap-3 text-lg shadow-xl shadow-primary/20 w-full sm:w-auto">
                                        <Apple className="w-6 h-6" />
                                        <div className="text-left">
                                            <div className="text-xs font-normal opacity-80">Download on</div>
                                            <div className="font-bold">App Store</div>
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.5}>
                            <div className="pt-8">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <div className="shrink-0">
                                            <div className="w-48 h-48 bg-white rounded-xl border-2 border-green-500/30 p-2 hover:border-green-500 transition-colors shadow-sm mx-auto">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src="/qr-download.png"
                                                        alt="Scan to download FUELabc from Google Play Store"
                                                        fill
                                                        className="object-contain p-1"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-3 font-medium flex items-center justify-center gap-1.5">
                                                <Smartphone className="w-3.5 h-3.5 text-green-600" />
                                                Scan to Download
                                            </p>
                                        </div>

                                        <div className="flex-1 text-center md:text-left space-y-4">
                                            <div>
                                                <h3 className="font-bold text-xl mb-2 text-primary-dark flex items-center justify-center md:justify-start gap-2">
                                                    <QrCode className="w-5 h-5 text-primary" />
                                                    Quick Download
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Use your phone&apos;s camera to scan the QR code and instantly download the FUELabc app from the Google Play Store.
                                                </p>
                                            </div>

                                            <div className="grid gap-3 pt-2">
                                                <div className="flex items-center gap-3 text-sm justify-center md:justify-start bg-green-50/50 p-2 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                                    <span className="text-muted-foreground font-medium">Works on all Android devices</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm justify-center md:justify-start bg-green-50/50 p-2 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                                                    <span className="text-muted-foreground font-medium">Direct secure link to Play Store</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm justify-center md:justify-start bg-primary/5 p-2 rounded-lg">
                                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                                    <span className="text-muted-foreground font-medium">Fast & easy installation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="slideLeft" delay={0.4} className="relative flex justify-center">
                        {/* Mockup Placeholder */}
                        <div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary text-white flex items-center justify-center">
                                <div className="text-center px-8">
                                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                    <p className="text-sm opacity-90">App Screenshots</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
                    </ScrollAnimation>
                </div>

                {/* Features Highlight */}
                <div className="max-w-4xl mx-auto mb-16">
                    <ScrollAnimation animation="fadeUp">
                        <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary-dark">
                            Why Choose FUELabc?
                        </h2>
                    </ScrollAnimation>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Save Money", description: "Save up to ₹2,000 per month on fuel" },
                            { title: "Track Efficiency", description: "Real-time fuel consumption monitoring" },
                            { title: "Best Prices", description: "Find cheapest fuel on your route" },
                            { title: "Eco Routes", description: "Reduce emissions with smart navigation" },
                            { title: "Smart Reminders", description: "Never miss document renewals" },
                            { title: "Digital Logbook", description: "Complete trip and expense records" },
                        ].map((feature, index) => (
                            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow h-full">
                                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                                    <h3 className="font-bold text-lg mb-2 text-primary-dark">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

                {/* System Requirements */}
                <ScrollAnimation animation="fadeUp" delay={0.2}>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                            <Smartphone className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <h3 className="font-bold text-xl mb-3 text-primary-dark">System Requirements</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p><strong className="text-foreground">iOS:</strong> Requires iOS 13.0 or later</p>
                                <p><strong className="text-foreground">Android:</strong> Requires Android 8.0 or later</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-6">
                                Need help? <Link href="/contact" className="text-primary hover:underline font-medium">Contact support</Link>
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </main>
    );
}
