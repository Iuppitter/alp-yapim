"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface Partner {
    _id: string;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logo: any;
}

export function Partners({ partners = [] }: { partners?: Partner[] }) {
    if (!partners || partners.length === 0) return null;

    // Duplicate array multiple times to ensure seamless infinite scroll
    // Depending on the number of items, we might need a lot of duplicates to cover the screen
    const scrollItems = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="w-full py-8 md:py-12 border-b border-border bg-background overflow-hidden relative">

            {/* Gallery Frame Style Title Bar */}
            <div className="flex items-center justify-between py-2 px-2 bg-transparent text-foreground mb-6 md:mb-8 font-['Helvetica','Arial',sans-serif] w-full">
                <h3 className="text-[10px] md:text-xs font-bold uppercase truncate tracking-widest pl-2">
                    İŞ ORTAKLARIMIZ
                </h3>
            </div>

            <RevealOnScroll>
                <div className="flex flex-col items-center">

                    {/* Gradient Fades for Smooth Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                    {/* Marquee Track Container */}
                    <div className="w-full flex">
                        <div className="flex shrink-0 animate-[marquee_100s_linear_infinite] items-center gap-8 md:gap-14 w-max px-8">
                            {scrollItems.map((partner, index) => {
                                if (!partner.logo) return null;
                                return (
                                    <div key={`${partner._id}-${index}`} className="relative h-14 md:h-16 w-36 md:w-48 flex-shrink-0 mx-2 md:mx-4">
                                        <Image
                                            src={urlFor(partner.logo).width(400).format('webp').url()}
                                            alt={partner.title}
                                            fill
                                            sizes="200px"
                                            className="object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
