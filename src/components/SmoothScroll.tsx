"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links for smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href?.startsWith("/#")) {
                    // Handle /#id links (common in Next.js for home page anchors)
                    const id = href.replace("/", "");
                    const element = document.querySelector(id);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element as HTMLElement);
                    }
                } else if (href?.startsWith("#")) {
                    // Handle #id links
                    const element = document.querySelector(href);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element as HTMLElement);
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    lenisRef.current.scrollTo(element as HTMLElement, { immediate: true });
                    return;
                }
            }
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
