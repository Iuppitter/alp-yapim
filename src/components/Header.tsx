"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#hizmetler", label: "Hizmetler" },
    { href: "#iletisim", label: "İletişim" },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 pointer-events-none ${scrolled ? 'mix-blend-difference' : 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]'}`}>
                <div className="w-full px-2 pointer-events-auto">
                    <div className="flex flex-wrap items-center justify-between gap-4 h-auto pt-2 pb-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={(e) => {
                                if (isHomePage) {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight uppercase text-white hover:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] inline-block scale-y-75 origin-left ${isHomePage && !scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
                                }`}
                        >
                            ALP YAPIM
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex flex-wrap items-center justify-end gap-x-6 lg:gap-x-10 gap-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight uppercase text-white hover:opacity-80 transition-opacity duration-300 inline-block scale-y-75 origin-left"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button - Using mix-blend for text so this is naturally inverted */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden relative z-[60] w-12 h-12 flex items-center justify-end text-white"
                            aria-label="Menu"
                        >
                            {menuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-background transition-all duration-500 ${menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-heading text-3xl font-normal tracking-tight uppercase text-foreground hover:opacity-80 transition-all duration-300 inline-block scale-y-75 origin-left"
                            style={{
                                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                                opacity: menuOpen ? 1 : 0,
                                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Brutalist Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed z-50 bottom-6 right-6 md:right-8 w-12 h-12 border border-foreground bg-foreground text-background flex items-center justify-center transition-all duration-500 hover:bg-background hover:text-foreground outline-none ${scrolled ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-12 opacity-0 pointer-events-none'
                    }`}
                aria-label="Yukarı Dön"
            >
                {/* Minimalist Arrow */}
                <span className="text-xl font-bold font-mono tracking-tighter leading-none mb-1">↑</span>
            </button>
        </>
    );
}
