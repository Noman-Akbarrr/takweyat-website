import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'takweyat-foundation',
  title: 'Takweyat Foundation',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Global Settings')
              .id('globalSettings')
              .child(S.document().schemaType('globalSettings').documentId('globalSettings')),
            S.divider(),
            S.listItem().title('Programs').child(S.documentTypeList('program').title('Programs')),
            S.listItem().title('Countries').child(S.documentTypeList('country').title('Countries')),
            S.listItem().title('Stories').child(S.documentTypeList('story').title('Stories')),
            S.listItem().title('Campaigns').child(S.documentTypeList('campaign').title('Campaigns')),
            S.listItem().title('Team Members').child(S.documentTypeList('teamMember').title('Team Members')),
            S.listItem().title('Partners').child(S.documentTypeList('partner').title('Partners')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})