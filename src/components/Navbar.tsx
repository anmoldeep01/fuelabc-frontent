"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "API", href: "https://api.ssrinnovationlab.com/api/browse/", external: true },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20 py-3"
                        : "bg-transparent py-6"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                role="banner"
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-50" aria-label="FUELabc Home">
                        <div className={cn(
                            "relative h-10 w-32 transition-all duration-300",
                            !isScrolled && "drop-shadow-sm"
                        )}>
                            <Image
                                src="/logo.png"
                                alt="FUELabc Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm" role="navigation" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-primary-dark",
                                    pathname === link.href ? "text-primary-dark" : "text-gray-600"
                                )}
                            >
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100/50" aria-label="Change language">
                            <Globe className="h-5 w-5 text-gray-600" aria-hidden="true" />
                        </Button>
                        <Link href="/download">
                            <Button variant="default" className="shadow-lg shadow-primary/20 rounded-full px-6 hover:scale-105 transition-transform">
                                Download App
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-800 focus:outline-none z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="absolute top-0 left-0 w-full h-0.5 bg-current origin-center transition-transform"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="absolute top-[11px] left-0 w-full h-0.5 bg-current transition-opacity"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-current origin-center transition-transform"
                            />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        className="flex items-center justify-between text-2xl font-bold text-gray-800 py-4 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto mb-10 space-y-4"
                        >
                            <Link href="/download" onClick={() => setIsMobileMenuOpen(false)} className="block">
                                <Button className="w-full rounded-xl py-6 text-lg shadow-xl shadow-primary/20" size="lg">
                                    Download App
                                </Button>
                            </Link>
                            <Button variant="outline" className="w-full rounded-xl py-6 border-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <Globe className="h-5 w-5 mr-2" /> Change Language
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
