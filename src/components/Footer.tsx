import { Mail, Globe } from "lucide-react";

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

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="w-full px-2 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold tracking-[0.2em] uppercase mb-4">
                            ALP YAPIM
                        </h3>
                        <p className="text-sm text-muted leading-relaxed max-w-xs">
                            Profesyonel drone çekimi, mimari fotoğraf ve endüstriyel
                            görüntüleme hizmetleri.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                            Navigasyon
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="#projeler"
                                className="text-sm text-accent hover:text-foreground transition-colors"
                            >
                                Projeler
                            </a>
                            <a
                                href="#hizmetler"
                                className="text-sm text-accent hover:text-foreground transition-colors"
                            >
                                Hizmetler
                            </a>
                            <a
                                href="#hakkimizda"
                                className="text-sm text-accent hover:text-foreground transition-colors"
                            >
                                Hakkımızda
                            </a>
                            <a
                                href="#iletisim"
                                className="text-sm text-accent hover:text-foreground transition-colors"
                            >
                                İletişim
                            </a>
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                            Bizi Takip Edin
                        </h4>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <InstagramIcon size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                                aria-label="YouTube"
                            >
                                <YoutubeIcon size={16} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon size={16} />
                            </a>
                            <a
                                href="mailto:info@alpyapim.com"
                                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
                                aria-label="E-posta"
                            >
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted tracking-wide">
                        &copy; {currentYear} ALP YAPIM. Tüm hakları saklıdır.
                    </p>
                    <p className="text-xs text-muted/50 tracking-wide">
                        Profesyonel Görüntüleme Hizmetleri
                    </p>
                </div>
            </div>
        </footer>
    );
}
