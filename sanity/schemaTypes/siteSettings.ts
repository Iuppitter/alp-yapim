import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Ayarları",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Site Başlığı",
            type: "string",
            initialValue: "ALP YAPIM",
        }),
        defineField({
            name: "tagline",
            title: "Slogan",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Site Açıklamasi",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "heroImage",
            title: "Hero Görseli (Poster / Fallback)",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Video yüklenene kadar veya mobilde gösterilecek kapak görseli.",
        }),
        defineField({
            name: "heroVideo",
            title: "Hero Videosu (Dosya Yükleme)",
            type: "file",
            options: {
                accept: "video/mp4,video/webm",
            },
            description: "MP4 veya WebM formatında optimize edilmiş arka plan videosu yükleyin.",
        }),
        defineField({
            name: "heroVideoUrl",
            title: "Hero Videosu (Harici CDN / URL)",
            type: "url",
            description: "Dosya yüklemek yerine harici bir CDN (Cloudflare R2, Vercel Blob vb.) bağlantısı girmek isterseniz.",
        }),
        defineField({
            name: "aboutText",
            title: "Hakkımızda Metni",
            type: "text",
            rows: 6,
        }),
        defineField({
            name: "email",
            title: "E-posta",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Telefon",
            type: "string",
        }),
        defineField({
            name: "instagram",
            title: "Instagram",
            type: "url",
        }),
        defineField({
            name: "youtube",
            title: "YouTube",
            type: "url",
        }),
        defineField({
            name: "linkedin",
            title: "LinkedIn",
            type: "url",
        }),
    ],
    preview: {
        prepare() {
            return {
                title: "Site Ayarları",
            };
        },
    },
});
