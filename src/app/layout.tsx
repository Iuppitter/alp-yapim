import type { Metadata } from "next";
import localFont from "next/font/local";
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
    description: "Endüstriyel tesisler, mimari yapılar ve buyuk ölçekli projeler icin profesyonel drone çekimi ve görüntüleme hizmetleri.",
    openGraph: {
        title: 'ALP YAPIM | Portfolyo',
        description: 'Mimari ve Endüstriyel Görüntüleme Hizmetleri.',
        url: 'https://alpyapim.com',
        siteName: 'ALP YAPIM',
        locale: 'tr_TR',
        type: 'website',
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
            </body>
        </html>
    );
}
