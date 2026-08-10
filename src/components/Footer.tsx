import { client } from "@/lib/sanity";
import { SocialLinks } from "./SocialLinks";

export async function Footer() {
    const currentYear = new Date().getFullYear();

    // Fetch site settings from CMS natively (Server Component)
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);

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
                        <SocialLinks settings={siteSettings} />
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
