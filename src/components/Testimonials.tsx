"use client";

import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
    {
        name: "Rohan Kumar",
        role: "App User",
        location: "Mumbai, Maharashtra",
        timeAgo: "2 weeks ago",
        content: "Awesome app! I had lots of problems with my bike's mileage. After using FUELabc, I'm getting better mileage and using less fuel every day.",
        rating: 5,
        initials: "RK",
    },
    {
        name: "Vicky Patil",
        role: "App User",
        location: "Pune, Maharashtra",
        timeAgo: "1 month ago",
        content: "Nice experience! After I raised my query, they responded quickly and solved my problem. I don't have any complaints. Thanks team FUELabc - I highly recommend their services to everyone.",
        rating: 5,
        initials: "VP",
    },
    {
        name: "Arun Kumar",
        role: "App User",
        location: "Bangalore, Karnataka",
        timeAgo: "3 weeks ago",
        content: "This app helps me get the best mileage for my car, saving fuel and protecting the environment. They also provide fuel prices for your state and city. The price to become a pro customer is very reasonable compared to others.",
        rating: 4,
        initials: "AK",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-primary/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimation animation="fadeUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary-dark">
                            Loved by Drivers
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            See what our community has to say about saving fuel and driving smarter.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.2} className="h-full">
                            <Card className="h-full border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <Quote className="w-10 h-10 text-primary/20 mb-6" />

                                    <p className="text-lg text-foreground/80 mb-8 flex-1 italic">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                                            <div className="flex items-center gap-1 flex-wrap">
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                <span className="flex items-center text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                                                    <CheckCircle className="w-3 h-3 mr-1" /> Verified
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1">{testimonial.location} • {testimonial.timeAgo}</p>
                                        </div>
                                        <div className="ml-auto flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
