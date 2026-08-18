"use client";

import { Camera, Plane, Building2, Box } from "lucide-react";

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    stat: string;
    statLabel: string;
}

const services: Service[] = [
    {
        icon: <Plane size={28} strokeWidth={1.2} />,
        title: "Drone Çekimi",
        description:
            "Yüksek çözünürlüklü hava görüntüleme ile projelerinizi kuş bakışı perspektifinden belgeleyin. 4K video ve fotoğraf.",
        stat: "4K",
        statLabel: "Ultra HD",
    },
    {
        icon: <Building2 size={28} strokeWidth={1.2} />,
        title: "Mimari Fotoğraf",
        description:
            "Bina dış cepheleri, iç mekanlar ve mimari detayların profesyonel fotoğraflanması.",
        stat: "360",
        statLabel: "Derece Görüntü",
    },
    {
        icon: <Camera size={28} strokeWidth={1.2} />,
        title: "Endüstriyel Çekimler",
        description:
            "Fabrikalar, enerji santralleri ve endüstriyel tesislerin kapsamlı görsel dokümantasyonu.",
        stat: "50+",
        statLabel: "Tamamlanan Proje",
    },
    {
        icon: <Box size={28} strokeWidth={1.2} />,
        title: "Ürün Fotoğrafçılığı",
        description:
            "Ürünler, ekipmanlar ve teknik parçaların stüdyo kalitesinde profesyonel çekimi.",
        stat: "PRO",
        statLabel: "Stüdyo Kalite",
    },
];

export function Services() {
    const handleServiceClick = (categoryHint: string) => {
        // Dispatch custom event first
        window.dispatchEvent(new CustomEvent('setProjectCategory', { detail: categoryHint }));

        // Scroll to the projects header smoothly
        const projelerEl = document.getElementById('projeler');
        if (projelerEl) {
            const headerOffset = 100;
            const elementPosition = projelerEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="hizmetler" className="py-24 md:py-32 bg-surface">
            <div className="w-full px-2">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                        Uzmanlik Alanlarimiz
                    </p>
                    <h2 className="font-heading text-3xl md:text-5xl font-normal tracking-tight">
                        Hizmetler
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            onClick={() => handleServiceClick(service.title)}
                            className="bg-surface p-8 md:p-10 h-full group hover:bg-surface-hover transition-colors duration-500 cursor-pointer"
                        >
                                {/* Icon */}
                                <div className="text-foreground mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-semibold tracking-[0.1em] uppercase mb-4">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Stat */}
                                <div className="mt-auto pt-6 border-t border-border">
                                    <span className="text-2xl font-bold">
                                        {service.stat}
                                    </span>
                                    <p className="text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
                                        {service.statLabel}
                                    </p>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
