
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { client, SITE_SETTINGS_QUERY } from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
    const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": category->title,
      "imageCount": count(gallery),
      coverImage
  }`;

    const partnersQuery = `*[_type == "partner"] | order(_createdAt desc) {
      _id,
      title,
      logo,
      url
  }`;

    const [initialProjects, partners, settings] = await Promise.all([
        client.fetch(projectsQuery),
        client.fetch(partnersQuery),
        client.fetch(SITE_SETTINGS_QUERY)
    ]);

    return (
        <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                {/* 1. Hero Section */}
                <Hero settings={settings} />

                {/* 2. Partners Marquee (Trust Bar) */}
                <Partners partners={partners} />

                {/* 3. Projects Section */}
                <Projects initialProjects={initialProjects} />

                {/* 3. Services Section */}
                <Services />

                {/* 4. Contact Section */}
                <Contact settings={settings} />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
