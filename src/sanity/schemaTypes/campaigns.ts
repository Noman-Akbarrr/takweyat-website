import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'campaign',
  title: 'Campaign',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'program', title: 'Program', type: 'reference', to: [{ type: 'program' }], validation: (rule) => rule.required() }),
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'problem', title: 'Problem', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'solution', title: 'Solution', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'impactItems', title: 'Impact Items', type: 'array', of: [{ type: 'impactItem' }] }),
    defineField({ name: 'donationTiers', title: 'Donation Tiers', type: 'array', of: [{ type: 'donationTier' }] }),
    defineField({ name: 'story', title: 'Related Story', type: 'reference', to: [{ type: 'story' }] }),
    defineField({
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text' }),
      ],
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'headline' } },
})