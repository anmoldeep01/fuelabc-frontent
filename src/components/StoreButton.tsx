import React from "react";

interface StoreButtonProps {
    href: string;
    storeName: string;
    subtitle: string;
    icon: React.ReactNode;
    className?: string;
    variant?: "default" | "primary";
}

export function StoreButton({ href, storeName, subtitle, icon, className = "", variant = "default" }: StoreButtonProps) {
    const bgClass = variant === "primary"
        ? "bg-gradient-to-br from-primary to-green-600 hover:shadow-green-500/25 hover:border-green-400/50"
        : "bg-gradient-to-br from-primary-dark to-gray-900 hover:shadow-primary/25 hover:border-primary/50";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block transform hover:-translate-y-1 transition-transform duration-300 ${className}`}
        >
            <div className={`${bgClass} text-white rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg border border-white/10 transition-all duration-300 min-w-[160px]`}>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <div className="text-[9px] font-medium text-gray-100 uppercase tracking-wide leading-tight opacity-90">{subtitle}</div>
                    <div className="text-base font-bold leading-none mt-0.5">{storeName}</div>
                </div>
            </div>
        </a>
    );
}
