import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'impact', title: 'Impact', type: 'object',
      fields: [
        defineField({ name: 'people', title: 'People Reached', type: 'number', initialValue: 0, validation: (r) => r.required() }),
        defineField({ name: 'projects', title: 'Projects', type: 'number', initialValue: 0, validation: (r) => r.required() }),
        defineField({ name: 'communities', title: 'Communities', type: 'number', initialValue: 0, validation: (r) => r.required() }),
      ],
    }),
    defineField({ name: 'programs', title: 'Programs', type: 'array', of: [{ type: 'reference', to: [{ type: 'program' }] }] }),
    defineField({
      name: 'coordinates', title: 'Coordinates', type: 'object',
      fields: [
        defineField({ name: 'lat', title: 'Latitude', type: 'number' }),
        defineField({ name: 'lng', title: 'Longitude', type: 'number' }),
      ],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'description' } },
})