"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";
import { X } from "lucide-react";

interface ProjectGalleryProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: any[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) {
        return (
            <div className="py-20 text-center text-[10px] uppercase font-bold tracking-widest text-muted border border-dashed border-border mt-8">
                BU PROJE ICIN HENUZ GALERI FOTOGRAFI YUKLENMEMIS.
            </div>
        );
    }

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                {images.map((img, i) => {
                    const fullUrl = urlFor(img).url();
                    const thumbUrl = urlFor(img).width(1200).format('webp').url();

                    return (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(fullUrl)}
                            className="break-inside-avoid mb-4 w-full bg-surface border border-transparent hover:border-foreground cursor-pointer transition-colors duration-150 p-2 md:p-3"
                        >
                            <img
                                src={thumbUrl}
                                alt={`${title} - Fotograf ${i + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto block"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Brutalist Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background/60 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        className="fixed top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center border border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors z-[110] outline-none"
                        aria-label="Kapat"
                    >
                        <X size={24} strokeWidth={1.5} />
                    </button>

                    <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt={`${title} - Detay`}
                            className="max-w-full max-h-[95vh] w-auto h-auto object-contain shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
