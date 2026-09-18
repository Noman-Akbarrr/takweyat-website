import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon (Emoji)', type: 'string', description: 'Emoji icon for this program' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'stats', title: 'Stats', type: 'object',
      fields: [
        defineField({ name: 'number', title: 'Number', type: 'number', validation: (r) => r.required() }),
        defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
      ],
    }),
    defineField({ name: 'impactItems', title: 'Impact Items', type: 'array', of: [{ type: 'impactItem' }] }),
    defineField({ name: 'donationTiers', title: 'Donation Tiers', type: 'array', of: [{ type: 'donationTier' }] }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'icon' } },
})