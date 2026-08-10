"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

interface SocialLinksProps {
    settings: {
        instagram?: string;
        youtube?: string;
        linkedin?: string;
    } | null;
}

export function SocialLinks({ settings }: SocialLinksProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [platformName, setPlatformName] = useState("");

    const handleSocialClick = (e: React.MouseEvent, url: string | undefined, name: string) => {
        if (!url) {
            e.preventDefault();
            setPlatformName(name);
            setModalOpen(true);
        }
    };

    return (
        <>
            <div className="flex items-center gap-4">
                <a
                    href={settings?.instagram || "#"}
                    onClick={(e) => handleSocialClick(e, settings?.instagram, "Instagram")}
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                    target={settings?.instagram ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label="Instagram"
                >
                    <InstagramIcon size={16} />
                </a>
                <a
                    href={settings?.youtube || "#"}
                    onClick={(e) => handleSocialClick(e, settings?.youtube, "YouTube")}
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                    target={settings?.youtube ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label="YouTube"
                >
                    <YoutubeIcon size={16} />
                </a>
                <a
                    href={settings?.linkedin || "#"}
                    onClick={(e) => handleSocialClick(e, settings?.linkedin, "LinkedIn")}
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                    target={settings?.linkedin ? "_blank" : "_self"}
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedinIcon size={16} />
                </a>
                <a
                    href="mailto:info@alp-yapim.com"
                    className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                    aria-label="E-posta"
                >
                    <Mail size={16} />
                </a>
            </div>

            {/* Brutalist Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4">
                    <div className="bg-surface border border-border max-w-sm w-full p-8 flex flex-col items-start gap-4">
                        <h3 className="font-heading text-2xl uppercase tracking-tighter text-foreground">Hesap Bulunamadı</h3>
                        <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                            <strong>{platformName}</strong> sosyal medya adresimiz henüz eklenmemiştir. Sanity CMS panelinden bir bağlantı eklediğinizde bu link otomatik olarak aktif olacaktır.
                        </p>
                        <button
                            onClick={() => setModalOpen(false)}
                            className="mt-4 bg-foreground text-background px-6 py-3 border border-foreground text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-colors"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
