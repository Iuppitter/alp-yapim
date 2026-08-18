"use client";

import { useState, useEffect, useMemo } from "react";
import { urlFor } from "@/lib/sanity";

interface Project {
    _id: string;
    title: string;
    slug: string;
    category: string;
    imageCount: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    coverImage: any;
    location: string;
}

export function Projects({ initialProjects = [] }: { initialProjects?: Project[] }) {
    const [activeCategory, setActiveCategory] = useState("Tümü");

    const dynamicCategories = useMemo(() =>
        ["Tümü", ...Array.from(new Set(initialProjects.map(p => p.category).filter(Boolean)))],
        [initialProjects]
    );

    useEffect(() => {
        const handleCategorySelect = (e: CustomEvent) => {
            const requestedCategory = e.detail as string;
            const reqLower = requestedCategory.toLowerCase();

            const perfectMatch = dynamicCategories.find(c => c.toLowerCase() === reqLower);
            const partialMatch = dynamicCategories.find(c => {
                const catLower = c.toLowerCase();
                return catLower.includes(reqLower) || reqLower.includes(catLower);
            });

            if (perfectMatch) {
                setActiveCategory(perfectMatch);
            } else if (partialMatch) {
                setActiveCategory(partialMatch);
            }
        };

        window.addEventListener('setProjectCategory', handleCategorySelect as EventListener);
        return () => window.removeEventListener('setProjectCategory', handleCategorySelect as EventListener);
    }, [dynamicCategories]);

    const filteredProjects = activeCategory === "Tümü"
        ? initialProjects
        : initialProjects.filter(p => p.category === activeCategory);

    return (
        <section id="projeler" className="py-24 md:py-32">
            <div className="w-full px-2">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                            Portfolyo
                        </p>
                        <h2 className="font-heading text-3xl md:text-5xl font-normal tracking-tight">
                            Projeler
                        </h2>
                    </div>
                    <p className="text-sm text-muted max-w-sm leading-relaxed">
                        Endüstriyel tesislerden mimari yapılara, enerji santrallerinden
                        ulaşım projelerine kadar geniş bir yelpazede çalışıyoruz.
                    </p>
                </div>

                {/* Filter Menu */}
                <div className="flex flex-wrap items-center gap-2 md:gap-6 mb-12">
                    {dynamicCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-[11px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 border rounded-full ${activeCategory === category
                                ? "bg-foreground text-background border-foreground"
                                : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border mb-12" />

                {/* Project Grid / Masonry Layout */}
                <div className="columns-1 md:columns-2 gap-4 transition-all duration-500">
                    {filteredProjects.map((project) => (
                        <div className="break-inside-avoid mb-4" key={`${activeCategory}-${project._id}`}>
                            <a
                                href={`/project/${project.slug}`}
                                className="group block relative cursor-pointer"
                            >
                                {/* Brutalist Info Bar (Top) */}
                                <div className="flex items-center justify-between py-1 px-2 border-b border-foreground bg-transparent text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-150 font-['Helvetica','Arial',sans-serif]">
                                    <h3 className="text-[10px] md:text-xs font-semibold uppercase truncate">
                                        {project.title}, {project.category}
                                    </h3>
                                    <span className="text-[10px] md:text-xs font-semibold flex-shrink-0 ml-4">
                                        ({project.imageCount})
                                    </span>
                                </div>

                                {/* Image - Natural Aspect Ratio for Masonry */}
                                <div className="w-full bg-surface">
                                    <img
                                        src={project.coverImage ? urlFor(project.coverImage).width(800).format('webp').url() : ""}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto block object-cover"
                                    />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center text-muted border border-dashed border-border">
                        Bu kategoride henüz proje bulunmuyor.
                    </div>
                )}
            </div>
        </section>
    );
}
