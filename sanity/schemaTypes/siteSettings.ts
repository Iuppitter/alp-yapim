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
            title: "Hero Görseli",
            type: "image",
            options: {
                hotspot: true,
            },
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
