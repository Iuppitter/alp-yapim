import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Configure local GR Read One font
const grReadOne = localFont({
    src: "../../public/GR Read One.otf",
    display: "swap",
    variable: "--font-gr-read",
});

export const metadata: Metadata = {
    title: {
        template: '%s | ALP YAPIM',
        default: 'ALP YAPIM | Profesyonel Görüntüleme',
    },
    description: "Endüstriyel tesisler, mimari yapılar ve büyük ölçekli projeler için profesyonel drone çekimi ve görüntüleme hizmetleri.",
    keywords: ["drone çekimi", "mimari fotoğrafçılık", "endüstriyel tesis", "proje takibi", "ürün fotoğrafçılığı", "video prodüksiyon"],
    authors: [{ name: "Alp Yapım" }],
    openGraph: {
        title: 'ALP YAPIM | Portfolyo',
        description: 'Mimari ve Endüstriyel Görüntüleme Hizmetleri.',
        url: 'https://alp-yapim.com',
        siteName: 'ALP YAPIM',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: 'https://alp-yapim.com/images/hero.webp',
                width: 1920,
                height: 1080,
                alt: 'Alp Yapım Hero Image',
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className={`${grReadOne.variable} font-sans`}>
            <body className="antialiased selection:bg-foreground/10 selection:text-foreground bg-background text-foreground overflow-x-hidden min-h-screen">
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "ALP YAPIM",
                            "url": "https://alp-yapim.com",
                            "logo": "https://alp-yapim.com/icon.svg",
                            "description": "Endustriyel tesisler, mimari yapilar ve buyuk olcekli projeler icin profesyonel drone cekimi ve goruntuleme hizmetleri.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Istanbul",
                                "addressCountry": "TR"
                            },
                            "sameAs": []
                        }),
                    }}
                />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
