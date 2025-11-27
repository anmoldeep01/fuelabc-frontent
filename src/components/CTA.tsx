"use client";

import { Button } from "@/components/ui/Button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollAnimation animation="scaleIn">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                            Ready to Start Saving?
                        </h2>
                        <p className="text-xl text-white/80">
                            Join thousands of smart drivers who are saving fuel and money every day. Download FUELabc now.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Link href="/download">
                                <Button
                                    size="lg"
                                    className="group w-full sm:w-auto bg-white text-primary-dark font-bold text-lg h-14 px-8 rounded-full shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 flex items-center gap-2"
                                >
                                    Join Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="group w-full sm:w-auto bg-transparent border-white/20 text-white font-medium text-lg h-14 px-8 rounded-full hover:bg-transparent hover:text-white">
                                    Contact Sales <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm text-white/40 pt-8">
                            Available on iOS and Android. No credit card required for free tier.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
