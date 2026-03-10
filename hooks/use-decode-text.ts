"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789/_";

export function useDecodeText(originalText: string) {
    const [displayText, setDisplayText] = useState(originalText);
    const elementRef = useRef<HTMLElement | null>(null);
    const hasDecoded = useRef(false);

    useEffect(() => {
        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // Start scrambled
        setDisplayText(
            originalText
                .split("")
                .map((char) => (char === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
                .join("")
        );

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasDecoded.current) {
                    hasDecoded.current = true;

                    let iterations = 0;
                    const maxIterations = 20; // 600ms total at 30ms per interval

                    const interval = setInterval(() => {
                        setDisplayText((prev) =>
                            prev
                                .split("")
                                .map((char, index) => {
                                    if (char === " ") return " ";
                                    if (index < iterations / (maxIterations / originalText.length)) {
                                        return originalText[index];
                                    }
                                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                                })
                                .join("")
                        );

                        iterations++;

                        if (iterations >= maxIterations) {
                            clearInterval(interval);
                            setDisplayText(originalText);
                        }
                    }, 30);
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
    }, [originalText]);

    return { displayText, elementRef };
}
