import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface HeroProps {
    settings?: {
        title?: string;
        tagline?: string;
        description?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        heroImage?: any;
        heroVideoFileUrl?: string;
        heroVideoUrl?: string;
    };
}

export function Hero({ settings }: HeroProps) {
    const videoUrl = settings?.heroVideoUrl || settings?.heroVideoFileUrl;
    const posterUrl = settings?.heroImage ? urlFor(settings.heroImage).width(1920).quality(85).url() : "/images/hero.webp";

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {videoUrl ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={posterUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <Image
                    src={posterUrl}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    alt={settings?.title || "Alp Yapım"}
                />
            )}

            {/* Subtle dark gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />



            {/* Bottom content block */}
            <div className="absolute bottom-0 left-0 w-full px-4 md:px-8 pb-10 md:pb-16 z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    {/* Left: Title + Description */}
                    <div className="max-w-xl">
                        <h1 className="font-heading text-5xl md:text-7xl leading-[0.9] tracking-tight font-normal uppercase text-white mb-4 inline-block scale-y-75 origin-bottom-left">
                            {settings?.title || "ALP YAPIM"}
                        </h1>
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-sm">
                            {settings?.description || "Endüstriyel tesisler ve mimari yapılar için profesyonel görüntüleme ve prodüksiyon hizmetleri."}
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
