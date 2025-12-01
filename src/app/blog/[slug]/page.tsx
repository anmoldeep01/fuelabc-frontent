import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { BLOG_POSTS, FEATURED_POST } from "@/lib/blog-data";

export async function generateStaticParams() {
    const posts = BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));

    // Add featured post if it's not in BLOG_POSTS
    if (!BLOG_POSTS.find(p => p.slug === FEATURED_POST.slug)) {
        posts.push({ slug: FEATURED_POST.slug });
    }

    return posts;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find post in both regular posts and featured post
    const post = BLOG_POSTS.find((p) => p.slug === slug) ||
        (FEATURED_POST.slug === slug ? FEATURED_POST : undefined);

    if (!post) {
        notFound();
    }

    // Get related posts (excluding current one)
    const relatedPosts = BLOG_POSTS
        .filter(p => p.id !== post.id)
        .slice(0, 3);

    return (
        <main className="min-h-screen pt-24 pb-20 bg-gray-50/50">
            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 mb-8">
                <nav className="flex items-center text-sm text-gray-500">
                    <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <Link href="/blog" className="hover:text-primary transition-colors">
                        Blog
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-md">
                        {post.title}
                    </span>
                </nav>
            </div>

            <article className="container mx-auto px-4">
                {/* Hero Section */}
                <ScrollAnimation animation="fadeUp" duration={0.5} animateOnLoad>
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {post.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                        </div>

                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-y border-gray-200 py-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                                    <p className="text-gray-500 text-xs">Author</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Featured Image */}
                <ScrollAnimation animation="scaleIn" duration={0.6}>
                    <div className="max-w-5xl mx-auto mb-16 relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </ScrollAnimation>

                {/* Content */}
                <ScrollAnimation animation="fadeUp" delay={0.1}>
                    <div className="max-w-3xl mx-auto prose prose-lg prose-gray prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-xl mb-20">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </ScrollAnimation>
            </article>

            {/* Related Articles */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <ScrollAnimation animation="fadeUp">
                        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-10 text-center">
                            Related Articles
                        </h3>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {relatedPosts.map((relatedPost, index) => (
                            <ScrollAnimation key={relatedPost.id} animation="fadeUp" delay={0.1 * index}>
                                <Link href={`/blog/${relatedPost.slug}`} className="block h-full group">
                                    <article className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="text-xs text-primary font-bold mb-2 uppercase tracking-wide">
                                                {relatedPost.category}
                                            </div>
                                            <h4 className="font-heading text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                {relatedPost.title}
                                            </h4>
                                            <div className="mt-auto pt-4 flex items-center text-sm text-gray-500 font-medium group-hover:translate-x-1 transition-transform">
                                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
