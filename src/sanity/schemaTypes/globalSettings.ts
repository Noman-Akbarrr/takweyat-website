import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', initialValue: 'Takweyat Foundation' }),
    defineField({ name: 'siteDescription', title: 'Site Description', type: 'text' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'contactInfo', title: 'Contact Info', type: 'object',
      fields: [
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
      ],
    }),
    defineField({
      name: 'socialLinks', title: 'Social Links', type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'platform', title: 'Platform', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'url', title: 'URL', type: 'url', validation: (r) => r.required() }),
          defineField({ name: 'icon', title: 'Icon (FA class)', type: 'string', description: 'Font Awesome icon class' }),
        ],
      }],
    }),
    defineField({
      name: 'impactStats', title: 'Impact Stats', type: 'object',
      fields: [
        defineField({ name: 'countries', title: 'Countries', type: 'number', initialValue: 5 }),
        defineField({ name: 'projects', title: 'Projects', type: 'number', initialValue: 215 }),
        defineField({ name: 'peopleReached', title: 'People Reached', type: 'number', initialValue: 46000 }),
        defineField({ name: 'communities', title: 'Communities', type: 'number', initialValue: 93 }),
        defineField({ name: 'childrenEducated', title: 'Children Educated', type: 'number', initialValue: 500 }),
        defineField({ name: 'hotMealsDistributed', title: 'Hot Meals Distributed', type: 'number', initialValue: 1000 }),
        defineField({ name: 'legalServicesProvided', title: 'Legal Services Provided', type: 'number', initialValue: 50 }),
        defineField({ name: 'rationPackagesDistributed', title: 'Ration Packages Distributed', type: 'number', initialValue: 200 }),
      ],
    }),
  ],
  preview: { prepare() { return { title: 'Global Settings' } } },
})