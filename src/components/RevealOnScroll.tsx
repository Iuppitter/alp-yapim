"use client";

import type { ReactNode } from "react";

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export function RevealOnScroll({
    children,
    className = "",
}: RevealOnScrollProps) {
    // RevealAnimations removed natively per user request. Elements load immediately.
    return (
        <div className={className}>
            {children}
        </div>
    );
}
