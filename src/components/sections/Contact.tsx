"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MapPin, Phone, Mail as MailIcon, Send, Loader2 } from "lucide-react";

interface ContactProps {
    settings?: {
        phone?: string;
        email?: string;
    };
}

export function Contact({ settings }: ContactProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };
    return (
        <section id="iletisim" className="py-24 md:py-32 bg-surface">
            <div className="w-full px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side - Info */}
                    <div>
                        <RevealOnScroll>
                            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                                İletişim
                            </p>
                            <h2 className="font-heading text-3xl md:text-5xl font-normal tracking-tight mb-6">
                                Projenizi
                                <br />
                                <span>Konusalim</span>
                            </h2>
                            <p className="text-base text-accent/80 leading-relaxed mb-12 max-w-md">
                                Profesyonel görüntüleme ihtiyaclariniz icin bize ulaşın.
                                Projenizi birlikte değerlendirelim.
                            </p>
                        </RevealOnScroll>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            <RevealOnScroll delay={100}>
                                <div className="flex items-center gap-6 p-5 border border-border hover:border-foreground/30 transition-colors duration-300">
                                    <div className="flex-shrink-0 flex items-center justify-center text-foreground">
                                        <MailIcon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                                            E-posta
                                        </p>
                                        <p className="text-sm md:text-base text-foreground">{settings?.email || "info@alp-yapim.com"}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={200}>
                                <div className="flex items-center gap-6 p-5 border border-border hover:border-foreground/30 transition-colors duration-300">
                                    <div className="flex-shrink-0 flex items-center justify-center text-foreground">
                                        <Phone size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                                            Telefon
                                        </p>
                                        <p className="text-sm md:text-base text-foreground">{settings?.phone || "+90 507 429 97 27"}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll delay={300}>
                                <div className="flex items-center gap-6 p-5 border border-border hover:border-foreground/30 transition-colors duration-300">
                                    <div className="flex-shrink-0 flex items-center justify-center text-foreground">
                                        <MapPin size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                                            Konum
                                        </p>
                                        <p className="text-sm md:text-base text-foreground">Istanbul, Türkiye</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <RevealOnScroll delay={150}>
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                                        Adınız
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Adınız Soyadınız"
                                        className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="ornek@email.com"
                                        className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors duration-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Proje turu ve kapsamı"
                                    className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                                    Mesajiniz
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Projeniz hakkinda kısa bilgi verin..."
                                    className="w-full bg-transparent border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/50 transition-colors duration-300 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${status === "success" ? "bg-green-600/10 text-green-500 border border-transparent" : "bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground"}`}
                            >
                                {status === "loading" ? "GÖNDERİLİYOR..." : status === "success" ? "MESAJINIZ İLETİLDİ" : "MESAJ GÖNDER"}
                                {status === "loading" ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : status !== "success" ? (
                                    <Send
                                        size={14}
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                ) : null}
                            </button>

                            {status === "error" && (
                                <p className="text-sm font-semibold text-red-500 uppercase tracking-widest mt-2">Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.</p>
                            )}
                        </form>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
