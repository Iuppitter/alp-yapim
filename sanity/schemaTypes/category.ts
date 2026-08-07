
import { defineField, defineType } from "sanity";

export const category = defineType({
    name: "category",
    title: "Kategori",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Kategori Adı",
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
        }),
        defineField({
            name: "description",
            title: "Açıklama",
            type: "text",
            rows: 2,
        }),
    ],
});
