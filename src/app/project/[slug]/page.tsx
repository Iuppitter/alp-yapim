import { client } from "@/lib/sanity";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ProjectGallery";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const query = `*[_type == "project" && slug.current == $slug][0] { title, description, coverImage }`;
    const project = await client.fetch(query, { slug });

    if (!project) return {};

    const ogImage = project.coverImage ? urlFor(project.coverImage).width(1200).height(630).url() : undefined;

    return {
        title: project.title,
        description: project.description?.substring(0, 160) || "Alp Yapım profesyonel görüntüleme projesi detayları.",
        openGraph: {
            title: `${project.title} | ALP YAPIM`,
            description: project.description?.substring(0, 160) || "Alp Yapım profesyonel görüntüleme projesi detayları.",
            type: "article",
            images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
        },
    };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const query = `*[_type == "project" && slug.current == $slug][0] {
        title,
        "category": category->title,
        description,
        gallery
    }`;
    const project = await client.fetch(query, { slug });

    if (!project) notFound();

    return (
        <main className="min-h-screen flex flex-col pt-32">
            <Header />

            <div className="flex-1 w-full px-2 py-12">
                <div className="mb-12">
                    <Link href="/#projeler" className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground mb-8 inline-block border-b border-transparent hover:border-foreground transition-all duration-300">
                        &larr; PORTFOLYOYU GERİ DÖN
                    </Link>

                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-normal mb-4">
                        {project.title}
                    </h1>

                    <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-muted mb-8">
                        {project.category}
                    </p>

                    {project.description && (
                        <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 mb-12">
                            {project.description}
                        </p>
                    )}
                </div>

                {/* Internal Masonry Gallery rendered via Interactive Client Component */}
                <ProjectGallery images={project.gallery} title={project.title} />
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
