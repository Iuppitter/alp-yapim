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
                hotspot: true, // Allow cropping black borders and empty spaces
            },
            validation: (Rule) => Rule.required(),
            description: 'Zemin rengi olmayan şeffaf (PNG/SVG) marka logolarını buraya yükleyin.',
        }),
        defineField({
            name: 'url',
            title: 'Web Sitesi Linki',
            type: 'url',
            description: 'Logoya tıklandığında gidilecek adres (opsiyonel).',
        }),
    ],
})
