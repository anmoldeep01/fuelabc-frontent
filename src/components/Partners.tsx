"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ShieldCheck } from "lucide-react";

export function Partners() {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4">
                <ScrollAnimation animation="fadeUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                            Our Partner
                        </h2>
                    </div>
                </ScrollAnimation>

                <div className="max-w-4xl mx-auto">
                    <ScrollAnimation animation="scaleIn">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-16 h-16 text-blue-600" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-primary-dark mb-4">SMC Insurance</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    SMC Insurance is a trusted leader in the insurance industry, known for its comprehensive and customer-centric solutions. With a mission to simplify the insurance process, SMC offers a wide range of policies, including health, life, motor, and travel insurance, tailored to meet the unique needs of individuals and businesses.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
