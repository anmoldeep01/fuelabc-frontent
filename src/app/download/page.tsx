"use client";

import { Button } from "@/components/ui/Button";
import { StoreButton } from "@/components/StoreButton";
import { Smartphone, Download, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";


export default function DownloadPage() {
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN";
    const appStoreUrl = "https://apps.apple.com/in/app/fuel-abc/id1444744807";

    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-white to-primary/5 pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Back Button */}


                <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
                    <div className="space-y-8">


                        <ScrollAnimation animation="fadeUp" delay={0.2}>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-dark">
                                Start Saving Fuel Today
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.3}>
                            <p className="text-xl text-muted-foreground">
                                Join now! thousands of smart drivers who are saving up to 30% on fuel costs with FUELabc.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.4}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                                <StoreButton
                                    href={playStoreUrl}
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
                                    className="w-full"
                                />

                                <StoreButton
                                    href="https://www.indusappstore.com/apps/maps-and-navigation/fuel-abc/com.fuel.abc.app/?page=details&id=com.fuel.abc.app"
                                    storeName="Indus Appstore"
                                    subtitle="Available on"
                                    icon={
                                        <svg className="h-full w-auto" viewBox="0 0 41 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_indus)">
                                                <path d="M38.6954 82.3482V65.2355L20.3645 79.0347L2.03061 65.2295V82.3423L20.3615 96.1416L38.6924 82.3423L38.6954 82.3482Z" fill="url(#paint0_indus)" />
                                                <path d="M38.6954 55.8344V38.7216L20.3645 52.5209L2.03061 38.7186V55.8314L20.3615 69.6307L38.6924 55.8314L38.6954 55.8344Z" fill="url(#paint1_indus)" />
                                                <path d="M39.9135 19.552C39.9135 30.349 31.1615 39.1039 20.3615 39.1039C9.56154 39.1039 0.8125 30.349 0.8125 19.552C0.8125 8.75496 9.5645 0 20.3645 0C31.1644 0 39.9164 8.752 39.9164 19.552H39.9135Z" fill="url(#paint2_indus)" />
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_indus" x1="20.3645" y1="11.0572" x2="20.0408" y2="93.7381" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFAE00" />
                                                    <stop offset="0.5" stopColor="#DE007B" />
                                                    <stop offset="1" stopColor="#654CFF" />
                                                </linearGradient>
                                                <linearGradient id="paint1_indus" x1="20.3645" y1="11.0572" x2="20.0408" y2="93.7381" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFAE00" />
                                                    <stop offset="0.5" stopColor="#DE007B" />
                                                    <stop offset="1" stopColor="#654CFF" />
                                                </linearGradient>
                                                <linearGradient id="paint2_indus" x1="20.3645" y1="11.0572" x2="20.0408" y2="93.7381" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFAE00" />
                                                    <stop offset="0.5" stopColor="#DE007B" />
                                                    <stop offset="1" stopColor="#654CFF" />
                                                </linearGradient>
                                                <clipPath id="clip0_indus">
                                                    <rect width="39.1039" height="96.1416" fill="white" transform="translate(0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    }
                                    className="w-full"
                                />
                                <StoreButton
                                    href="https://apkpure.com/fuel-abc-save-fuel/com.fuel.abc/download/"
                                    storeName="APKPure"
                                    subtitle="Download APK"
                                    icon={
                                        <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0 C3.96 0 7.92 0 12 0 C13.54374275 2.84373664 15.05955399 5.69729981 16.5625 8.5625 C17.21895508 9.76229492 17.21895508 9.76229492 17.88867188 10.98632812 C20.5287024 16.07930039 21.58975128 19.22979165 20 25 C18.9375 27.4375 18.9375 27.4375 18 29 C18.99 29 19.98 29 21 29 C21 28.01 21 27.02 21 26 C22.65 26 24.3 26 26 26 C26 25.01 26 24.02 26 23 C27.32 23 28.64 23 30 23 C28.83654502 29.04996591 25.44000957 34.01791717 22 39 C20.125 38.75 20.125 38.75 18 38 C15.97244814 35.06004981 16 33.72295997 16 30 C9.4 30 2.8 30 -4 30 C-4.66 31.98 -5.32 33.96 -6 36 C-6.66 36.66 -7.32 37.32 -8 38 C-8.99 38 -9.98 38 -11 38 C-13.72571092 33.42080565 -14.25242549 31.14960686 -13 26 C-12.09484234 23.87517072 -11.10773944 21.78411036 -10.05859375 19.7265625 C-9.47529297 18.57285156 -8.89199219 17.41914063 -8.29101562 16.23046875 C-7.67335226 15.02855579 -7.05551151 13.82673398 -6.4375 12.625 C-5.81501504 11.40011546 -5.19326284 10.17485823 -4.57226562 8.94921875 C-3.05533977 5.96240349 -1.53106192 2.9795868 0 0 Z M5 12 C2.7986134 15.80427492 2.7986134 15.80427492 2 20 C4.64 20 7.28 20 10 20 C8.69844994 15.92035719 8.69844994 15.92035719 7 12 C6.34 12 5.68 12 5 12 Z " fill="#37C78E" transform="translate(16,4)" />
                                            <path d="M0 0 C0.66 0 1.32 0 2 0 C3.55091696 2.8387761 5.05987431 5.69791046 6.5625 8.5625 C7.00013672 9.36236328 7.43777344 10.16222656 7.88867188 10.98632812 C10.5287024 16.07930039 11.58975128 19.22979165 10 25 C8.9375 27.4375 8.9375 27.4375 8 29 C8.99 29 9.98 29 11 29 C11 28.01 11 27.02 11 26 C12.65 26 14.3 26 16 26 C16 25.01 16 24.02 16 23 C17.32 23 18.64 23 20 23 C18.83654502 29.04996591 15.44000957 34.01791717 12 39 C10.14453125 38.859375 10.14453125 38.859375 8 38 C6.76171875 35.515625 6.76171875 35.515625 5.6875 32.25 C3.47156778 25.94258165 0.68129835 20.60468343 -2.7421875 14.875 C-4.4717997 10.92160069 -3.69840144 8.87084738 -2.24609375 4.98046875 C-1.49739583 3.3203125 -0.74869792 1.66015625 0 0 Z " fill="#60CA5B" transform="translate(26,4)" />
                                            <path d="M0 0 C3.63 0 7.26 0 11 0 C12.65 3.3 14.3 6.6 16 10 C9.4 10 2.8 10 -4 10 C-2 4 -2 4 0 0 Z " fill="#23C56C" transform="translate(16,24)" />
                                            <path d="M0 0 C1.32 0 2.64 0 4 0 C2.83654502 6.04996591 -0.55999043 11.01791717 -4 16 C-5.875 15.75 -5.875 15.75 -8 15 C-10.02755186 12.06004981 -10 10.72295997 -10 7 C-8.35 6.67 -6.7 6.34 -5 6 C-5 5.01 -5 4.02 -5 3 C-3.35 3 -1.7 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#73DE92" transform="translate(42,27)" />
                                            <path d="M0 0 C1.32 0 2.64 0 4 0 C3.29445932 3.66881155 1.72264494 6.70450534 0 10 C-0.33 9.01 -0.66 8.02 -1 7 C-3.01508358 6.26676204 -3.01508358 6.26676204 -5 6 C-5 5.01 -5 4.02 -5 3 C-3.35 3 -1.7 3 0 3 C0 2.01 0 1.02 0 0 Z " fill="#ACEBBE" transform="translate(42,27)" />
                                        </svg>
                                    }
                                    className="w-full"
                                />
                                <StoreButton
                                    href={appStoreUrl}
                                    storeName="App Store"
                                    subtitle="Download on the"
                                    icon={
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.49.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                    }
                                    className="w-full"
                                />
                                <StoreButton
                                    href="/fuelabc.apk"
                                    storeName="Direct Download"
                                    subtitle="APK file"
                                    icon={<Download className="w-8 h-8" />}
                                    className="w-full sm:col-span-2 sm:w-auto sm:justify-self-center"
                                    variant="primary"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fadeUp" delay={0.5}>
                            <div className="pt-8 max-w-3xl mx-auto">
                                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg flex flex-col sm:flex-row items-center gap-6">
                                    <div className="shrink-0">
                                        <div className="w-24 h-24 bg-white rounded-xl border border-primary/20 p-2 shadow-sm">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src="/qr-download.png"
                                                    alt="Scan QR"
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-bold text-xl text-primary-dark mb-1">
                                            Join the Beta
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                            Experience the future of fuel management. Download the Beta APK to access experimental features.
                                        </p>
                                        <a href="/fuelabc-beta.apk" download className="inline-block">
                                            <Button size="sm" className="bg-gradient-to-r from-primary-dark to-gray-900 hover:from-primary hover:to-gray-800 text-white rounded-lg px-6 shadow-md transition-all">
                                                <Download className="w-4 h-4 mr-2" />
                                                Get Beta APK
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation animation="slideLeft" delay={0.4} className="relative flex justify-center">
                        {/* Mockup Placeholder */}
                        <div className="relative w-full max-w-[300px] h-[580px] bg-black rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden">
                            <Image
                                src="/app-mockup.jpg"
                                alt="FUELabc App Screenshot"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
                    </ScrollAnimation>
                </div>

                {/* Features Highlight */}
                <div className="max-w-4xl mx-auto mb-24">
                    <ScrollAnimation animation="fadeUp">
                        <h2 className="text-3xl font-bold font-heading text-center mb-12 text-primary-dark">
                            Why Choose FUELabc?
                        </h2>
                    </ScrollAnimation>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Save Money",
                                description: "Save up to ₹2,000 per month on fuel",
                                icon: <CheckCircle className="w-8 h-8 text-green-500 mb-3" />,
                                bg: "bg-green-50/50",
                                border: "border-green-100"
                            },
                            {
                                title: "Save Fuel",
                                description: "Real-time fuel consumption monitoring",
                                icon: <Smartphone className="w-8 h-8 text-blue-500 mb-3" />,
                                bg: "bg-blue-50/50",
                                border: "border-blue-100"
                            },
                            {
                                title: "Reduces CO2 Emission",
                                description: "Reduce emissions with smart navigation",
                                icon: <CheckCircle className="w-8 h-8 text-emerald-500 mb-3" />,
                                bg: "bg-emerald-50/50",
                                border: "border-emerald-100"
                            },
                        ].map((feature, index) => (
                            <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
                                <div className={`rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full border ${feature.border} ${feature.bg}`}>
                                    {feature.icon}
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
                        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-lg">
                            <Smartphone className="w-10 h-10 mx-auto mb-4 text-primary" />
                            <h3 className="font-bold text-xl mb-3 text-primary-dark">System Requirements</h3>
                            <div className="space-y-2 text-muted-foreground">
                                <p><strong className="text-foreground">iOS:</strong> Requires iOS 13.0 or later</p>
                                <p><strong className="text-foreground">Android:</strong> Requires Android 9.0 or later</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-6">
                                Need help? <Link href="/contact" className="text-primary hover:underline font-medium">Contact support</Link>
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </main >
    );
}
