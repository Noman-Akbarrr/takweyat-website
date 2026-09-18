import { createClient, type SanityClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'abcdefghijklmnopqrstuvwxyz012345'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-09-17',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}