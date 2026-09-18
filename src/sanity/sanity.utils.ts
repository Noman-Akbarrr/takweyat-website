import { client, isSanityConfigured, urlFor } from './sanity.client'

function resolveImage(image: any): string | null {
  if (!image) return null
  if (typeof image === 'string') return image
  try { return urlFor(image).width(1200).height(675).fit('crop').url() } catch { return null }
}

async function safeFetch<T>(query: string, params?: Record<string, any>, fallback: T | null = null): Promise<T | null> {
  if (!isSanityConfigured) return fallback
  return params ? client.fetch<T>(query, params) : client.fetch<T>(query)
}

async function safeFetchAll<T>(query: string, params?: Record<string, any>, fallback: T[] = []): Promise<T[]> {
  if (!isSanityConfigured) return fallback
  return params ? client.fetch<T[]>(query, params) : client.fetch<T[]>(query)
}

export type DonationTier = { amount: number; impact: string }

export type Program = {
  _id: string; title: string; slug: string; description: string; longDescription: string
  icon: string; stats: { number: number; label: string }; impactItems: string[]
  donationTiers: DonationTier[]; heroImage?: string | null
}

export type Country = {
  _id: string; name: string; slug: string; description: string
  impact: { people: number; projects: number; communities: number }
  programs: string[]; coordinates?: { lat: number; lng: number }; heroImage?: string | null
}

export type Story = {
  _id: string; title: string; slug: string; excerpt: string; body: string[]
  category: string; country: string; program: string; publishedAt: string
  heroImage?: string | null
}

export type Campaign = {
  _id: string; title: string; slug: string; program: string; headline: string
  problem: string; solution: string; impactItems: string[]; donationTiers: DonationTier[]
  storySlug?: string; metaTitle: string; metaDescription: string; heroImage?: string | null
}

export type TeamMember = { _id: string; name: string; role: string; bio?: string; image?: string }

export type Partner = { _id: string; name: string; url?: string; logo?: string | null; category?: string }

export type GlobalSettingsData = {
  siteName: string; siteDescription: string; logo?: string | null
  contactInfo: { address: string; email: string; phone: string }
  socialLinks: Array<{ platform: string; url: string }>
  heroSlides?: Array<{
    title: string; subtitle?: string; description?: string
    href?: string; hrefText?: string; backgroundImage?: string | null
  }>
  impactStats: {
    countries: number; projects: number; peopleReached: number; communities: number
    childrenEducated: number; hotMealsDistributed: number; legalServicesProvided: number; rationPackagesDistributed: number
  }
}

const PROGRAM_FIELDS = `_id, title, slug, description, longDescription, icon, heroImage, stats, impactItems, donationTiers, order`
const COUNTRY_FIELDS = `_id, name, slug, description, heroImage, impact, "programs": programs[]->slug.current, coordinates, order`
const STORY_FIELDS = `_id, title, slug, excerpt, body, heroImage, category, "country": country->slug.current, "countryName": country->name, "program": program->title, "programSlug": program->slug.current, publishedAt`
const CAMPAIGN_FIELDS = `_id, title, slug, "program": program->slug.current, headline, heroImage, problem, solution, impactItems, donationTiers, "storySlug": story->slug.current, seo`
const TEAM_MEMBER_FIELDS = `_id, name, role, "image": photo, bio, order`
const PARTNER_FIELDS = `_id, name, logo, url, category, order`

function mapSlug(val: any): string {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val.current ?? ''
}

export async function getGlobalSettings(): Promise<GlobalSettingsData> {
  const query = `*[_type == "globalSettings"][0] { siteName, siteDescription, logo, contactInfo, socialLinks, heroSlides[]{ title, subtitle, description, href, hrefText, backgroundImage }, impactStats }`
  const result = await safeFetch<any>(query)
  const fallback = {
    siteName: 'Takweyat Foundation',
    siteDescription: 'Working across 5 countries to provide education, food, healthcare, and hope where it is needed most.',
    logo: null as string | null,
    contactInfo: { address: 'Main G.T. Road, Rawalpindi, Pakistan', email: 'info@takweyat.org', phone: '+92 314 5217958' },
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/share/18W5ghRAB6/' },
      { platform: 'X', url: 'https://x.com/takweyat' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/takweyat-foundation/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/takweyat' },
    ],
    heroSlides: [] as GlobalSettingsData['heroSlides'],
    impactStats: { countries: 5, projects: 215, peopleReached: 46000, communities: 93, childrenEducated: 500, hotMealsDistributed: 1000, legalServicesProvided: 50, rationPackagesDistributed: 200 },
  }
  if (!result) return fallback
  const slides = (result.heroSlides || []).map((s: any) => ({
    title: s.title, subtitle: s.subtitle || '', description: s.description || '',
    href: s.href || '/our-work', hrefText: s.hrefText || 'Learn More',
    backgroundImage: resolveImage(s.backgroundImage),
  }))
  return { ...result, logo: resolveImage(result.logo), heroSlides: slides }
}

export async function getPrograms(): Promise<Program[]> {
  const raw = await safeFetchAll<any>(`*[_type == "program"] | order(order asc) { ${PROGRAM_FIELDS} }`)
  return raw.map((doc) => ({
    _id: doc._id, title: doc.title, slug: mapSlug(doc.slug), description: doc.description,
    longDescription: doc.longDescription || doc.description, icon: doc.icon || '📚',
    stats: doc.stats || { number: 0, label: 'Served' },
    impactItems: (doc.impactItems || []).map((i: any) => i.item ?? i),
    donationTiers: doc.donationTiers || [], heroImage: resolveImage(doc.heroImage),
  }))
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  const raw = await safeFetch<any>(`*[_type == "program" && slug.current == $slug][0] { ${PROGRAM_FIELDS} }`, { slug })
  if (!raw) return null
  return {
    _id: raw._id, title: raw.title, slug: mapSlug(raw.slug), description: raw.description,
    longDescription: raw.longDescription || raw.description, icon: raw.icon || '📚',
    stats: raw.stats || { number: 0, label: 'Served' },
    impactItems: (raw.impactItems || []).map((i: any) => i.item ?? i),
    donationTiers: raw.donationTiers || [], heroImage: resolveImage(raw.heroImage),
  }
}

export async function getAllProgramSlugs(): Promise<string[]> {
  const raw = await safeFetchAll<{ slug: any }>(`*[_type == "program"] { "slug": slug }`)
  return raw.map((r) => mapSlug(r.slug)).filter(Boolean)
}

export async function getCountries(): Promise<Country[]> {
  const raw = await safeFetchAll<any>(`*[_type == "country"] | order(order asc) { ${COUNTRY_FIELDS} }`)
  return raw.map((doc) => ({
    _id: doc._id, name: doc.name, slug: mapSlug(doc.slug), description: doc.description,
    impact: doc.impact || { people: 0, projects: 0, communities: 0 },
    programs: (doc.programs || []).map((p: any) => mapSlug(p)),
    coordinates: doc.coordinates, heroImage: resolveImage(doc.heroImage),
  }))
}

export async function getCountryBySlug(slug: string): Promise<Country | null> {
  const raw = await safeFetch<any>(`*[_type == "country" && slug.current == $slug][0] { ${COUNTRY_FIELDS} }`, { slug })
  if (!raw) return null
  return {
    _id: raw._id, name: raw.name, slug: mapSlug(raw.slug), description: raw.description,
    impact: raw.impact || { people: 0, projects: 0, communities: 0 },
    programs: (raw.programs || []).map((p: any) => mapSlug(p)),
    coordinates: raw.coordinates, heroImage: resolveImage(raw.heroImage),
  }
}

export async function getAllCountrySlugs(): Promise<string[]> {
  const raw = await safeFetchAll<{ slug: any }>(`*[_type == "country"] { "slug": slug }`)
  return raw.map((r) => mapSlug(r.slug)).filter(Boolean)
}

export async function getStories(): Promise<Story[]> {
  const raw = await safeFetchAll<any>(`*[_type == "story"] | order(publishedAt desc) { ${STORY_FIELDS} }`)
  return raw.map((doc) => {
    const bodyText = Array.isArray(doc.body)
      ? doc.body.filter((b: any) => b._type === 'block').map((b: any) => b.children?.filter((c: any) => c._type === 'text').map((c: any) => c.text).join('') ?? '').filter(Boolean)
      : []
    return {
      _id: doc._id, title: doc.title, slug: mapSlug(doc.slug), excerpt: doc.excerpt, body: bodyText,
      category: doc.category, country: doc.countryName || doc.country || '', program: doc.program || '',
      publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
      heroImage: resolveImage(doc.heroImage),
    }
  })
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  const raw = await safeFetch<any>(`*[_type == "story" && slug.current == $slug][0] { ${STORY_FIELDS} }`, { slug })
  if (!raw) return null
  const bodyText = Array.isArray(raw.body)
    ? raw.body.filter((b: any) => b._type === 'block').map((b: any) => b.children?.filter((c: any) => c._type === 'text').map((c: any) => c.text).join('') ?? '').filter(Boolean)
    : []
  return {
    _id: raw._id, title: raw.title, slug: mapSlug(raw.slug), excerpt: raw.excerpt, body: bodyText,
    category: raw.category, country: raw.countryName || raw.country || '', program: raw.program || '',
    publishedAt: raw.publishedAt ? new Date(raw.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
    heroImage: resolveImage(raw.heroImage),
  }
}

export async function getAllStorySlugs(): Promise<string[]> {
  const raw = await safeFetchAll<{ slug: any }>(`*[_type == "story"] { "slug": slug }`)
  return raw.map((r) => mapSlug(r.slug)).filter(Boolean)
}

export async function getStoriesByProgram(programSlug: string): Promise<Story[]> {
  const raw = await safeFetchAll<any>(`*[_type == "story" && program->slug.current == $programSlug] | order(publishedAt desc) { ${STORY_FIELDS} }`, { programSlug })
  return raw.map((doc) => {
    const bodyText = Array.isArray(doc.body) ? doc.body.filter((b: any) => b._type === 'block').map((b: any) => b.children?.filter((c: any) => c._type === 'text').map((c: any) => c.text).join('') ?? '').filter(Boolean) : []
    return { _id: doc._id, title: doc.title, slug: mapSlug(doc.slug), excerpt: doc.excerpt, body: bodyText, category: doc.category, country: doc.countryName || '', program: doc.program || '', publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '', heroImage: resolveImage(doc.heroImage) }
  })
}

export async function getStoriesByCountry(countrySlug: string): Promise<Story[]> {
  const raw = await safeFetchAll<any>(`*[_type == "story" && country->slug.current == $countrySlug] | order(publishedAt desc) { ${STORY_FIELDS} }`, { countrySlug })
  return raw.map((doc) => {
    const bodyText = Array.isArray(doc.body) ? doc.body.filter((b: any) => b._type === 'block').map((b: any) => b.children?.filter((c: any) => c._type === 'text').map((c: any) => c.text).join('') ?? '').filter(Boolean) : []
    return { _id: doc._id, title: doc.title, slug: mapSlug(doc.slug), excerpt: doc.excerpt, body: bodyText, category: doc.category, country: doc.countryName || '', program: doc.program || '', publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '', heroImage: resolveImage(doc.heroImage) }
  })
}

export async function getCampaigns(): Promise<Campaign[]> {
  const raw = await safeFetchAll<any>(`*[_type == "campaign"] | order(_createdAt desc) { ${CAMPAIGN_FIELDS} }`)
  return raw.map((doc) => ({
    _id: doc._id, title: doc.title, slug: mapSlug(doc.slug), program: doc.program || '', headline: doc.headline,
    problem: doc.problem, solution: doc.solution,
    impactItems: (doc.impactItems || []).map((i: any) => i.item ?? i),
    donationTiers: doc.donationTiers || [], storySlug: doc.storySlug,
    metaTitle: doc.seo?.metaTitle || doc.title, metaDescription: doc.seo?.metaDescription || doc.headline,
    heroImage: resolveImage(doc.heroImage),
  }))
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  const raw = await safeFetch<any>(`*[_type == "campaign" && slug.current == $slug][0] { ${CAMPAIGN_FIELDS} }`, { slug })
  if (!raw) return null
  return {
    _id: raw._id, title: raw.title, slug: mapSlug(raw.slug), program: raw.program || '', headline: raw.headline,
    problem: raw.problem, solution: raw.solution,
    impactItems: (raw.impactItems || []).map((i: any) => i.item ?? i),
    donationTiers: raw.donationTiers || [], storySlug: raw.storySlug,
    metaTitle: raw.seo?.metaTitle || raw.title, metaDescription: raw.seo?.metaDescription || raw.headline,
    heroImage: resolveImage(raw.heroImage),
  }
}

export async function getAllCampaignSlugs(): Promise<string[]> {
  const raw = await safeFetchAll<{ slug: any }>(`*[_type == "campaign"] { "slug": slug }`)
  return raw.map((r) => mapSlug(r.slug)).filter(Boolean)
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const raw = await safeFetchAll<any>(`*[_type == "teamMember"] | order(order asc) { ${TEAM_MEMBER_FIELDS} }`)
  if (!raw.length) {
    return [
      { _id: '1', name: 'Dr. Usman Tariq', role: 'Founder & Chairman', bio: 'Over a decade of leadership in humanitarian outreach, public health, and international relief.' },
      { _id: '2', name: 'Ayesha Malik', role: 'Director of Programs', bio: 'Leading educational development, vocational training, and community empowerment initiatives.' },
      { _id: '3', name: 'Tariq Mahmood', role: 'Head of Operations', bio: 'Managing cross-border logistics, supply chain distribution, and on-ground partner networks.' },
      { _id: '4', name: 'Zainab Ahmed', role: 'Communications & Impact Lead', bio: 'Spearheading storytelling, donor relations, and global transparency reporting.' },
      { _id: '5', name: 'Farhan Saeed', role: 'Finance Director', bio: 'Ensuring rigorous financial governance, audit compliance, and 100% donation accountability.' },
      { _id: '6', name: 'Maryam Bibi', role: 'Country Director - Pakistan', bio: 'Directing provincial field coordinators, free medical camps, and flood relief operations.' },
    ]
  }
  return raw.map((doc) => ({ _id: doc._id, name: doc.name, role: doc.role, bio: doc.bio || '', image: resolveImage(doc.image) || undefined }))
}

export async function getPartners(): Promise<Partner[]> {
  const raw = await safeFetchAll<any>(`*[_type == "partner"] | order(order asc) { ${PARTNER_FIELDS} }`)
  if (!raw.length) {
    return [
      { _id: '1', name: 'Global Relief Initiative', category: 'Emergency Aid' },
      { _id: '2', name: 'Clean Water Alliance', category: 'WASH Infrastructure' },
      { _id: '3', name: 'Community Education Trust', category: 'Primary Education' },
      { _id: '4', name: 'Hope Medical Network', category: 'Healthcare Services' },
      { _id: '5', name: 'Noor Welfare Coalition', category: 'Food Security' },
      { _id: '6', name: 'International Youth Aid', category: 'Skill Development' },
      { _id: '7', name: 'Disaster Response Forum', category: 'Crisis Logistics' },
      { _id: '8', name: 'Civil Society Foundation', category: 'Legal Advocacy' },
    ]
  }
  return raw.map((doc) => ({ _id: doc._id, name: doc.name, url: doc.url || '#', logo: resolveImage(doc.logo), category: doc.category }))
}