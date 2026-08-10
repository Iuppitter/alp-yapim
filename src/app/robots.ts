import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/studio/'], // Block search engines from crawling the Sanity Studio
        },
        sitemap: 'https://alp-yapim.com/sitemap.xml',
    };
}
