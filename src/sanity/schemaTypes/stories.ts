import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', validation: (rule) => rule.required() }),
    defineField({
      name: 'body', title: 'Body', type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt text' }] },
      ],
    }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Category', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'country', title: 'Country', type: 'reference', to: [{ type: 'country' }], validation: (rule) => rule.required() }),
    defineField({ name: 'program', title: 'Program', type: 'reference', to: [{ type: 'program' }], validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'date', options: { dateFormat: 'MMM D, YYYY' }, validation: (rule) => rule.required() }),
  ],
  orderings: [{ title: 'Publish Date (newest first)', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'heroImage' } },
})