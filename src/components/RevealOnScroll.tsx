"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export function RevealOnScroll({
    children,
    className = "",
    delay = 0,
    threshold = 0.15,
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add("visible");
                    }, delay);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}
