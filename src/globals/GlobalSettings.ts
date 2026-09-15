import type { GlobalConfig } from 'payload'

export const GlobalSettings: GlobalConfig = {
  slug: 'globalSettings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'Takweyat Foundation',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'phone',
          type: 'text',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Font Awesome icon class (e.g. fab fa-facebook-f)',
          },
        },
      ],
    },
    {
      name: 'impactStats',
      type: 'group',
      fields: [
        {
          name: 'countries',
          type: 'number',
          defaultValue: 5,
        },
        {
          name: 'projects',
          type: 'number',
          defaultValue: 215,
        },
        {
          name: 'peopleReached',
          type: 'number',
          defaultValue: 46000,
        },
        {
          name: 'communities',
          type: 'number',
          defaultValue: 93,
        },
        {
          name: 'childrenEducated',
          type: 'number',
          defaultValue: 500,
        },
        {
          name: 'hotMealsDistributed',
          type: 'number',
          defaultValue: 1000,
        },
        {
          name: 'legalServicesProvided',
          type: 'number',
          defaultValue: 50,
        },
        {
          name: 'rationPackagesDistributed',
          type: 'number',
          defaultValue: 200,
        },
      ],
    },
  ],
}
