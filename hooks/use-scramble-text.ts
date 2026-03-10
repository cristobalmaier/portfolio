import { useEffect, useState, useCallback, useRef } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789/_";

export function useScrambleText(originalText: string) {
    const [displayText, setDisplayText] = useState(originalText);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = useCallback(() => {
        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        if (isScrambling) return;
        setIsScrambling(true);

        let iterations = 0;
        const maxIterations = 10; // 300ms total at 30ms per interval

        intervalRef.current = setInterval(() => {
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
                clearInterval(intervalRef.current!);
                setDisplayText(originalText);
                setIsScrambling(false);
            }
        }, 30);
    }, [originalText, isScrambling]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return { displayText, scramble };
}
