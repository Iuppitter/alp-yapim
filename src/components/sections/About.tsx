"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function About() {
    return (
        <section id="hakkimizda" className="py-24 md:py-32">
            <div className="w-full px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <RevealOnScroll>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/hero.png"
                                alt="ALP YAPIM Hakkında"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Decorative corner */}
                            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-foreground translate-x-4 translate-y-4" />
                        </div>
                    </RevealOnScroll>

                    {/* Text Side */}
                    <div>
                        <RevealOnScroll>
                            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                                Hakkımızda
                            </p>
                            <h2 className="font-heading text-3xl md:text-5xl font-normal tracking-tight mb-8">
                                Vizyonunuzu
                                <br />
                                <span>Görselleştirelim</span>
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={100}>
                            <p className="text-base text-accent/80 leading-relaxed mb-6">
                                ALP YAPIM olarak, büyük ölçekli endüstriyel ve mimari projelerin
                                profesyonel görsel dokümantasyonunu yapıyoruz. Drone teknolojisi
                                ve ileri görüntüleme teknikleri kullanarak, projelerinizin her
                                açısından en etkileyici kareleri yakalıyoruz.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <p className="text-base text-accent/80 leading-relaxed mb-10">
                                Fabrikalardan hastanelere, otellerden ulaşım projelerine kadar
                                geniş bir sektörde deneyim sahibiyiz. Her projede teknik
                                mükemmellik ve yaratıcı vizyonu bir araya getiriyoruz.
                            </p>
                        </RevealOnScroll>

                        {/* Stats */}
                        <RevealOnScroll delay={300}>
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                                <div>
                                    <span className="font-heading text-3xl md:text-4xl font-bold">
                                        50+
                                    </span>
                                    <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">
                                        Proje
                                    </p>
                                </div>
                                <div>
                                    <span className="font-heading text-3xl md:text-4xl font-bold">
                                        5+
                                    </span>
                                    <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">
                                        Yıl Deneyim
                                    </p>
                                </div>
                                <div>
                                    <span className="font-heading text-3xl md:text-4xl font-bold">
                                        30+
                                    </span>
                                    <p className="text-xs tracking-[0.15em] uppercase text-muted mt-2">
                                        Mutlu Müşteri
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
