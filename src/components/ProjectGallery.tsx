"use client";

import { useState } from "react";
import Image from "next/image";
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
                BU PROJE İÇİN HENÜZ GALERİ FOTOĞRAFI YÜKLENMEMİŞ.
            </div>
        );
    }

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((img, i) => {
                    // Generate full-res URL directly directly for zoom
                    const fullUrl = urlFor(img).url();
                    // Generate specialized thumbnail for rendering smoothly
                    const thumbUrl = urlFor(img).width(1200).url();

                    return (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(fullUrl)}
                            className="break-inside-avoid w-full bg-surface border border-transparent hover:border-foreground cursor-pointer transition-colors duration-150 p-2 md:p-3 relative"
                        >
                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={thumbUrl}
                                    alt={`${title} - Fotograf ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
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
