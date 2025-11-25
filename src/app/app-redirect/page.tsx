"use client";

import { useEffect } from "react";

export default function AppRedirect() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        // URLs for the app stores
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.fuel.abc&hl=en_IN";
        const appStoreUrl = "https://apps.apple.com/in/app/fuel-abc/id1444744807";

        // Detect iOS
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = appStoreUrl;
        }
        // Detect Android
        else if (/android/i.test(userAgent)) {
            window.location.href = playStoreUrl;
        }
        // Default to Play Store for other devices
        else {
            window.location.href = playStoreUrl;
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-white to-primary/5">
            <div className="text-center space-y-4 p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <h2 className="text-xl font-semibold text-primary-dark">Redirecting to App Store...</h2>
                <p className="text-muted-foreground">Please wait while we redirect you to download FUELabc</p>
            </div>
        </div>
    );
}
