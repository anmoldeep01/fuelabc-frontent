import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { StoreButton } from "./StoreButton";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10 mt-20" role="contentinfo">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="relative h-12 w-40">
                            <Image
                                src="/logo.png"
                                alt="FUELabc"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-500 leading-relaxed max-w-sm">
                            Revolutionizing fuel management with smart analytics. Save up to 30% on your vehicle&apos;s fuel consumption while contributing to a greener environment.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="https://www.facebook.com/FuelabcApp" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="https://x.com/Fuelabc?s=20" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                            <SocialLink href="https://www.instagram.com/fuelabc_official/?igshid=Yzg5MTU1MDY%3D" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fssr-innovation-lab%2Fabout%2F" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/features" label="Features" />
                            <FooterLink href="/pricing" label="Pricing" />
                            <FooterLink href="/blog" label="Blog" />
                            <FooterLink href="https://api.ssrinnovationlab.com/api/browse/" label="Developers API" external />
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/contact" label="Contact Us" />
                            <FooterLink href="/privacy" label="Privacy Policy" />
                            <FooterLink href="/terms" label="Terms of Service" />
                            <FooterLink href="/data-safety" label="Data Safety" />
                            <li className="flex items-start gap-3 text-gray-500 pt-2">
                                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                                <a href="mailto:support@fuelabc.com" className="hover:text-primary transition-colors">support@fuelabc.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Get the App</h4>
                        <p className="text-gray-500 mb-6">Experience smart fuel management on the go.</p>
                        <div className="space-y-4">
                            <StoreButton
                                href="https://apps.apple.com/in/app/fuel-abc/id1444744807"
                                storeName="App Store"
                                subtitle="Download on the"
                                icon={
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.49.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                }
                            />
                            <StoreButton
                                href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN"
                                storeName="Google Play"
                                subtitle="GET IT ON"
                                icon={
                                    <svg className="w-8 h-8" viewBox="30 336.7 120.9 129.2">
                                        <path fill="#FFD400"
                                            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                        </path>
                                        <path fill="#FF3333"
                                            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                        </path>
                                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                        </path>
                                        <path fill="#3BCCFF"
                                            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                        </path>
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} FUELabc. Powered By <span className="font-semibold text-gray-700">Saint Sita Ram Innovation Lab Pvt. Ltd.</span>
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
    return (
        <li>
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"></span>
                {label}
            </Link>
        </li>
    );
}
