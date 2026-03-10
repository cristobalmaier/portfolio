"use client";

import { useEffect, useRef } from "react";

export function useScanLines() {
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (elementRef.current) {
                elementRef.current.classList.add("is-visible");
            }
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    return { elementRef };
}
