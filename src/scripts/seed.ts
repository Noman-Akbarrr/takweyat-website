import { getPayload } from 'payload'
import config from '@payload-config'
import { programs } from '../lib/data/programs'
import { countries } from '../lib/data/countries'
import { stories } from '../lib/data/stories'
import { campaigns } from '../lib/data/campaigns'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding programs...')
  const programDocs: Record<string, string> = {}
  for (const program of programs) {
    const doc = await payload.create({
      collection: 'programs',
      data: {
        title: program.title,
        slug: program.slug,
        description: program.description,
        longDescription: program.longDescription,
        icon: program.icon,
        stats: program.stats,
        impactItems: program.impactItems.map((item) => ({ item })),
        donationTiers: program.donationTiers,
      },
    })
    programDocs[program.slug] = doc.id as string
    console.log(`  Created: ${program.title}`)
  }

  console.log('Seeding countries...')
  const countryDocs: Record<string, string> = {}
  for (const country of countries) {
    const programIds = country.programs
      .map((slug) => programDocs[slug])
      .filter(Boolean)

    const doc = await payload.create({
      collection: 'countries',
      data: {
        name: country.name,
        slug: country.slug,
        description: country.description,
        impact: country.impact,
        programs: programIds,
        coordinates: country.coordinates,
      },
    })
    countryDocs[country.slug] = doc.id as string
    console.log(`  Created: ${country.name}`)
  }

  console.log('Seeding stories...')
  const storyDocs: Record<string, string> = {}
  for (const story of stories) {
    const countryId = countryDocs[story.country]
    const programId = programDocs[story.program]

    const doc = await payload.create({
      collection: 'stories',
      data: {
        title: story.title,
        slug: story.slug,
        excerpt: story.excerpt,
        body: {
          root: {
            type: 'root',
            children: story.body.map((paragraph) => ({
              type: 'paragraph',
              children: [{ type: 'text', text: paragraph }],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            })),
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        category: story.category,
        country: countryId,
        program: programId,
        publishedAt: story.publishedAt,
      },
    })
    storyDocs[story.slug] = doc.id as string
    console.log(`  Created: ${story.title}`)
  }

  console.log('Seeding campaigns...')
  for (const campaign of campaigns) {
    const programId = programDocs[campaign.program]
    const storyId = storyDocs[campaign.storySlug]

    await payload.create({
      collection: 'campaigns',
      data: {
        title: campaign.title,
        slug: campaign.slug,
        program: programId,
        headline: campaign.headline,
        problem: campaign.problem,
        solution: campaign.solution,
        impactItems: campaign.impactItems.map((item) => ({ item })),
        donationTiers: campaign.donationTiers,
        story: storyId,
        seo: {
          metaTitle: campaign.metaTitle,
          metaDescription: campaign.metaDescription,
        },
      },
    })
    console.log(`  Created: ${campaign.title}`)
  }

  console.log('Seeding team members...')
  const teamMembers = [
    { name: 'Name 1', role: 'Founder & CEO', order: 1 },
    { name: 'Name 2', role: 'Director of Operations', order: 2 },
    { name: 'Name 3', role: 'Head of Programs', order: 3 },
    { name: 'Name 4', role: 'Finance Director', order: 4 },
    { name: 'Name 5', role: 'Communications Lead', order: 5 },
    { name: 'Name 6', role: 'Country Manager', order: 6 },
  ]

  for (const member of teamMembers) {
    await payload.create({
      collection: 'teamMembers',
      data: member,
    })
    console.log(`  Created: ${member.name}`)
  }

  console.log('Seeding global settings...')
  await payload.updateGlobal({
    slug: 'globalSettings',
    data: {
      siteName: 'Takweyat Foundation',
      siteDescription: 'Working across 5 countries to provide education, food, healthcare, and hope where it is needed most.',
      contactInfo: {
        address: 'Main G.T. Road, Rawalpindi, Pakistan',
        email: 'info@takweyat.org',
        phone: '+92 314 5217958',
      },
      socialLinks: [
        { platform: 'Facebook', url: 'https://www.facebook.com/share/18W5ghRAB6/', icon: 'fab fa-facebook-f' },
        { platform: 'X', url: 'https://x.com/takweyat', icon: 'fab fa-twitter' },
        { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/takweyat-foundation/', icon: 'fab fa-linkedin-in' },
        { platform: 'Instagram', url: 'https://www.instagram.com/takweyat', icon: 'fab fa-instagram' },
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
    },
  })
  console.log('  Created global settings')

  console.log('\nSeed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
