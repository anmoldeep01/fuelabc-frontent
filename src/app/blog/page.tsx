"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { BLOG_POSTS, FEATURED_POST } from "@/lib/blog-data";

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Header Section */}
            <section className="container mx-auto px-4 mb-16">
                <ScrollAnimation animation="fadeUp" duration={0.8}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Stay updated with the latest news, tips, and insights on fuel efficiency, electric vehicles, and environmental sustainability.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Featured Post */}
                <ScrollAnimation animation="scaleIn" delay={0.2} duration={0.8}>
                    <Link href={`/blog/${FEATURED_POST.slug}`} className="block">
                        <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl group cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src={FEATURED_POST.image}
                                        alt={FEATURED_POST.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        {FEATURED_POST.category}
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {FEATURED_POST.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {FEATURED_POST.readTime}</span>
                                    </div>
                                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {FEATURED_POST.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {FEATURED_POST.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                <User className="w-4 h-4 text-gray-500" />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{FEATURED_POST.author}</span>
                                        </div>
                                        <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-dark group-hover:translate-x-1 transition-all">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </ScrollAnimation>
            </section>

            {/* Recent Articles Grid */}
            <section className="container mx-auto px-4">
                <ScrollAnimation animation="fadeUp" delay={0.4}>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-heading text-2xl font-bold text-gray-900">Recent Articles</h3>
                    </div>
                </ScrollAnimation>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <ScrollAnimation key={post.id} animation="fadeUp" delay={0.1 * index} duration={0.6}>
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <article
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100 hover:-translate-y-1"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>
                                        <h4 className="font-heading text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                                            <span className="text-xs font-medium text-gray-500">By {post.author}</span>
                                            <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                                                Read More <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </ScrollAnimation>
                    ))}
                </div>
            </section>
        </main>
    );
}
