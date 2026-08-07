import { defineType, defineField } from 'sanity'

export const partner = defineType({
    name: 'partner',
    title: 'İş Ortakları',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Firma / Marka Adı',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Marka Logosu',
            type: 'image',
            options: {
                hotspot: false, // SVG/PNG logos don't need hotspots and can cause metadata errors
            },
            validation: (Rule) => Rule.required(),
            description: 'Zemin rengi olmayan şeffaf (PNG/SVG) marka logolarını buraya yükleyin.',
        }),
    ],
})
