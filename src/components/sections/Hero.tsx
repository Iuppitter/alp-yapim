"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col pt-24 md:pt-32 px-2 bg-background">

            {/* Top Typographic Header (Editorial Grid) */}
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-end pb-4 border-b border-border transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tighter uppercase whitespace-nowrap text-foreground">
                    ALP YAPIM
                </h1>

                <div className="max-w-xs md:max-w-sm mt-6 md:mt-0 text-left md:text-right pb-2">
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-muted leading-relaxed">
                        Endüstriyel Tesisler & Mimari Yapılar İçin Profesyonel Prodüksiyon
                    </p>
                </div>
            </div>

            {/* Massive Middle Image Block */}
            <div className={`flex-1 w-full relative mt-2 mb-2 bg-surface overflow-hidden transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Image
                    src="/images/hero.webp"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    alt="Alp Yapim Showcase"
                />
            </div>

            {/* Bottom Info Bar / CTA */}
            <div className={`flex justify-between items-center py-4 border-t border-border transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-foreground">EST. 2024</span>

                <a
                    href="#projeler"
                    className="group flex flex-col items-end"
                >
                    <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-foreground group-hover:text-muted transition-colors">Projeleri Keşfet</span>
                    <span className="text-xl leading-none text-foreground mt-1">&darr;</span>
                </a>
            </div>
        </section>
    );
}
