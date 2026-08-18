import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col pt-32 bg-background text-foreground">
            <Header />

            <div className="flex-1 w-full px-2 py-12 md:py-24 flex flex-col items-center justify-center text-center">
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-4 text-foreground/20">
                    404
                </h1>
                
                <h2 className="font-heading text-2xl md:text-4xl tracking-tight uppercase mb-6">
                    Sayfa Bulunamadı
                </h2>
                
                <p className="max-w-md text-sm md:text-base text-muted leading-relaxed mb-10">
                    Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.
                </p>
                
                <Link 
                    href="/"
                    className="inline-flex items-center justify-center border border-foreground bg-foreground text-background px-8 py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-background hover:text-foreground transition-all duration-300"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </main>
    );
}
