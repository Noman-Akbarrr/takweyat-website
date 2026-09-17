import { getPayload } from 'payload'
import config from '@payload-config'
import { programs as staticPrograms, getProgramBySlug as staticGetProgramBySlug } from './data/programs'
import { countries as staticCountries, getCountryBySlug as staticGetCountryBySlug } from './data/countries'
import { stories as staticStories, getStoryBySlug as staticGetStoryBySlug } from './data/stories'
import { campaigns as staticCampaigns, getCampaignBySlug as staticGetCampaignBySlug } from './data/campaigns'

export type DonationTier = {
  amount: number
  impact: string
}

export type Program = {
  title: string
  slug: string
  description: string
  longDescription: string
  icon: string
  stats: {
    number: number
    label: string
  }
  impactItems: string[]
  donationTiers: DonationTier[]
  heroImage?: string | null
}

export type Country = {
  name: string
  slug: string
  description: string
  impact: {
    people: number
    projects: number
    communities: number
  }
  programs: string[]
  coordinates?: {
    lat: number
    lng: number
  }
  heroImage?: string | null
}

export type Story = {
  title: string
  slug: string
  excerpt: string
  body: string[]
  category: string
  country: string
  program: string
  publishedAt: string
  heroImage?: string | null
}

export type Campaign = {
  title: string
  slug: string
  program: string
  headline: string
  problem: string
  solution: string
  impactItems: string[]
  donationTiers: DonationTier[]
  storySlug?: string
  metaTitle: string
  metaDescription: string
  heroImage?: string | null
}

export type TeamMember = {
  name: string
  role: string
  bio?: string
  image?: string
}

export type Partner = {
  name: string
  url?: string
  logo?: string | null
  category?: string
}

export type GlobalSettingsData = {
  siteName: string
  siteDescription: string
  contactInfo: {
    address: string
    email: string
    phone: string
  }
  socialLinks: Array<{ platform: string; url: string }>
  impactStats: {
    countries: number
    projects: number
    peopleReached: number
    communities: number
    childrenEducated: number
    hotMealsDistributed: number
    legalServicesProvided: number
    rationPackagesDistributed: number
  }
}

// Cache client instance across invocations
let cachedPayload: any = null

export async function getPayloadClient() {
  if (cachedPayload) return cachedPayload
  try {
    cachedPayload = await getPayload({ config })
    return cachedPayload
  } catch (error) {
    console.warn('[CMS] Failed to initialize Payload client, falling back to static data:', error)
    return null
  }
}

export async function getGlobalSettings(): Promise<GlobalSettingsData> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const settings = await payload.findGlobal({ slug: 'globalSettings' })
      if (settings && Object.keys(settings).length > 0) {
        return settings as unknown as GlobalSettingsData
      }
    }
  } catch (err) {
    console.warn('[CMS] getGlobalSettings fallback used:', err)
  }

  return {
    siteName: 'Takweyat Foundation',
    siteDescription:
      'Working across 5 countries to provide education, food, healthcare, and hope where it is needed most.',
    contactInfo: {
      address: 'Main G.T. Road, Rawalpindi, Pakistan',
      email: 'info@takweyat.org',
      phone: '+92 314 5217958',
    },
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/share/18W5ghRAB6/' },
      { platform: 'X', url: 'https://x.com/takweyat' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/takweyat-foundation/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/takweyat' },
    ],
    impactStats: {
      countries: 5,
      projects: 215,
      peopleReached: 46000,
      communities: 93,
      childrenEducated: 500,
      hotMealsDistributed: 1000,
      legalServicesProvided: 50,
      rationPackagesDistributed: 200,
    },
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'programs',
        limit: 100,
        sort: 'order',
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          title: doc.title,
          slug: doc.slug,
          description: doc.description,
          longDescription: doc.longDescription || doc.description,
          icon: doc.icon || 'Education',
          stats: doc.stats || { number: 0, label: 'Served' },
          impactItems: Array.isArray(doc.impactItems)
            ? doc.impactItems.map((item: any) => (typeof item === 'string' ? item : item.item))
            : [],
          donationTiers: doc.donationTiers || [],
          heroImage: doc.heroImage?.url || null,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getPrograms fallback used:', err)
  }
  return staticPrograms as unknown as Program[]
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'programs',
        where: { slug: { equals: slug } },
        limit: 1,
      })
      if (result?.docs?.[0]) {
        const doc = result.docs[0] as any
        return {
          title: doc.title,
          slug: doc.slug,
          description: doc.description,
          longDescription: doc.longDescription || doc.description,
          icon: doc.icon || 'Education',
          stats: doc.stats || { number: 0, label: 'Served' },
          impactItems: Array.isArray(doc.impactItems)
            ? doc.impactItems.map((item: any) => (typeof item === 'string' ? item : item.item))
            : [],
          donationTiers: doc.donationTiers || [],
          heroImage: doc.heroImage?.url || null,
        }
      }
    }
  } catch (err) {
    console.warn(`[CMS] getProgramBySlug('${slug}') fallback used:`, err)
  }
  const fallback = staticGetProgramBySlug(slug)
  return fallback ? (fallback as unknown as Program) : null
}

export async function getCountries(): Promise<Country[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'countries',
        limit: 100,
        sort: 'order',
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          name: doc.name,
          slug: doc.slug,
          description: doc.description,
          impact: doc.impact || { people: 0, projects: 0, communities: 0 },
          programs: Array.isArray(doc.programs)
            ? doc.programs.map((p: any) => (typeof p === 'object' ? p.slug : p))
            : [],
          coordinates: doc.coordinates || { lat: 0, lng: 0 },
          heroImage: doc.heroImage?.url || null,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getCountries fallback used:', err)
  }
  return staticCountries as unknown as Country[]
}

export async function getCountryBySlug(slug: string): Promise<Country | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'countries',
        where: { slug: { equals: slug } },
        limit: 1,
      })
      if (result?.docs?.[0]) {
        const doc = result.docs[0] as any
        return {
          name: doc.name,
          slug: doc.slug,
          description: doc.description,
          impact: doc.impact || { people: 0, projects: 0, communities: 0 },
          programs: Array.isArray(doc.programs)
            ? doc.programs.map((p: any) => (typeof p === 'object' ? p.slug : p))
            : [],
          coordinates: doc.coordinates || { lat: 0, lng: 0 },
          heroImage: doc.heroImage?.url || null,
        }
      }
    }
  } catch (err) {
    console.warn(`[CMS] getCountryBySlug('${slug}') fallback used:`, err)
  }
  const fallback = staticGetCountryBySlug(slug)
  return fallback ? (fallback as unknown as Country) : null
}

export async function getStories(): Promise<Story[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'stories',
        limit: 100,
        sort: '-publishedAt',
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          title: doc.title,
          slug: doc.slug,
          excerpt: doc.excerpt,
          body: Array.isArray(doc.body?.root?.children)
            ? doc.body.root.children.map((c: any) => c.children?.[0]?.text || '').filter(Boolean)
            : [],
          category: doc.category,
          country: typeof doc.country === 'object' ? doc.country?.name || doc.country?.slug : doc.country,
          program: typeof doc.program === 'object' ? doc.program?.title || doc.program?.slug : doc.program,
          publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
          heroImage: doc.heroImage?.url || null,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getStories fallback used:', err)
  }
  return staticStories as unknown as Story[]
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'stories',
        where: { slug: { equals: slug } },
        limit: 1,
      })
      if (result?.docs?.[0]) {
        const doc = result.docs[0] as any
        return {
          title: doc.title,
          slug: doc.slug,
          excerpt: doc.excerpt,
          body: Array.isArray(doc.body?.root?.children)
            ? doc.body.root.children.map((c: any) => c.children?.[0]?.text || '').filter(Boolean)
            : [],
          category: doc.category,
          country: typeof doc.country === 'object' ? doc.country?.name || doc.country?.slug : doc.country,
          program: typeof doc.program === 'object' ? doc.program?.title || doc.program?.slug : doc.program,
          publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
          heroImage: doc.heroImage?.url || null,
        }
      }
    }
  } catch (err) {
    console.warn(`[CMS] getStoryBySlug('${slug}') fallback used:`, err)
  }
  const fallback = staticGetStoryBySlug(slug)
  return fallback ? (fallback as unknown as Story) : null
}

export async function getCampaigns(): Promise<Campaign[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'campaigns',
        limit: 100,
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          title: doc.title,
          slug: doc.slug,
          program: typeof doc.program === 'object' ? doc.program?.slug : doc.program,
          headline: doc.headline,
          problem: doc.problem,
          solution: doc.solution,
          impactItems: Array.isArray(doc.impactItems)
            ? doc.impactItems.map((item: any) => (typeof item === 'string' ? item : item.item))
            : [],
          donationTiers: doc.donationTiers || [],
          storySlug: typeof doc.story === 'object' ? doc.story?.slug : doc.story,
          metaTitle: doc.seo?.metaTitle || doc.title,
          metaDescription: doc.seo?.metaDescription || doc.headline,
          heroImage: doc.heroImage?.url || null,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getCampaigns fallback used:', err)
  }
  return staticCampaigns as unknown as Campaign[]
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'campaigns',
        where: { slug: { equals: slug } },
        limit: 1,
      })
      if (result?.docs?.[0]) {
        const doc = result.docs[0] as any
        return {
          title: doc.title,
          slug: doc.slug,
          program: typeof doc.program === 'object' ? doc.program?.slug : doc.program,
          headline: doc.headline,
          problem: doc.problem,
          solution: doc.solution,
          impactItems: Array.isArray(doc.impactItems)
            ? doc.impactItems.map((item: any) => (typeof item === 'string' ? item : item.item))
            : [],
          donationTiers: doc.donationTiers || [],
          storySlug: typeof doc.story === 'object' ? doc.story?.slug : doc.story,
          metaTitle: doc.seo?.metaTitle || doc.title,
          metaDescription: doc.seo?.metaDescription || doc.headline,
          heroImage: doc.heroImage?.url || null,
        }
      }
    }
  } catch (err) {
    console.warn(`[CMS] getCampaignBySlug('${slug}') fallback used:`, err)
  }
  const fallback = staticGetCampaignBySlug(slug)
  return fallback ? (fallback as unknown as Campaign) : null
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'teamMembers',
        limit: 100,
        sort: 'order',
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          name: doc.name,
          role: doc.role,
          bio: doc.bio || '',
          image: doc.photo?.url || undefined,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getTeamMembers fallback used:', err)
  }

  return [
    {
      name: 'Dr. Usman Tariq',
      role: 'Founder & Chairman',
      bio: 'Over a decade of leadership in humanitarian outreach, public health, and international relief.',
    },
    {
      name: 'Ayesha Malik',
      role: 'Director of Programs',
      bio: 'Leading educational development, vocational training, and community empowerment initiatives.',
    },
    {
      name: 'Tariq Mahmood',
      role: 'Head of Operations',
      bio: 'Managing cross-border logistics, supply chain distribution, and on-ground partner networks.',
    },
    {
      name: 'Zainab Ahmed',
      role: 'Communications & Impact Lead',
      bio: 'Spearheading storytelling, donor relations, and global transparency reporting.',
    },
    {
      name: 'Farhan Saeed',
      role: 'Finance Director',
      bio: 'Ensuring rigorous financial governance, audit compliance, and 100% donation accountability.',
    },
    {
      name: 'Maryam Bibi',
      role: 'Country Director - Pakistan',
      bio: 'Directing provincial field coordinators, free medical camps, and flood relief operations.',
    },
  ]
}

export async function getPartners(): Promise<Partner[]> {
  try {
    const payload = await getPayloadClient()
    if (payload) {
      const result = await payload.find({
        collection: 'partners',
        limit: 100,
        sort: 'order',
      })
      if (result?.docs?.length) {
        return result.docs.map((doc: any) => ({
          name: doc.name,
          url: doc.url || '#',
          logo: doc.logo?.url || null,
        }))
      }
    }
  } catch (err) {
    console.warn('[CMS] getPartners fallback used:', err)
  }

  return [
    { name: 'Global Relief Initiative', category: 'Emergency Aid' },
    { name: 'Clean Water Alliance', category: 'WASH Infrastructure' },
    { name: 'Community Education Trust', category: 'Primary Education' },
    { name: 'Hope Medical Network', category: 'Healthcare Services' },
    { name: 'Noor Welfare Coalition', category: 'Food Security' },
    { name: 'International Youth Aid', category: 'Skill Development' },
    { name: 'Disaster Response Forum', category: 'Crisis Logistics' },
    { name: 'Civil Society Foundation', category: 'Legal Advocacy' },
  ]
}
