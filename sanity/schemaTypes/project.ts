import { defineField, defineType } from "sanity";

export const project = defineType({
    name: "project",
    title: "Proje",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Proje Adı",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Kategori",
            type: "reference",
            to: [{ type: "category" }],
        }),
        defineField({
            name: "description",
            title: "Açıklama",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "coverImage",
            title: "Kapak Görseli",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "gallery",
            title: "Galeri",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        }),
        defineField({
            name: "location",
            title: "Lokasyon",
            type: "string",
        }),
        defineField({
            name: "date",
            title: "Tarih",
            type: "date",
        }),
        defineField({
            name: "featured",
            title: "One Cikan",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Sıralama",
            type: "number",
        }),
    ],
    orderings: [
        {
            title: "Sıralama",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
        {
            title: "Tarih (Yeni -> Eski)",
            name: "dateDesc",
            by: [{ field: "date", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "coverImage",
            category: "category.title",
        },
        prepare({ title, media, category }) {
            return {
                title,
                subtitle: category,
                media,
            };
        },
    },
});
