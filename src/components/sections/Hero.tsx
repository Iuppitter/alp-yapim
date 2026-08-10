"use client";

import Image from "next/image";

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Full-bleed background image */}
            <Image
                src="/images/hero.webp"
                fill
                priority
                sizes="100vw"
                className="object-cover"
                alt="Alp Yapim Showcase"
            />

            {/* Subtle dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            {/* Top-left: Company name, small and quiet */}
            <div className="absolute top-0 left-0 w-full pt-6 px-4 md:px-8 z-10">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/70">
                    EST. 2024
                </span>
            </div>

            {/* Bottom content block */}
            <div className="absolute bottom-0 left-0 w-full px-4 md:px-8 pb-10 md:pb-16 z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    {/* Left: Title + Description */}
                    <div className="max-w-xl">
                        <h1 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-normal uppercase text-white mb-4">
                            ALP YAPIM
                        </h1>
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-sm">
                            Endüstriyel tesisler ve mimari yapılar için profesyonel görüntüleme ve prodüksiyon hizmetleri.
                        </p>
                    </div>

                    {/* Right: CTA */}
                    <a
                        href="#projeler"
                        className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white border border-white/40 px-6 py-3 hover:bg-white hover:text-black transition-colors w-fit"
                    >
                        Projeleri İncele <span className="text-base leading-none">&#8595;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
