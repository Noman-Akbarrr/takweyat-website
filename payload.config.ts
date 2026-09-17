import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
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

const dbUrl = process.env.DATABASE_URL || ''
const isPostgres = dbUrl.startsWith('postgres://') || dbUrl.startsWith('postgresql://')

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
  secret: process.env.PAYLOAD_SECRET || 'c1167cbc27c3de8f48c01eaed295d5ed92a2aaf8d4268e9aa692d96f8cd2daa7',
  typescript: {
    outputFile: 'payload-types.ts',
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: dbUrl,
        },
      })
    : sqliteAdapter({
        client: {
          url: dbUrl.startsWith('file:') || dbUrl.startsWith('sqlite:') ? dbUrl : 'file:./payload.db',
        },
      }),
  sharp,
})
