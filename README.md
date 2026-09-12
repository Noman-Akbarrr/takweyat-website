# Takweyat Foundation Website

A modern, conversion-optimized website for Takweyat Foundation — a non-profit charitable organization working across 5 countries to provide education, food, healthcare, and hope where it's needed most.

## Tech Stack

- **Framework:** Next.js 16.3.4 (App Router)
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity.io (configured)
- **Payments:** Stripe (configured)
- **Analytics:** GA4 + Meta Pixel (configured)

## Features

- 45+ pages with static generation
- Responsive design (mobile-first)
- SEO optimized (Schema markup, sitemap, robots.txt)
- Donation funnel with Stripe integration
- Campaign landing pages
- Stories & impact dashboard
- Analytics tracking (GA4 + Meta Pixel)
- Security headers configured

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=

# Analytics
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# Site
NEXT_PUBLIC_SITE_URL=https://takweyat.org
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
│   ├── ui/          # Base components (Button, Container, etc.)
│   └── analytics/   # Analytics components
└── lib/             # Utilities, data, Sanity config
    ├── data/        # Static data files
    ├── sanity/      # Sanity CMS schemas
    └── seo/         # SEO utilities
```

## License

All rights reserved. Takweyat Foundation.
