import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

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
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
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
                            <a href="https://apps.apple.com/in/app/fuel-abc/id1444744807" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="bg-black text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.49.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div>
                                        <div className="text-[10px] font-medium text-gray-300 uppercase tracking-wide">Download on the</div>
                                        <div className="text-lg font-bold leading-none">App Store</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="bg-black text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl hover:bg-gray-900 transition-all">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.609 22.186C3.268 21.962 3 21.587 3 21.154V2.846c0-.433.268-.808.609-1.032zM14.5 12.707l2.842 2.843-9.693 5.548L14.5 12.707zm.707-.707l2.843-2.842-9.693-5.548L15.207 12zm3.551 2.135c.333-.196.751-.196 1.084 0l.441.252c.333.196.333.513 0 .709l-3.652 2.132-3.126-3.126 5.253-3.067z" />
                                    </svg>
                                    <div>
                                        <div className="text-[10px] font-medium text-gray-300 uppercase tracking-wide">GET IT ON</div>
                                        <div className="text-lg font-bold leading-none">Google Play</div>
                                    </div>
                                </div>
                            </a>
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
