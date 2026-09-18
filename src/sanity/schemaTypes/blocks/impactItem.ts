import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'impactItem',
  title: 'Impact Item',
  type: 'object',
  fields: [
    defineField({ name: 'item', title: 'Item', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { item: 'item' },
    prepare({ item }) {
      return { title: item }
    },
  },
})