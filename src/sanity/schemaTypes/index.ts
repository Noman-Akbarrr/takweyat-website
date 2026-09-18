import { type SchemaTypeDefinition } from 'sanity'
import program from './programs'
import country from './countries'
import story from './stories'
import campaign from './campaigns'
import teamMember from './teamMembers'
import partner from './partners'
import globalSettings from './globalSettings'
import donationTier from './blocks/donationTier'
import impactItem from './blocks/impactItem'

export const schemaTypes: SchemaTypeDefinition[] = [
  program,
  country,
  story,
  campaign,
  teamMember,
  partner,
  globalSettings,
  donationTier,
  impactItem,
]