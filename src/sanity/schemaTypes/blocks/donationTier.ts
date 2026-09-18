import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'donationTier',
  title: 'Donation Tier',
  type: 'object',
  fields: [
    defineField({ name: 'amount', title: 'Amount ($)', type: 'number', validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'impact', title: 'Impact Description', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: {
    select: { amount: 'amount', impact: 'impact' },
    prepare({ amount, impact }) {
      return { title: `$${amount}`, subtitle: impact }
    },
  },
})