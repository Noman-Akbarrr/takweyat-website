import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const dbUrl = process.env.DATABASE_URL || 'NOT SET'
  const payloadSecret = process.env.PAYLOAD_SECRET ? 'SET (hidden)' : 'NOT SET'

  // Mask the password in the URL for safety
  let maskedUrl = dbUrl
  if (dbUrl !== 'NOT SET') {
    maskedUrl = dbUrl.replace(/:([^@]+)@/, ':***@')
  }

  return NextResponse.json({
    databaseUrl: maskedUrl,
    payloadSecret,
    nodeEnv: process.env.NODE_ENV || 'NOT SET',
  })
}
