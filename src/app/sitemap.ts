import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await client.fetch<{ slug: string; _updatedAt: string }[]>(
        `*[_type == "project"]{ "slug": slug.current, _updatedAt }`
    );

    const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `https://alp-yapim.com/project/${p.slug}`,
        lastModified: new Date(p._updatedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: 'https://alp-yapim.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...projectUrls,
    ];
}
