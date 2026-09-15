import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'

import { Programs } from './src/collections/Programs'
import { Countries } from './src/collections/Countries'
import { Stories } from './src/collections/Stories'
import { Campaigns } from './src/collections/Campaigns'
import { TeamMembers } from './src/collections/TeamMembers'
import { Partners } from './src/collections/Partners'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'
import { GlobalSettings } from './src/globals/GlobalSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor(),
  collections: [
    Programs,
    Countries,
    Stories,
    Campaigns,
    TeamMembers,
    Partners,
    Media,
    Users,
  ],
  globals: [GlobalSettings],
  secret: process.env.PAYLOAD_SECRET || 'CHANGE-ME-IN-PRODUCTION',
  typescript: {
    outputFile: 'payload-types.ts',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
})
